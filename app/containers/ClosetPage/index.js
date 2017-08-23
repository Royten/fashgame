/*
 *
 * ClosetPage
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import styled from 'styled-components'

import makeSelectClosetPage from './selectors'

import {
  setLoading
} from '../App/actions'

import {
  changeTab,
  selectItem,
  buyItem
} from './actions'

import ModelPreview from '../../components/ModelPreview'
import Closet from '../../components/Closet'
import BuyConfirmModal from '../../components/BuyConfirmModal'
import VoteTransitionModal from '../../components/VoteTransitionModal'

import Gem from '../../assets/gem.png'
import entry from '../../assets/stylescreen/entry_button.png'
import currency from '../../assets/stylescreen/currency_gauge.png'

import yes from '../../assets/popupscreen/pop_up_yes.png'
import no from '../../assets/popupscreen/pop_up_no.png'
import ok from '../../assets/popupscreen/ok.png'

const Container = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: #EEEBDE;
`

const Balance = styled.div`
  width: 20%;
  position: absolute;
  top: 0;
  left: 0;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
`

const GemIcon = styled.img`
  height: 20px;
  margin: 0 5px;
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
  color: white;
  font-weight: bold;
  margin: 10px;
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

const Enter = styled.img`
  position: fixed;
  width: 20%;
  bottom: 10%;
  left: 0;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
`

const Currency = styled.img`
  width: 100%;
  position: relative;
`

export class ClosetPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor (props) {
    super(props)
    this.state = {
      buypopup: false,
      item: null,
      loaded: false
    }
  }

  componentWillMount () {
    this.props.setLoading(true)
  }

  componentDidMount () {
    this.props.setLoading(false)
    setTimeout(() => { this.setState({ loaded: true }) }, 100)
  }

  selectItem (item) {
    if (item.price > 0 && this.props.ClosetPage.currentItems.some((e) => e.name === item.name) && this.props.ClosetPage.boughtItems.every((e) => e.name !== item.name)) {
      if (this.props.ClosetPage.balance >= item.price) {
        this.setState({ buypopup: true, item })
      } else {
        this.props.selectItem(item)
      }
    } else {
      this.props.selectItem(item)
    }
  }

  buyItem (confirm) {
    if (confirm) {
      this.props.buyItem(this.state.item)
    } else {
      this.props.selectItem(this.state.item)
    }
    this.setState({ buypopup: false, item: null })
  }

  confirmEntry () {
    this.setState({ confirmenter: true })
  }

  buyandenter (buy) {
    if (buy) {
      this.state.notbought.forEach(i => {
        this.props.buyItem(i)
      })
      this.setState({ challengeentered: true })
    }
    this.setState({ paypopup: false })
  }

  enter (enter) {
    if (enter) {
      if (this.props.ClosetPage.currentItems.some(e => e.type === 8)) {
        // TODO save chosen outfit
        let notbought = []
        let price = 0

        this.props.ClosetPage.currentItems.forEach(i => {
          if (this.props.ClosetPage.boughtItems.every(b => b.name !== i.name) && i.price > 0) {
            notbought.push(i)
            price += i.price
          }
        })

        if (notbought.length > 0) {
          // TODO pay popup
          this.setState({ paypopup: true, notbought, price})
        } else {
          this.setState({ challengeentered: true })
        }
      } else {
        this.setState({ challengenotmet: true })
      }
    }
    this.setState({ confirmenter: false })
  }

  goToVoting () {
    this.setState({ enterpopup: false, loaded: false })
    setTimeout(() => this.props.router.replace('/voting'), 500)
  }

  render () {
    const balance = this.props.ClosetPage.balance
    const items = this.props.ClosetPage.activeTab === 99 ? this.props.ClosetPage.currentItems : this.props.ClosetPage.items[this.props.ClosetPage.activeTab]

    return (
      <Container>
        <ModelPreview
          loaded={this.state.loaded}
          outfit={this.props.ClosetPage.currentItems}
        />
        <Closet
          loaded={this.state.loaded}
          eventpopup={() => this.setState({ eventpopup: true })}
          activeTab={this.props.ClosetPage.activeTab}
          clickTab={this.props.changeTab}
          items={items}
          outfit={this.props.ClosetPage.currentItems}
          ownedItems={this.props.ClosetPage.boughtItems}
          selectItem={item => this.selectItem(item)}
        />
        {
          this.state.buypopup
            ? <BuyConfirmModal
              item={this.state.item}
              buyItem={confirm => this.buyItem(confirm)}
              dialog='このアイテムを購入しますか？'
            />
            : ''
        }
        {
          this.state.enterpopup
            ? <VoteTransitionModal
              transition={() => this.goToVoting()}
              />
            : ''
        }
        {
          this.state.confirmenter
            ? <div>
              <Backdrop />
              <Modal>
                <ModalMessage>
                    このコーデでエントリーする？
                  </ModalMessage>
                <ModalButtons>
                  <ModalButton
                    src={yes}
                    onClick={() => this.enter(true)}
                      />
                  <ModalButton
                    src={no}
                    onClick={() => this.enter(false)}
                      />
                </ModalButtons>
              </Modal>
            </div>
            : ''
        }
        {
          this.state.paypopup
            ? <div>
              <Backdrop />
              <Modal>
                <ModalMessage>
                  試着中のアイテムを購入して、エントリーする？
                  </ModalMessage>
                <ModalMessage>
                  <GemIcon src={Gem} />
                  <span>{this.state.price}</span>
                </ModalMessage>
                <ModalButtons>
                  <ModalButton
                    src={yes}
                    onClick={() => this.buyandenter(true)}
                    />
                  <ModalButton
                    src={no}
                    onClick={() => this.buyandenter(false)}
                    />
                </ModalButtons>
              </Modal>
            </div>
            : ''
        }
        {
          this.state.challengenotmet
            ? <div>
              <Backdrop />
              <Modal>
                <ModalMessage>
                    このコーデはドレスコードを満たしていないよ. 条件を確認して、もう一度トライしてみてね
                  </ModalMessage>
                <ModalButtons>
                  <ModalButton
                    src={ok}
                    onClick={() => this.setState({ challengenotmet: false, eventpopup: true })}
                    />
                </ModalButtons>
              </Modal>
            </div>
            : ''
        }
        {
          this.state.challengeentered
            ? <div>
              <Backdrop />
              <Modal>
                <ModalMessage>
                    OK! チャレンジの結果が出るまでしばらく待ってね！ その間、他のスタイリストのコーデに投票してみよう!
                  </ModalMessage>
                <ModalButtons>
                  <ModalButton
                    src={ok}
                    onClick={() => this.setState({ challengeentered: false, enterpopup: true })}
                    />
                </ModalButtons>
              </Modal>
            </div>
            : ''
        }
        <Enter
          {...(this.state.loaded === false && { style: { left: '-20%' } })}
          src={entry}
          onClick={() => this.confirmEntry()} />
        <Balance
          {...(this.state.loaded === false && { style: { top: '-20%' } })}
        >
          <Currency src={currency} />
          <span style={{
            textAlign: 'right',
            fontSize: '2.8vw',
            position: 'absolute',
            top: '27%',
            right: '35%'
          }}>{ balance }</span>
        </Balance>
      </Container>
    )
  }
}

ClosetPage.propTypes = {
  ClosetPage: React.PropTypes.object,
  setLoading: React.PropTypes.func,
  changeTab: React.PropTypes.func,
  selectItem: React.PropTypes.func,
  buyItem: React.PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  ClosetPage: makeSelectClosetPage()
})

function mapDispatchToProps (dispatch) {
  return {
    setLoading: load => dispatch(setLoading(load)),
    changeTab: tab => dispatch(changeTab(tab)),
    selectItem: item => dispatch(selectItem(item)),
    buyItem: item => dispatch(buyItem(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClosetPage)
