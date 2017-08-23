/*
 *
 * ResultScreen
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import styled from 'styled-components'

import makeSelectClosetPage from '../ClosetPage/selectors'

import {
  setLoading
} from '../App/actions'

import {
  selectItem
} from '../ClosetPage/actions'

import ModelPreview from '../../components/ModelPreview'

import star from '../../assets/star.png'

const Container = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
`

const Results = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  background: white;
  text-align: right;
  background: url(${closet});
  background-size: 100% 100%;
`

const Header = styled.img`
  width: 76%;
`

const ScoreTitle = styled.div`
  position: absolute;
  font-size: 3vw;
  margin-top: -4.3em;
  width: 76%;
  right: 3%;
`

const ScoreStars = styled.div`
  font-size: 3vw;
  margin-top: -3em;
  position: absolute;
  width: 76%;
  right: 0;
`

const ScoreText = styled.img`
  width: 76%;
`

const Star = styled.img`
  width: 20%;
  display: inline-block;
  vertical-align: top;
`

const HalfStar = styled.div`
  width: 20%;
  overflow: hidden;
  display: inline-block;
  vertical-align: top;
`

const PrizeText = styled.div`
  padding: 1.5em 0 0.1em 0;
  display: inline-block;
  width: 76%;
  background: url(${prizeget});
  background-size: 100% 100%;
  text-align: center;
`

const PrizeFrameDiv = styled.div`
  display: inline-block;
  width: 76%;
  text-align: center;
  position: relative;
  margin-bottom: 10px;
`

const PrizeFrame = styled.img`
  top: 0;
  width: 100%;
  position: absolute;
  left: 0;
`

const PrizeImg = styled.img`
  position: relative;
  width: 75%;
`

const Button = styled.div`
  padding: 10px;
  width: 76%;
  background-color: rgba(128,128,128,0.8);
  color: black;
  text-shadow: -1px -1px 2px white, 1px -1px 2px white, -1px 1px 2px white, 1px 1px 2px white;
  display: inline-block;
  margin: 5px 0 0 0;
  text-align: center;
  font-size: 0.5em;
`

import prizes from '../ClosetPage/fakedata'

import closet from '../../assets/stylescreen/closet_bg.png'
import header from '../../assets/resultscreen/header.png'
import points from '../../assets/resultscreen/points.png'
import prizeget from '../../assets/resultscreen/prizeget.png'
import prizeframe from '../../assets/resultscreen/prizeframe.png'
import stargold from '../../assets/resultscreen/star_gold.png'
import stargrey from '../../assets/resultscreen/star_grey.png'

const prize = prizes[1][8]

export class ResultScreen extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    this.props.setLoading(true)
  }

  componentDidMount () {
    this.props.setLoading(false)
    setTimeout(() => { this.setState({ loaded: true }) }, 100)
  }

  backToCloset () {
    this.tryPrize()
    this.props.router.replace('/closet')
  }

  tryPrize () {
    if (this.props.ClosetPage.currentItems.some((e) => e.name === prize.name)) return
    this.props.selectItem(prize)
  }

  render () {
    return (
      <Container>
        <ModelPreview
          outfit={this.props.ClosetPage.currentItems}
        />
        <Results>
          <Header src={header} />
          <ScoreTitle>
            あなたのコーデのスコアは
          </ScoreTitle>
          <ScoreStars>
            <Star src={stargold} />
            <Star src={stargold} />
            <Star src={stargold} />
            <Star src={stargold} />
            <Star src={stargrey} />
          </ScoreStars>
          <ScoreText src={points} />
          <PrizeText>
            報酬ゲット!
          </PrizeText>
          <PrizeFrameDiv>
            <PrizeImg src={prize.preview} />
            <PrizeFrame src={prizeframe} />
          </PrizeFrameDiv>
          <Button
            onClick={() => this.tryPrize()}
          >
            今すぐ試着
          </Button>
          <Button
            onClick={() => this.backToCloset()}
          >
            このアイテムでコーデを作成
          </Button>
        </Results>
      </Container>
    )
  }
}

ResultScreen.propTypes = {
  ClosetPage: React.PropTypes.object,
  setLoading: React.PropTypes.func,
  selectItem: React.PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  ClosetPage: makeSelectClosetPage()
})

function mapDispatchToProps (dispatch) {
  return {
    setLoading: load => dispatch(setLoading(load)),
    selectItem: item => dispatch(selectItem(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultScreen)
