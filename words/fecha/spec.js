import test from 'ava'
import Nightmare from 'nightmare'

const url = 'http://localhost:3030/fecha'

test('gets the formated date', async function(t) {
  const result = await Nightmare()
    .goto(url)
    .wait(() => document.body.innerText)
    .evaluate(() => document.body.innerText)
    .end()

  t.is(result, '2016/07/07')
})
