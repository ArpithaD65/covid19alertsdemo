import React, { Component } from 'react';
import { StatusBar, View, ScrollView, Text } from 'react-native';
import { material } from 'react-native-typography';
//custom
import Header from './RootPage/Header';
import InfoCards from './RootPage/InfoCards';
import MenuCards from './RootPage/MenuCards';

class RootPage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <ScrollView style={{ backgroundColor: '#fff' }}>
          <Header />
           <View
            // scrollEnabled
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              backgroundColor: '#fff',
              // height: height - 55 + 30 + height / 2.5,
              // backgroundColor: 'grey',
              display: 'flex',
            }}>
            <MenuCards navigation={navigation} />
          </View>
          <View
            style={{
              paddingLeft: 10,
              backgroundColor: '#fff',
              height: 30,
              marginVertical: 10,
              marginBottom: 15,
            }}>
            <Text style={material.headline}>
              Stay Home,{' '}
              <Text style={{ ...material.headline, fontWeight: '700' }}>
                Stay safe !
              </Text>
            </Text>
          </View>
          
        
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 55,
              marginVertical: 5,
              // backgroundColor: 'green',
            }}>
            <Text style={{ color: 'grey', ...material.caption }}>
            Learnt with enthu
            </Text>
            <Text style={{ color: 'grey', ...material.body1 }}>
              ------
            </Text>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default RootPage;
