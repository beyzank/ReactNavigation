import React from "react";
import { Text, View } from "react-native";

const SecondTabScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        İkinci Tabdayım!
      </Text>

    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00b4d8",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#003459",
  },
};
export default SecondTabScreen;
