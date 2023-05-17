import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';
import Db from "./db_1.json"
import SoundButton from './Components/Sound_button';



export default class App extends Component {
  constructor() {
    super()
    this.state = {
      text: '',
      displayText: '',
      chunk: [],
      phone:[]
    }
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor='#9c8210'
            centerComponent={{
              text: 'MACAQUINHO FOFO :)',
              style: { color: '#fff', fontSize: 20 }
            }}
          />
          <Image style={styles.imageIcon} source={require("./assets/faceMonkey.png")} />
          <TextInput
            onChangeText={text => {
              this.setState({ text: text })
            }}

            value={this.state.text}
            style={styles.inputBox}
          />
          <TouchableOpacity style={styles.goButton}
            onPress={() => { this.setState({ chunk: Db[this.state.text].chunks, phone:Db [this.state.text].phones }) }}>
            <Text style={styles.buttonText}>
              IR
            </Text>
          </TouchableOpacity>
          <View>
            {this.state.chunk.map((item,index) => {
              return (
               <SoundButton
                  chunk = {this.state.chunk[index]}
                  phone = {this.state.phone[index]}
               />
              )
            })}
          </View>

        </View>
      </SafeAreaProvider>
    );
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
    alignSelf:'center'
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