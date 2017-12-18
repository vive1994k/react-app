var React = require('react')

class MyTitle extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Task Scheduler</h1>
      </div>
    )
  }
}

module.exports = MyTitle
