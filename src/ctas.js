var xhr = require('tiny-xhr')
var hogan = require('hogan.js')

var templateString = `
<ul>
{{#data}}
  <li>
  {{#attributes}}
    <h3><a href="{{browser_url}}">{{title}}</a> ({{origin_system}})</h3>
    <p>{{description}}</p>
    <ul>
    {{#target_list}}
      <li>
        {{#family_name}}{{given_name}} {{family_name}}, {{/family_name}}{{organization}}
      </li>
    {{/target_list}}
    </ul>
  {{/attributes}}
  </li>
{{/data}}
</ul>
`

var template = hogan.compile(templateString)

var getCTAs = function(el) {
  var options = {
    // url: 'https://staging-cta-aggregator.herokuapp.com/v1/advocacy_campaigns',
    url: 'http://localhost:3000/v1/advocacy_campaigns',
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

module.exports = getCTAs
