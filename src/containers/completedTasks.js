import { connect } from 'react-redux'
import TaskWrapper from '../components/TaskWrapper'

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

const completedTasks = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskWrapper)

module.exports = completedTasks
