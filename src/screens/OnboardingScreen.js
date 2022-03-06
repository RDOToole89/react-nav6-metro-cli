import React from 'react';

import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

import MIcon from 'react-native-vector-icons/MaterialIcons';
import GamingImg from '../../assets/gaming.svg';

export const OnBoardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 30,
        backgroundColor: '#fff',
      }}>
      <View style={{ backgroundColor: '#fff' }} w>
        <Text
          style={{
            fontSize: 30,
            marginTop: 30,
            fontWeight: 'bold',
            color: '#20315f',
          }}>
          NAV
        </Text>
      </View>
      <GamingImg
        source={GamingImg}
        width={300}
        height={300}
        style={{ transform: [{ rotate: '-15deg' }] }}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{
          backgroundColor: '#AD40AF',
          padding: 20,
          width: '90%',
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 50,
        }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff' }}>
          Let's Begin
        </Text>
        <MIcon name="arrow-forward-ios" size={20} color="#000" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
