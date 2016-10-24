//验证兑换码
function validateCode(){
	//获取输入的验证码
	var awardCodeInput = document.getElementsByTagName("input")[0];
	var awardCode = awardCodeInput.value;
	if(awardCode.length <= 0)
	{
		showResult(1, "请输入兑奖码");
		return;
	}
	
	$.ajax({
		url:"http://192.168.1.209:8001/appserver/active/checkActivityUser",
		data:{
			verifyCode: awardCode,
			shopId: '666666'
		},
		type:"post",	
		async:true,
		success:function(data){
			showResult(data.data, data.message);
		},
		error:function(){
			alert('error');
		}
	});
//	lyAJAXPOSTRequest('http://192.168.1.209:8001/appserver/active/checkActivityUser', 'verifyCode = ' + awardCode + '&shopId = 123', handleValidateResult);
}

//处理兑换结果
function handleValidateResult(obj){
	alert(obj);
	showResult(1);
}

//显示处理结果
function showResult(resultCode, message){
	var validateResultDiv = document.getElementsByClassName("validateResultDiv")[0];
	//显示验证结果
	validateResultDiv.style.display = "block";

	var validateResultDivChildNodes = validateResultDiv.childNodes;
	if(validateResultDivChildNodes.length >= 4)
	{		
		//icon
		var validateResultIcon = validateResultDivChildNodes[1];
		//验证结果提示
		var validateResult = validateResultDivChildNodes[3];	
		switch (resultCode){
			case 1:
			{								
				validateResultIcon.classList.add("icon-iconnote", "validateResultfail");
				validateResult.textContent = "请输入兑奖码";
				validateResult.classList.add("validateResultfail");
			}
				break;
				case 2:
			{								
				validateResultIcon.classList.add("icon-iconerror", "validateResultfail");
				validateResult.textContent = "兑奖码错误";
				validateResult.classList.add("validateResultfail");
			}
				break;
				case 3:
			{		
				validateResultIcon.classList.add("icon-iconfail", "validateResultfail");				
				validateResult.textContent = "兑奖码无效，已经进行过兑奖";
				validateResult.classList.add("validateResultfail");
			}
				break;
				case 4:
			{		
				validateResultIcon.classList.add("icon-iconsucess", "validateResultSuccess");				
				validateResult.textContent = "成功验证兑奖码";
				validateResult.classList.add("validateResultSuccess");
			}
				break;
			default:
				break;
		}				
	}
}
