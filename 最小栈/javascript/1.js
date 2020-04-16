/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.data = []
    this.helper = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.data.push(x)

    const helpLen = this.helper.length
    if (helpLen === 0 || x <= this.helper[helpLen - 1]) {
        this.helper.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const popData = this.data.pop()

    if (popData <= this.helper[this.helper.length - 1]) {
        this.helper.pop()
    }
    return popData
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.data[this.data.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.helper[this.helper.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */