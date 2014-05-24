
$(document).ready(function (){
	
	$('#imie').inputText( {text: "Podaj swoje imię"});
	$('#nazwisko').inputText().addClass("mycolor");
	
	$('#imie').testText('aaaaa');
	$('#imie').testText('aaaaa');
	$('#imie').testText('show','showContent1', 'showContent2');
	$('#imie').testText('hide', 'hideContent');

});




