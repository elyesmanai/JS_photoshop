var source;
var image;
var input;
var filters= [];
var filtersValues= [];


$("#file").on("change", function() {
  	source = $(this).val();
  	source = source.substring(12);
	source = "res/"+source; 
	image = document.getElementById('image').setAttribute('src',source);
});


$('.slider').on("input change", function(){
	editImage($(this).attr('name'), $(this).val());
});


function editImage(type,input){
	switch(type){
		case "border":
			var color = $('#border-color').val();
			var style = $('#border-style').val();
			$("#image").css("border-style",style);
			$("#image").css("border-color",color);
			$("#image").css("border-width",input);
			break;
		

		case "rotate":
			$("#image").css("transform",type+"("+input+"deg)");
			break;
		case "skew":
			$("#image").css("transform",type+"("+input+"deg)");
			break;
		case "scale":
			$("#image").css("transform",type+"("+input+")");
		break;
		case "blur" : 
			$("#image").css("filter",type+"("+input+"px)");
			break;
		default:
			$("#image").css("filter",type+"("+input+")");
	}

	/* to fix: add a list of the filters you made so that you can add multiple filters.
	filters.push(type);
	filtersValues.push(input);
	img#myImg {
        filter:contrast(200%) brightness(150%);
}
       */

}
