import React from "react";
import { View, StyleSheet } from "react-native";
import BottomTabBar from "../../components/BottomTabBar";

function Home() {
  return (
    <View style={styles.screen}>
      <BottomTabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: "relative",
  },
});

export default Home;
