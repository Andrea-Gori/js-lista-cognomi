var cognome = prompt('dimmi il tuo cognome');
cognome = cognome[0].toUpperCase() + cognome.substring(1);
console.log(cognome);

var listaCognomi = ['Bianchi', 'Rossi', 'Perlari', 'Lodigiani', 'Mastrobattista', 'Verdi'];

listaCognomi.push(cognome);

console.log(listaCognomi.sort());

var i = 0;

while (i < listaCognomi.length) {
  document.getElementById('listaCognomi').innerHTML += '<li>' + listaCognomi[i] + '</li>';
  i++;
}

document.getElementById('posizione').innerHTML = 'IL tuo cognome è in ' + (listaCognomi.indexOf(cognome) +1 ) + ' posizione'
