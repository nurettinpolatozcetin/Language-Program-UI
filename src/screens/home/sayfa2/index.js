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
        <View>
          <Image source={Icons.back2} style={Style.menustyle} />
        </View>
        <Text style={Style.cursetxt}>Curse</Text>
        <View>
          <Image source={Icons.menu3} style={Style.menustyle} />
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={Style.middle}>
          <Text style={Style.langtext}>Spanish</Text>
          <View style={Style.grade}>
            <Text style={Style.gradetext}>Begginer</Text>
            <Image source={Icons.down} style={Style.downstyle} />
          </View>
        </View>
        <View>
          <Text style={Style.statstext}>(%43 Completed)</Text>
        </View>
      </View>
      <View style={Style.diasstyle}>
        <Image source={Icons.dia} style={Style.dias} />
        <Image source={Icons.dia} style={Style.dias} />
        <View style={{marginLeft: 10}}>
          <Text style={Style.diastext}>2 Milestones</Text>
        </View>
      </View>
      <View>
        <View style={Style.stats}>
          <View style={Style.basics}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={Icons.doc} style={Style.statsicons} />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>Basics</Text>
              <Text>4/5 Completed</Text>
            </View>
          </View>
          <View style={Style.occupations}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={Icons.occup} style={Style.statsicons} />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>Occupation</Text>
              <Text>1/5 Completed</Text>
            </View>
          </View>
        </View>
        <View style={Style.stats}>
          <View style={Style.conversation}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={Icons.conversation} style={Style.statsicons} />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 17}}>
                Conversation
              </Text>
              <Text>3/5 Completed</Text>
            </View>
          </View>
          <View style={Style.places}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={Icons.places} style={Style.statsicons} />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>Places</Text>
              <Text>1/5 Completed</Text>
            </View>
          </View>
        </View>
        <View style={Style.stats}>
          <View style={Style.familymembers}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={Icons.fam} style={Style.statsicons} />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                Family Members
              </Text>
              <Text>3/5 Completed</Text>
            </View>
          </View>
          <View style={Style.foods}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={Icons.food} style={Style.statsicons} />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>Foods</Text>
              <Text>2/5 Completed</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default login;
