export default function (list) {
      let pairedList = [],
        pair = []

      list.forEach((val, index) => {
        if (index % 2 === 0) {
          pair = [val]
        } else {
          pair.push(val)
          pairedList.push(pair)
        }

        if (index % 2 === 0 && index + 1 === list.length) {
          pairedList.push(pair)
        }
      })

      return pairedList
    }