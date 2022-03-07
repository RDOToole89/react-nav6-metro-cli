import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { sliderData, freeGames, paidGames } from '../../model/data';
import Feather from 'react-native-vector-icons/Feather';
import BannerSlider from '../components/BannerSlider';
import { windowWidth } from '../../utils/Dimensions';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';

export default function HomeScreen({ navigation }) {
  const [gamesTab, setGamesTab] = useState(1);

  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{ fontSize: 16, fontFamily: 'Roboto-Medium' }}>
            Hello John Doe
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../../assets/images/user-profile.jpg')}
              style={{ width: 35, height: 35 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#c6c6c6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 4,
          }}>
          <Feather
            name="search"
            size={20}
            color="#c6c6c6"
            style={{ marginRight: 5 }}
          />
          <TextInput placeholder="Search" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Text style={{ fontSize: 16, fontFamily: 'Roboto-Medium' }}>
            Upcoming Games
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={{ color: '#0aada8' }}>See all</Text>
          </TouchableOpacity>
        </View>
        <Carousel
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />

        <View style={{ marginVertical: 20 }}>
          <CustomSwitch
            selectionMode={1}
            option1="Free to play"
            option2="paid games"
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        {gamesTab == 1 &&
          freeGames.map(item => (
            <ListItem
              key={item.id}
              imageSource={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
            />
          ))}
        {gamesTab == 2 &&
          paidGames.map(item => (
            <ListItem
              key={item.id}
              imageSource={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}
