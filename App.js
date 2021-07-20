import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import Card from './components/Card';
import { Ionicons } from '@expo/vector-icons';
import Logo from './components/Logo';
import Course from './components/Course';
import Menu from './components/Menu';

export default class App extends React.Component {
  render(){
  return (
    <Container>
    <Menu />
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
        }} 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
      {logos.map((logo, index) => (
        <Logo
          key={index}
          image={logo.image}
          text={logo.text}
      />
      ))}
  
      </ScrollView>
      <Subtitle>Continue Learning</Subtitle>
      <ScrollView horizontal={true} 
      style={{ paddingBottom: 30 }}
      showsHorizontalScrollIndicator={false}
      >
      {cards.map((card, index) => (
        <Card 
        key={index}
        title={card.title}
        image={card.image}
        caption={card.caption}
        logo={card.logo}
        Subtitle={card.subtitle}
      />
      ))}

      </ScrollView>
      <StatusBar style="auto" />
      <Subtitle>Popular Courses</Subtitle>
      {courses.map((course, index) => (
        <Course 
          key={index}
          image={course.image}
          title={course.title}
          subtitle={course.subtitle}
          logo={course.logo}
          author={course.author}
          avatar={course.avatar}
          caption={course.caption}
        />
      ))}
     
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

const logos = [
  {
    image: require("./assets/favicon.png"),
    text: "Framer X"
  },
  {
    image: require("./assets/favicon.png"),
    text: "second one"
  },
  {
    image: require("./assets/favicon.png"),
    text: "third one"
  },
  {
    image: require("./assets/favicon.png"),
    text: "Fourth one"
  },
  {
    image: require("./assets/favicon.png"),
    text: "Fifth one"
  },
  {
    image: require("./assets/favicon.png"),
    text: "Sixth one"
  }
];

const cards = [
  {
    title:"Styled Components 1",
    image: require("./assets/adaptive-icon.png"),
    caption:"React Native 2",
    logo: require("./assets/favicon.png"),
    Subtitle:"5 of 12 sections"
  },
  {
    title:"Title 2",
    image: require("./assets/adaptive-icon.png"),
    caption:"React Native 2",
    logo: require("./assets/favicon.png"),
    Subtitle:"5 of 12 sections"
  },
  {
    title:"Styled Components 3",
    image: require("./assets/adaptive-icon.png"),
    caption:"React Native 2",
    logo: require("./assets/favicon.png"),
    Subtitle:"5 of 12 sections"
  },
  {
    title:"title 4",
    image: require("./assets/adaptive-icon.png"),
    caption:"React Native 2",
    logo: require("./assets/favicon.png"),
    Subtitle:"5 of 12 sections"
  }
];

const courses = [
  {
    title: "Titulo uno Studio",
    subtitle: "Subtitlo de este modulo",
    image: require("./assets/adaptive-icon.png"),
    logo: require("./assets/favicon.png"),
    author: "Its Me, Mario",
    avatar: require("./assets/favicon.png"),
    caption: "Design and interactive prototype"
  },
  {
    title: "Titulo uno Studio",
    subtitle: "Subtitlo de este modulo",
    image: require("./assets/adaptive-icon.png"),
    logo: require("./assets/favicon.png"),
    author: "Its Me, Mario",
    avatar: require("./assets/favicon.png"),
    caption: "Design and interactive prototype"
  },
  {
    title: "Titulo uno Studio",
    subtitle: "Subtitlo de este modulo",
    image: require("./assets/adaptive-icon.png"),
    logo: require("./assets/favicon.png"),
    author: "Its Me, Mario",
    avatar: require("./assets/favicon.png"),
    caption: "Design and interactive prototype"
  },
  {
    title: "Titulo uno Studio",
    subtitle: "Subtitlo de este modulo",
    image: require("./assets/adaptive-icon.png"),
    logo: require("./assets/favicon.png"),
    author: "Its Me, Mario",
    avatar: require("./assets/favicon.png"),
    caption: "Design and interactive prototype"
  },
]