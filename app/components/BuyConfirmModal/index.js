/**
*
* BuyConfirmModal
*
*/

import React from 'react'
import styled from 'styled-components'

import Gem from '../../assets/gem.png'

import buy from '../../assets/popupscreen/buy.png'
import remove from '../../assets/popupscreen/remove.png'

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

const Confirm = styled.div`
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

const Dialog = styled.div`
  width: 100%;
  padding: 20px;
  text-align: center;
  color: white;
  font-weight: bold;
`

const ModalButton = styled.img`
  display: inline-block;
  margin: 0 20px;
  width: 75px;
  filter: drop-shadow(0px 0px 8px white);
  -webkit-filter: drop-shadow(0px 0px 8px white);
`

const Buttons = styled.div`
  text-align: center;
  margin: 20px
`

const ItemInfo = styled.div`
  text-align: center;
  color: white;
  font-weight: bold;
`

const Details = styled.div`
  display: inline-block;
  vertical-align: top;
`

const Name = styled.div`
`

const Price = styled.div`
  color: white;
`

const Image = styled.img`
  height: 50px;
  display: inline-block;
  vertical-align: top;
`

const GemIcon = styled.img`
  height: 20px;
  margin: 0 5px;
`

class BuyConfirmModal extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div>
        <Backdrop />
        <Confirm>
          <Dialog>
            {this.props.dialog}
          </Dialog>
          <ItemInfo>
            <Details>
              <Name>
                {this.props.item.name}
              </Name>
              <Price>
                <GemIcon src={Gem} />
                {this.props.item.price}
              </Price>
            </Details>
            <Image
              src={this.props.item.preview}
            />
          </ItemInfo>
          <Buttons>
            <ModalButton
              src={buy}
              onClick={() => this.props.buyItem(true)}
            />
            <ModalButton
              src={remove}
              onClick={() => this.props.buyItem(false)}
            />
          </Buttons>
        </Confirm>
      </div>
    )
  }
}

BuyConfirmModal.propTypes = {
  item: React.PropTypes.object,
  buyItem: React.PropTypes.func,
  dialog: React.PropTypes.string
}

export default BuyConfirmModal
