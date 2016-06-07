const React = require('react')
const PieChart = require('react-simple-pie-chart')

module.exports = React.createClass({
  render: function() {

    // Assign to var to reduce character count
    let j = this.props.job

    console.log(this.props)

    let methodologies = []
    for (let key in j.methodology) typeof j.methodology[key] === 'boolean' && j.methodology[key] ? methodologies.push(key) : null

    let technologies = []
    $.each(j.technologies, (index, value) => typeof value == 'string' ? technologies.push(<span key={index+value}>{index}: {value}<br/></span>) : null )

    return (

      <div className='job-listing'>

        <h1>{j.headline}</h1>

        <div className='essentials section'>
          <div className='title'>Essentials</div>
          <div className='locations'>Location(s): {j.essentials.locations.join(', ')}</div>
          <div className='startdate'>Start date: {new Date(j.essentials.startdate).getDay() === (new Date().getDay()) ? 'Immediate' : new Date(j.essentials.startdate)}</div>
          <div className='employment-type'>Employment type: {j.essentials.employment}</div>
          <div className='industry'>Industry: {j.essentials.industry}</div>
          <div className='companysize'>Company size: {(j.essentials.companysize).split(/(?=[A-Z])/).join(" ")}</div>
          <div className='salary'>Salary: {j.essentials.salary.amount}+{j.essentials.salary.currency}</div>
          <div className='team-size'>Team size: {j.essentials.teamsize.min} to {j.essentials.teamsize.max}</div>
        </div>

        <div className='specs section'>
          <div className='title'>Specs</div>
          <div className='corehours'>Core hours: {(j.specs.corehours.from.toString().match(/.{1,2}/g).join(':'))} - {(j.specs.corehours.to.toString().match(/.{1,2}/g).join(':'))}</div>
          <div className='holidays'>Holidays: {j.specs.holidays}</div>
          <div className='remote'>Remote work: {j.specs.remote}</div>
          <div className='travel'>Travel: {j.specs.travel}</div>
        </div>

        <div className='technologies section'>
          <div className='title'>Technologies</div>
          <div className='technologies-list'>Technologies: {technologies}</div>
        </div>


        <div className='equipment section'>
          <div className='title'>Equipment</div>
          <div className='computer'>Computer: {j.equipment.computer}</div>
          <div className='monitors'>Monitors: {j.equipment.monitors}</div>
          <div className='operating-system'>Operating system(s): {j.equipment.operatingsystem.join(', ')}</div>
        </div>

        <div className='methodology section'>
          <div className='title'>Methodology</div>
          <div className='agilemanagement'>Agile management: {j.methodology.agilemanagement}</div>
          <div className='buildserver'>Build server: {j.methodology.buildserver}</div>
          <div className='issuetracker'>Issue tracker: {j.methodology.issuetracker}</div>
          <div className='versioncontrol'>Version control: {j.methodology.versioncontrol}</div>
          <div className='methodologies'>Keywords: {methodologies.join(', ')}</div>
        </div>

        <div className='misc section'>
          <div className='title'>Misc</div>
          <div className='freestuff'>Free stuff: {j.misc.freestuff.join(', ')}</div>
          <div className='training'>Training style: {j.misc.training}</div>
        </div>

        <div className='other section'>
          <div className='title'>Additional info</div>
          <div className='additional-info'>{j.other.map((value) => <span key={value}>{value}<br/></span> )}</div>
        </div>

        <div className='profile section'>
          <PieChart
            slices={[
              {
                color: '#2C3E50',
                value: j.profile.clientsupport,
              },
              {
                color: '#E74C3C',
                value: j.profile.documentation,
              },
              {
                color: '#2980B9',
                value: j.profile.maintenance,
              },
              {
                color: '#ECF0F1',
                value: j.profile.meetings,
              },
              {
                color: '#3498DB',
                value: j.profile.newfeatures,
              },
            ]}
          />
        </div>


      </div>

    )
  }
});
