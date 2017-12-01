import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    //style below is an array, and the original setting of styles.containerStyle
    //can be overridden if props.style is given as an argument
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
