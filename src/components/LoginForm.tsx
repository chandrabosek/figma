import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PhoneInput from './PhoneInput';
import SendOTPButton from './SendOTPButton';

const LoginForm: React.FC = () => {
  return (
    <View style={styles.container}>
      <PhoneInput />
      <SendOTPButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 27,
  },
});

export default LoginForm;
