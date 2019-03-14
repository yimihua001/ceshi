import http from './public'
// 登录换取oppenId
export const getWxOpenId = (data,style=1) => {
  return http.fetchPost('22201', 'applet/applet.do', data,style)
}

//微信手机号登录
export const loginWxPhone = (data,style=1) => {
  return http.fetchPost('22202', 'applet/applet.do', data,style)
}
//手动绑定手机号获取验证码
export const loginGetCode = (data,style=1) => {
  return http.fetchPost('30001', 'msg/sendsms.do', data,style)
}

//手动绑定手机号提交绑定手机号
export const loginPhoneLogin = (data,style=1) => {
  return http.fetchPost('22206', 'applet/applet.do', data,style)
}
//注销登录账号
export const loginOut = (data,style=1,token) => {
  return http.fetchPost('22203', 'applet/applet.do', data,style,token)
}
//登录成功获取当前用户信息
export const getCurrentUserInfo = (data,style=1,token) => {
  return http.fetchPost('22204', 'applet/applet.do', data,style,token)
}
// 查询二手房详情接口
export const houseDetails = (data,style=1,token) => {
  return http.fetchPost('92004', 'yfh-mainweb/web.do', data,style,token)
}
// 查询对比详情接口
export const findTrustList = (data,style=1,token) => {
  return http.fetchPost('92022', 'yfh-mainweb/web.do', data,style,token)
}
// 查询二手房个人详情接口
export const personHouseDetails = (data,style=1) => {
  return http.fetchPost('74003', 'yfh-mainweb/web.do', data,style)
}
// 二手房出售收藏
export const collectHouse = (data,style=1,token) => {
  return http.fetchPost('92013', 'yfh-mainweb/web.do', data,style,token)
}
// 二手房出售收藏分享接口
export const collectHouseShare = (data,style=1,token) => {
  return http.fetchPost('92048', 'yfh-mainweb/web.do', data,style,token)
}
// 二手房出售收藏分享接口
export const findHouseShare = (data,style=1,token) => {
  return http.fetchPost('92050', 'yfh-mainweb/web.do', data,style,token)
}
// 查询二手房详情经纪人接口
export const findhouseDetailsAgent = (data,style=1) => {
  return http.fetchPost('92020', 'yfh-mainweb/web.do', data,style)
}
// 查询首页推荐出售房源接口
export const getpushhouse = (data,style=1) => {
  return http.fetchPost('92001', 'yfh-mainweb/web.do', data,style)
}
// 查询二手房房源接口
export const getershoufang = (data,style=1) => {
  return http.fetchPost('92032', 'yfh-mainweb/web.do', data,style)
}
// 查询出租房源接口
export const getRenthouse = (data,style=1) => {
  return http.fetchPost('92046', 'yfh-mainweb/web.do', data,style)
}
// 查询小区详情接口
export const getVillageDetail = (data,style=1) => {
  return http.fetchPost('92016', 'yfh-mainweb/web.do', data,style)
}
// 查询热门小区接口
export const getHotVillage = (data,style=1) => {
  return http.fetchPost('92036', 'yfh-mainweb/web.do', data,style)
}
// 更新热门小区接口
export const updataHotVillage = (data,style=1) => {
  return http.fetchPost('92035', 'yfh-mainweb/web.do', data,style)
}
// 小区名称补全接口
export const fillVillageData = (data,style=1) => {
  return http.fetchPost('92037', 'yfh-mainweb/web.do', data,style)
}
// 查询旗舰店二手房房源接口
export const getFlagshipErshoufang = (data,style=1) => {
  return http.fetchPost('92033', 'yfh-mainweb/web.do', data,style)
}
// 查询选择城市接口
export const findcityApi = (data,style=1) => {
  return http.fetchPost('92007', 'yfh-mainweb/web.do', data,style)
}
// 查询最热门城市
export const findHotcityApi = (data,style=1) => {
  return http.fetchPost('92034', 'yfh-mainweb/web.do', data,style)
}
// 查询选择城市接口code
export const findcityApiCode = (data,style=1) => {
  return http.fetchPost('10012', 'resource/resource.do', data,style)
}
// 列表筛选查询区域信息
export const findcountyData = (data,style=1) => {
  return http.fetchPost('10012', 'resource/resource.do', data,style)
}
// 列表筛选区域查询商圈
export const findbusinessData = (data,style=1) => {
  return http.fetchPost('60032', 'resource/resource.do', data,style)
}
// 发布客户委托
export const sendNeedData = (data,style,token) => {
  return http.fetchPost('92044', 'yfh-mainweb/web.do', data,style,token)
}
// 修改委托信息
export const getOldentrustData = (data,style,token) => {
  return http.fetchPost('92051', 'yfh-mainweb/web.do', data,style,token)
}
// 发布客户委托
export const sendEditneedData = (data,style,token) => {
  return http.fetchPost('92039', 'yfh-mainweb/web.do', data,style,token)
}
// 查询我的委托列表
export const getEntrustData = (data,style,token) => {
  return http.fetchPost('92041', 'yfh-mainweb/web.do', data,style,token)
}
// 取消委托操作
export const delEntrustItem = (data,style,token) => {
  return http.fetchPost('92042', 'yfh-mainweb/web.do', data,style,token)
}
// 重新发布委托操作
export const rePublicItem = (data,style,token) => {
  return http.fetchPost('92043', 'yfh-mainweb/web.do', data,style,token)
}
// 新增房源模糊查找小区数据
export const getVillage = (data,style,token) => {
  return http.fetchPost('70005', 'resource/resource.do', data,style,token)
}
// 上传图片
export const UploadPicture = (data, filename, styles, isType, token,callback) => {
     return http.fetchPicPost( data, filename, styles, isType, token,callback)
}

