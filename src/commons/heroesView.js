'use strict'
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

const StylesHeroes = require( '../styles/heroes');

class heroesView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    bienvenido al heroesView
                </Text>
            </View>

        );
    }
}

const styles = StyleSheet.create( StylesHeroes );

module.exports = heroesView;
