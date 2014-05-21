$(document).ready(function() { 
	
		/*$( ".jplug" ).keyup(function() {
			$( ".current" ).each(function() {
				$(this).toggleClass( "blad" );
					});
			});*/
	
		$('.jplug-imieinazwisko').keyup(function() {
			$('p.blad-imieinazwisko').remove();
			$(this).toggleClass( "current" )
			var tmp = $(this).val();
			var imieinazwisko = /^[A-Za-z+ ]+[A-Za-z]+$/;
			if(!imieinazwisko.test(tmp)) {	
				$(this).after('<p class="blad-imieinazwisko">Podaj swoje imię i nazwisko, oddzielne spacją</p>');
				$(this).removeClass( "spoko" );
				$(this).addClass( "blad" )
			} else { 
				$(this).removeClass( "blad" );
				$(this).addClass( "spoko" );
			}
		});
		
		$('.jplug-email').keyup(function() {
			$(this).toggleClass( "current" )
			$('p.blad-email').remove();
			var tmp = $(this).val();
			var email = /^([0-9a-zA-Z+]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*[.]{1}[a-zA-Z]{2,4})+$/;
			if(!email.test(tmp)) {	
				$(this).after('<p class="blad-email">Zły format maila</p>');
				$(this).removeClass( "spoko" );
				$(this).addClass( "blad" )
			} else { 
				$(this).removeClass( "blad" );
				$(this).addClass( "spoko" );
			}
		});
		
		$('.jplug-haslo-dlugosc').keyup(function() {
			$(this).toggleClass( "current" )
			$('p.blad-haslo').remove();
			var haslo = $(this).val();
			if(haslo.length < 3) {	
				$(this).after('<p class="blad-haslo">Hasło za krótkie (minimum 3 znaki, maksimum 12 znaków)</p>');
				$(this).removeClass( "spoko" );
				$(this).addClass( "blad" )
			}
			if(haslo.length > 12) {	
				$(this).after('<p class="blad-haslo">Hasło za długie (minimum 3 znaki, maksimum 12 znaków)</p>');
				$(this).removeClass( "spoko" );
				$(this).addClass( "blad" )
			}
			if(haslo.length >=3 && haslo.length<=12 ) {	
				$(this).after('<p class="blad-haslo">jest spoko, ale dostaw jeszcze jakieś cyfry</p>');
				$(this).removeClass( "blad" );
			}
			
			
			
		});		
		
});