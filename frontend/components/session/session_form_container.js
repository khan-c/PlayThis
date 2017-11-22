import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const formType = (ownProps.location.pathname === '/signup') ? 'signup' : 'login';
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm = (ownProps.location.pathname === '/signup') ? signup : login;
  return {
    processForm: formUser => dispatch(processForm(formUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
