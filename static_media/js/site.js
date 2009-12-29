$(document).ready(function(){
    // Code Here
    $('body').prepend('<div class="demo_nav_block"><ul class="demo_nav"><li><a href="http://demo.davemerwin.com/">Home</a></li><li><a href="/ie8print/">IE 8 Print Demo</a></li></ul></div>');
    
    // For IE8 Print Test
    $('.print').click(function() {
		window.print();
		return false;
	});
	
});