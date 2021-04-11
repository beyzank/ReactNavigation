import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ThirdScreen = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Üçüncü ekrandayım!
      </Text>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.text}>Geri Dön</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('First')} style={styles.button}>
        <Text style={styles.text}>1. Ekrana Git</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#aacc00",
  },
  button: {
    width: "70%",
    height: 50,
    backgroundColor: "#e36414",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 4,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#69385c",
  },
};

export default ThirdScreen;
