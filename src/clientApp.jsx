var React = require('react')
var ReactDOM = require('react-dom')

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='app-container'>
        <div className='app-background' />
        <div className='searchbox-wrapper u-pos-m-m'>
          Scheduler App
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
