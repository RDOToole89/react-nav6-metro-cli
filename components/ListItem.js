import { View, Text, Image } from 'react-native';
import React from 'react';

const ListItem = () => {
  return (
    <View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItem: 'center',
        }}>
        <Image
          source={require('../assets/images/spiderman.webp')}
          style={{ width: 55, height: 55, borderRadius: 10, marginRight: 8 }}
        />
        <View>
          <Text
            style={{
              color: '#333',
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
            }}>
            Marvel
          </Text>
          <Text
            style={{
              color: '#333',
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
              textTransform: 'uppercase',
            }}>
            Spider-Man
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ListItem;
