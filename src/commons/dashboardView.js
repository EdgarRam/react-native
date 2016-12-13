'use strict'
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ListView,
    TouchableHighlight,
    Image
} from 'react-native';

const Crypto = require('crypto-js')

const StylesDashboard = require( '../styles/dashboard');


const REQUEST_URL = 'http://gateway.marvel.com/v1/public/characters';

class dashboardView extends Component {

    constructor(props){
        super(props);
        this.timestamp = 1;
        this.public_key = '9a6a2e7e2ee1ff735a5d269bed263e7e';
        this.private_key = '6ebe068fe586aeb4c6a9003538560d873bc38dcb';

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            loaded: false
        }

    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        let hash =Crypto.MD5( this.timestamp + this.private_key + this.public_key );

        fetch( REQUEST_URL + '?ts=' + this.timestamp + '&apikey=' + this.public_key + '&hash=' + hash )
        .then( (response)  => response.json() )
        .then( ( responseData ) =>{
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows( responseData.data.results ),
                loaded: true
            })
        })
    }

    renderLoadingView(){
        return (
            <View style={styles.container}>
                <Text>Cargando comics...</Text>
            </View>
        )
    }

    onComicPressed( comic ){
        this.props.navigator.push({
            name: 'Details',
            title: comic.name,
            passProps: {
                comic: comic
            }
        } );
    }

    renderComic( comic ){
        return(
            <TouchableHighlight
                onPress={()=> this.onComicPressed(comic)}
            >
                <Image source={{uri:comic.thumbnail.path+'.jpg'}} style={styles.backgroundImage}>
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}> {comic.name} </Text>
                        <Text style={styles.available}> {comic.comics.available} </Text>
                    </View>
                </Image>
            </TouchableHighlight>
        )
    }

    render() {
        if( !this.state.loaded ){
            return this.renderLoadingView()
        }

        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderComic.bind(this)}
                style={styles.listView}
            />
        )

    }
}

const styles = StyleSheet.create( StylesDashboard );

module.exports = dashboardView;
