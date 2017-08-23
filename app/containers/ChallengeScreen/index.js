/*
 *
 * ChallengeScreen
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import styled from 'styled-components'
import makeSelectChallengeScreen from './selectors'

import {
  setLoading
} from '../App/actions'

import ChallengeImage from '../../assets/challengescreen/challenge.jpg'
import descriptionbg from '../../assets/challengescreen/descriptionbg.png'
import next from '../../assets/challengescreen/next.png'
import textbox from '../../assets/challengescreen/textbox.png'
import woman from '../../assets/challengescreen/woman.png'

const Container = styled.div`
  height: 100%;
`

const ChallengeHeader = styled.img`
  width: 100%;
  transition-duration: 300ms;
`

const DescriptionBG = styled.div`
  width: 100%;
  margin-top: 10%;
  text-align: left;
  padding: 20px;
  font-size: 10pt;
  background: url(${descriptionbg}) no-repeat;
  background-size: 100% 100%;
  min-height: 20vh;
  text-shadow: -1px -1px 2px white, 1px -1px 2px white, -1px 1px 2px white, 1px 1px 2px white;
  transition-duration: 300ms;
`

const ChallengeTitle = styled.div`
  font-size: 3.7vw;
  position: relative;
  top: -8vh;
  color: white;
  font-weight: bold;
  text-shadow: -1px -1px 3px #ff07e0, 1px -1px 3px #ff07e0, -1px 1px 3px #ff07e0, 1px 1px 3px #ff07e0;
`

const ChallengeButton = styled.img`
  padding: 10px 0;
  width: 20%;
  cursor: pointer;
  position: absolute;
  left: 40%;
  transition-duration: 300ms;
`

const Woman = styled.img`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 40%;
  transition-duration: 300ms;
`

const TextBox = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: url(${textbox}) no-repeat;
  background-size: 100% 100%;
  white-space: pre-line;
  font-size: 10pt;
  padding: 10px 30% 30px 10px;
  text-shadow: -1px -1px 2px white, 1px -1px 2px white, -1px 1px 2px white, 1px 1px 2px white;
  transition-duration: 300ms;
`

export class ChallengeScreen extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor (props) {
    super(props)
    this.state = {
      step: 0
    }
  }

  componentDidMount () {
    this.props.setLoading(false)
    setTimeout(() => { this.setState({ loaded: true }) }, 100)
  }

  nextStep () {
    this.setState({ step: this.state.step + 1 })
  }

  start () {
    if (this.state.step === 2) {
      this.setState({ loaded: false })
      setTimeout(() => this.props.router.replace('/closet'), 400)
    } else {
      this.nextStep()
    }
  }

  render () {
    const steps = [
      'イベントチャレンジへようこそ！\n あなたは憧れのセレブスタイリストだよ！\n お題とドレスコードを確認し、素敵なコーデを作ってみて',
      '各アイテムをTAPすると試着ができるよ！\n 欲しいアイテムガあれば、２TAPして、ダイヤで買ってみてね',
      '素敵なコーデを作って、チャレンジにエントリーしてみてね！\n ドレスコードは必ず守ってね！'
    ]

    return (
      <Container>
        <ChallengeHeader
          style={{
            opacity: this.state.loaded ? 1 : 0
          }}
          src={ChallengeImage}
        />
        <DescriptionBG
          style={{
            transform: this.state.loaded ? '' : 'translateX(-100%)'
          }}
        >
          <ChallengeTitle>
            イベント:ファッションブランドローンチパーティー
          </ChallengeTitle>
          お題：人気のファッションブランドのローンチパーティに招待されたモデルのコーデを作成。
          <br />
          <br />
          ドレスコード：バッグ
        </DescriptionBG>
        <ChallengeButton
          style={{
            left: this.state.loaded ? '40%' : '100%'
          }}
          src={next}
          onClick={() => this.start()}
        />
        <TextBox
          style={{
            bottom: this.state.loaded ? '0' : '-100%'
          }}
        >
          { steps[this.state.step] }
        </TextBox>
        <Woman
          style={{
            right: this.state.loaded ? '0' : '-40%'
          }}
          src={woman}
        />
      </Container>
    )
  }
}

ChallengeScreen.propTypes = {
  setLoading: React.PropTypes.func,
  router: React.PropTypes.object
}

const mapStateToProps = createStructuredSelector({
  ChallengeScreen: makeSelectChallengeScreen()
})

function mapDispatchToProps (dispatch) {
  return {
    setLoading: (load) => dispatch(setLoading(load))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeScreen)
