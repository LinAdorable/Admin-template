/*
 * @Author: Mr.Lin
 * @Date: 2024-03-22 15:38:57
 * @LastEditTime: 2024-03-22 16:04:43
 * @LastEditors: Mr.Lin
 * @Description: 缓存工具
 * @FilePath: \technical-drill\src\utils\storage.ts
 */
const version = 'Authorization'

/**
 * 设置LocalStorage
 * @param {*} key:string
 * @param {*} value
 * @returns
 */
export function setStorage (key:string, value:any) {
  if (value !== null) {
    localStorage.setItem(`${version}${key}`, JSON.stringify(value))
    return true
  } else {
    return false
  }
}
/**
 * 获取LocalStorage
 * @param {*} key:string
 * @returns
 */
export function getStorage (key:string) {
  const item = localStorage.getItem(`${version}${key}`)
  if (item === null) {
    return null
  }
  try {
    return JSON.parse(item)
  } catch (e) {
    return item
  }
}

/**
 *  删除LocalStorage
 * @param {*} key:string
 * @returns
 */
export function removeStorage (key:string) {
  localStorage.removeItem(`${version}${key}`)
  return true
}

export function removeAll(){
  localStorage.clear();
}
