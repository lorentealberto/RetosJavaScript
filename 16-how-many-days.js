/*
 * Crea una función que calcule y retorne cuántos días hay entre dos cadenas
 * de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se
 *   lanzará una excepción.
 */
const date1 = "02/04/1996";
const date2 = "01/10/1997";

function getDif(_date1, _date2) {
  // Check if any incorrect date
  let d1 = formatDate(_date1), d2 = formatDate(_date2);

try {
    checkDates(d1, d2);
  } catch (e) {
    console.log(e.message);
    return -1;
  }
  // Get difference between dates
  let result = 0;

  const yd = getYearsDif(d1, d2) * 365;
  const dm = getMonthsDif(d1, d2) * 30;
  const dd = getDaysDif(d1, d2);
  console.log(yd,dm,dd);
  result = dd + dm + yd;
  console.log(result);
  return; 
}

function formatDate(_string) {
  let nStr = _string.split('/');
  let result = `${nStr[1]}/${nStr[0]}/${nStr[2]}`;
  return new Date(result);

}

function isValidDate(_date) {
  return !isNaN(_date);
}

function checkDates(_date1, _date2) {
  if (!isValidDate(_date1) || !isValidDate(_date2))
    throw new Error("Alguna de las fechas no es válida");
}

function getYearsDif(_date1, _date2) {
  return Math.abs(_date1.getFullYear() - _date2.getFullYear());
}

function getMonthsDif(_date1, _date2) {
  return Math.abs(_date1.getMonth() - _date2.getMonth());
}

function getDaysDif(_date1, _date2) {
  return Math.abs(_date1.getDate() - _date2.getDate());
}

const diff = getDif(date1, date2);
console.log(`La diferencia de fechas es de ${diff}`);
