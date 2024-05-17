var TimeLimitedCache = function() {
    this.keys = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const self = this;
    if(self.keys[key]?.timeout) clearTimeout(self.keys[key].timeout);
    const res = self.keys[key] ? true : false;
    self.keys[key] = {val: value, timeout: setTimeout(() => {
        self.keys[key] = null;
    }, duration)};
    return res;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return this.keys[key]?.val || -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return Object.values(this.keys).filter(e => e !== null).length;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */