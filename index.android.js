'use strict'
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    Text,
    TouchableHighlight
} from 'react-native';

const Tabs = require('./src/android/tabs')
const Login = require('./src/commons/loginView')
const ComicDetail =  require( './src/commons/comicDetailView');

var NavigatorBarRouteMapper={
    LeftButton: ( route, navigator, index) => {
        if( index === 0) {
            return null
        }
        return(
            <TouchableHighlight onPress={() => {
                if( index > 0){
                    navigator.pop();
                }
            }}>
                <Text style={{marginTop:10, marginLeft: 20, color:'#007AFF'}}> Atras </Text>
            </TouchableHighlight>
        )
    },
    RightButton: ( route, navigator, index) =>{
        return null
    },
    Title:  ( route, navigator, index) =>{
        if( route.name== 'Login' || route.name== 'Dashboard' ) {
            return null
        }
        return <Text style={styles.title}>{route.name}</Text>;
    }
}

class AwesomeProject extends Component {
    renderScene( route, navigator){
        switch (route.name) {
            case 'Login':
                return <Login navigator={navigator} route={route}></Login>;
            break;
            case 'Dashboard':
                return <Tabs navigator={navigator} route={route}></Tabs>;
            break;
            case 'Details':
                return <ComicDetail navigator={navigator} route={route}></ComicDetail>;
            break;
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{name:'Dashboard'}}
                renderScene={this.renderScene}
                style={styles.navigator}
                configureScene={(route)=>{
                    if(route.sceneConfig){
                        return route.sceneConfig;
                    }
                    return Navigator.SceneConfigs.FloatFromRight
                }}
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={NavigatorBarRouteMapper}
                    />
                }
            />

        );
    }
}

const styles = StyleSheet.create({
    navigator: {
        alignItems: 'stretch',
        backgroundColor: 'white',
        height: 50
    },
    title : {
        color:'#007aff',
        marginTop:10,
        textAlign: 'center',
        backgroundColor: '#000000'
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
