<template>
	<view class="page">
		<view class="search-top">
			<view class="search-con">
				<view class="search-type"  @click="searchDownBox">
					<view class="tips" v-if="searchFrom == 0">
						<text class="tipname">{{curActivename}}</text>
						<view class="tipicon" v-if="searchDown"></view>
						<view class="searchdown" v-if="searchDown">
							<text :class="curActive ==1?'downitem downline active':'downitem downline'" @click="changeActive">二手房</text>
							<text :class="curActive ==2?'downitem active':'downitem'" @click="changeActive">租房</text>
						</view>
						<view class="downhandle">
							<image class="pull-btn" src="../../../static/top/pull@2x.png" mode=""></image>
						</view>
					</view>
					<text class="tipname" v-if="searchFrom == 1">二手房</text>
					<text class="tipname" v-if="searchFrom == 2">租房</text>
				</view>
				<view class="input_box">
					<input type="text" auto-focus="true" v-model="searchcont" placeholder="你想住在哪？" maxlength="15">
				</view>
				<view class="search" @click="clickSearchBtn">搜索</view>
			</view>
		</view>
		<view class="his-card" v-if="showHisbox">
			<view class="his-cont">
				<view class="top-tip">
					历史搜索
					<text class="clearAll" @click="clearAlldata()">清空记录</text>
				</view>
				<view class="history-list">
					<view class="listbox">
						<view class="list-item" v-for="(item,k) in showhisSearch" :key="k">
							<view class="item-tip" @click="showSearchdata(item)">				
								{{item}}
							</view>
							<view class="delItem" @click="delItem(k)">
								<image class="del" src="/static/index/delete.png" mode=""></image>
							</view>
						</view>
					</view>
				</view>
			</view>				
		</view>
		<view class="hot-card">
			<view class="hot-cont">
				<view class="top-tip">
					热门搜索
				</view>
				<view class="hot-search">
					<view class="listbox">
						<view class="list-item" v-for="(item,k) in hotSearch" :key="k">
							<view class="item-tip" @click="showSearchdata(item)">				
								{{item}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>		
	</view>
</template>

<script>
	
	import {
		getHotVillage,updataHotVillage,fillVillageData
	} from '../../../api';
	export default {		
		data() {
			return {
				searchFrom:"0",
				searchDown:false,
				curActive :1,
				curActivename :"二手房",
				searchcont:"",
				cityCode:"",
				showHisbox:false,
				showhisSearch:[],
				salehisSearch:[],
				renthisSearch:[],
				hotSearch:[]
			}
		},
		onReady: function(options) {
			this.getHotdata();
			this.showHistory();
		},
		onLoad: function(options) {
			if(options.search){
				this.searchcont = options.search;
			}
			if(options.type == 0){
				this.curActive = 1;
			}else if(options.type == 1){
				this.curActive = 1;
			}else if(options.type == 2){
				this.curActive = 2;
			}
			this.searchFrom = options.type;		
			this.cityCode = options.citycode;
			let that = this;
			uni.getStorage({
					key: 'saleSearchData',
					success: function(res){
						that.salehisSearch = res.data;
						that.showhisSearch = that.salehisSearch;
					},
			});
			uni.getStorage({
					key: 'rentSearchData',
					success: function(res){
						that.renthisSearch = res.data;
						that.showhisSearch = that.renthisSearch;
					},
			});
		},
		methods: {
			delItem:function(item){
				let type = this.curActive;
				let nowdata = this.showhisSearch;
				let newdata = [];
				if(nowdata.length == 1){
					this.clearAlldata();
				}else{
					for(var i= 0;i < nowdata.length; i++){
						if(item != i){
							newdata.push(nowdata[i]);
						}
					}
				}
				this.addSearchData(type,newdata);
			},
			showSearchdata:function(search){
				let type = this.curActive;
				if (type == 1) {
					uni.redirectTo({
						url: '/pages/salehouse/salehouse?search=' + search
					});
				} else {
					uni.redirectTo({
						url: '/pages/rent/rent?search=' + search
					});
				}
			},
			clearAlldata:function(){
				let type = this.curActive;
				this.delSearchData(type,"",1);
			},
			showHistory:function(){
				let type = this.curActive;
				if(type == 1){
					this.showhisSearch = this.salehisSearch;
				}else{
					this.showhisSearch = this.renthisSearch;
				}
				if(this.showhisSearch && this.showhisSearch.length > 0){
					this.showHisbox = true;
				}else{
					this.showHisbox = false;
				}
			},
			searchDownBox:function(){
				if(this.searchFrom == 0){
					this.searchDown = this.searchDown?false:true;
				}
			},
			changeActive:function(){
				this.curActive = (this.curActive == 1)?2:1;
				this.curActivename = (this.curActivename == '二手房')?'租房':'二手房';				
				this.showhisSearch = (this.curActive == 1)?this.salehisSearch:this.renthisSearch;
				if(this.showhisSearch && this.showhisSearch.length > 0){
					this.showHisbox = true;
				}else{
					this.showHisbox = false;
				}
			},
			updataHotdata:function(){
				let params = {};
				params.cityCode = this.cityCode;
				params.buildingName = this.searchcont;
				updataHotVillage(params).then(res => {
					
				})
			},
			getHotdata:function(){
				let params = {};
				params.cityCode = this.cityCode;
				params.num = 5;
				getHotVillage(params).then(res => {
					if(res.result == 1){
						if(res.hotEstateList){
							
						}
					}	
				})
			},
			fillVillagedata:function(){
				let params = {};
				params.cityCode = this.cityCode;
				params.buildingName = this.searchcont;
				fillVillageData(params).then(res => {
					if(res.result == 1){
						if(res.hotEstateList){
							
						}else{
							
						}
					}
				})
			},
			clickSearchBtn:function(){
				let search = this.searchcont;
				if(search){
					// 更新小区热度
					this.updataHotdata();
					let data = [];
					data.push(search);
					if(this.curActive == 1){
						// 更新搜索历史缓存
						this.updataHistorydata(1,data);						
						uni.redirectTo({
							url: '/pages/salehouse/salehouse?search=' + search
						});						
					}else if(this.curActive == 2){
						// 更新搜索历史缓存
						this.updataHistorydata(2,data);						
						uni.redirectTo({
							url: '/pages/rent/rent?search=' + search
						});
					}
				}else{
					this.showMsgtip("请输入你要查找的小区或商圈","none",false)
				}
			},
			updataHistorydata:function(type,data){
				let that = this;
				if(type == 1){
					uni.getStorage({
						key: 'saleSearchData',
						success: function (res) {
							that.updataSearchData(type,data,res.data);
						},
						fail:function(res) {
							that.addSearchData(type,data);
						}
					}); 
				}else{
					uni.getStorage({
						key: 'rentSearchData',
						success: function (res) {
							that.updataSearchData(type,data,res.data);
						},
						fail:function(res) {
							that.addSearchData(type,data);
						}
					}); 
				}
			},
			addSearchData:function(type,data){
				let that = this;
				if(type == 1){
					uni.setStorage({
						key: 'saleSearchData',
						data: data,
					})
					that.salehisSearch = data;
					that.showhisSearch = that.salehisSearch;
				}else{
					uni.setStorage({
						key: 'rentSearchData',
							data: data,
						})
						that.renthisSearch = data;
						that.showhisSearch = that.renthisSearch;
				}
			},
			updataSearchData:function(type,data,olddata){
				let oldArr = olddata;
				let newArr = data;
				let hasflg = false;
				for(var p = 0; p < 5; p++){
					if(newArr[0] != oldArr[p]){
						hasflg = false;
					}else{
						hasflg = true;
						break;
					}
				}
				if(!hasflg){
					oldArr.unshift(newArr[0]);	
				}
				let leng = oldArr.length;
				let showArr = [];
				if(Number(leng - 5) > 0){
					for(var k = 0; k < 5; k++){
						showArr.push(oldArr[k]);
					}
				}else{
					showArr = oldArr;
				}
				this.addSearchData(type,showArr);				
			},
			delSearchData:function(type,item,isdelall){
				let that = this;
				if(isdelall){
					if(type == 1){
						uni.removeStorage({
							key: 'saleSearchData',
							success: function (res) {
								that.salehisSearch = [];
								that.showhisSearch = [];
								that.showHisbox = false;	
							},
						})
					}else{
						uni.removeStorage({
							key: 'rentSearchData',
							success: function (res) {
								that.renthisSearch = [];
								that.showhisSearch = [];
								that.showHisbox = false;	
							},
						})
					}
				}
			},
			showMsgtip:function(text,hasicon,ismask){
				uni.showToast({
					title: text,
					duration: 2000,
					icon:hasicon,
					mask:ismask
				});
			},
		},
		components: {
		},
		watch:{
			searchcont: function() {
				this.fillVillagedata();
			},
		}
	}
</script>
<style lang="less" scoped>
	.page{
		width: 100%;
		height: 1334upx;
		background: #FFFFFF;
	}
	.search-top {		
		float: left;
		padding: 0 30upx;
		height: 68upx;
		margin-bottom: 40upx;
		border-bottom: 1px solid #f5f5f5;
		.search-con{
			float: left;
			width: 100%;
			.search-type{
				float: left;
				width: 120upx;
				line-height: 68upx;
				font-size:28upx;
				color: #202741;
				margin-right:20upx;
				.tips{
					line-height:68upx;
					width: 86upx;
					float: left;
					position:relative;
					.tipname{
						float: left;
						width: 86upx;
					}
					.tipicon:after{
						content: '';
						position: absolute;
						top: 70upx;
						left: 70upx;
						border-left:30upx solid transparent;
						border-right:30upx solid transparent;
						border-bottom:30upx solid #f5f5f5;
					}	
					.searchdown{
						width: 200upx;
						height: 180upx;
						z-index: 99;
						position:absolute;
						top:100upx;
						background: #FFFFFF;
						border-radius: 10upx;
						box-shadow:3upx 3upx 20upx rgba(0,0,0,0.2);
						.downitem{
							width: 100%;
							display: block;
							line-height: 90upx;
							text-indent: 20upx;
							float: left;
						}
						.downline{
							border-bottom: 1px solid #f5f5f5;
						}
						.active{
							color: #ff6700;
						}
					}
				}
				.downhandle{
					width: 120upx;
					height: 68upx;
				}
				.pull-btn{
					width:15upx;
					height:15upx;
					margin-left:20upx;
				}
			}
			.input_box{
				float: left;
				width:460upx;
				height:68upx;
			}
			.input_box input{
				font-size:28upx;
				width: 90%;
				height:68upx;
				line-height:68upx;
			}
			.search{
				float: left;
				width:90upx;
				height:68upx;
				display: block;
				line-height: 68upx;
				font-size: 26upx;
				text-align: center;
				color: #5C6166;
			}
		}
	}

	.his-card{
		padding: 0 30upx;
		background: #FFFFFF;
		.his-cont {
			float: left;
			width: 100%;
			margin-bottom: 40upx;			
			.top-tip{
				float: left;
				display: block;
				width: 100%;
				color: #9498a4;
				font-size: 30upx;
				line-height: 32upx;
				position: relative;
				.clearAll{
					position: absolute;
					top:0;
					right:20upx;
					width:120upx;
					line-height: 32upx;
					text-align: right;
					color: #FF6600;
					font-size: 30upx;
				}
			}
			.history-list{
				float: left;
				width: 100%;
			}
		}
	}
	.hot-card{
		float: left;
		padding: 0 30upx;
		background: #FFFFFF;
		margin-bottom: 40upx;
		.hot-cont {
			float: left;
			width: 100%;			
			.top-tip{
				float: left;
				display: block;
				width: 100%;
				color: #9498a4;
				font-size: 30upx;
				line-height: 32upx;
			}
			.hot-search{
				float: left;
				width: 100%;
			}
		}
	}
	.listbox{
		width: 100%;
		float: left;
		.list-item {
			width: 100%;
			float: left;
			height: 85upx;
			border-bottom: 1px solid #dce1e5;
			position: relative;
			.item-tip {
				float: left;
				width:500upx;
				display: block;
				height: 85upx;
				line-height: 85upx;
				font-size: 26upx;
				color: #5c6166;
			}
			.delItem{
				width: 80upx;
				height: 85upx;
				display: block;
				float: right;
				position: absolute;
				right: 0;
				top: 0;
				
				.del{
					width: 30upx;
					height: 30upx;
					display: block;
					padding:28upx;
				}
			}
		}
	}	
</style>
