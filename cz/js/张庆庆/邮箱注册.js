zc();
function zc(){
	var str = $('#iphon').value;
	console.log(str);
	var reg = /^\w+@\w+\.[a-z]{2,3}(\.[a-z])?/;
	$("#registerBtn").onclick = function (){
		console.log(reg.test(str));
		if(reg.test(str)){
			alert('邮箱格式不正确');
		}else{
			if($("#checkpassword").value == $("#password").value){
				window.open("../../html/张庆庆/个人中心.html");
			}else{
				alert("两次密码必须一致");
			}
		}
	}
	
}