// @ts-check

// добавил типы
/**
 * @param {string | number | Date} timestamp
 * @returns {{ dayPeriod: 'pm' | 'am'; isSameDate: boolean }}
 */
function checkDate(timestamp) {
  // var устарел, а let не нужен т.к. переменные всё равно не переопределяем
  // new Date(timestamp * 1000).getDate() - ... * 1000 ломает код т.к. и так нормальная дата умножается на 1000
  const day = new Date(timestamp).getDate();
  const month = new Date(timestamp).getMonth();
  const year = new Date(timestamp).getFullYear();
  const hour = new Date(timestamp).getHours();

  // поправил имена переменных с рандомного на camelCase
  const currentDate = new Date(Date.now());
  const currentDay = currentDate.getDate();
  // current_Date.getMonth() + 1 - лишний код
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // вместо кучи вложенных условий можно сразу присвоить переменной логическое выражение
  const isSameDate =
    year === currentYear && month === currentMonth && day === currentDay;

  return {
    dayPeriod: hour > 11 ? 'pm' : 'am',
    isSameDate,
  };
}
