var React = require('react')

class NewTask extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='new-task-wrapper'>
        <div>
          <div className='new-task-label'>
            Schedule Task :
          </div>
          <div className='u-d-inlineblock'>
            <input id='scheduleTask' className='form' type='text' placeholder='Task Name' />
          </div>
        </div>
        <div>
          <div className='new-task-label'>
            To start at :
          </div>
          <div className='u-d-inlineblock'>
            <input id='startHr' type='time' />
          </div>
        </div>
        <div>
          <div className='new-task-label'>
            To be finished at :
          </div>
          <div className='u-d-inlineblock'>
            <input id='finishHr' type='time' />
          </div>
        </div>
      </div>
    )
  }
}

module.exports = NewTask
