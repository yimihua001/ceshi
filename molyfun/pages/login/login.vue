<template>
	<view class="pages">
		<view class="top-line"></view>
		<view class="uni-main">
			<view class="login-top">
				<view class="title">欢迎加入我们</view>
				<view class="tip">登录继续浏览</view>
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
					<view class="title">密码</view>
					<view class="with-fun">
						<input class="uni-input input-lines" placeholder="请输入您的密码" :value="passValue" @input="clearInput" />
						<view class="uni-icon uni-icon-clear" v-if="showClearIcon" @click="clearIcon"></view>
					</view>
				</view>
				<view class="forget text-right"  @click="goForgetpages">
					忘记密码？
				</view>
				<view class="login-btn main-bg-ab8 main-text-fff" @click="goLogin">
					登陆
				</view>
				<view class="item-tip">
					<text class="tip main-text-ab8" @click="goRegisterpages">注册账号</text>
					<text class="line">|</text>
					<text class="tip" @click="goWxloginpages">微信登陆</text>
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
			margin-top: changepx(40upx);
			margin-top: 40upx;
			.title{
				font-size: 52upx;
				color: #333;
			}
			.tips{
				font-size: 32upx;
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
			}
			.login-btn{
				position: relative;
				margin-top:240upx;
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
