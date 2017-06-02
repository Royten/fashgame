/**
 *
 * ModelPreview
 *
 */

import React from 'react';
import styled from 'styled-components';

import Img from './Img';

import Model from '../../assets/stylescreen/model_guide.png';
import Bra from '../../assets/stylescreen/bra.png';

const Container = styled.div`
  height: 100%;
  width: 50%;
  position: relative;
  background-color: white;
  display: inline-block;
`;

class ModelPreview extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const makeup = this.props.makeup.map((img, ind) => <Img key={ind} src={img} />);
    const hair = this.props.hair.map((img, ind) => <Img key={ind} src={img} />);
    const tops = this.props.tops.map((img, ind) => <Img key={ind} src={img} />);
    const bottoms = this.props.bottoms.map((img, ind) => <Img key={ind} src={img} />);
    const dresses = this.props.dresses.map((img, ind) => <Img key={ind} src={img} />);
    const coats = this.props.coats.map((img, ind) => <Img key={ind} src={img} />);
    const shoes = this.props.shoes.map((img, ind) => <Img key={ind} src={img} />);
    const jewellery = this.props.jewellery.map((img, ind) => <Img key={ind} src={img} />);
    const accessories = this.props.accessories.map((img, ind) => <Img key={ind} src={img} />);
    return (
      <Container>
        { accessories }
        <Img src={Model} />
        { makeup }
        { dresses.length === 0 && tops.length === 0 ? <Img src={Bra} /> : [] }
        { bottoms }
        { shoes }
        { dresses }
        { tops }
        { jewellery }
        { coats }
        { hair }
      </Container>
    );
  }
}

ModelPreview.propTypes = {
  makeup: React.PropTypes.array,
  tops: React.PropTypes.array,
  bottoms: React.PropTypes.array,
  dresses: React.PropTypes.array,
  coats: React.PropTypes.array,
  shoes: React.PropTypes.array,
  jewellery: React.PropTypes.array,
  accessories: React.PropTypes.array,
  hair: React.PropTypes.array,
};

export default ModelPreview;
