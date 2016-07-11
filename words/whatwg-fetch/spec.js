import test from 'ava'
import Nightmare from 'nightmare'

test('fetch the json data', async function(t) {
  const
    url = 'http://localhost:3030/whatwg-fetch',
    history = await Nightmare()
      .goto(url)
      .wait(() => console.history.length)
      .evaluate(() => console.history)
      .end(),
    log = history.pop()

  t.is(log, 'Fetch')
})
