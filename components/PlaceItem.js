import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import Colors from "../constants/Colors";
import Card from "./UI/Card";

const PlaceItem = props => {
  let TouchableCpn = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version > 21) {
    TouchableCpn = TouchableNativeFeedback;
  }

  return (
    <Card style={styles.place}>
      <TouchableCpn>
        <View style={styles.details}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableCpn>
    </Card>
  );
};

const styles = StyleSheet.create({
  place: {
    height: 300,
    margin: 20
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
    height: 20
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10
  }
});

export default PlaceItem;
