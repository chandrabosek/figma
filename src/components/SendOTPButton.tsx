import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SendOTPButton: React.FC = () => {
  const handleSendOTP = () => {
    console.log('Send OTP pressed');
    // Add OTP sending logic here
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleSendOTP}>
        <Text style={styles.buttonText} numberOfLines={1}>
          Send OTP
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 169,
    height: 28,
    backgroundColor: 'transparent',
    marginTop: 29,
    marginLeft: 9,
    zIndex: 3,
  },
  button: {
    width: 166,
    height: 25,
    backgroundColor: '#01a9e7',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 3,
    borderWidth: 1,
    borderColor: '#52bce5',
    borderStyle: 'solid',
    marginTop: 2,
    marginLeft: 2,
    zIndex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    height: 13,
    fontFamily: 'Inter',
    fontSize: 7.900000095367432,
    fontWeight: '400',
    lineHeight: 9.561,
    color: '#67d6f5',
    textAlign: 'center',
  },
});

export default SendOTPButton;
