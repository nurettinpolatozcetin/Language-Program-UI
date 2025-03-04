import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Style from './styles';
import {Icons, Images} from '../../../assets';

const login = () => {
  return (
    <View style={Style.background}>
      <View style={Style.header}>
        <Image source={Icons.menu2} style={Style.menustyle} />
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginRight: 16}}>
          <Image source={Icons.flag} style={Style.flagstyle} />
          <Text style={{fontWeight: 'semibold', fontSize: 20, marginLeft: 7}}>
            English
          </Text>
          <Image source={Icons.down} style={{width: 20, height: 20}} />
        </View>
      </View>
      <View style={Style.profile}>
        <Image source={Images.ayca} style={Style.aycastyle} />
        <View style={{margin: 25}}>
          <Text style={Style.aycatext}>Ayca_22</Text>
          <View style={Style.texts}>
            <Image source={Icons.location} style={Style.locationstyle} />
            <Text style={Style.locationtext}>Turkey</Text>
          </View>
        </View>
      </View>
      <View style={Style.greeting}>
        <Text style={Style.welcometext}>Welcome Back!</Text>
      </View>
      <View style={Style.middleimage}>
        <Image source={Images.challange} style={Style.challangestyle} />
      </View>
      <View style={Style.course}>
        <Text style={Style.textcontinue}>Your Courses </Text>
      </View>
      <View style={Style.competitions}>
        <View style={Style.spanishcourse}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 25, color: '#ffff'}}>
              Spanish
            </Text>
            <Text style={{color: '#ffff', fontSize: 15, fontWeight: 'bold'}}>
              Beginner
            </Text>
            <View
              style={{
                justifyContent: 'flex-end',
                marginTop: 25,
                marginLeft: 35,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 15, color: '#ffff'}}>
                %36 Completed
              </Text>
            </View>
          </View>
        </View>
        <View style={Style.italiancourse}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 25, color: '#ffff'}}>
              Italian
            </Text>
            <Text style={{color: '#ffff', fontSize: 15, fontWeight: 'bold'}}>
              Advanced
            </Text>
            <View
              style={{
                justifyContent: 'flex-end',
                marginTop: 25,
                marginLeft: 35,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 15, color: '#ffff'}}>
                %69 Completed
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default login;
