import { connect } from 'react-redux';
import Search from './search';
import { receiveSong } from '../../actions/song_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  receiveSong: song => dispatch(receiveSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
