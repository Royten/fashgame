/**
*
* Closet
*
*/

import React from 'react'
import styled from 'styled-components'

import IconHair from '../../assets/stylescreen/categories_01.png'
import IconTops from '../../assets/stylescreen/categories_02.png'
import IconBott from '../../assets/stylescreen/categories_03.png'
import IconDres from '../../assets/stylescreen/categories_04.png'
import IconCoat from '../../assets/stylescreen/categories_05.png'
import IconShoe from '../../assets/stylescreen/categories_06.png'
import IconJewl from '../../assets/stylescreen/categories_07.png'
import IconAccs from '../../assets/stylescreen/categories_08.png'

import BackButton from '../../assets/stylescreen/back.png'
import Gem from '../../assets/gem.png'
import background from '../../assets/stylescreen/closet_bg.png'
import itembutton from '../../assets/stylescreen/bottom_button02.png'

const menu = [
  IconHair,
  IconTops,
  IconBott,
  IconDres,
  IconCoat,
  IconShoe,
  IconJewl,
  IconAccs
]

const Container = styled.div`
  height: 100%;
  position: absolute;
  width: 50%;
  top: 0;
  right: 0;
  background: url(${background});
  background-size: cover;
  transition-duration: 500ms;
`

const Menu = styled.div`
  padding-top: 5%;
  text-align: right;
`

const MenuItem = styled.img`
  width: 70%;
  margin: 3%;
  cursor: pointer;
`

const Items = styled.div`
  clear: both;
  height: 100%;
  overflow-y: scroll;
`

const ItemList = styled.ul`
  list-style: none;
  padding: 20px 0 100px 0;
  text-align: right;
  margin: 0;
`

const ItemListItem = styled.li`
  cursor: pointer;
  padding: 3%;
  display: inline-block;
  width: 70%;
  margin: 3%;
  text-align: center;
  color: #773B19;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.8);
  border: 4px solid #f49ac1;
  border-radius: 27px;
  box-shadow: 0px 5px 5px grey;
`

const ItemImg = styled.img`
  height: 100%;
  margin: auto;
  opacity: 0.8;
`

const ItemName = styled.div``

const ItemPrice = styled.div``

const Back = styled.img`
  max-width: 100px;
  float: right;
  margin: 10px;
`

const BottomButton = styled.img`
  width: 50%;
  cursor: pointer;
  margin-top: 5%;
`

const GemIcon = styled.img`
  height: 20px;
  margin: 0 5px;
`

class Closet extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render () {
    if (this.props.activeTab === 0) {
      const menujsx = menu.map((item, index) =>
        <MenuItem
          src={item}
          key={index}
          onClick={() => this.props.clickTab(index + 1)}
        />
      )

      return (
        <Container
          {...(this.props.loaded === false && { style: { opacity: '0' } })}
        >
          <Menu>
            { menujsx }
            <BottomButton
              src={itembutton}
              onClick={() => this.props.clickTab(99)}
            />
          </Menu>
        </Container>
      )
    }

    const itemsjsx = this.props.items.map((item, index) => {
      let price

      if (item.price > 0) {
        const itemprice = (<div><GemIcon src={Gem} /> <span>{item.price}</span></div>)
        price = <ItemPrice>{this.props.ownedItems.some((e) => e.name === item.name) ? 'OWNED' : itemprice }</ItemPrice>
      }

      return (
        <ItemListItem
          {...(this.props.outfit.some(e => e.name === item.name) && { style: { background: 'lightblue', border: '4px solid blue' } })}
          key={index}
          onClick={() => this.props.selectItem(item)}
        >
          <ItemImg src={item.preview} />
          <ItemName>{item.name}</ItemName>
          {price}
        </ItemListItem>
      )
    })

    return (
      <Container
        {...(this.props.loaded === false && { style: { opacity: '0' } })}
      >
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
    )
  }
}

Closet.propTypes = {
  clickTab: React.PropTypes.func,
  selectItem: React.PropTypes.func,
  items: React.PropTypes.array,
  ownedItems: React.PropTypes.array,
  activeTab: React.PropTypes.number,
  outfir: React.PropTypes.array,
  loaded: React.PropTypes.bool
}

export default Closet
