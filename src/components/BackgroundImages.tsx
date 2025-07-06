import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

const BackgroundImages: React.FC = () => {
  return (
    <>
      <ImageBackground
        style={styles.backgroundImage1}
        source={{
          uri: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-06/eHoyyqgnj1.png',
        }}
        resizeMode="cover"
      />
      <ImageBackground
        style={styles.backgroundImage2}
        source={{
          uri: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-06/3VDodY2cAZ.png',
        }}
        resizeMode="cover"
      />
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage1: {
    width: 191,
    height: 439,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  backgroundImage2: {
    width: 191,
    height: 290,
    position: 'absolute',
    bottom: 149,
    right: 0,
    zIndex: 1,
  },
});

export default BackgroundImages;
