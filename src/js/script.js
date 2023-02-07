/* Перше */

/*const NUMBER = Number(prompt('Введіть ваше число!'))
const DEGREE = Number(prompt('Введіть ступінь до якого хочете піднести число!'))
let exponent = function (NUMBER, DEGREE) {

  if (NUMBER < 0 || DEGREE < 0) {
    alert('Ви ввели від’ємне число!!!')
  } else{
    return (DEGREE === 1) ? NUMBER : (NUMBER * exponent(NUMBER, DEGREE - 1))
  }
}

alert(`Ваше число піднесене до степеню = ${exponent(NUMBER, DEGREE)}`);*/

/* Друге */

/*const FIRSTNUMBER = Number(prompt('Введіть перше число'))
const LASTNUMBER = Number(prompt('Введіть друге число'))
let gcd = function (FIRSTNUMBER, LASTNUMBER) {
  if (FIRSTNUMBER < 0 || LASTNUMBER < 0) {
    alert('Ви ввели від’ємне число!!!')
  } else {
    return (!LASTNUMBER) ? FIRSTNUMBER : gcd(LASTNUMBER, FIRSTNUMBER % LASTNUMBER)
  }

}
alert(`Найбільший спільний дільник введених вами чисел = ${gcd(FIRSTNUMBER, LASTNUMBER)}`);*/

/* Четверте */

/*function isPrime(n, i) {
  if (n < 0) {
    alert('Ви ввели від’ємне число!!!')
  }
  if (n <= 2)
    return (n == 2) ? true : false;
  if (n % i == 0)
    return false;
  if (i * i > n)
    return true;

  return isPrime(n, i + 1);
}

let n = Number(prompt('Введіть будь яке додатнє число'));

if (isPrime(n, 2))
  alert("Введене вами число ПРОСТЕ!");
else
  alert("Введене вами число НЕПРОСТЕ!");*/

