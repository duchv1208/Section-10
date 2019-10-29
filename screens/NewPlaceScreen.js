import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Color from '../constants/Colors';
import {addPlace} from '../store/places-action';

const NewPlaceScreen = props => {
  const dispatch = useDispatch();

  const [value,setValue] = useState('');
  
  const inputHandle = (text)=>{
    setValue(text);
  }

  const savePlace = ()=>{
    dispatch(addPlace(value));
    props.navigation.goBack();
  }

  return (
    <View style={styles.form}>
      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.textInput} onChangeText={inputHandle}/>
      <Button onPress={savePlace} color={Color.primary} title="Save Place"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  form:{
    margin: 30
  },
  label:{
    alignSelf:'center',
    marginBottom:20
  },
  textInput:{
    borderBottomColor:Color.primary,
    borderBottomWidth:1,
    marginBottom:20
  }
});

export default NewPlaceScreen;
