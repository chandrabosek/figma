/**
 * MissFish React Native App
 * https://codia.ai
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from './src/components/Header';
import LoginForm from './src/components/LoginForm';
import BackgroundImages from './src/components/BackgroundImages';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.mainContainer}>
          <View style={styles.contentContainer}>
            <Header />
            <LoginForm />
          </View>
          <BackgroundImages />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  mainContainer: {
    width: 191,
    height: 439,
    backgroundColor: 'transparent',
    position: 'relative',
    alignSelf: 'center',
  },
  contentContainer: {
    width: 191,
    height: 354,
    backgroundColor: 'transparent',
    position: 'relative',
    zIndex: 2,
    marginTop: 52,
  },
});
