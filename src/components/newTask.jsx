var React = require('react')
var render =  require('react-dom').render

class NewTask extends React.Component {
  constructor (props) {
    super(props)

    var now = new Date(); 
    var now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());

    this.state = {
      taskName: 'Default Task Name',
      taskStartTime: now_utc,
      taskEndTime: now_utc
    }

    this.onNameChange = this.onNameChange.bind(this);
  }

  onNameChange(event){
    var newTaskName = event.target.value;

    this.setState({
      taskName: newTaskName
    });
  }

  render () {
    return (
      <div className='new-task-wrapper'>
        <div>
          <div className='new-task-label'>
            Schedule Task :
          </div>
          <div className='u-d-inlineblock'>
            <input id='scheduleTask' type='text' placeholder='Task Name' defaultValue={this.state.taskName} onChange={this.OnNameChange} required/>
          </div>
        </div>
        <div>
          <div className='new-task-label'>
            To start at :
          </div>
          <div className='u-d-inlineblock'>
            <input id='startHr' type='datetime-local' defaultValue={this.state.taskStartTime} pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}" required/>
          </div>
        </div>
        <div>
          <div className='new-task-label'>
            To be finished at :
          </div>
          <div className='u-d-inlineblock'>
            <input id='finishHr' type='datetime-local' defaultValue={this.state.taskEndTime} pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}" required/>
          </div>
        </div>
        <div>
          <button>SUBMIT</button>
        </div>
      </div>
    )
  }
}

module.exports = NewTask
