import 'whatwg-fetch'

fetch('/fetch/dummy.json')
  .then(response => response.json())
  .then(json => {
    document.body.innerText = json.title
  })
