 
 var current ;
 
 var cur_pos ;
 
 $(document).ready(function(){
	  
	 $(".article_show").click(function(){
		  openPic()
		  $(".query_pic>div:nth-child(2)").css("background-image",$(this).parent("div").css("background-image"));
		  $(".query_pic_content>span").text($(this).find("p:nth-child(1)").text())
		  $(".query_pic_content>p").text($(this).find("p:nth-child(2)").text())
	 }) 
	 
	 $(".pic_list>div:not(.pic_option)").click(function(){  //article
		if($(".pic_option>span").length>0){
			$(".changePicBtn").css("visibility","initial")
		}
		openPic()
		current = $(this).index()
	 	$(".query_pic>div:nth-child(2)").css("background-image",$(this).css("background-image"));
	 	$(".query_pic_content>span").text($(this).find("span:nth-child(1)").text())
	 	$(".query_pic_content>p").text($(this).find("span:nth-child(2)").text())
	 })
	 
	 
	 $(".changePicBtn").click(function(){ //changePic
	 	 if($(".pic_option>span").length>0){
	 		 if($(this).attr("class")=='changePicBtn right'){
	 			  if(current==$(".pic_option>span").length-1){
	 			  	current = 0;	
	 			  }else{
	 				  current++;
	 			  }
	 		 }else{
	 			 if(current==0){
	 			 	current = $(".pic_option>span").length-1;	
	 			 }else{
	 				current--;
	 			 }
	 		 }
	 		 $(".query_pic>div:nth-child(2)").css("background-image",$(".pic_list:not(.pic_option)>div").eq(current).css("background-image"));
	 		 $(".query_pic_content>span").text($(".pic_list:not(.pic_option)>div").eq(current).find("span:nth-child(1)").text())
	 		 $(".query_pic_content>p").text($(".pic_list:not(.pic_option)>div").eq(current).find("span:nth-child(2)").text())	
	 	 }
	 })
	 
 })
 
  $(window).resize(function(){

	 $(".query_pic").css({
		 // 'top':$(window).scrollTop(),
		 'width':$(window).width()+'px',
		 'height':$(window).height()+'px',
	 })
  })
 
 
 function openPic(){
	cur_pos = $(window).scrollTop();
    $(".query_pic").css("height",$(window).height())
	$("html").css("position","fixed");
 	$("body").css("overflow","hidden");
 	// $(".query_pic").css("top",$(window).scrollTop());
 	$(".query_pic").css("visibility","initial");
 }
 
 
 function fullPic(){
 	if($(".query_pic.mobile").css("display")=="none"){ //pc端
 		$(".query_pic.pc>div:nth-child(1)>img:nth-child(2)").css("display","none");
 		$(".query_pic.pc>div:nth-child(3)").css("display","none");	
 		$(".query_pic.pc").css("display","unset");
 		$(".query_pic.pc>div:nth-child(2)").css({"width":"100%","height":"unset"});
 	}else{
 		$(".query_pic.mobile>div:nth-child(1)>img:nth-child(2)").css("display","none") //full btn
 		$(".query_pic.mobile>div:nth-child(3)").css("display","none");
 		$(".query_pic.mobile>div:nth-child(2)").css("height","77%");
 	} 
 }
 
 function closeFull(){
 	$(".query_pic").css("top",0);
 	$("body").css("overflow","auto");
 	$(".query_pic").css("visibility","hidden");
	$("html").css("position","unset");
 	if($(".query_pic.mobile").css("display")=="none"){
		$(".changePicBtn").css("visibility","hidden")
 		$(".query_pic.pc>div:nth-child(1)>img:nth-child(2)").css("display","flex");
 		$(".query_pic.pc>div:nth-child(3)").css("display","flex");
 		$(".query_pic.pc").css("display","flex")
 		$(".query_pic.pc>div:nth-child(2)").css({"width":"unset","height":"100%"});
 	}else{
 		$(".query_pic.mobile>div:nth-child(1)>img:nth-child(2)").css("display","block");
 		$(".query_pic.mobile>div:nth-child(3)").css("display","block");
 		$(".query_pic.mobile>div:nth-child(2)").css("height","65%");
 	}
	window.scrollTo(0,cur_pos)
 }