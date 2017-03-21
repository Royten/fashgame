/**
*
* Closet
*
*/

import React from 'react';
import styled from 'styled-components';

import CT from '../../assets/tab_icon1.png';
import HT from '../../assets/tab_icon2.png';
import MT from '../../assets/tab_icon3.png';
import ST from '../../assets/tab_icon4.png';

const Container = styled.div`
  height: 100%;
  position: absolute;
  width: 50%;
  top: 0;
  right: 0;
`;

const Nav = styled.div`
  width: 100%;
`;

const Tabs = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Tab = styled.li`
  display: inline-block;
  opacity: ${(props) => props.active ? '1' : '0.5'};
  width: 25%;
  ${(props) => props.disabled ? '' : 'cursor: pointer;'}
  color: ${(props) => props.disabled ? 'grey' : 'black'}
  &:hover {
    background-color: lightgrey;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Items = styled.div`
  height: 100%;
  background-color: black;
`;

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ItemListItem = styled.li`
  cursor: pointer;
  padding: 3%;
  display: inline-block;
  width: 50%;
  text-align: center;
`;

const ItemImg = styled.img`
  margin: auto;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

class Closet extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const tabs = [
      { id: 'clothes_tab', img: CT },
      { id: 'hair_tab', img: HT },
      { id: 'makeup_tab', img: MT },
      { id: 'skin_tab', img: ST, disabled: true },
    ];

    const tabjsx = tabs.map((tab, index) =>
      <Tab
        key={index}
        disabled={tab.disabled}
        active={this.props.activeTab === index}
        onClick={() => this.props.clickTab(index)}
      >
        <Img src={tab.img} />
      </Tab>
    );

    const itemsjsx = this.props.items.map((item, index) =>
      <ItemListItem
        key={index}
        onClick={() => this.props.selectItem(item.img, item.type)}
      >
        <ItemImg src={item.preview} />
      </ItemListItem>
    );

    return (
      <Container>
        <Nav>
          <Tabs>
            { tabjsx }
          </Tabs>
        </Nav>
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
  activeTab: React.PropTypes.number,
};

export default Closet;
