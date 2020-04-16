const axios = require('axios').create({ baseURL: 'https://leetcode-cn.com' })
const argv = require('yargs').argv
const write = require('write')
const path = require('path')
const fs = require('fs')

const LANG_MAP = {
  javascript: '.js',
  typescript: '.ts',
  python: '.py',
  c: '.c'
}


/**
 * Delay
 * @param {number} time 
 */
const delay = time => new Promise(r => setTimeout(r, time))


/**
 * Get submissions by pagination api
 * 
 * @param {object} options
 * @param {number} options.offset
 * @param {number} options.limit
 * @param {string} options.lastkey
 * @param {string} options.cookie
 * @param {string} options.ua
 */
const getSubmissions = ({ cookie, ua, offset, limit, lastkey }) => {
  const options = {
    params: { offset, limit, lastkey },
    headers: { cookie, 'user-agent': ua }
  }
  return axios.get('/api/submissions', options)
    .then(res => {
      if (res.status !== 200) throw new Error(`Get submit ssison error ${e}`)
      const { has_next, submissions_dump, last_key } = res.data
      return {
        submissions: submissions_dump,
        hasNext: has_next,
        lastKey: last_key
      }
    })
    .catch(e => {
      throw new Error(`Get submit ssions error ${e}`)
    })
}


/**
 * Get all submitssions
 * 
 * @param {object} options
 * @param {string} options.cookie
 * @param {string} options.ua
 */
const getAllSubmitssions = ({ cookie, ua }) => {
  const allSsions = []

  /**
   * recursive
   * 
   * @param {number} offset 
   * @param {number} limit 
   * @param {string} lastkey 
   */
  async function recursiveSsions (offset = 0, limit = 20, lastkey = '') {
    const ssions = await getSubmissions({ cookie, ua, offset, limit, lastkey })
    allSsions.push(...ssions.submissions)
    if (ssions.hasNext) {
      await delay(3000)
      console.log(allSsions.length)
      return await recursiveSsions(offset + limit)
    } else {
      return allSsions
    }
  }

  return recursiveSsions()
}


(async () => {
  const { cookie, ua, output } = argv
  if (!cookie || !ua || !output) {
    console.error('params error', argv)
    return process.exit(1)
  }

  let allSubmitssions = await getAllSubmitssions({ cookie, ua }).catch(e => process.exit(1))
  allSubmitssions = allSubmitssions.filter(x => x.status_display === 'Accepted')
  
  let ssionsGroupByTitle = allSubmitssions.map(x => x.title)
  ssionsGroupByTitle = [...new Set(ssionsGroupByTitle)]
  ssionsGroupByTitle = ssionsGroupByTitle.map(title => allSubmitssions.filter(x => x.title === title))
  
  // Copy reademe file
  fs.mkdirSync(path.join(__dirname, output))
  fs.copyFileSync(path.join(__dirname, 'README.md'), path.join(__dirname, output, 'README.md'))

  ssionsGroupByTitle.forEach(taskGroup => {
    taskGroup.forEach((cur, idx) => {
      const writePath = path.join(__dirname, output, cur.title, cur.lang, idx + LANG_MAP[cur.lang.toLowerCase()])
      console.log(`Write ${cur.title} ${cur.lang} ssion ${cur.id} to: ${writePath}`)
      write(writePath, cur.code)
    })
  })
})()
