import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PhoneInput: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label} numberOfLines={1}>
        Enter Mobile Number
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputField}>
          <Text style={styles.phoneNumber} numberOfLines={1}>
            +91.9999988658
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 191,
    height: 53,
    backgroundColor: 'transparent',
    zIndex: 6,
  },
  label: {
    height: 13,
    fontFamily: 'Inter',
    fontSize: 9.100000381469727,
    fontWeight: '400',
    lineHeight: 11.013,
    color: '#9b9aa0',
    textAlign: 'left',
    marginTop: 3,
    marginLeft: 9,
    zIndex: 10,
  },
  inputContainer: {
    width: 170,
    height: 27,
    backgroundColor: 'transparent',
    marginTop: 7,
    marginLeft: 8,
    zIndex: 7,
  },
  inputField: {
    width: 166,
    height: 24,
    backgroundColor: '#f6f5fb',
    borderWidth: 1,
    borderColor: '#cbcad0',
    borderStyle: 'solid',
    marginTop: 2,
    marginLeft: 3,
    zIndex: 8,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  phoneNumber: {
    height: 13,
    fontFamily: 'Inter',
    fontSize: 7.599999904632568,
    fontWeight: '600',
    lineHeight: 9.198,
    color: '#cfced5',
    textAlign: 'left',
  },
});

export default PhoneInput;
