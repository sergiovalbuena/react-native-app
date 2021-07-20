import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import Card from './components/Card';
import { Ionicons } from '@expo/vector-icons';
import Logo from './components/Logo';

export default class App extends React.Component {
  render(){
  return (
    <Container>
    <SafeAreaView>
    <ScrollView style={{height: "100%"}}>
    <TitleBar>
    <Avatar source={require('./assets/adaptive-icon.png')}/>
      <Title>Welcome back!,</Title>
      <Name>Sergio</Name>
      <Ionicons 
      name="heart" 
      size={30} 
      color="#4775f2" 
      style={{
        position: "absolute",
        right: 20, 
        top: 5
      }}  
      />
      </TitleBar>
      <ScrollView 
      style={{
        flexDirection: "row", 
        padding: 20, 
        paddingLeft: 12,
        paddingTop: 30
        }} horizontal={true}>
      <Logo
      image={require("./assets/favicon.png")}
      text="Framer X"
      />
      <Logo
      image={require("./assets/favicon.png")}
      text="Figma"
      />
      </ScrollView>
      <Subtitle>Continue Learning</Subtitle>
      <ScrollView horizontal={true} 
      style={{ paddingBottom: 30 }}
      showsHorizontalScrollIndicator={false}
      >
      <Card 
        title="Styled Components"
        image={require("./assets/adaptive-icon.png")}
        caption="React Native"
        logo={require("./assets/favicon.png")}
        Subtitle="5 of 12 sections"
      />
      <Card 
        title="Styled Components 2"
        image={require("./assets/adaptive-icon.png")}
        caption="React Native 2"
        logo={require("./assets/favicon.png")}
        Subtitle="5 of 12 sections"
      />
      <Card 
        title="Styled Components 3"
        image={require("./assets/adaptive-icon.png")}
        caption="React Native 3"
        logo={require("./assets/favicon.png")}
        Subtitle="5 of 12 sections"
      />
      </ScrollView>
      <StatusBar style="auto" />
      </ScrollView>
      </SafeAreaView>
    </Container>
  );
 }
}


const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 10px;
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