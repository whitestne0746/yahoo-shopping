import { connect } from 'react-redux';
import Ranking from '../components/Ranking';
import * as actions from '../actions/Ranking';

const mapStateToProps = (state, ownProps) => {
  return {
    categoryId: ownProps.categoryId,
    category: state.Ranking.category,
    error: state.Ranking.error,
  };
};

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    onMount(categoryId) {
      dispatch(actions.fetchRanking(categoryId));
    },
    onUpdate(categoryId) {
      dispatch(actions.fetchRanking(categoryId));
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Ranking);
