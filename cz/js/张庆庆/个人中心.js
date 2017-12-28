//个人中心tab切换
tab();
function tab() {
	var target = $('#tabUl');
	var spans = $('.tabcon');
	var lis = target.getElementsByTagName('li');
	for (var i = 0; i < lis.length; i++) {
		(function (num) {
			lis[num].onclick = function () {
				//排他
				for (var j = 0; j < spans.length; j++) {
					spans[j].className = 'tabcon';
					lis[j].className = '';
				}
				spans[num].className = 'tabcon show';
				lis[num].className = 'current';
			}
		})(i);					
	}
}

//设置中的tab切换
tab1();
console.log($('#tabUL1').getElementsByTagName('li'));
console.log($('.tabcon1'));
function tab1() {
	var target = $('#tabUL1');
	var spans = $('.tabcon1');
	var lis = target.getElementsByTagName('li');
	for (var i = 0; i < lis.length; i++) {
		(function (num) {
			lis[num].onclick = function () {
				//排他
				for (var j = 0; j < spans.length; j++) {
					spans[j].className = 'tabcon1';
					lis[j].className = '';
				}
				spans[num].className = 'tabcon1 show';
				lis[num].className = 'current';
			}
		})(i);					
	}
};
//年龄下拉框
age();
function age(){
	var lock = true;
	console.log($('#age'));
	console.log($('#agexiala'));
	var age = $('#agexiala');
	var ageSpan = $('#age');
	$('#age').onclick = function (){
		if(lock == true){
			age.style.display = 'block';
			lock = false;
		}else{
			age.style.display = 'none';
			lock = true;
		}
		
	}
	var ageSpans = $('#agexiala').getElementsByTagName('span');
	for(var i = 0; i < ageSpans.length;i++){
		(function (num){
			ageSpans[num].onclick = function (){
				ageSpan.innerHTML = num+1;
				age.style.display = 'none';
			}
		})(i);
		
	}
}
job();
function job(){
	var lock = true;
	var job = $('#jobxiala');
	var jobSpan = $('#job');
	$('#job').onclick = function (){
		if(lock == true){
			job.style.display = 'block';
			lock = false;
		}else{
			job.style.display = 'none';
			lock = true;
		}
		
	}
	var jobSpans = $('#jobxiala').getElementsByTagName('span');
	var jobB = $('#jobB');
	for(var i = 0; i < jobSpans.length;i++){
		(function (num){
			jobSpans[num].onclick = function (){
				jobB.innerHTML = this.innerHTML;
				jobSpan.style.color = '#000';
				job.style.display = 'none';
			}
		})(i);
		
	}
}

//发送验证码倒计时
time();
function time(){
	var countdown = 5;
	var but = document.getElementById('time');
	but.addEventListener('click', function (e) {
    	setTime(but);
	}) 
	function setTime (elem) {
		if (countdown == 0) {
		     elem.value = "获取验证码";
		    countdown = 5;
		    elem.disabled = false;
		    clearTimeout(anima);
		} else {
		    countdown--;
		     elem.value = "重新获取(" + countdown + ")";   
		     elem.disabled = true;
		    var anima = setTimeout(function () {
		        setTime(elem);
		    }, 1000);
		}
	}
}
