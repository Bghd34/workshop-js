
function validationForm() {
    var bok = true; // si c'eatir toujours 'true' on valide le formulaire sinon nons
    if (document.getElementById('nom').value == '') {
        document.getElementById('myNameError').innerHTML = 'merci de saisir votre nom !';
        bok = false;
    }
    else if (document.getElementById('nom').value.length<4) {
        document.getElementById('myNameError').innerHTML = 'caractere min est 4 !';
        bok = false;
    }

    if (document.getElementById('prenom').value == '') {
        document.getElementById('myFirstNameError').innerHTML = 'merci de saisir votre prenom !';
        bok = false;
    }
    else if (document.getElementById('prenom').value.length<4) {
        document.getElementById('myFirstNameError').innerHTML = 'caractere min est 4 !';
        bok = false;
    }

    if (document.getElementById('age').value == '') {
        document.getElementById('myAgeError').innerHTML = 'merci de saisir votre age !';
        bok = false;
    }
    else if (document.getElementById('age').value <18) {
        document.getElementById('myAgeError').innerHTML = ' age min est 18 ans !';
        bok = false;
    }

    if (document.getElementById('email').value == '') {
        document.getElementById('myEmailError').innerHTML = 'merci de saisir ton email !';
        bok = false;
    } else if (document.getElementById('email').value.length<4) {
        document.getElementById('myEmailError').innerHTML = 'caractère min est 4 !';
        bok = false;
    }


    if (document.getElementById('num').value == '') {
        document.getElementById('myNumError').innerHTML = 'merci de saisir votre num';
        bok = false;
    }
    else if ( document.getElementById('num').value.length !==10) {
        document.getElementById('myNumError').innerHTML = 'merci de saisir 10 caractres !';
        bok = false;
    }

    else if (isNaN(document.getElementById('num').value) ) {
        document.getElementById('myNumError').innerHTML = 'merci de ne saisir que des chiffres  !';
        bok = false;
    }

    if (document.getElementById('contact').value == '') {
        document.getElementById('myContactSelectedError').innerHTML = 'merci de choisir un moyen de contact !';
        bok = false;
    }

    if (document.getElementById('message').value == '') {
        document.getElementById('myMessageError').innerHTML = 'merci de saisir votre message';
        bok = false;
    }
    else if (document.getElementById('message').value.length>50) {
        document.getElementById('myMessageError').innerHTML = 'caractère max est 50 !';
        bok = false;
    }

    /*
        else {
            document.getElementById('myFieldError').innerHTML = '';
            alert('Le formulaire peut être envoyé');
            return true;
        }
        */
    return bok;
}

