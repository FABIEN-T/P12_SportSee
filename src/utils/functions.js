export function customTickXaxis(day) {
  return Number(day.slice(8)) // "01" devient "1" - "11" reste "11"
}
