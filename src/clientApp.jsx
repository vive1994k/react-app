var React = require('react')
var ReactDOM = require('react-dom')
var Clock = require('./components/clock')
var MyTitle = require('./components/myTitle')
var NewTask = require('./components/newTask')

class App extends React.Component {
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
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
