import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Images } from 'App/Theme'

import Style from './BottomMenuStyle';

/**
 * This is an Dashboard Bottom Menu component.
 *
 */

const BottomMenu = ({setScreen}) => {
  return (
    <View style={Style.dashboardMenu}>
      <Icon style={Style.dashboardMenuIcon} name="call-received" size={30} color="#51B04D" onPress={() => setScreen('Receive')} />
      <Image style={Style.logo} source={Images.menuLogo} resizeMode={'contain'} />
      <Icon style={Style.dashboardMenuIcon} name="send" size={30} color="#51B04D" onPress={() => { console.log('=-=-=-=-'); setScreen('Send');}} />
    </View>
  );
}

BottomMenu.propTypes = {
}

export default BottomMenu;