// plik scripts.js

var a = prompt('wpisz wartość a');

var b = prompt('wpisz wartość b');

var value = (a*a) + (2 * a * b) - (b*b);
console.log(value);

if ( value > 0 ) {
	console.log('wynik dodatni');
} else if ( value < 0 ) {
	console.log('wynik ujemny');
}


switch(value) {
	case 0:
		console.log('wynik jest równy zero');
}