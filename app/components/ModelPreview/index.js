/**
 *
 * ModelPreview
 *
 */

import React from 'react';
import styled from 'styled-components';

import Img from './Img';

import Model from '../../assets/model.png';

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
    const clothes = this.props.clothes.map((img, ind) => <Img key={ind} src={img} />);
    const hair = this.props.hair.map((img, ind) => <Img key={ind} src={img} />);
    return (
      <Container>
        <Img src={Model} />
        { makeup }
        { clothes }
        { hair }
      </Container>
    );
  }
}

ModelPreview.propTypes = {
  makeup: React.PropTypes.array,
  clothes: React.PropTypes.array,
  hair: React.PropTypes.array,
};

export default ModelPreview;
