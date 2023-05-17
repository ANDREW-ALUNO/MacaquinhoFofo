import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Audio } from "expo-av";
export default class SoundButton extends Component {
    playSound = async (soundChunk) => {
        var soundLink = 'https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunk + '.mp3';
        await Audio.Sound.createAsync({
            uri: soundLink
        }, {
            shouldPlay: true
        })

    }
    render() {
        return (
            <TouchableOpacity style={styles.chunkButton} onPress={() => { this.playSound(this.props.phone) }}>
                <Text style={styles.displayText}>
                    {this.props.chunk}

                </Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b8b8b8',
    },
    inputBox: {
        marginTop: 50,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 4,
    },
    goButton: {
        width: '50%',
        height: 55,
        alignSelf: 'center',
        padding: 10,
        margin: 10,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    displayText: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
    },
    imageIcon: {
        width: 150,
        height: 150,
        alignSelf: 'center'
    },
    chunkButton: {
        width: '60%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        margin: 5,
        backgroundColor: 'red',
    },
});