// 个人出售房源保存或修改
export const saveAddsaleHouse = (data,style,token) => {
  return http.fetchPost('74002', 'business/business.do', data,style,token)
}
// 个人出售房源发布或修改
export const pubAddsaleHouse = (data,style,token) => {
  return http.fetchPost('74001', 'business/business.do', data,style,token)
}
// 个人出租房源保存或修改
export const saveAddrentHouse = (data,style,token) => {
  return http.fetchPost('72002', 'business/business.do', data,style,token)
}
// 个人出租房源发布或修改
export const pubAddrentHouse = (data,style,token) => {
  return http.fetchPost('72001', 'business/business.do', data,style,token)
}
// 我的房源列表
export const getMyhouse = (data,style,token) => {
  return http.fetchPost('74004', 'business/business.do', data,style,token)
}
// 我的房源列表上架下架操作
export const operateHouse = (data,style,token) => {
  return http.fetchPost('75045', 'houseBusiness/houseBusiness.do', data,style,token)
}
// 我的房源删除操作
export const deleteHouse = (data,style,token) => {
  return http.fetchPost('75049', 'houseBusiness/houseBusiness.do', data,style,token)
}

// 我的足迹删除操作
export const deleteMyScan = (data,style,token) => {
  return http.fetchPost('74006', 'houseBusiness/houseBusiness.do', data,style=1,token)
}
// 出售房源编辑操作查询原始数据
export const getOldhouseSale = (data,style,token) => {
  return http.fetchPost('74005', 'business/business.do', data,style,token)
}
// 出租房源编辑操作查询原始数据
export const getOldhouseRent = (data,style,token) => {
  return http.fetchPost('72018', 'leaseBusiness/leaseBusiness.do', data,style,token)
}
// 提交经纪人评级
export const commitRecord = (data,style,token) => {
  return http.fetchPost('75528', 'business/business.do', data,style,token)
}
// 查询经纪人评级
export const serchRecord = (data,style,token) => {
  return http.fetchPost('75529', 'business/business.do', data,style,token)
}
// 查询房产专家
export const findHouseAgency = (data,style=1) => {
  return http.fetchPost('10012', 'resource/resource.do', data,style)
}
// 查询旗舰店门店信息
export const searchemNums = (data,style=1) => {
  return http.fetchPost('92029', 'yfh-mainweb/web.do', data,style)
}
// 查询旗舰店优秀员工
export const searGreatElypoee = (data,style=1) => {
  return http.fetchPost('92028', 'yfh-mainweb/web.do', data,style)
}
// 查询旗舰店出售，出租，优秀员工数量
export const searExployNums = (data,style=1) => {
  return http.fetchPost('92028', 'yfh-mainweb/web.do', data,style)
}
// 查询首页房产专家接口
export const searRealestateExpert = (data,style=1) => {
  return http.fetchPost('92040', 'yfh-mainweb/web.do', data,style)
}
// IM注册用户信息
export const registerUser = (data,style=1,token) => {
  return http.fetchPost('30012', 'msg/im.do', data,style,token)
}
// IM用户创建会话
export const creatTalkList = (data,style=1,token) => {
  return http.fetchPost('30010', 'msg/im.do', data,style,token)
}
// IM用户聊天详情
export const getcusTalkDetail = (data,style=1,token) => {
  return http.fetchPost('30106', 'msg/im.do', data,style,token)
}
// IM用户聊天添加为咨询客户
export const addCusTalkDetail = (data,style=1,token) => {
  return http.fetchPost('30107', 'msg/im.do', data,style,token)
}
// 用户中心我的浏览出售
export const myScanDetail = (data,style=1,token) => {
  return http.fetchPost('75046', 'houseBusiness/houseBusiness.do', data,style,token)
}
// 用户中心我的关注出售
export const myCollectDetail = (data,style=1,token) => {
  return http.fetchPost('92045', 'yfh-mainweb/web.do', data, style, token)
}