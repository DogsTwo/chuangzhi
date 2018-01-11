$('#iphon').onfocus = function(){
	if($('#iphon').value == '手机号码/邮箱'){
		$('#iphon').value = '';
	}
}
$('#iphon').onblur = function(){
	if($('#iphon').value.length == 0){
		$('#iphon').value = '手机号码/邮箱';
		$('#iphonS').innerHTML = '*手机号码/邮箱号不能为空'
	}
}
$('#password').onfocus = function(){
	if($('#password').value == '密码'){
		$('#password').value = '';
	}
}
$('#password').onblur = function(){
	if($('#password').value == ''){
		$('#password').value = '密码';
		$('#passwordS').innerHTML = '*密码不能为空'
	}
}
$("#loginBtn").onclick = function (){
	var str = $('#iphon').value;
	var str1 = $('#password').value;
	var reg = /0?(13|14|15|17|18|19)[0-9]{9}/;
	var reg1 = /^\w+@\w+\.[a-z]{2,3}(\.[a-z])?/;
	console.log(str);
	console.log(str1);
	if(reg.test(str) && str1.value != '' && str.value != ''){
		window.open('../../html/lp/lp_index.html');
	}else if(reg1.test(str) && str1.value != '' && str.value != ''){
		window.open('../../html/lp/lp_index.html');
	}else if(str.value == '' || str1.value == ''){
		alert('手机号或密码不能为空');
	}else{
		alert('手机号或密码格式不正确');
	}
}
