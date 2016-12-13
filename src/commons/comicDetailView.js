

import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';

const StylesComic = require( '../styles/comic');

class comicDetailView extends Component {

    constructor(props){
        super(props);
        this.passProps = this.props.route.passProps;
    }

    render() {
        const comic = this.passProps.comic;
        const modified = comic.modified.slice(0,10)

        return (
            <View style={styles.container}>
                <Image source={{
                    uri: comic.thumbnail.path + '.jpg'
                }}
                    style={styles.image}
                />

                <Text style={styles.title}> {comic.name} </Text>
                <Text style={styles.description}> {comic.description} </Text>
                <Text style={styles.description}>Disponibles: {comic.comics.available} </Text>
                <Text style={styles.modified}>Modificado: {modified} </Text>
            </View>

        );
    }
}

const styles = StyleSheet.create( StylesComic );

module.exports = comicDetailView;
