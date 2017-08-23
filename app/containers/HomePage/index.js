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

import BackGround from '../../assets/bg.jpg';
import Home1 from '../../assets/home_model_1.png';

const Container = styled.div`
  height: 100%;
  position: relative;
`;

const ButtonGroup = styled.div`
  bottom: 10%;
  display: inline-block;
  position: absolute;
`;

const ticker = keyframes`
  from {
    transform: translate(100%);
  }
  to {
    transform: translate(-100%);
  }
`;

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
`;

const Ticker = styled.div`
  width: 100%;
  display: inline-block;
  position: relative;
  font-size: 12pt;
  animation: ${ticker} 10s linear infinite;
`;

const BG = styled.div`
  position: absolute;
  width: 100%;
`;

const BGImg = styled.img`
    display: inline-block;
    width: 100%;
`;

const HomeModel = styled.img`
    position: absolute;
    height: 90%;
    top: 5%;
    right: 5%;
`;

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    setLoading: React.PropTypes.func,
    router: React.PropTypes.object,
  };

  componentDidMount() {
    this.props.setLoading(false);
  }

  clickMenu(route) {
    this.props.router.replace(route);
  }

  render() {
    return (
      <Container>
        <BG>
          <BGImg src={BackGround} />
          <HomeModel src={Home1} />
        </BG>
        <ButtonGroup>
          <Button disabled onClick={() => this.clickMenu('/')}>Rankings</Button>
          <Button onClick={() => this.clickMenu('/closet')}>Items</Button>
          <Button disabled onClick={() => this.clickMenu('/')}>Challenge</Button>
          <Button disabled onClick={() => this.clickMenu('/')}>Settings</Button>
          <Button disabled onClick={() => this.clickMenu('/')}>Tutorial</Button>
          <Button disabled onClick={() => this.clickMenu('/')}>Community</Button>
        </ButtonGroup>
        <TickerTape><Ticker>Some Fashion News!!!</Ticker></TickerTape>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setLoading: (load) => dispatch(setLoading(load)),
  };
}

export default connect(null, mapDispatchToProps)(HomePage);
