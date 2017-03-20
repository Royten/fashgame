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
  setLoading,
  toggleMenu,
} from './actions';

import {
  makeSelectLoading,
  makeSelectMenuShowing,
} from './selectors';

import Header from 'components/Header';

const Content = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 56px;
  background-color: #BBB;
`;

const Menu = styled.div`
  transform: translate(${props => props.show ? '0%' : '-110%'});
  transition: 500ms ease-out;
  background-color: white;
  height: 100%;
  width: 75%;
  max-width: 300px;
  top: 0;
  position: fixed;
  box-shadow: 2px 0px 10px black;
`;

const Dark = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.6);
  position: fixed;
  top: 0;
  left: 0;
  display: ${props => props.show? '' : 'none' };
`

const Load = styled.div`
  z-index: 999999;
  display: ${props => props.loading? '' : 'none' };
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
`
export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
    loading: React.PropTypes.bool,
    menuShowing: React.PropTypes.bool,
  };

  render() {
    return (
      <div style={{height: '100%'}}>
        <Header />
        <Content>
          {React.Children.toArray(this.props.children)}
        </Content>
        <Dark show={ this.props.menuShowing } onClick={ () => this.props.toggleMenu() } />
        <Menu show={ this.props.menuShowing } />
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
