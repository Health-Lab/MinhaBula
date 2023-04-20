import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class UserProfileView extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image style={styles.avatar}
              source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
            <View style={styles.headerContent}>
              <View style={styles.headerContentInfo}>
              <Text style={styles.name}>John Doe </Text>
              <Text style={styles.userInfo}>jhonnydoe@mail.com </Text>
              <Text style={styles.userInfo}>Florida </Text>
              </View>
              
            </View>


          </View>

        </View>

        <View style={styles.body}>
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/color/70/000000/cottage.png' }} />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Home</Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/color/70/000000/administrator-male.png' }} />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Configuração</Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/color/70/000000/filled-like.png' }} />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>News</Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/color/70/000000/facebook-like.png' }} />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Shop</Text>
            </View>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFFFFF",

  },
  headerContent: {
    padding: 10,
    flexDirection: 'row'


  },
  headerContentInfo: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'column'

  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#dddddd",
    borderWidth: 1,
    backgroundColor: '#dcdcdc',
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: '60',

  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: '60',

  },
  body: {
    backgroundColor: "#778899",
    height: 520,

  },
  item: {
    flexDirection: 'row',
  },
  infoContent: {
    flex: 2,
    alignItems: 'flex-start',
    paddingLeft: 5
  },
  iconContent: {
    flex: 2,
    alignItems: 'flex-start',
    paddingRight: 0,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#FFFFFF",
  }
});

