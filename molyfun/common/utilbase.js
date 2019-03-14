/**
 * 处理房源列表lable数据
 * @param olddata 原始房源数据对象
 * @param name 原始房源数据所在页面目录
 * 返回处理过数据
 * **/
function handleResultlableData(olddata,name) {
	for(var k in olddata){
		let lableData = olddata[k].lable?(olddata[k].lable).split(","):'';
		if(lableData){
			olddata[k]['haslable'] = true;
			olddata[k]['name'] = name;
			if(lableData.length ==1){
				olddata[k]['lable1'] = lableData[0];
			}else if(lableData.length ==2){
				olddata[k]['lable1'] = lableData[0];
				olddata[k]['lable2'] = lableData[1];
			}else if(lableData.length ==3){
				olddata[k]['lable1'] = lableData[0];
				olddata[k]['lable2'] = lableData[1];
				olddata[k]['lable3'] = lableData[2];
			}									
		}else{
			olddata[k]['haslable'] = false;
		}
	}
	return olddata;
}
/**
 * 获取当前设备信息
 * @param name 需要的信息name
 * 返回处理过数据
 * **/
function getCurentsystemInfo(name) {
	let info = uni.getSystemInfoSync();
	let result = "";
	if(info){
		if(name){
			result = info[name];							
		}else{
			console.log("name异常");
		}
	}
	return result;
}

module.exports = {
	handleResultlableData: handleResultlableData,
	getCurentsystemInfo: getCurentsystemInfo,
}
