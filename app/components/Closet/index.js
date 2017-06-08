/**
*
* Closet
*
*/

import React from 'react';
import styled from 'styled-components';

import IconHair from '../../assets/stylescreen/01.png';
import IconTops from '../../assets/stylescreen/02.png';
import IconBott from '../../assets/stylescreen/03.png';
import IconDres from '../../assets/stylescreen/04.png';
import IconCoat from '../../assets/stylescreen/05.png';
import IconShoe from '../../assets/stylescreen/06.png';
import IconJewl from '../../assets/stylescreen/07.png';
import IconAccs from '../../assets/stylescreen/08.png';

import BackButton from '../../assets/stylescreen/back.png';

const menu = [
  {
    icon: IconHair,
    text: 'ヘア＆メイク',
  },
  {
    icon: IconTops,
    text: 'トップス',
  },
  {
    icon: IconBott,
    text: 'ボトムス',
  },
  {
    icon: IconDres,
    text: 'ワンピース',
  },
  {
    icon: IconCoat,
    text: 'アウター',
  },
  {
    icon: IconShoe,
    text: '靴',
  },
  {
    icon: IconJewl,
    text: 'ジュエリー',
  },
  {
    icon: IconAccs,
    text: 'アクセサリー',
  },
];

const Container = styled.div`
  height: 100%;
  position: absolute;
  background-color: white;
  width: 50%;
  top: 0;
  right: 0;
`;

const Menu = styled.div`
`;

const MenuImg = styled.img`
  height: 100%;
  float: left;
  margin-right: 10px;
`;

const MenuItem = styled.div`
  height: 10vh;
  margin: 5px 0 5px 10px;
  &:active {
    opacity: 0.5;
  }
`;

const MenuLabel = styled.div`
  padding-top: 10%;
`;

const Items = styled.div`
  clear: both;
  height: 100%;
  overflow-y: scroll;
`;

const ItemList = styled.ul`
  list-style: none;
  padding: 20px 0 100px 0;
  margin: 0;
`;

const ItemListItem = styled.li`
  cursor: pointer;
  padding: 3%;
  display: inline-block;
  width: 100%;
  height: 20vh;
  text-align: center;
`;

const ItemImg = styled.img`
  height: 100%;
  margin: auto;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

const ItemName = styled.div``;

const ItemPrice = styled.div``;

const Back = styled.img`
  max-width: 100px;
  float: right;
  margin: 10px;
`;

const BottomButton = styled.button`
  width: 40%;
  border: 2px solid black;
  margin: 5px;
  cursor: pointer;
  height: 8%;
  white-space: pre-line;
`;
class Closet extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    if (this.props.activeTab === 0) {
      const menujsx = menu.map((item, index) =>
        <MenuItem
          key={index}
          onClick={() => this.props.clickTab(index + 1)}
        >
          <MenuImg src={item.icon} />
          <MenuLabel>{item.text}</MenuLabel>
        </MenuItem>
      );

      return (
        <Container>
          <Menu>
            { menujsx }
          </Menu>
          <BottomButton>
            ドレス
            コード
          </BottomButton>
          <BottomButton
            onClick={() => this.props.clickTab(99)}
          >
            使用中
            アイテム
          </BottomButton>
        </Container>
      );
    }

    const itemsjsx = this.props.items.map((item, index) => {
      let price;

      if (item.price > 0) {
        price = <ItemPrice>{this.props.ownedItems.some((e) => e.name === item.name) ? 'OWNED' : item.price}</ItemPrice>;
      }

      return (
        <ItemListItem
          key={index}
          onClick={() => this.props.selectItem(item)}
        >
          <ItemImg src={item.preview} />
          <ItemName>{item.name}</ItemName>
          {price}
        </ItemListItem>
      );
    });

    return (
      <Container>
        <Back
          src={BackButton}
          onClick={() => this.props.clickTab(0)}
        />
        <Items>
          <ItemList>
            { itemsjsx }
          </ItemList>
        </Items>
      </Container>
    );
  }
}

Closet.propTypes = {
  clickTab: React.PropTypes.func,
  selectItem: React.PropTypes.func,
  items: React.PropTypes.array,
  ownedItems: React.PropTypes.array,
  activeTab: React.PropTypes.number,
};

export default Closet;
