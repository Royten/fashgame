/**
*
* BuyConfirmModal
*
*/

import React from 'react';
import styled from 'styled-components';

import Gem from '../../assets/gem.png';

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999;
  background-color: black;
  opacity: 0.7;
`;

const Confirm = styled.div`
  min-width: 300px;
  padding: 10px;
  position: absolute;
  z-index: 1000000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
`;

const Dialog = styled.div`
  width: 100%;
  padding: 20px;
  text-align: center;
`;

const ConfirmButton = styled.div`
  padding: 10px;
  background-color: green;
  color: white;
  display: inline-block;
  margin: 0 20px;
  width: 75px;
  text-align: center;
`;

const RejectButton = styled.div`
  padding: 10px;
  background-color: red;
  color: white;
  display: inline-block;
  margin: 0 20px;
  width: 75px;
  text-align: center;
`;

const Buttons = styled.div`
  text-align: center;
  margin: 20px
`;

const ItemInfo = styled.div`
  text-align: center;
`;

const Details = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const Name = styled.div`
`;

const Price = styled.div`
`;

const Image = styled.img`
  height: 50px;
  display: inline-block;
  vertical-align: top;
`;

const GemIcon = styled.img`
  height: 20px;
  margin: 0 5px;
`;

class BuyConfirmModal extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
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
            <ConfirmButton
              onClick={() => this.props.buyItem(true)}
            >
              YES
            </ConfirmButton>
            <RejectButton
              onClick={() => this.props.buyItem(false)}
            >
              NO
            </RejectButton>
          </Buttons>
        </Confirm>
      </div>
    );
  }
}

BuyConfirmModal.propTypes = {
  item: React.PropTypes.object,
  buyItem: React.PropTypes.func,
  dialog: React.PropTypes.string,
};

export default BuyConfirmModal;
