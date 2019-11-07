
$( document ).ready(function() {
	var holder;
var list1=$('<li>' + holder1 +  ' </li>');
var list2=$('<li>' + holder2 +  ' </li>');
var list3=$('<li>' + holder2 +  ' </li>');

$('#create').on('click',function(){
	if ( $("#check1").prop('checked') === true && $("#check2").prop('checked') === true && $("#check3").prop('checked') === true ) {
		holder1 = "black";
		$('ul').apend(list1);
	}  else if ( $("#check1").prop('checked') === true && $("#check2").prop('checked') === true || $("#check1").prop('checked') === true && $("#check3").prop('checked') || $("#check2").prop('checked') === true && $("#check3").prop('checked') || $("#check1").prop('checked') === true && $("#check3").prop('checked') ) {
		holder1 = "(purple = blue + red)";
		holder2 = "(green = blue + yellow)";
		holder3 = "(orange = red + yellow)";
		$('ul').apend(list);
	} else if ( $("#check1").prop('checked') === true || $("#check2").prop('checked') === true || $("#check3").prop('checked') === true) {
		holder1 = '(yellow, blue or red)';
		$('ul').apend(lis1t);
	}
}

}