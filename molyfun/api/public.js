export default {
  fetchPost (proctol, _service, body,style,token) {
    return new Promise((resolve, reject) => {
				let urlhost = 'https://test.molyfun.com/';
				let encryptStr = JSON.stringify(body);
				var requestJson = {
					deviceId: "861135022202388",
					deviceType: "applet",
					deviceName: "wxx",
					secretKey: "ALEIXLE",
					protocol: proctol,
					requestUUID: "SSID-LSLLSDJEKDE",
					clientId: "addddd",
					sessionId:token || '',
					paramBodyJsonStr: encryptStr
				};
				uni.request({
						header: {
							'Content-Type': 'application/json'
						},
						url: urlhost + _service,
						data:JSON.stringify(requestJson),
						method: 'POST',
						dataType:'json',
						success: (res) => {
							if(res.data.result == 1){
								if(style == 1){
									res.data.paramBody['result'] = 1;
									resolve(res.data.paramBody);
								}else{
									resolve(res.data);
								}
							}else{
								resolve(res.data);
							}
						}
				});
    })
  },

//传资源专用接口
  fetchPicPost (fileitem,filename,styles,isType,token) {
		let result = this.fetchPost('20005', 'upload/search.do',{
			dir: "wx/house",
			expiredSeconds: "10000"
		},2,token);
		return result.then(res=>{			
				let signdatas = res.paramBody.result;
				let fileurl = signdatas.dir + "/" + filename;
				let itemUrl = signdatas.host;
				return new Promise((resolve, reject) => {
				uni.uploadFile({
							url:itemUrl,
							filePath:fileitem,
							name: 'file',						
							formData: {
                'key': fileurl,
                'policy': signdatas.policy,
                'OSSAccessKeyId': signdatas.accessId,
                'success_action_status': '200',
                'Signature': signdatas.signature,
            },
						header: {
              'content-type': 'multipart/form-data;boundary=' + filename
            }
					}).then(res => {
								//1 传图片
								//2 传视频
								if(isType == 1){
									resolve('https://static.yfh100.com/'+fileurl+'?x-oss-process=style/'+ styles);
								}else{
									resolve('https://static.yfh100.com/'+fileurl);
								}
				      }).catch(error => {
				        	reject(error)
				      })
				   })
			 })
		}
}
