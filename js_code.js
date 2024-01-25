const prompt =require("prompt-sync")();


function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false, console.log('А родители разрешили?');
  }
}

let age = prompt('Сколько вам лет?', 18);

if ( checkAge(age) ) {
  console.log( 'Доступ получен' );
} else {
  console.log( 'Доступ закрыт' );
}
