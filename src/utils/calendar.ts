export function createCalendar(elem:any, year:number, month:number) {

    let mon = month - 1; // los meses en JS son 0..11, no 1..12
    let d = new Date(year, mon);

    let table = '<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>';

    // espacios en la primera línea
    // desde lunes hasta el primer día del mes
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
      table += '<td></td>';
    }

    // <td> con el día  (1 - 31)
    while (d.getMonth() == mon) {
      table += '<td>' + d.getDate() + '</td>';

      if (getDay(d) % 7 == 6) { // domingo, último dia de la semana --> nueva línea
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    // espacios después del último día del mes hasta completar la última línea
    // 29 30 31 * * * *
    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td></td>';
      }
    }

    // cerrar la tabla
    table += '</tr></table>';

    elem.innerHTML = table;
  }

  export function getDay(date:Date) { // obtiene el número de día desde 0 (lunes) a 6 (domingo)
    let day = date.getDay();
    if (day == 0) day = 7; // hacer domingo (0) el último día
    return day - 1;
  }