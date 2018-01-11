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
	if()
}
