import React, {Component} from 'react'
import styled from 'styled-components'

import BusCard from '../components/bus'
import Footer from '../components/footer'

const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  background: url(${props => props.src}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

const SubInformation = styled.div`
  padding: 15px 20px;
  width: calc(100% - 40px);
  color: white;
  background: rgba(0,0,0,0.5);
  font-size: 18px;
  margin-top: -57px;
  font-family: 'Kanit', sans-serif;
`

const Heading = styled.h1`
  margin: 0;
  font-family: 'Kanit', sans-serif;
  padding: 15px 20px;
  padding-top: 23px;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
`

const PlaceDescription = styled.span`
  display: block;
  color: #aaa;
  font-family: 'Kanit', sans-serif;
  padding: 15px 20px;
  padding-top: 0;
  margin-top: -10px;
  font-size: 18px;
`

export default class extends Component {
  render(){
    return (
      <div>
        <ImageContainer src='https://i.ytimg.com/vi/_J-ZlvlVbZo/maxresdefault.jpg'/>
        <SubInformation><i className="zmdi zmdi-pin"></i> ตอนนี้คุณอยู่ที่</SubInformation>
        <Heading>Faculty of Engineering อาคารชูชาติ กำภู</Heading>
        <PlaceDescription>อาคารสนับสนุนและอำนวยการ</PlaceDescription>
        <BusCard>
          Whate efer
        </BusCard>
        <BusCard>
          Whate efer
        </BusCard>
        <BusCard>
          Whate efer
        </BusCard>
        <BusCard>
          Whate efer
        </BusCard>
        <br/>
        <br/>
        <br/>
        <Footer />
      </div>
    )
  }
}
