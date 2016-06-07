const React = require('react')
const ReactDOM = require('react-dom')
const JobListing = require('./components/job-listing.react')

// Had to pull the data to local, because CORS headers weren't correctly set
const job = require('job-data')

console.log(job)

if ($('#dashboard').length) {

  ReactDOM.render(
    <JobListing
      job={job}
    />, document.querySelector('#dashboard')
  )

}
