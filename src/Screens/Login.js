import React from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {}

  loginAction = () => {
    const {navigation} = this.props;

    navigation.replace('HomeScene');
  };

  render() {
    return (
      <View
        style={styles.MainContainer}
        // edges={['right', 'bottom', 'left']}
        testID={'login-screen'}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          style={styles.image}
          source={{
            uri: 'https://wallpapercave.com/wp/wp3518042.jpg',
          }}>
          <View style={styles.Container}>
            <View style={styles.textFieldContainer}>
              <TextInput
                testID={'username-input'}
                adjustsFontSizeToFit
                numberOfLines={1}
                placeholderTextColor="darkgrey"
                value={this.state.username}
                placeholder={'Username'}
                onChange={val => {
                  this.setState({username: val});
                }}
                style={styles.textInput}
              />
              <TextInput
                testID={'password-input'}
                adjustsFontSizeToFit
                numberOfLines={1}
                placeholderTextColor="darkgrey"
                value={this.state.password}
                onChange={val => {
                  this.setState({password: val});
                }}
                placeholder={'Password'}
                style={styles.textInput}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.login_btn}
                onPress={this.loginAction}
                testID={'login-btn'}>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: null,
    height: null,
  },
  Container: {
    shadowColor: 'white',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#000000a0',
    width: '80%',
    maxWidth: 400,
    maxHeight: '80%',
    // height: 300,
    padding: 20,
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFieldContainer: {
    marginBottom: 5,
  },
  textInput: {
    borderColor: 'black',
    color: 'black',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    margin: 5,
    width: 300,
  },
  buttonContainer: {
    backgroundColor: 'orange',
    width: '100%',
    borderRadius: 10,
    height: 45,
  },
  loginText: {
    paddingTop: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
