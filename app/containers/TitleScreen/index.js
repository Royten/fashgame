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

import background from '../../assets/titlescreen/start_bg.png';
import corner from '../../assets/titlescreen/start_bottom.png';
import start from '../../assets/titlescreen/start_button.png';
import logo from '../../assets/titlescreen/start_logo.png';

const Background = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  transition-duration: 300ms;
`;

const Corner = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60%;
  transition-duration: 300ms;
`;

const Start = styled.img`
  cursor: pointer;
  position: absolute;
  bottom: 5%;
  right: 0;
  width: 50%;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  &:active {
    transform: scale(0.9);
  }
`;

const Logo = styled.img`
  width: 100%;
  position: absolute;
  bottom: 5%;
  transition-duration: 300ms;
  transition-timing-function: ease-out;
`;

const Container = styled.div`
  height: 100%;
  background: #f1b5b6;
  transition-duration: 300ms;
`;

export class TitleScreen extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    setLoading: React.PropTypes.func,
    router: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.props.setLoading(false);
    setTimeout(() => { this.setState({ loaded: true }) }, 100);
  }

  start() {
    this.setState({ loaded: false });
    setTimeout(() => this.props.router.replace('/challenge'), 500);
  }

  render() {
    return (
      <Container>
        <Background
          style={{
            opacity: this.state.loaded ? 1 : 0
          }}
          src={ background }
        />
        <Corner
          { ...(this.state.loaded === false && { style: { right: '-60%' } } ) }
          src={ corner }
        />
        <Logo
          style={{
            left: this.state.loaded ? '0' : '100%'
          }}
          src={ logo }
        />
        <Start
          { ...(this.state.loaded === false && { style: { transform: 'scale(0)' } } ) }
          src={ start }
          onClick={() => this.start()}
        />
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
