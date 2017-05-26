export default function(arr, sectionNumber, sectionSize) {
  let totalSections = Math.ceil(arr.length / sectionSize)
  sectionNumber = Math.min(sectionNumber, totalSections)
  let from = (sectionNumber - 1) * sectionSize
  let to = Math.min(from + sectionSize, arr.length)

  return arr.slice(from, to)
}
