import fecha from 'fecha'

const
  d = new Date(2016, 6, 7),
  str = fecha.format(d, 'YYYY/MM/DD')

console.log(str) // 2016/06/07
