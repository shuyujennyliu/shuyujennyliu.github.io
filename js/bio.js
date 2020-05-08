 window.onload = function(){
	 display()
	// document.getElementsByTagName('body')[0].style.zoom=0.8
	// console.log(($(window).height()-89)/$(window).height()*100+"%")
	$(".main-item").css("height",($(window).height()-89)/$(window).height()*100+"%")
 }

 function move(){	

	window.scrollBy(300,0);

	 display()
	 
 }
 

 function display(){
	 $(".title>img,p").each(function(){	
	 	if($(this).offset().left<window.scrollX+$(window).width()){	
	 		 if($(this).css("visibility")=='hidden'){
				 $(this).css("visibility","visible")
				 $(this).css("display","none")
				 $(this).slideDown(1500)
			 }else{
				 $(this).animate({
					 'opacity':'1',
					 'top':'0'
				 },1500)
			 }
	 	}	
	 })
	 
	 if($(".main-item.item2 .content").offset().left<window.scrollX+$(window).width()){
		    $(".main-item.item2 .content>img").fadeIn(1000).animate({
				left:'0'
			},1000)
	 }
	 
	 if($(window).scrollLeft() + $(window).width() >= ($(document).scroll().width()-5)){
		 // $(".changePage").animate({
			//  "left":"30%"
		 // },1200,function(){
			//  	 $(".changePage.left").fadeOut()
		 // })	 
		  $(".changePage.left").fadeOut(500)
	 }
 }
 
 function toLeft(){
	 window.scrollTo(0,0);
	 $(".changePage").animate({
	 	"left":"80%"
	 },1200,function(){
	 	$(".changePage.left").fadeIn()
	 })	 
 }
 
	 // $(window).scroll(function(){
		//   display()
	 // })
