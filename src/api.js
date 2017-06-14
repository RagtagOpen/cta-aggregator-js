const Api = function(opts) {
  const baseUrl = opts.baseUrl

  function get(url) {
    return fetch(url)
      .then(function(response) {
        return response.json()
      })
  }

  function events() {
    return get(baseUrl+'/events')
  }

  return {
    events: events
  }
}

module.exports = Api
