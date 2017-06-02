/*
 *
 * ClosetPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import makeSelectClosetPage from './selectors';

import {
  setLoading,
} from '../App/actions';

import {
  changeTab,
  selectItem,
} from './actions';

import ModelPreview from '../../components/ModelPreview';
import Closet from '../../components/Closet';

import Items from './fakedata';

const Container = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export class ClosetPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.setLoading(true);
  }

  componentDidMount() {
    this.props.setLoading(false);
  }

  render() {
    const items = Items[this.props.ClosetPage.activeTab];

    return (
      <Container>
        <ModelPreview
          makeup={this.props.ClosetPage.wearables[1]}
          tops={this.props.ClosetPage.wearables[2]}
          bottoms={this.props.ClosetPage.wearables[3]}
          dresses={this.props.ClosetPage.wearables[4]}
          coats={this.props.ClosetPage.wearables[5]}
          shoes={this.props.ClosetPage.wearables[6]}
          jewellery={this.props.ClosetPage.wearables[7]}
          accessories={this.props.ClosetPage.wearables[8]}
          hair={this.props.ClosetPage.wearables[9]}
        />
        <Closet
          activeTab={this.props.ClosetPage.activeTab}
          clickTab={this.props.changeTab}
          items={items}
          selectItem={this.props.selectItem}
        />
      </Container>
    );
  }
}

ClosetPage.propTypes = {
  ClosetPage: React.PropTypes.object,
  setLoading: React.PropTypes.func,
  changeTab: React.PropTypes.func,
  selectItem: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  ClosetPage: makeSelectClosetPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    setLoading: (load) => dispatch(setLoading(load)),
    changeTab: (tab) => dispatch(changeTab(tab)),
    selectItem: (item) => dispatch(selectItem(item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClosetPage);
