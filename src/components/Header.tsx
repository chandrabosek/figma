import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.logoImage}
        source={{
          uri: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-06/ZmWH47hwLQ.png',
        }}
        resizeMode="cover"
      />
      <Text style={styles.brandName} numberOfLines={1}>
        MissFish
      </Text>
      <Text style={styles.tagline}>
        Taste the ocean in{'\n'}every bite!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-start',
  },
  logoImage: {
    width: 173,
    height: 152,
    marginLeft: 5,
    zIndex: 13,
  },
  brandName: {
    height: 13,
    fontFamily: 'Inter',
    fontSize: 9,
    fontWeight: '400',
    lineHeight: 10.892,
    color: '#745567',
    marginTop: 9,
    marginLeft: 10,
    zIndex: 12,
  },
  tagline: {
    width: 128,
    height: 41,
    fontFamily: 'Inter',
    fontSize: 13.899999618530273,
    fontWeight: '700',
    lineHeight: 17.197,
    color: '#714e68',
    textAlign: 'left',
    marginTop: 2,
    marginLeft: 10,
    zIndex: 11,
  },
});

export default Header;
