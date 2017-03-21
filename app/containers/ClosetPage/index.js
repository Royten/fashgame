/*
 *
 * ClosetPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import makeSelectClosetPage from './selectors';

import {
  setLoading,
} from '../App/actions';

import {
  changeTab,
  selectItem,
} from './actions';

import ModelPreview from '../../components/ModelPreview';
import Closet from '../../components/Closet';

import Dress from '../../assets/dress.png';
import Bag from '../../assets/bag.png';
import Bracelet from '../../assets/bracelet.png';
import Hair1 from '../../assets/hair1.png';
import Hair2 from '../../assets/hair2.png';
import Make1 from '../../assets/makeup1.png';
import Make2 from '../../assets/makeup2.png';
import Make3 from '../../assets/makeup3.png';
import Shoes from '../../assets/shoes2.png';
import Pants from '../../assets/pants.png';

// accessories
import PBag from '../../assets/preview_bag.png';
import PBrac from '../../assets/preview_bracelet.png';
// clothes
import PDress from '../../assets/preview_dress.png';
import PPants from '../../assets/preview_pants.png';
import PShoes from '../../assets/preview_shoes2.png';
// hair
import PHair1 from '../../assets/preview_hair1.png';
import PHair2 from '../../assets/preview_hair2.png';
// makeup
import PMake1 from '../../assets/preview_makeup1.png';
import PMake2 from '../../assets/preview_makeup2.png';
import PMake3 from '../../assets/preview_makeup3.png';


const Container = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export class ClosetPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.setLoading(true);
  }

  componentDidMount() {
    this.props.setLoading(false);
  }

  render() {
    let items;

    switch (this.props.ClosetPage.activeTab) {
      case 0:
        // clothes
        items = [
          { preview: PDress, img: Dress, type: 0 },
          { preview: PBrac, img: Bracelet, type: 0 },
          { preview: PBag, img: Bag, type: 0 },
          { preview: PShoes, img: Shoes, type: 0 },
          { preview: PPants, img: Pants, type: 0 },
        ];
        break;
      case 1:
        // hair
        items = [
          { preview: PHair1, img: Hair1, type: 1 },
          { preview: PHair2, img: Hair2, type: 1 },
        ];
        break;
      case 2:
        // makeup
        items = [
          { preview: PMake1, img: Make1, type: 2 },
          { preview: PMake2, img: Make2, type: 2 },
          { preview: PMake3, img: Make3, type: 2 },
        ];
        break;
      default:
        items = [];
    }

    return (
      <Container>
        <ModelPreview
          makeup={this.props.ClosetPage.wearables[2]}
          clothes={this.props.ClosetPage.wearables[0]}
          hair={this.props.ClosetPage.wearables[1]}
        />
        <Closet
          activeTab={this.props.ClosetPage.activeTab}
          clickTab={this.props.changeTab}
          items={items}
          selectItem={this.props.selectItem}
        />
      </Container>
    );
  }
}

ClosetPage.propTypes = {
  ClosetPage: React.PropTypes.object,
  setLoading: React.PropTypes.func,
  changeTab: React.PropTypes.func,
  selectItem: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  ClosetPage: makeSelectClosetPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    setLoading: (load) => dispatch(setLoading(load)),
    changeTab: (tab) => dispatch(changeTab(tab)),
    selectItem: (item, type) => dispatch(selectItem(item, type)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClosetPage);
