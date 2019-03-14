<script>
	import { getpushhouse,findcityApiCode,registerUser } from 'api';
	export default {
		data() {
			return {
				userId:'',
				token:'',
				userName:'',
				portraitUri:'',
				msgToken:'',  
			};
		},
		onLaunch: function () {
			console.log('App Launch');
			//#ifdef APP-PLUS
			/* 5+环境锁定屏幕方向 */
			plus.screen.lockOrientation('portrait-primary'); //锁定
			/* 5+环境升级提示 */
			var server = "https://uniapp.dcloud.io/update"; //检查更新地址
			var req = { //升级检测数据
				"appid": plus.runtime.appid,
				"version": plus.runtime.version,
				"imei": plus.device.imei
			};
			uni.request({
				url: server,
				data: req,
				success: (res) => {
					console.log("success", res);
					if (res.statusCode == 200 && res.data.isUpdate) {
						let openUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android;
						uni.showModal({ //提醒用户更新
							title: '更新提示',
							content: res.data.note ? res.data.note : '是否选择更新',
							success: (res) => {
								if (res.confirm) {
									plus.runtime.openURL(openUrl);
								}
							}
						})
					}
				}
			})
			//#endif
		},
		methods: {
			resigeterUser(id,name,portraitUri,token) {
				let that = this;
				let params ={};
				params.id = id;
				params.name = name;
				params.portraitUri = portraitUri;
				registerUser(params,2,token).then(res => {
						if(res.paramBody.result){
								that.msgToken = res.paramBody.result;
								// console.log(res.paramBody.result)
								uni.setStorage({
									key: 'msgToken',
									data: res.paramBody.result,
								});
						}
						uni.connectSocket({
								// url: 'wss://testws.yfh100.com/websocket?userId='+that.userId+'&token='+that.msgToken+'&clientType=applet',
								url: 'wss://ws.yfh100.com/websocket?userId='+that.userId+'&token='+that.msgToken+'&clientType=applet',
								method:'POST',
								fail:function(){
									console.log('连接失败了')
								}
						});
						uni.onSocketOpen(function (res) {
							console.log('WebSocket连接已打开！');
							setInterval(function(){
								that.sendMes()
							},30000)
						});
						uni.onSocketError(function (res) {
								console.log('WebSocket连接打开失败，请检查！');
								setTimeout(function(){
										uni.connectSocket({
											// url: 'wss://testws.yfh100.com/websocket?userId='+that.userId+'&token='+that.msgToken+'&clientType=applet',
											url: 'wss://ws.yfh100.com/websocket?userId='+that.userId+'&token='+that.msgToken+'&clientType=applet',
											method:'POST'
										});
								},3000)
						}); 
				})
			},
			sendMes() {
				let that = this;
				let data = {
					"channel":{
						"id":'',
						"type":6,
						"isHistory":0,
						"targetIds":[],
					},
					"sendUserId": this.userId,
					"sendUserName":'',
					"sendUserHeadPic":"",
					"msgContent":{
						"extra":"",
						"content":'',
					},
					"objectName":"",
					"msgType":'',
					"channelName":'',
					"channelPicture":""
				}
				uni.sendSocketMessage({
					data: JSON.stringify(data),
					fail: function() {
						if(that.userId && that.token && that.userName){
							that.resigeterUser(that.userId,that.userName,that.portraitUri,that.token)
						}
					}
				});
			},
		},
		onReady:function() {
			
		},
		onLoad:function() {
			
		},
		onShow: function () {
			console.log('APP show')
			let that = this;
			uni.getStorage({
				key: 'userId',
				success: function(res){
					that.userId = res.data;
				},
				fail:function() {
					that.userId = '';
				}
			});
			uni.getStorage({
				key: 'token',
				success: function(res){
					that.token = res.data;
				},
				fail:function() {
					that.token = '';
				}
			});
			uni.getStorage({
				key: 'userInfo',
				success: function(res){
					that.userName = res.data.nickName;
					that.portraitUri = res.data.avatarUrl;
					if(that.userId && that.token && that.userName){
						that.resigeterUser(that.userId,that.userName,that.portraitUri,that.token)
					}
				},
				fail:function() {
					that.userName = '';
					that.portraitUri = '';
				}
			});
		},
		onHide: function () {
			console.log('APP hide')
			uni.closeSocket();
		}
	}
</script>

<style>
	/* 这是页面的公用css */
	@import "./common/uni.css";
	.cf:after{
		display:block;
		width:100%;
		height:0;
		content: '';
		clear: both;
	}
</style>
