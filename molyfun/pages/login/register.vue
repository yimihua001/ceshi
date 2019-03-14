<template>
	<view class="pages">
		<view class="top-line"></view>
		<view class="uni-main">
			<view class="login-top">
				<view class="title">欢迎加入我们</view>
				<view class="tip">登陆继续浏览</view>
			</view>
			<view class="login-box">
				<view class="uni-form-item uni-column">
					<view class="title">手机号码</view>
					<view class="with-fun">
						<input class="uni-input input-lines" placeholder="请输入您的手机号码" :value="phoneValue" @input="clearInput" />
						<view class="uni-icon uni-icon-clear" v-if="showClearIcon" @click="clearIcon"></view>
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">验证码</view>
					<view class="with-fun">
						<input class="uni-input input-lines" placeholder="请输入您的验证码" :value="passValue" @input="clearInput" />
						<view class="sendcode main-bg-ab8 main-text-fff">发送</view>
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">用户名</view>
					<view class="with-fun">
						<input class="uni-input input-lines" placeholder="请输入您的用户名" :value="passValue" @input="clearInput" />
						<view class="uni-icon uni-icon-clear" v-if="showClearIcon" @click="clearIcon"></view>
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">设置密码</view>
					<view class="with-fun">
						<input class="uni-input input-lines" placeholder="请设置至少六位密码" :value="passValue" @input="clearInput" />
						<view class="uni-icon uni-icon-clear" v-if="showClearIcon" @click="clearIcon"></view>
					</view>
				</view>
				<view class="login-btn main-bg-ab8 main-text-fff" @click="goLogin">
					注册
				</view>				
			</view>
		</view>
	</view>
</template>

<script>
	import {
		loginWxPhone,
		getCurrentUserInfo
	} from '../../api';
	export default {
		data() {
			return {
				showClearIcon: false,
				phoneValue: '',
				passValue: '',
			};
		},
		methods: {
			clearInput: function(event) {
				this.phoneValue = event.target.value;
				if (event.target.value.length > 0) {
					this.showClearIcon = true;
				} else {
					this.showClearIcon = false;
				}
			},
			goRegisterpages:function(){
				uni.navigateTo({
					url: "register"
				})
			},
			goWxloginpages:function(){
				uni.navigateTo({
					url: "wxlogin"
				})
			},
			goForgetpages:function(){
				uni.navigateTo({
					url: "forget"
				})
			}
		},
		onLoad: function() {},
		onReady: function() {

		}
	}
</script>

<style lang="less" scoped>
	.pages {
		.login-top {
			width: 100%;
			position: relative;
			margin-top: 40upx;
			.title{
				font-size: 60upx;
				color: #333;
			}
			.tips{
				font-size: 20upx;
				color: #999;
			}
		}
		.login-box{
			position: relative;
			margin-top: 100upx;
			.title{
				font-size: 40upx;
				color: #333;
			}
			.uni-form-item{
				margin-bottom: 30upx;
				position: relative;
				.sendcode{
					width: 160upx;
					height: 70upx;
					text-align: center;
					line-height: 70upx;
					position:absolute;
					right: 0upx;
					top:40upx;
					border-radius:6upx;
				}					
			}
			.login-btn{
				position: relative;
				margin-top:100upx;
				width: 100%;
				hieght:120upx;
				line-height: 120upx;
				text-align: center;
				border-radius: 10upx;
				font-size: 40upx;
			}
			.item-tip{
				position: relative;
				margin-top:30upx; 
				text-align: center;
				.tip{
					margin: 0 8upx;
				}
				.tipactive{
					margin: 0 8upx;
				}
				.line{
					margin: 0 8upx;
				}
			}
		}
		
	}
</style>
