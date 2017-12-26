var React = require('react')
var ReactDOM = require('react-dom')
var Clock = require('./components/clock')
var MyTitle = require('./components/myTitle')
var NewTask = require('./components/newTask')

var InProgressTasks = require('./containers/inProgressTasks')
var UpcomingTasks = require('./containers/upcomingTasks')
var CompletedTasks = require('./containers/completedTasks')

class ClientApp extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='app-container'>
        <div className='app-background' />
        <MyTitle />
        <NewTask />
        <Clock />
        <div className="wrapper">
          <InProgressTasks />
          <UpcomingTasks />
          <CompletedTasks />
        </div>
      </div>
    )
  }
}

module.exports = ClientApp
