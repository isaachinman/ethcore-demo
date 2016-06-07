const React = require('react')
const PieChart = require('react-simple-pie-chart')

module.exports = React.createClass({
  render: function() {

    // Assign to var to reduce character count
    let j = this.props.job

    // Capitalise location names
    let locations = j.essentials.locations.map((value) => value.charAt(0).toUpperCase() + value.substr(1))

    // Compile methodologies that are booleans and true
    let methodologies = []
    for (let key in j.methodology) typeof j.methodology[key] === 'boolean' && j.methodology[key] ? methodologies.push(key) : null

    // Compile technologies that are strings
    let technologies = []
    $.each(j.technologies, (index, value) => typeof value == 'string' ? technologies.push(<div className={'bar ' + value} key={index+value}>{index}</div>) : null )

    return (

      <div className='job-listing'>

        <h1>{j.headline}</h1>

        <div className='masonry-container'>

          <div className='essentials section'>
            <div className='title'>Essentials</div>
            <div className='item'><span className='label'>Location(s):</span> <i className='fa fa-map-marker'></i>{locations.join(', ')}</div>
            <div className='item'><span className='label'>Start date:</span> <i className='fa fa-calendar-o'></i>{new Date(j.essentials.startdate).getDay() === (new Date().getDay()) ? 'Immediate' : new Date(j.essentials.startdate)}</div>
            <div className='item'><span className='label'>Employment type:</span> <i className='fa fa-user'></i>{j.essentials.employment}</div>
            <div className='item'><span className='label'>Industry:</span> <i className='fa fa-industry'></i>{j.essentials.industry}</div>
            <div className='item'><span className='label'>Company size:</span> <i className='fa fa-users'></i>{(j.essentials.companysize).split(/(?=[A-Z])/).join(" ")}</div>
            <div className='item'><span className='label'>Salary:</span> <i className='fa fa-gbp'></i>{j.essentials.salary.amount}</div>
            <div className='item'><span className='label'>Team size:</span> <i className='fa fa-laptop'></i>{j.essentials.teamsize.min}&nbsp;to&nbsp;{j.essentials.teamsize.max}</div>
          </div>

          <div className='specs section'>
            <div className='title'>Specs</div>
            <div className='item'><span className='label'>Core hours:</span> {(j.specs.corehours.from.toString().match(/.{1,2}/g).join(':'))} - {(j.specs.corehours.to.toString().match(/.{1,2}/g).join(':'))}</div>
            <div className='item'><span className='label'>Holidays:</span> {j.specs.holidays}</div>
            <div className='item'><span className='label'>Remote work:</span> {j.specs.remote}</div>
            <div className='item'><span className='label'>Travel:</span> {j.specs.travel}</div>
          </div>

          <div className='technologies section'>
            <div className='title'>Technologies</div>
            <div className='bar-chart'>{technologies}</div>
          </div>

          <div className='equipment section'>
            <div className='title'>Equipment</div>
            <div className='item'><span className='label'>Computer:</span> {j.equipment.computer}</div>
            <div className='item'><span className='label'>Monitors:</span> {j.equipment.monitors}</div>
            <div className='item'><span className='label'>Operating system(s):</span> {j.equipment.operatingsystem.join(', ')}</div>
          </div>

          <div className='methodology section'>
            <div className='title'>Methodology</div>
            <div className='item'><span className='label'>Agile management:</span> {j.methodology.agilemanagement}</div>
            <div className='item'><span className='label'>Build server:</span> {j.methodology.buildserver}</div>
            <div className='item'><span className='label'>Issue tracker:</span> {j.methodology.issuetracker}</div>
            <div className='item'><span className='label'>Version control:</span> {j.methodology.versioncontrol}</div>
          </div>

          <div className='misc section'>
            <div className='title'>Misc</div>
            <div className='item'><span className='label'>Training style:</span> {j.misc.training}</div>
            <div className='item'><span className='label'>Free stuff:</span> <span className='capitalise'>{j.misc.freestuff.join(', ')}</span></div>
          </div>

          <div className='other section'>
            <div className='title'>Additional info</div>
            <div>{j.other.map((value) => <span className='capitalise label' key={value}>{value}<br/></span> )}</div>
          </div>

          <div className='profile section'>
            <div className='title'>Workload</div>
            <PieChart
              slices={[
                { color: '#2C3E50', value: j.profile.clientsupport },
                { color: '#E74C3C', value: j.profile.documentation },
                { color: '#2980B9', value: j.profile.maintenance },
                { color: '#ECF0F1', value: j.profile.meetings },
                { color: '#3498DB', value: j.profile.newfeatures },
              ]}
            />
            <div className='swatches'>
              <div className='swatch swatch--documentation'><div className='square'></div>Documentation <span className='percent'>({j.profile.documentation+'%'})</span></div>
              <div className='swatch swatch--clientsupport'><div className='square'></div>Client support <span className='percent'>({j.profile.clientsupport+'%'})</span></div>
              <div className='swatch swatch--newfeatures'><div className='square'></div>New features <span className='percent'>({j.profile.newfeatures+'%'})</span></div>
            </div>
          </div>

        </div>

      </div>

    )
  }
});
