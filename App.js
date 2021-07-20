import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';
import Card from './components/Card';

export default class App extends React.Component {
  render(){
  return (
    <Container>
    <TitleBar>
    <Avatar source={require('./assets/adaptive-icon.png')}/>
      <Title>Welcome back!,</Title>
      <Name>Sergio</Name>
      </TitleBar>
      <Subtitle>Continue Learning</Subtitle>
      <Card />
      <StatusBar style="auto" />
    </Container>
  );
 }
}


const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;
const Container = styled.View`
  flex: 1;
  background-color: lightblue;
`;
const Title =styled.Text`
  font-size: 16px;
  color: purple;
  font-weight: 500;
`;
const Name=styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;
const TitleBar=styled.View`
  width: 100%;
  margin-top:50px;
  padding-left:20px;
  padding-left: 80px;
  `;