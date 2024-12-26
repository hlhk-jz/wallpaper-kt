
const BASE_URL = 'https://tea.qingnian8.com/api/bizhi';

export function request(config={}){	
	let {
		url,
		data={},
		method="GET",
		header={}
	} = config
	
	header['access-key'] = "xxm123321@#"
	
	
	return new Promise((resolve,reject)=>{		
		uni.request({
			url,
			data,
			method,
			header,
			success:res=>{
				if(res.statusCode===200){
					resolve(res)
				}else if(res.data.errCode === 400){
					uni.showModal({
						title:"错误提示",
						content:res.data.errMsg,
						showCancel:false
					})
					reject(res.data)
				}else{
					uni.showToast({
						title:res.data.errMsg,
						icon:"none"
					})
					reject(res.data)
				}				
			},
			fail:err=>{
				reject(err)
			}
		})
	})
}
