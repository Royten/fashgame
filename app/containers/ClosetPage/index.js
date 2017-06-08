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
  buyItem,
} from './actions';

import ModelPreview from '../../components/ModelPreview';
import Closet from '../../components/Closet';
import BuyConfirmModal from '../../components/BuyConfirmModal';

const Container = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const Balance = styled.div`
  width: 50vw;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  z-index: 99999;
`;

export class ClosetPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      buypopup: false,
      item: null,
    };
  }

  componentWillMount() {
    this.props.setLoading(true);
  }

  componentDidMount() {
    this.props.setLoading(false);
  }

  selectItem(item) {
    if (item.price > 0 && this.props.ClosetPage.currentItems.some((e) => e.name === item.name) && this.props.ClosetPage.boughtItems.every((e) => e.name !== item.name)) {
      // BUY POPUP
      if (this.props.ClosetPage.balance >= item.price) {
        this.setState({ buypopup: true, item });
      } else {
        this.props.selectItem(item);
      }
    } else {
      this.props.selectItem(item);
    }
  }

  buyItem(confirm) {
    if (confirm) {
      this.props.buyItem(this.state.item);
    }
    this.setState({ buypopup: false, item: null });
  }

  render() {
    const balance = this.props.ClosetPage.balance;
    const items = this.props.ClosetPage.activeTab === 99 ? this.props.ClosetPage.currentItems : this.props.ClosetPage.items[this.props.ClosetPage.activeTab];

    return (
      <Container>
        <Balance>
          { balance }
        </Balance>
        <ModelPreview
          outfit={this.props.ClosetPage.currentItems}
        />
        <Closet
          activeTab={this.props.ClosetPage.activeTab}
          clickTab={this.props.changeTab}
          items={items}
          ownedItems={this.props.ClosetPage.boughtItems}
          selectItem={(item) => this.selectItem(item)}
        />
        {
          this.state.buypopup
            ? <BuyConfirmModal
              item={this.state.item}
              buyItem={(confirm) => this.buyItem(confirm)}
              dialog="このアイテムを購入しますか？"
            />
            : ''
        }
      </Container>
    );
  }
}

ClosetPage.propTypes = {
  ClosetPage: React.PropTypes.object,
  setLoading: React.PropTypes.func,
  changeTab: React.PropTypes.func,
  selectItem: React.PropTypes.func,
  buyItem: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  ClosetPage: makeSelectClosetPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    setLoading: (load) => dispatch(setLoading(load)),
    changeTab: (tab) => dispatch(changeTab(tab)),
    selectItem: (item) => dispatch(selectItem(item)),
    buyItem: (item) => dispatch(buyItem(item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClosetPage);
