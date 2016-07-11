import 'whatwg-fetch'

fetch('dummy.json')
  .then(response => response.json())
  .then(json => {
    console.log(json.title) // Fetch
  })
