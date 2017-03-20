/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';

import Button from './Button';

import {
  setLoading,
} from '../App/actions';

const Container = styled.div`
  height: 100%;
  position: relative;
`

const ButtonGroup = styled.div`
  bottom: 10%;
  display: inline-block;
  position: absolute;
`

const ticker = keyframes`
  from {
    transform: translate(100%);
  }
  to {
    transform: translate(-100%);
  }
`

const TickerTape = styled.div`
  height: 4%;
  display: inline-block;
  position: absolute;
  bottom: 4%;
  width: 100%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-color: white;
  overflow: hidden;
`

const Ticker = styled.div`
  width: 100%;
  display: inline-block;
  position: relative;
  font-size: 12pt;
  animation: ${ticker} 10s linear infinite;
`

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.setLoading(false);
  }

  clickMenu(route) {
    this.props.router.push(route);
  }

  render() {
    return (
      <Container>
        <ButtonGroup>
          <Button disabled onClick={this.clickMenu.bind(this, '/')}>Rankings</Button>
          <Button onClick={this.clickMenu.bind(this, '/closet')}>Closet</Button>
          <Button disabled onClick={this.clickMenu.bind(this, '/')}>Tutorial</Button>
          <Button disabled onClick={this.clickMenu.bind(this, '/')}>Challenge</Button>
          <Button disabled onClick={this.clickMenu.bind(this, '/')}>Button5</Button>
          <Button disabled onClick={this.clickMenu.bind(this, '/')}>Button6</Button>
        </ButtonGroup>
        <TickerTape><Ticker>Some Fashion News!!!</Ticker></TickerTape>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setLoading: (load) => dispatch(setLoading(load)),
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(HomePage);
