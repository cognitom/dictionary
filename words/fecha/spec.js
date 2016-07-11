import test from 'ava'
import Nightmare from 'nightmare'

test('gets the formated date', async function(t) {
  const
    url = 'http://localhost:3030/fecha',
    history = await Nightmare()
      .goto(url)
      .wait()
      .evaluate(() => console.history)
      .end(),
    log = history.pop()

  t.is(log, '2016/07/07')
})
