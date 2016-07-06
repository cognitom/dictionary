import test from 'ava'
import Nightmare from 'nightmare'

const url = 'http://localhost:3030/fetch'

test('fetch the json data', async function(t) {
  const result = await Nightmare()
    .goto(url)
    .wait(() => document.body.innerText)
    .evaluate(() => document.body.innerText)
    .end()

  t.is(result, 'Fetch')
})
