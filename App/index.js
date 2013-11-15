$(document).ready(function() {
$.ajax("/data/hello",{
 success:function(data){
 var msg = data.message;
 $("#message").html(msg);
 //alert(JSON.stringify(data));
 },
 error: function(){alert("err");}

});
});
