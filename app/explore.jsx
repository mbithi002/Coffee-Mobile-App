import splashCoffee from '@/assets/images/coffee-splash.jpg';
import React, { Component } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export class explore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={splashCoffee}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.text}> Explore page </Text>
        </ImageBackground>
      </View>
    );
  }
}

export default explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "green",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
});
