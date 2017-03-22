/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  FaEnvelope,
  FaHome,
  FaTicket,
  FaThumbsUp,
  FaShoppingCart,
  FaTag,
  FaComment,
  FaMoney,
  FaDiamond,
  FaCog,
  FaSignOut,
  FaQuestion,

} from 'react-icons/lib/fa';

import Header from 'components/Header';

import {
  setLoading,
  toggleMenu,
} from './actions';

import {
  makeSelectLoading,
  makeSelectMenuShowing,
} from './selectors';

import ProfilePic from '../../assets/ProfilePic.png';

const Content = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 56px;
  background-color: #BBB;
`;

const Menu = styled.div`
  z-index: 100;
  transform: translate(${(props) => props.show ? '0%' : '-110%'});
  transition: 500ms ease-out;
  background-color: white;
  height: 100%;
  width: 75%;
  max-width: 300px;
  top: 0;
  position: fixed;
  box-shadow: 2px 0px 10px black;
  overflow-y: scroll;
`;

const MenuItem = styled.p`
  font-family: sans-serif;
  color: #999;
  padding: 20px;
  margin: 0;
  border-top: 1px solid lightgrey;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #999;
  }
`;

const MenuSpace = styled.div`
  width: 100%;
  height: 50px;
`;

const Profile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid #999;
  position: relative;
  margin: 20px 0;
  left: 100px;
`;

const Dark = styled.div`
  z-index: 99;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.6);
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => props.show ? '' : 'none'};
`;

const Load = styled.div`
  z-index: 999999;
  display: ${(props) => props.loading ? '' : 'none'};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
`;

export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
    loading: React.PropTypes.bool,
    menuShowing: React.PropTypes.bool,
    toggleMenu: React.PropTypes.func,
    router: React.PropTypes.object,
  };

  clickMenu() {
    this.props.toggleMenu();
    this.props.router.replace('/');
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        <Header />
        <Content>
          {React.Children.toArray(this.props.children)}
        </Content>
        <Dark show={this.props.menuShowing} onClick={() => this.props.toggleMenu()} />
        <Menu show={this.props.menuShowing}>
          <Profile src={ProfilePic} />
          <MenuItem><FaEnvelope /> Inbox</MenuItem>
          <MenuItem onClick={() => this.clickMenu()}><FaHome /> Home</MenuItem>
          <MenuItem><FaTicket /> Style Challenges</MenuItem>
          <MenuItem><FaThumbsUp /> Vote on Looks</MenuItem>
          <MenuItem><FaShoppingCart /> Shop</MenuItem>
          <MenuItem><FaTag /> Shop Online</MenuItem>
          <MenuItem><FaComment /> Fashion Feed</MenuItem>
          <MenuItem><FaMoney /> Get Cash & Diamonds</MenuItem>
          <MenuItem><FaDiamond /> Premium Store</MenuItem>
          <MenuSpace />
          <MenuItem><FaCog /> Account</MenuItem>
          <MenuItem><FaSignOut /> Log Out</MenuItem>
          <MenuItem><FaQuestion /> Help</MenuItem>
          <MenuSpace />
          <MenuItem>App Version</MenuItem>
        </Menu>
        <Load loading={this.props.loading}>LOADING</Load>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    setLoading: (load) => dispatch(setLoading(load)),
    toggleMenu: () => dispatch(toggleMenu()),
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  menuShowing: makeSelectMenuShowing(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(App);
