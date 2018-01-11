//这里实现cookie的增删改查

//cookie的设置
function setCookie(key,value,time) {
	document.cookie = key + '=' +
	encodeURIComponent(value) + ';max-age=' + time;
}
//读取cookie
function getCookie(key) {
 	var cookieArr = document.cookie.split('; ');
 	//['u=lisi','psw=123'] cookie就长这样
 	for (var i = 0; i < cookieArr.length; i++) {
 		var arr2 = cookieArr[i].split('=');
 		//['u','lisi']  arr2长这样
 		if (arr2[0] == key) {
 			return decodeURIComponent(arr2[1]);
 		}
 	}
 	return false;
}
//删除cookie
function removeCookie(key) {
	setCookie(key,'0',-1);
}

//根据id获取元素
function $(id) {
	return document.getElementById(id);
}