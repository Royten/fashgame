/**
*
* VoteTransitionModal
*
*/

import React from 'react'
import styled from 'styled-components'

import ChallengeImage from '../../assets/challengescreen/challenge.jpg'
import ok from '../../assets/popupscreen/ok.png'

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

const ChallengeHeader = styled.img`
  width: 100%;
`

const ChallengeDescription = styled.div`
  color: white;
  font-weight: bold;
  margin: 10px;
  width: 100%;
  text-align: left;
  padding: 20px;
`

const ChallengeTitle = styled.div`
  font-size: 14pt;
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

class VoteTransitionModal extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  gotoVoting () {
    this.props.transition()
  }

  render () {
    return (
      <div>
        <Backdrop />
        <Modal>
          <ChallengeHeader src={ChallengeImage} />
          <ChallengeDescription>
            <ChallengeTitle>
              イベント
              <br />
              ファッションブランドローンチパーティー
            </ChallengeTitle>
              どのコーデが好き？Tapして、投票しよう！
              投票でそのコーデの点数が決まるよ
          </ChallengeDescription>
          <ModalButtons>
            <ModalButton
              src={ok}
              onClick={() => this.gotoVoting()}
            />
          </ModalButtons>
        </Modal>
      </div>
    )
  }
}

VoteTransitionModal.propTypes = {
  transition: React.PropTypes.func
}

export default VoteTransitionModal
