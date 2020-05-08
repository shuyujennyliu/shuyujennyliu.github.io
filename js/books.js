	
	 function changeBg(e){
		 $(".sort_label>div:nth-child(1)>span:not(:nth-child(1))").attr("class",'unCheck')
		 if($(e).attr("class")=='check'){
			 $(e).attr("class","unCheck")
		 }else{
			$(e).attr("class","check")
		 }
	 }