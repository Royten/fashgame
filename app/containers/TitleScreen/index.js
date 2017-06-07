/*
 *
 * TitleScreen
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import {
  setLoading,
} from '../App/actions';

import splash from '../../assets/splash.jpg';

const Splash = styled.img`
  max-width: 100vw;
  max-height: 65vh;
  display: block;
  margin: 0 auto;
`;

const Start = styled.button`
  width: 75vw;
  height: 10vh;
  cursor: pointer;
  border: 2px black solid;
  background-color: magenta;
  position: absolute;
  bottom: 5vh;
  left: 12.5vw;
  color: white;
`;

const Container = styled.div`
  height: 100%;
  background-color: white;
`;

const Label = styled.div`
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  width: 75vw;
  position: absolute;
  left: 12.5vw;
  bottom: 25vh;
`;

export class TitleScreen extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    setLoading: React.PropTypes.func,
    router: React.PropTypes.object,
  };

  componentDidMount() {
    this.props.setLoading(false);
  }

  start() {
    this.props.router.push('/challenge');
  }

  render() {
    return (
      <Container>
        <Splash src={splash} />
        <Label>FASHION GAME</Label>
        <Start
          onClick={() => this.start()}
        >
          START
        </Start>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setLoading: (load) => dispatch(setLoading(load)),
  };
}

export default connect(null, mapDispatchToProps)(TitleScreen);
