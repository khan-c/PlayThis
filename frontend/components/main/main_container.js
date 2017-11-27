import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Main from './main';

const mapStateToProps = state => ({
  user: state.session.currentUser.user,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
