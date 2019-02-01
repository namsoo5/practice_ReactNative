import React, { PropTypes } from 'react';
import { View, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import Title from './Title';
import AppText from './AppText';
import * as globalStyles from '../styles/global';

const IntroScreen = ({ onPress }) => (
  <View style={[globalStyles.COMMON_STYLES.pageContainer, styles.container]}>
    <TouchableOpacity onPress={onPress}>
      <Title>React Native News Reader</Title>
      <AppText>
        Start Reading
      </AppText>
    </TouchableOpacity>
  </View>
);

IntroScreen.propTypes = {
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// class App extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     );
//   }
// }

export default IntroScreen;