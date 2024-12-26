import {request} from "@/common/util/request.js"

//获取首页轮播
export function requestDataApi(){
	return request({
		"url":"https://api.thecatapi.com/v1/images/search?limit=5"
		})
}