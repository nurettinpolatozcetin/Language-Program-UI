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
      <View>
        <View style={Style.header}>
          <View>
            <Image source={Icons.back2} style={Style.menustyle} />
          </View>
          <Text style={Style.cursetxt}>Lesson</Text>
          <View>
            <Image source={Icons.menu3} style={Style.menustyle} />
          </View>
        </View>
      </View>
      <View style={Style.translatest}>
        <Text style={Style.translatetxt}>
          Translate these phrases to English
        </Text>
      </View>
      <View>
        <View style={Style.middleblock}>
          <View style={Style.translatetextback}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}>
              <Image source={Icons.text} style={Style.textstyle} />
            </View>
            <View>
              <Text style={Style.buenotxt}>
                Buenas noches,?como estuvo su dia?
              </Text>
            </View>
          </View>
        </View>
        <View style={Style.middle}>
          <View style={Style.dotspos}>
            <View style={Style.dots}></View>
            <View style={Style.dots}></View>
            <View style={Style.dotsblue}></View>
            <View style={Style.dots}></View>
            <View style={Style.dots}></View>
            <View style={Style.dots}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 15,
            }}>
            <View style={Style.answer}>
              <Text style={Style.answertext}>Your answer...</Text>
            </View>
          </View>
          <View style={Style.submitpos}>
            <View style={Style.submitbar}>
              <View style={{justifyContent: 'center', margin: 10}}>
                <Text style={Style.submittext}>Submit</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default login;
