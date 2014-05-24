(function($){
$.fn.walidacja = function() {


    var konfig = {
        imieinazwisko: {
            regex: /^[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłóńśźż]+[ ]+[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłóńśźż]+$/,
            blad: 'Podaj swoje imię i nazwisko, oddzielone spacją'
        },
        haslo: {
            regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
            blad: 'Hasło musi składać się z małej litery, dużej litery i mieć conajmniej 6 znaków'
        },
        email: {
            regex: /^([0-9a-zA-Z+]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*[.]{1}[a-zA-Z]{2,4})+$/,
            blad: 'Niepoprawny adres e-mail'
        },
    };

	
	var $formularz = this,
    $wpisywanie = $formularz.find('input:text, input:password, input:submit');
	
    var walidacja = function(klasa, wartosc) {
	
	        var isValid = true,
            blad = '';
			
            for (var f in konfig) {
                var regex = new RegExp(f);
                if (regex.test(klasa)) {
                    if (wartosc && !konfig[f].regex.test(wartosc)) {
                        blad = konfig[f].blad;
                        isValid = false;
                    }
                }
            }
			
        return {
            isValid: isValid,
            blad: blad
        }
    };
    
    var wypisz_blad = function($input) {
        var klasa = $input.attr('class'),
            wartosc = $input.val(),
            test = walidacja(klasa, wartosc),
            $blad = $('<span class="blad">' + test.blad + '</span>');
			$input.removeClass('blad').siblings('.blad').remove();

        if (!test.isValid) {
            $input.addClass('blad');
            $blad.add($blad).insertAfter($input);
            $(this).siblings('.blad').toggle();
			
        }
    };
	
    $wpisywanie.each(function() {
        wypisz_blad($(this));
    });
    $wpisywanie.keyup(function() {
        wypisz_blad($(this));
    });
	
	return this;
};
})( jQuery );