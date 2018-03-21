
/**
 * cloneDeep
 * @param {any} p 
 * @param {any} out 
 * @returns 
 */
function cloneDeep(p, out) {
  // 判断s对象是否存在，不存在则定义s为空对象
  let s = out || {}; 
  for (var prop in p) {
    if (typeof p[prop] == 'object') {
      // 三元运算，将s[prop]初始化为数组或者对象
      s[prop] = (p[prop].constructor === Array) ? [] : {};
      cloneDeep(p[prop], s[prop])　　　　
    } else {
      s[prop] = p[prop];　　　　
    }　　　　
  };
  return s
}

module.exports = cloneDeep;