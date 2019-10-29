import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import PlaceItem from "../components/PlaceItem";

const PlacesListScreen = props => {
  const places = useSelector(state => state.places.places);
  return (
    <View>
      <Button
        onPress={() => props.navigation.navigate("NewPlace")}
        title="New  Place"
      ></Button>
      <FlatList
        data={places}
        keyExtractor={item => item.id}
        renderItem={itemData => {
          return (
            <View>
              <PlaceItem id={itemData.item.id} title={itemData.item.title}/>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};

PlacesListScreen.navigationOptions = {
  headerTitle: "All Places"
};

const styles = StyleSheet.create({});

export default PlacesListScreen;
