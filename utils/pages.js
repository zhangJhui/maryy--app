export const statusHeight = () => {
	//#ifdef H5
	return 0;
	//#endif
	return uni.getSystemInfoSync().statusBarHeight || 10;
}