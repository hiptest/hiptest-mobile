import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import About from './components/about'
import Search from './components/search'
import Connexion from './components/connexion'
import TestList from './components/testList'
import { TabNavigator } from 'react-navigation'

const Tabs = TabNavigator({
    Connexion: {screen : Connexion},
    TestList: {screen: TestList},
    Search: {screen : Search},
    About: {screen : About},
    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon : true,
            showLabel: true,
            pressColor:"#FF0000",
            style: {
                backgroundColor:"#000000",
                borderTopWidth:1,
                borderColor:"#99ff15"
            }
        },
    });


export default class App extends React.Component {
  render() {
    return (
        <View style={{flex:1}}>
            <StatusBar hidden = {true}/>
            <Tabs />
        </View>
    );
    }
}
