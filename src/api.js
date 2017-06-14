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

  function ctas() {
    return get(baseUrl+'/advocacy_campaigns')
      .then(ctas => ctas.data.map(c => c.attributes))
  }

  return {
    events,
    ctas
  }
}

export default Api
