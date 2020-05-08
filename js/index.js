var ago = 0;

var pos = 0;

var videoStatus = false ; 

var timer ;

	function changeTxt(e){

		clearInterval(timer)
	
		if($(e).attr("class")=="fa fa-angle-left"){
			autoChangeTxt('left');
		}else{
			autoChangeTxt(null); //right
		}
		
		timer = setInterval(autoChangeTxt,6000)
	}
	 
	function autoChangeTxt(change){
	
		 if(change!=null){
			 $(".plating_txt").eq(pos).animate({
				 left:'20%',
				 opacity:'0'
			 },1000,function(){
				 $(this).css("left","20%")
			 })
			 if(pos==0){
				 pos = 3
			 }else{
				 pos--
			 }	
			 $(".plating_txt").css("left","80%")
		 }else{
			 $(".plating_txt").eq(pos).animate({
					 left:'80%',
					 opacity:'0'
			 },1000,function(){
				 $(this).css("left","20%")
			 })
			 if(pos==3){
				 pos = 0
			 }else{
				 pos++
			 }
		 }//fadeOut
		 
		 //fadeIn
		 $(".plating_txt").eq(pos).animate({
		 	 left:'50%',
		 	 opacity:'1'
		 },1500)  
		
	}

 $(window).resize(function(){
		setHeaderSize()
 })
 
 
  function setHeaderSize(){
	 $("header").css("height",$("header>video").css("height"))
 }
 
	 function playVideo(e){
		 videoStatus = true;
	 }


window.onload = function(){
	
	init()
	
	$(".item>div").mouseover(function(){
		$(this).addClass("item-option");
	})
	
	$(".item>div").mouseout(function(){
		$(this).removeClass("item-option");
	})
	
	
	timer = setInterval(autoChangeTxt,6000)
	
	
	
	$("header").click(function(){
		if(videoStatus){
			 $(this).find("span").animate({
				 'opacity':'0'
			 },500)
			 $(this).find("video").trigger('play')
			 videoStatus = false;
		}else{
			$(this).find("span").animate({
				 'opacity':'1'
			},500)
			$(this).find("video").trigger('pause')
			videoStatus = true;
		}
	})
	
	
	$("header").mousemove(function(event){
		event = event||window.event;
		var st= $("body").scrollTop()||document.documentElement.scrollTop;
		var sl= $("body").scrollLeft()||document.documentElement.scrollLeft;	
		var X=event.clientX-($(this).find("span").width()/2);
		var Y=event.clientY-($(this).find("span").height()/2);
		$(this).find("span").css({"left":X+sl+"px","top":Y+st+"px"});
	})
	
	$("header").find("span").animate({
		'top':'35%',
		'opacity':'1'
		// 'transform':'scale(0.5)'
	},1000,function(){
		$(this).css("transition","0.2s")
	});
	
	$("header").animate({
		'height':$("header").css("max-height")
	},function(){
		setHeaderSize()
	})
	
	$(".item").find("div").mouseover(function(){
		$(".item").css("animation-play-state","paused");
	})
	
	$(".item").find("div").mouseout(function(){
		$(".item").css("animation-play-state","running");
	})
	

			
	}

	
	$(window).scroll(function(e){
		 init()
	})
	
	
	function init(){
		var now = $(window).scrollTop();
		var pos = now - ago;
		ago = now;
		
		
		if(now+$(window).height()>$(".col1-wrap-txt").offset().top){
			$(".col1-wrap-txt").fadeIn(1000).css("display","flex").animate({
				top:"0rem"
			},1000)
		}
		
		if(now+$(window).height()>$(".col6_foot_pic").offset().top+400){
			$(".col6_foot_pic").css("margin-top","50%");
			$(".col6_foot_pic").find("img").css("left","0");
		}
		
		
		$(".col_book").each(function(){ //book
			if(now+$(window).height()>$(this).offset().top+200){
					$(this).animate({
						left:"0"
					},800,function(){
						$(this).find(".col_book_right").animate({ //.slideDown(800)
							top:"0",
							opacity:"1"
						},1800)
					})
			}
		});
		
		
		$(".col-wrap-sign").each(function(){//sign
			if(now+$(window).height()>$(this).offset().top+200){
				$(this).css({"padding-left":"0","opacity":"1"}).find(".wrap-sign.white").css("margin-left","unset");
		
			}
		})
	}
	


