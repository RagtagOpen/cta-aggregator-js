const Api = function(opts) {
  const baseUrl = opts.baseUrl

  function get(url) {
    return fetch(url)
      .then(function(response) {
        return response.json()
      })
  }

  function events() {
    return get(baseUrl+'/events?include=location')
      .then(events => events.data.map(e => e.attributes))
  }

  return {
    events: events
  }
}

export default Api
