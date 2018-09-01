import { connect } from 'react-redux';
import { createTask } from '../../actions/task_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import TaskCreate from './task_create';

const mapStateToProps = (state) => ({
  users: Object.values(state.entities.users).filter(user => user.username !== ""),
  groups: Object.values(state.entities.groups).filter(group => group.name !== "")
});

const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTask(task)),
  fetchUsers: () => dispatch(fetchAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreate);