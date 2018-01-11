$('#iphon').onfocus = function(){
	if($('#iphon').value == '手机号'){
		$('#iphon').value = '';
	}
}
$('#iphon').onblur = function(){
	if($('#iphon').value == ''){
		$('#iphon').value = '手机号';
		$('#iphonS').innerHTML = '*手机号码不能为空'
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
$('#checkpassword').onfocus = function(){
	if($('#checkpassword').value == '确认密码'){
		$('#checkpassword').value = '';
	}
}
$('#checkpassword').onblur = function(){
	if($('#checkpassword').value == ''){
		$('#checkpassword').value = '确认密码';
		$('#checkpasswordS').innerHTML = '*确认密码不能为空';
	}else if($('#checkpassword').value != $('#password').value){
		$('#checkpasswordS').innerHTML = '*两次密码必须一致';
	}else{
		$('#checkpasswordS').innerHTML = '';
	}
}
$('#yzm').onfocus = function(){
	if($('#yzm').value == '验证码'){
		$('#yzm').value = '';
	}
}
$('#yzm').onblur = function(){
	if($('#yzm').value == ''){
		$('#yzm').value = '验证码';
		$('#yzmS').innerHTML = '*验证码不能为空'
	}
}
//短信验证倒计时
sendYZM();
function sendYZM () {
	var t = 60;
	var timer = null;
	$('#sendyzm').onclick = function (){
		send();
		this.disabled = true;
		clearInterval(timer);
		timer = setInterval(send,1000);
		function send() {
			t--;
			if (t >= 0) {
				$('#sendyzm').value = '还剩'+ t + '秒';
			}else{
				$('#sendyzm').value = '重新发送短信';
				$('#sendyzm').disabled = false;
				clearInterval(timer);
				t = 5;
			}
		}
	}
}


zc();
function zc(){
	var str = $('#iphon').value;
	console.log(str);
	var reg = /0?(13|14|15|17|18|19)[0-9]{9}/;
	$("#registerBtn").onclick = function (){
		console.log(reg.test(str));
		if(reg.test(str)){
			alert('手机号格式不正确');
		}else{
			if($("#checkpassword").value == $("#password").value){
				window.open("../../html/张庆庆/个人中心.html");
			}else{
				alert("两次密码必须一致");
			}
		}
	}
	
}
