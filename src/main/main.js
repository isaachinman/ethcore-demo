const React = require('react')
const ReactDOM = require('react-dom')

const JobListing = require('./components/job-listing.react')

if ($('#dashboard').length) {
  ReactDOM.render(
    <Dashboard />, document.querySelector('#dashboard')
  )
}
