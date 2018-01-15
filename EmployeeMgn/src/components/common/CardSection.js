import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    // take an array of styles,
    // the most right will overwrite the left styles
    // if there are any differences
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
