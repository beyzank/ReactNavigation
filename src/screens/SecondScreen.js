import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SecondScreen = (props) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FCBA04",
      }}>
      <Text style={styles.text}>
        İkinci ekrandayım!
      </Text>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.text}>Geri Dön</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Third')} style={styles.button}>
        <Text style={styles.text}>3. Ekrana Git</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  button: {
    width: "70%",
    height: 50,
    backgroundColor: "#FF5D73",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 4,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4C4C47",
  },
};

export default SecondScreen;
