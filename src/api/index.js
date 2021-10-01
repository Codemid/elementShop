/*
包含n个接口请求函数的模块
函数的返回值：promise对象
 */

import ajax from './ajax'

// 1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)
export const reqAddressDetail = (geohash) => ajax(`api/position/${geohash}`)

// 2、获取食品分类列表(#2获取食品分类列表)
export const reqFoodsCategory = () => ajax(`api/index_category`)

// 3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)
export const reqShopListByjinwei = (latitude,longitude) => ajax(`api/shop`,{latitude,longitude})

// 4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)
export const  reqShopsBykeyword = (options) => ajax(`api/search_shops`,options)

// 5、获取一次性验证码(#5获取一次性验证码)
export const reqCaptcha = (captcha) => ajax(`api/captcha`,captcha)

// 6、用户名密码登陆](#6用户名密码登陆)
export const postLogin = (options) => ajax(`api/login_pwd`,options,"POST")

// 7、发送短信验证码(#7发送短信验证码)
export const reqPhoneCode = (code) => ajax(`api/sendcode`,code)

// 8、手机号验证码登陆(#8手机号验证码登陆)
export const reqPhoneCodeLogin = (options) => ajax(`api/login_sms`,options,"post")

// 9、根据会话获取用户信息(#9根据会话获取用户信息)
export const reqUserInfo = () => ajax(`api/userinfo`)

// 10、用户登出(#10用户登出)
export const reqLogout = () => ajax(`api/logout`)

