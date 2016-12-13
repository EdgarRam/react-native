'use strict'
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

const Dashboard = require('../commons/dashboardView')
const Heroes = require('../commons/heroesView')

const StylesTab = require( '../styles/tabs')


class tabs extends Component {

    constructor(props){
        super(props);
        this.state={
            selectedTab: 'dashboard'
        };
    }

    render() {
        return (
            <TabNavigator
                style={styles.containerTabs}
                tabBarStyle={styles.containerTabBar}
            >
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'dashboard'}
                    title="Dashboard"
                    onPress={() => this.setState({ selectedTab: 'dashboard' })}
                    tabStyle={styles.tabs}
                    titleStyle={styles.tabTitle}
                    renderIcon={() => <Image source={require('../img/pt.png')} style={styles.imglog} />}
                >
                    <Dashboard navigator={this.props.navigator}></Dashboard>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'heroes'}
                    title="Heroes"
                    onPress={() => this.setState({ selectedTab: 'heroes' })}
                    tabStyle={styles.tabs}
                    titleStyle={styles.tabTitle}
                    renderIcon={() => <Image source={require('../img/storm.png')} style={styles.imglog2} />}
                >
                    <Heroes navigator={this.props.navigator}></Heroes>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create( StylesTab )

module.exports = tabs;
