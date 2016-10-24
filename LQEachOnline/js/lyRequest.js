var ajaxReq = false, ajaxCallBack;

//发送GET请求
function lyAJAXGETRequest(filename, responseCallBack){
	try{
		ajaxReq = new XMLHttpRequest;
	}catch(e){
		//TODO handle the exception
		
		try{
			ajaxReq = new ActiveXObject("Microsoft.XMLHTTP");
		}catch(e){
			//TODO handle the exception
			
			return false;
		}
	}
	ajaxCallBack = responseCallBack;
	
	ajaxReq.open("GET", filename, true);
	ajaxReq.onreadystatechange = ajaxResponse();
	ajaxReq.send(null);
}

//发送POST请求
function lyAJAXPOSTRequest(fileName, data, responseCallBack){
	try{
		ajaxReq = new XMLHttpRequest;
	}catch(e){
		//TODO handle the exception
		
		try{
			ajaxReq = new ActiveXObject("Microsoft.XMLHTTP");
		}catch(e){
			//TODO handle the exception
			
			return false;
		}
	}
	ajaxCallBack = responseCallBack;	
	
	ajaxReq.open("POST", fileName, true);
	ajaxReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajaxReq.onreadystatechange = ajaxResponse();
	ajaxReq.send(data);
}

//监听请求状态的改变
function ajaxResponse(){
	if(ajaxReq.readyState != 4)
	{
		return;
	}
	
	if(ajaxReq.status == 200)
	{
		if(ajaxCallBack)
		{
			ajaxCallBack;
		}
	}
}
