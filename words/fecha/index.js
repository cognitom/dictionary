import fecha from 'fecha'

const str = fecha.format(new Date(2016, 6, 7), 'YYYY/MM/DD')
document.body.innerText = str
