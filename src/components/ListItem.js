import { View, Text, Image, TouchableOpacity } from 'react-native';
import { windowWidth } from '../../utils/Dimensions';
import React from 'react';

const ListItem = ({ imageSource, title, subTitle, isFree, price }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItem: 'center',
        }}>
        <Image
          source={imageSource}
          style={{ width: 55, height: 55, borderRadius: 10, marginRight: 8 }}
        />
        {/* nice trick to fix text on a line!  */}
        <View style={{ width: windowWidth - 220 }}>
          <Text
            style={{
              color: '#333',
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
            }}>
            {subTitle}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: '#333',
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
              textTransform: 'uppercase',
            }}>
            {title}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#0aada8',
          padding: 10,
          width: 100,
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontFamily: 'Roboto-Medium',
            fontSize: 14,
          }}>
          {isFree == 'Yes' && 'play'}
          {isFree == 'No' && price}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
