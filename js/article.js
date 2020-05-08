	var index = 1 ;
	
	window.onload = function(){
		
	if($(".pic_option>span").length>0)
		var timer = setInterval(changePic,3000)	
		
		$(".pic_option>span").click(function(){
			var i = $(".pic_option span").index(this);
			clearInterval(timer);
			index = i;
			changePic();
			timer = setInterval(changePic,3000)	
		})
		
		function changePic(){
			if(index==$(".pic_option>span").length){
				index = 0;	
			}
			$(".pic_option span").css("background-color","#A9A9A9");
			$(".pic_option span").eq(index).css("background-color","black");
			$(".pic_list>div:not(.pic_option)").fadeOut(1000);
			$(".pic_list>div").eq(index).fadeIn(1000);
			index++;
		}
		
	
		
	}
