/*
 *
 * VotingScreen
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import styled, { keyframes } from 'styled-components'

import {
  setLoading
} from '../App/actions'

import model from '../../assets/kari_votingmodel.png'
import star from '../../assets/star.png'
import bg from '../../assets/stylescreen/model_bg.png'
import ok from '../../assets/popupscreen/ok.png'

const Left = styled.div`
  background: url(${bg}) no-repeat;
  background-size: 100% 100%;
  float: left;
  width: 50%;
  height: 100%;
  border-right: 1px solid red;
`

const Right = styled.div`
  background: url(${bg}) no-repeat;
  background-size: 100% 100%;
  float: left;
  width: 50%;
  height: 100%;
  border-left: 1px solid red;
`

const Img = styled.img`
  height: 75%;
  margin: 12.5%;
`

const Tip = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  background: orange;
  color: white;
  word-wrap: break-word;
  word-break: keep-all;
  padding: 5px;
`

const Star = styled.img`
  position: absolute;
  top: 50%;
  width: 25%;
  transform: translate(-50%, -50%);
  display: none;
`

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999;
  background-color: black;
  opacity: 0.7;
`

const Modal = styled.div`
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.75), inset 0 7px 7px 0px rgba(255,255,255,0.7), inset 0 -7px 7px 0px rgba(255,255,255,0.7);
  text-align: center;
  min-width: 300px;
  padding: 10px;
  position: absolute;
  z-index: 1000000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(242, 164, 197, 0.8);
  border: 4px solid #f49ac1;
  border-radius: 27px;
`

const ModalMessage = styled.div`
  margin: 10px;
  word-wrap: break-word;
  word-break: keep-all;
  color: white;
  font-weight: bold;
`

const ModalButtons = styled.div`
  margin: 10px;
`

const ModalButton = styled.img`
  display: inline-block;
  margin: 0 20px;
  width: 75px;
  filter: drop-shadow(0px 0px 8px white);
  -webkit-filter: drop-shadow(0px 0px 8px white);
`

export class VotingScreen extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor (props) {
    super(props)

    this.state = {
      round: 1,
      winner: null
    }
  }

  componentDidMount () {
    this.props.setLoading(false)
  }

  vote (side) {
    if (this.state.winner !== null) {
      clearTimeout(this.to)
      return this.nextRound()
    }

    console.log(`Round: ${this.state.round}, model: ${side}`)

    if (side === 0) {
      this.left = 0.6
      this.right = 0.1
    } else {
      this.left = 0.1
      this.right = 0.6
    }

    this.setState({
      winner: side,
      left: this.left,
      right: this.right
    })

    this.to = setTimeout(() => {
      this.nextRound()
    }, 3000)
  }

  nextRound () {
    if (this.state.round === 3) {
      this.setState({
        votingover: true
      })
      return
    }

    this.setState({
      winner: null,
      round: this.state.round + 1,
      left: 1,
      right: 1
    })
  }

  render () {
    return (
      <div style={{height: '100%', background: 'black'}}>
        <Left style={{ opacity: this.state.left || 1 }} onClick={() => this.vote(0)}>
          <Img src={model} />
        </Left>
        <Right style={{ opacity: this.state.right || 1 }} onClick={() => this.vote(1)}>
          <Img src={model} />
        </Right>
        <Star
          style={{
            display: this.state.winner !== null ? 'block' : 'none',
            left: this.state.winner ? '75%' : '25%'
          }}
          src={star}
      />
        <Tip>
          好きなコーデをTAPしてね！
          <wbr />
          投票の結果でコーデの点数が決まるよ
        </Tip>
        {
          this.state.votingover
            ? <div>
              <Backdrop />
              <Modal>
                <ModalMessage>
                    投票はこれで終了！
                    <wbr />
                    あなたのコーデのスコアは気になる？
                    <wbr />
                    チャレンジの結果が出たからチェックしてね！
                  </ModalMessage>
                <ModalButtons>
                  <ModalButton
                    src={ok}
                    onClick={() => this.props.router.replace('/result')}
                    />
                </ModalButtons>
              </Modal>
            </div>
            : ''
        }
      </div>
    )
  }
}

VotingScreen.propTypes = {
  setLoading: React.PropTypes.func,
  router: React.PropTypes.object
}

function mapDispatchToProps (dispatch) {
  return {
    setLoading: (load) => dispatch(setLoading(load))
  }
}

export default connect(null, mapDispatchToProps)(VotingScreen)
