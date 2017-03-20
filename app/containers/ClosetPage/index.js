/*
 *
 * ClosetPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectClosetPage from './selectors';

import {
  setLoading,
} from '../App/actions';

export class ClosetPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.setLoading(false);
  }

  componentWillMount() {
    this.props.setLoading(true);
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

ClosetPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ClosetPage: makeSelectClosetPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    setLoading: (load) => dispatch(setLoading(load)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClosetPage);
