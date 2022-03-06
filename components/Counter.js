import React, {useState} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Counter = () => {
  const [value, setValue] = useState(0);

  const addOne = () => {
    setValue(prev => prev + 1);
  };

  const subOne = () => {
    setValue(prev => prev - 1);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.numberArea}>
        <Text style={styles.number}>{value}</Text>
      </View>
      <Button title="+1" onPress={addOne} />
      <Button title="-1" onPress={subOne} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {flex: 1},
  numberArea: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  number: {fontSize: 72, fontWeight: 'bold'},
});

export default Counter;
