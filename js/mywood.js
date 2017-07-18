//上传图片
//但点击图片时 触发隐藏标签input的文件功能
$(function(){
	$("#NameCardImg").click(function(){
		$("#file").click();
	});
//密码区验证
	$("#inputPassword3").keyup(function(){
	    var password = $("#inputPassword3").val();
	    var num = 0;
	    var number = 0 ;
	    var letter = 0 ;
	    var bigLetter = 0 ;
	    var chars = 0 ;
	    if (password.search(/[0-9]/) != -1) {
	        num += 1;
	        number =1;
	    }
	    if (password.search(/[A-Z]/) != -1) {
	        num += 1;
	        bigLetter = 1 ;
	    }
	    if (password.search(/[a-z]/) != -1) {
	        num += 1;
	        letter = 1 ;
	    }
	    if (password.search(/[^A-Za-z0-9]/) != -1) {
	        num += 1;
	        chars = 1 ;
	    }
	    if (num >= 2 && (password.length >= 6 && password.length <= 20)) {
	        $(".pswSpan").html("");
	        $("#inputPassword3").removeClass("warningInfo");
	    }else if(password.length < 6 || password.length > 20){
	        $(".pswSpan").html("密码由6-20个字符组成!");
	        $("#inputPassword3").addClass("warningInfo");
	    }else if(num == 1){
	        if(number==1){
	            $(".pswSpan").html("不能全为数字!");
	        }
	        if(letter==1){
	            $(".pswSpan").html("不能全为字母!");
	        }
	        if(bigLetter==1){
	            $(".pswSpan").html("不能全为字母!");
	        }
	        if(chars==1){
	            $(".pswSpan").html("不能全为字符!");
	        }
	        $("#inputPassword3").addClass("warningInfo");
	    }
	});
//手机号码验证
	$("#inputPhoneNumber4").keyup(function(){
		var myreg =/^1(3|4|5|7|8)\d{9}$/;
		if(!myreg.test($("#inputPhoneNumber4").val()))
		{
			$("#inputPhoneNumber4").addClass("warningInfo");
//		    alert('请输入有效的手机号码！');
		    return false;
		}else{
//			alert("ok");
			$("#inputPhoneNumber4").removeClass("warningInfo");
		}
	});

//提交审核
	$("#Sub-btn").click(function(){
//		alert("提交啦");
//		模态层内容赋值
//		console.log(ModalText);
//		用户名取值成功
//		console.log($("#inputName3").val());
		if($("#inputName3").val()==""){
//      用户名为空
			console.log(111111);
			$(".modal-body").html("请补充用户名");
		}else{
			$("#inputName3").val();
		}
	});






});
