export function customTickXaxis(day) {
  // console.log('day', day)
  return day && Number(day.slice(8)) // Number : "01" devient "1" - "11" reste "11"
}
