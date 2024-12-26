
export const getSatusBarHeight = ()=>{
	return uni.getSystemInfoSync().statusBarHeight;
}

export const getJnAnHeght = ()=>{
	if(uni.getMenuButtonBoundingClientRect){
		let {height,top} = uni.getMenuButtonBoundingClientRect();
		return (top-getSatusBarHeight())*2 + height;
	}else{
		return 60;
	}
}

export const getZt=()=> getJnAnHeght()+getSatusBarHeight();
