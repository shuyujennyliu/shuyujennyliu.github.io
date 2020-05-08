function slideNav(){
		var obj = $("#nav-bar").find("div");
	   if(obj.attr("class")=="nav_bar"){
		   if($("nav").css("position")=='fixed'){  //解决fixed造成的导航移动异常
			   $("nav").css({"position":"absolute","top":$(window).scrollTop()})
		   }
		   obj.removeClass().addClass("nav_close");
		   $(".head.nav_side").css({"height":$(document).height(),"display":"block","top":$(window).scrollTop()});
		   // obj.css("transform","rotateZ(45deg)");
		   $("body").animate({
		   	left:"-50%"
		   })
	   }else{
		   if($("nav").css("position")=='absolute'){ //解决fixed造成的导航移动异常
			   $("nav").css({"position":"fixed","top":"unset"})
		   }
		   obj.removeClass().addClass("nav_bar");
		   // obj.css("transform","rotateZ(0deg)");
		   $("body").animate({
		   	left:"0"
		   },function(){
			   $(".head.nav_side").css("display","none");
		   })
	   }
	}
	
	
	function slideNavlist(e){
		if($(e).attr("class")=='fa fa-angle-down'){
			$(e).removeClass().addClass("fa").addClass("fa-angle-up").parent("li").find(".nav-side-list").slideToggle();
		}else{
			$(e).removeClass().addClass("fa").addClass("fa-angle-down").parent("li").find(".nav-side-list").slideToggle();
		}
	}
	
	
	$(window).scroll(function(){
		
		if($("#nav-bar").find("div").attr("class")!="nav_bar"){
			slideNav();
		}
	})