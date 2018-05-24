
original();

$('#videosTab').click(original);
$('#oBtn').click(original);

$('#cBtn').click(function(){
	$(this).addClass("selected");
	$('#oBtn').removeClass("selected");
	$('#originalVideo').css({"display" : "none","transition" :  " 0.5s"});
    $('#cv1Video').css({"display" : "block","transition" : "0.5s"});
    $('#cv2Video').css({"display" : "block","transition" : "0.5s"});
    $('#cv3Video').css({"display" : "block","transition" : "0.5s"});
    $('#cv4Video').css({"display" : "block","transition" : "0.5s"});
} 
 );

function original(){
	$('#oBtn').addClass("selected");
	$('#cBtn').removeClass("selected");
	$('#originalVideo').css({"display":"block" , "transition":"0.5s"});
    $('#cv1Video').css({"display":"none" , "transition":"0.5s"});
    $('#cv2Video').css({"display":"none" , "transition":"0.5s"});
    $('#cv3Video').css({"display":"none" , "transition":"0.5s"});
    $('#cv4Video').css({"display":"none" , "transition":"0.5s"});
	};