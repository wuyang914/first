
$(function(){
    $("#shangpin").mouseenter(function(){
        var $sub = $(this).children("#second-nav");
        $sub.stop();
        $sub.slideDown(1000);
    })
    $("#shangpin").mouseleave(function(){
        var $sub = $(this).children("#second-nav");
        $sub.stop();
        $sub.slideUp(1000);
    })
});

function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}