/**
 *
 * ModelPreview
 *
 */

import React from 'react'
import styled from 'styled-components'

import Img from './Img'

import Model from '../../assets/stylescreen/model_guide.png'
import background from '../../assets/stylescreen/model_bg.png'
import Bra from '../../assets/stylescreen/bra.png'

const Container = styled.div`
  height: 100%;
  width: 50%;
  position: relative;
  background-color: #EEEBDE;
  background: url(${background});
  background-size: cover;
  display: inline-block;
  text-align: center;
  transition-duration: 500ms;
`

class ModelPreview extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    const makeup = this.props.outfit.filter((e) => e.type === 1).map((e, ind) => <Img key={ind} src={e.img} />)
    const hair = this.props.outfit.filter((e) => e.type === 9).map((e, ind) => <Img key={ind} src={e.img} />)
    const tops = this.props.outfit.filter((e) => e.type === 2).map((e, ind) => <Img key={ind} src={e.img} />)
    const bottoms = this.props.outfit.filter((e) => e.type === 3).map((e, ind) => <Img key={ind} src={e.img} />)
    const dresses = this.props.outfit.filter((e) => e.type === 4).map((e, ind) => <Img key={ind} src={e.img} />)
    const coats = this.props.outfit.filter((e) => e.type === 5).map((e, ind) => <Img key={ind} src={e.img} />)
    const shoes = this.props.outfit.filter((e) => e.type === 6).map((e, ind) => <Img key={ind} src={e.img} />)
    const jewellery = this.props.outfit.filter((e) => e.type === 7).map((e, ind) => <Img key={ind} src={e.img} />)
    const accessories = this.props.outfit.filter((e) => e.type === 8).map((e, ind) => <Img key={ind} src={e.img} />)
    const stockings = this.props.outfit.filter((e) => e.type === 10).map((e, ind) => <Img key={ind} src={e.img} />)
    return (
      <Container
        {...(this.props.loaded === false && { style: { opacity: '0' } })}
      >
        { accessories }
        <Img
          src={Model}
        />
        { makeup }
        { stockings }
        { dresses.length === 0 && tops.length === 0 ? <Img src={Bra} /> : [] }
        { bottoms }
        { shoes }
        { dresses }
        { tops }
        { jewellery }
        { coats }
        { hair }
      </Container>
    )
  }
}

ModelPreview.propTypes = {
  loaded: React.PropTypes.bool,
  outfit: React.PropTypes.array
}

export default ModelPreview
