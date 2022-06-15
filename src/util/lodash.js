//防抖函数
export const debounce = (fn, delay) => {
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

//节流函数
export const throttle = (fn, delay) => {
  let timer = null
  return (...args) => {
    if (! timer) {         //不在是范围内时
      timer = setTimeout(() => {
        timer = null
      }, delay)
      fn.apply(this, args)
    }
  }
}

