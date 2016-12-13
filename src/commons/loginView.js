'use strict'
import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    Alert,
    StyleSheet,
    Image
} from 'react-native';

const StylesLogin = require( '../styles/login');

class loginView extends Component {
    render() {
        return (
            <Image source={{uri: 'https://images.unsplash.com/photo-1453781382334-20f5dfb0fb2e?dpr=1&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop='}} style={styles.container}>
                <View>
                    <Text style={styles.title}> Super hero</Text>
                    <TouchableHighlight style={styles.button} onPress={() => this.onLogin()}>
                        <Text style={styles.txtButton}> Login </Text>
                    </TouchableHighlight>
                </View>
            </Image>

        );
    }

    onLogin(){
        Alert.alert(
            'Acceso',
            "Te has logueado en el sistema",
            [
                {
                    text: 'Aceptar',
                    onPress: (this.aceptar.bind(this))
                },
                {
                    text: 'Cancelar',
                    onPress: (this.cancelar.bind(this))
                }
            ]
        )
    }

    aceptar(){
        this.props.navigator.replace({
            title: 'Dashboard',
            name: 'Dashboard',
            passProps:{}
        });
    }


    cancelar(){
        console.log('Login cancelar')
    }
}

const styles = StyleSheet.create( StylesLogin );

module.exports = loginView;
