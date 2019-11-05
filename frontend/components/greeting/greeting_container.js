import { connect } from "react-redux";
import Greeting from "./greeting";

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps)(Greeting);
