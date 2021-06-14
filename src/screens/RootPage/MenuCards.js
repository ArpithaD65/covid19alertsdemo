import { View, Text, TouchableOpacity, Linking, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar, Divider } from 'react-native-elements';
import { material } from 'react-native-typography';
import InfoCards from './InfoCards';

const MenuCards = ({ navigation }) => {
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await fetch('https://covid19.mathdro.id/api');
    let data = await res.json();
    setData(data);
    setIsLoading(false);
  };

  // const cured = Data.recovered.value;
  // const deaths = Data.deaths.value;
  const getWidth = (x) => {
    if (isLoading) {
      return 0;
    } else {
      if (x == 'deaths') {
        const num = Math.floor(
          (Data.deaths.value / Data.confirmed.value) * 100,
        );
        const percent = num + '%';
        return percent;
      } else if (x == 'recovered') {
        const num = Math.floor(
          (Data.recovered.value / Data.confirmed.value) * 100,
        );
        const percent = num + '%';
        return percent;
      }
    }
  };

  return (
    <>
    
        <View
            style={{
              paddingLeft: 10,
              backgroundColor: '#fff',
              height: 30,
              marginVertical: 10,
              marginBottom: 15,
            }}>
            <Text style={material.headline}>
              Data at,{' '}
              <Text style={{ ...material.headline, fontWeight: '700' }}>
                Your Finger tips !
              </Text>
            </Text>
          </View>
          
   <View style={{ flexDirection: 'row', height: 95, marginBottom: 10 }}>
       <TouchableOpacity //DAYWISE Vaccine Slots
          onPress={() => navigation.push('Time')}
          style={{
            backgroundColor: '#b3b300',
            borderWidth: 0,
            borderRadius: 7,
            flex: 1,
            marginHorizontal: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}>
          <Icon
            style={{ position: 'absolute', top: 10, right: 10 }}
            name="medical"
            size={35}
            color="#fff"
          />

          <Text
            style={{
              ...material.captionWhite,
              left: 5,
              top: 30,
              position: 'absolute',
            }}>
            DAYWISE
          </Text>
          <Text
            style={{
              position: 'absolute',
              bottom: 0,
              left: 5,
              ...material.display2White,
            }}>
            Slots
          </Text>
        </TouchableOpacity>
       </View>
      <View style={{ flexDirection: 'row', height: 95, marginBottom: 10 }}>
        <TouchableOpacity //IMPORTANT LINKS
          onPress={() => navigation.push('Links')}
          style={{
            backgroundColor: '#804000',
            borderWidth: 0,
            borderRadius: 7,
            flex: 1,
            marginHorizontal: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}>
          <Icon
            style={{ position: 'absolute', top: 10, right: 10 }}
            name="link"
            size={35}
            color="#fff"
          />

          <Text
            style={{
              ...material.captionWhite,
              left: 5,
              top: 30,
              position: 'absolute',
            }}>
            IMPORTANT
          </Text>
          <Text
            style={{
              position: 'absolute',
              bottom: 0,
              left: 5,
              ...material.display2White,
            }}>
            LINKS
          </Text>
        </TouchableOpacity>
       
      </View>
      <View style={{ flexDirection: 'row', height: 95, marginBottom: 10 }}>
        <TouchableOpacity //DATA SEARCH
          onPress={() => navigation.push('Search')}
          style={{
            backgroundColor: '#000080',
            borderWidth: 0,
            borderRadius: 0,
            flex: 1,
            marginHorizontal: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}>
          <Icon
            style={{ position: 'absolute', top: 10, right: 10 }}
            name="search"
            size={35}
            color="#fff"
          />

          <Text
            style={{
              ...material.captionWhite,
              left: 5,
              top: 30,
              position: 'absolute',
            }}>
            DATA
          </Text>
          <Text
            style={{
              position: 'absolute',
              bottom: 0,
              left: 5,
              ...material.display2White,
            }}>
            SEARCH
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', height: 95, marginTop: 15 }}>
        <TouchableOpacity // How Are You Feeling Today?
          onPress={() =>
            Linking.openURL(
              'https://www.who.int/news-room/photo-story/photo-story-detail/self-care-during-covid-19',
            )
          }
          style={{
            backgroundColor: '#2C3A47',
            borderWidth: 0,
            borderRadius: 7,
            flex: 1,
            marginHorizontal: 12,
            alignItems: 'center',
            flexDirection: 'row',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}>
          <Avatar
            containerStyle={{
              backgroundColor: '#58B19F',
              margin: 15,
            }}
            size="medium"
            source={{
              uri:
                'https://www.todayshospitalist.com/wp-content/uploads/2010/06/drugseeking-300x350.jpg',
            }}
            rounded
          />
          <View style={{ width: 200, flexDirection: 'column' }}>
            <Text style={{ ...material.display1White, fontSize: 24 }}>
              How Are You
            </Text>
            <Text
              style={{
                ...material.captionWhite,
                fontSize: 16,
              }}>
              Feeling Today?
            </Text>
          </View>
          <Icon
            style={{ position: 'absolute', right: 20 }}
            name="chevron-forward"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
       </>
  );
};
export default MenuCards;
