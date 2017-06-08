/*
 *
 * ChallengeScreen
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import makeSelectChallengeScreen from './selectors';

import {
  setLoading,
} from '../App/actions';

import ChallengeImage from '../../assets/challengescreen/challenge.jpg';

const ChallengeHeader = styled.img`
  width: 100vw;
`;

const ChallengeDescription = styled.div`
  background-color: white;
  width: 100vw;
  text-align: left;
  padding: 20px;
`;


const ChallengeTitle = styled.div`
  font-size: 14pt;
`;

const ChallengeButton = styled.button`
  margin-top: 20px;
  padding: 10px 0;
  width: 50vw;
  cursor: pointer;
  border: 2px black solid;
  background-color: magenta;
  position: absolute;
  left: 25vw;
  color: white;
`;

const ChallengeTooltip = styled.text`
  width: 100vw;
  position: fixed;
  bottom: 10px;
  color: white;
  background-color: royalblue;
  padding: 20px;
  white-space: pre-line;
`;

export class ChallengeScreen extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    };
  }

  componentDidMount() {
    this.props.setLoading(false);
  }

  nextStep() {
    this.setState({ step: this.state.step + 1 });
  }

  start() {
    if (this.state.step === 2) {
      this.props.router.push('/closet');
    } else {
      this.nextStep();
    }
  }

  render() {
    const steps = [
      'イベントチャレンジへようこそ！\n あなたは憧れのセレブスタイリストだよ！\n お題とドレスコードを確認し、素敵なコーデを作ってみて',
      '各アイテムをTAPすると試着ができるよ！\n 欲しいアイテムガあれば、２TAPして、ダイヤで買ってみてね',
      '素敵なコーデを作って、チャレンジにエントリーしてみてね！\n ドレスコードは必ず守ってね！',
    ];

    return (
      <div>
        <ChallengeHeader src={ChallengeImage} />
        <ChallengeDescription>
          <ChallengeTitle>
            イベント
            <br />
            ファッションブランドローンチパーティー
          </ChallengeTitle>
          お題：人気のファッションブランドのローンチパーティに招待されたモデルのコーデを作成。
          <br />
          <br />
          ドレスコード：バッグ
        </ChallengeDescription>
        <ChallengeButton
          onClick={() => this.start()}
        >
          { this.state.step === 2 ? 'Enter' : 'Next' }
        </ChallengeButton>
        <ChallengeTooltip>
          { steps[this.state.step] }
        </ChallengeTooltip>
      </div>
    );
  }
}

ChallengeScreen.propTypes = {
  setLoading: React.PropTypes.func,
  router: React.PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  ChallengeScreen: makeSelectChallengeScreen(),
});

function mapDispatchToProps(dispatch) {
  return {
    setLoading: (load) => dispatch(setLoading(load)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeScreen);
