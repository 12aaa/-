// JavaScript Document
$(function(){
	
	//头部导航菜单
	$(".header .menu").click(function(){
		$(".header .nav").slideToggle();
		$(".header .search").fadeToggle();		
	})			
	var winW=$(window).width();	
	$(window).resize(function(){
		winW=$(window).width();
		if(winW>=992){
			$(".header .nav,.header .search").show();			
		}else{
			$(".header .nav,.header .search").hide();	
		}
	
	})
	
	
	
})