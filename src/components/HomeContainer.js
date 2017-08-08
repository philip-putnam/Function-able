import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementProgress, decrementProgress } from '../actions/progress';

import Home from './Home';

export function HomeContainer(props) {
  const { decrementProgressAction, incrementProgressAction } = props;
  return (
    <Home
      incrementFunction={incrementProgressAction}
      decrementFunction={decrementProgressAction}
    />
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    incrementProgressAction: incrementProgress,
    decrementProgressAction: decrementProgress,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(HomeContainer);
