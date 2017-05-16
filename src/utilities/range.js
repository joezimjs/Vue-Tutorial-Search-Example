export default function range (start, count) {
  return Array.apply(0, Array(count)) .map((element, index) => index + start)
}