// import Libraries for making a Component
 import React from 'react';
 import { Text, View } from 'react-native';

// Make a Component
const Header = (props) => { // props allows change of text inside the view
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center', // To control the horizontal placment of a component
    alignItems: 'center', // To contorl the vertical placement of a component
    height: 60,
    paddingTop: 15,
    // add shadows
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};
// Make the component available to other parts of the app
// make this component usable to others
export { Header };

// Component nested is to embed a component inside another component
