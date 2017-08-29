var xhr = require('tiny-xhr')
var hogan = require('hogan.js')

var templateString = `
<ul>
{{#data}}
  <li>
  {{#attributes}}
    <h3><a href="{{browser_url}}">{{title}}</a> ({{origin_system}})</h3>
    <h4>{{start_date}}</h4>
    <p>{{description}}</p>
  {{/attributes}}
  </li>
{{/data}}
</ul>
`

var template = hogan.compile(templateString)

var getEvents = function(el) {
  var options = {
    url: 'https://cta-aggregator.herokuapp.com/v1/events',
    method: 'GET',
    type: 'json'
  }
  xhr(options).then(function(data) {
    console.log("got data:", data.response)
    const html = template.render(data.response)
    el.innerHTML = html
  }).catch(function(error) {
    console.log("uh oh:", error)
  })
}

module.exports = getEvents
