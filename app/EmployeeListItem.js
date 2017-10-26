import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';

export default class EmployeeListItem extends Component {

    showDetails() {
        this.props.navigator.push({name: 'details', data: this.props.data});
    }

    render() {
        return (
            <TouchableHighlight onPress={this.showDetails.bind(this)} underlayColor={'#EEEEEE'}>
                <View style={styles.container}>
                    <Image source={{uri: this.props.data.picture}} style={styles.picture} />
                    <View>
                        <Text>{this.props.data.firstName} {this.props.data.lastName}</Text>
                        <Text style={styles.title}>{this.props.data.title}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8
    },
    picture: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 8
    },
    title: {
        color: '#848484'
    }
});
