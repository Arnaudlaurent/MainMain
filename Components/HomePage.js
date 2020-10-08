import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Animation from "lottie-react-native";

import anim from "../assets/17663-stories-button.json";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";

const DEFAULT_PRENOM = "toi";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      light: false,
    };
  }

  componentDidMount() {
    this.animation.play();
  }

  changeLight() {
    this.setState({ light: !this.state.light });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          marginBottom: 0,
          padding: 0,
          marginTop: 0,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginTop: 10,
            marginLeft: 15,
          }}
        >
          <Text
            style={{
              flex: 1,
              fontSize: 32,
              justifyContent: "center",
              marginLeft: 20,
            }}
          >
            Hello, {this.props.prenom ? this.props.prenom : DEFAULT_PRENOM}
            {"\n"}
            Main-Main.
          </Text>

          <TouchableOpacity
            style={{
              flex: 1,
              alignContent: "center",
              justifyContent: "center",
              marginRight: 10,
              padding: 10,
              borderRadius: 100,
              backgroundColor: "#fff",
              shadowColor: "rgba(0,0,0, .4)", // IOS
              shadowOffset: { height: 1, width: 1 }, // IOS
              shadowOpacity: 1, // IOS
              shadowRadius: 1, //IOS
              elevation: 4, // Android
            }}
            onPress={() => this.props.navigation.navigate("Profil")}
          >
            <Image
              source={require("../assets/main-main_full.png")}
              style={{
                height: 50,
                width: 50,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 5,
            marginBottom: 50,
            padding: 0,
            marginTop: 30,
            width: 300,
            height: 80,
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <TouchableOpacity
            style={{
              width: 300,
              height: 325,
              borderRadius: 20,
              backgroundColor: "#fff",
              shadowColor: "rgba(0,0,0, .4)", // IOS
              shadowOffset: { height: 1, width: 1 }, // IOS
              shadowOpacity: 1, // IOS
              shadowRadius: 1, //IOS
              elevation: 4, // Android
            }}
            onPress={() => this.changeLight()}
          >
            <Image
              source={
                this.state.light
                  ? require("../assets/Main_main_jour_resize.jpeg")
                  : require("../assets/main_main_Nuit_resize.jpeg")
              }
              style={styles.imageBack}
            />
            <Text style={styles.text_image}>
              {this.state.light ? "Veilleuse On" : "Veilleuse Off"}
            </Text>
          </TouchableOpacity>

          <Animation
            ref={(animation) => {
              this.animation = animation;
            }}
            style={styles.image_animation_reading}
            loop={true}
            source={anim}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageBack: {
    borderRadius: 20,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  text_image: {
    position: "absolute",
    top: 249,
    fontSize: 25,
    justifyContent: "center",
    marginLeft: "27%",
    color: "white",
  },
  image_animation_reading: {
    height: 160,
    width: 160,
    margin: 4,
    marginTop: 5,
    marginRight: "auto",
    marginLeft: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => {
  return {
    prenom: state.toggleProfile.prenom,
  };
};

export default connect(mapStateToProps)(HomePage);
