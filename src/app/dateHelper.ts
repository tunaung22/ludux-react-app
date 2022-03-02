export function getDateString(date: Date, format: string): string {
  const defaultFormat = 'dd-mmm-yyyy';
  // prepare
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDay() + 1).padStart(2, '0');
  // new
  const dateString = date.toLocaleDateString('default', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return dateString;

  // switch(format)  {
  //   case "dd-mm-yy":
  //     return ``
  //   case "dd-mm-yyy"
  //   default:
  //     return `${day}-${month}-${year}`;
  // }
}
