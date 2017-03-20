/**
*
* Header
*
*/

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { FaBars, FaGroup } from 'react-icons/lib/fa';

import { toggleMenu } from '../../containers/App/actions';

const HeaderBar = styled.div`
  height: 56px;
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: white;
  box-shadow: 0px 1px 10px grey;
`;

const HeaderIcon = styled.div`
  height: 100%;
  display: inline-block;
  padding: 13px;
  line-height: 0em;
  font-size: 30px;
  svg {
    cursor: pointer;
  }
`

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  clickMenu() {
    this.props.toggleMenu();
  }

  render() {
    return (
      <HeaderBar>
        <HeaderIcon><FaBars onClick={ this.clickMenu.bind(this) }/></HeaderIcon>
        <HeaderIcon><FaGroup /></HeaderIcon>
      </HeaderBar>
    );
  }
}

Header.propTypes = {
  toggleMenu: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    toggleMenu: () => dispatch(toggleMenu()),
  };
}

export default connect(null, mapDispatchToProps)(Header);
