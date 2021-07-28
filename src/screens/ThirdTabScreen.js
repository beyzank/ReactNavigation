import React from "react";
import { Text, View } from "react-native";

const ThirdTabScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Üçüncü Tabdayım!
      </Text>

    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#613f75",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
};
export default ThirdTabScreen;
