import React from "react";
import {
  StyleSheet,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import { Text, Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";
import { AirbnbRating } from "react-native-elements";
import { Slider } from "react-native-elements";
import { connect } from "react-redux";

import stories from "../Utils/Stories";
const ratingComment = ["Terrible", "Bad", "passable", "Good", "Very Good"];

class StoryDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      play: false,
      index: this.props.route.params.index,
      item: this.props.route.params.item,
    };
  }

  changePlay() {
    this.setState({ play: !this.state.play });
  }

  _toggleFavorite() {
    const action = {
      type: "TOGGLE_FAVORITE",
      value: this.state.item,
    };
    this.props.dispatch(action);
  }

  _changeStory = (index) => {
    this.setState({
      index: index,
      item: stories[index],
    });
  };

  _displayPreviously(index) {
    if (index >= 0)
      return (
        <TouchableOpacity
          onPress={() => {
            this._changeStory(index);
          }}
          style={{
            marginTop: 10,
            right: 50,
            alignItems: "center",
            transform: [{ scaleX: -1 }],
          }}
        >
          <Icon color="black" size={30} name="forward" />
        </TouchableOpacity>
      );
  }

  _displayNext(index) {
    if (index < stories.length)
      return (
        <TouchableOpacity
          onPress={() => {
            this._changeStory(index);
          }}
          style={{ marginTop: 10, left: 50, alignItems: "center" }}
        >
          <Icon color="black" size={30} name="forward" />
        </TouchableOpacity>
      );
  }

  _onFinishRating = (rating) => {};

  render() {
    return (
      <ScrollView
        style={styles.scrollview_container}
        scrollIndicatorInsets={{ right: 1 }}
      >
        <View style={{ backgroundColor: "#caaffe" }}>
          <View
            style={{
              borderBottomRightRadius: 45,
              borderBottomLeftRadius: 45,
              borderRadius: 0,
              backgroundColor: "white",
            }}
          >
            <View style={styles.shadow}>
              <Image
                source={require("../assets/histoire_sorcière.jpg")}
                style={styles.image}
              />
            </View>

            <View style={{ flexDirection: "row", marginTop: -25 }}>
              <View style={styles.shadow_title}>
                <Text h3 style={styles.title}>
                  {this.state.item.title}
                </Text>
              </View>

              <View
                style={{ alignItems: "center", marginLeft: 170, marginTop: 30 }}
              >
                <Icon
                  color="#7158B6"
                  size={30}
                  name={
                    this.props.favoritesStories &&
                    this.props.favoritesStories.findIndex(
                      (item) => item.title === this.state.item.title
                    ) !== -1
                      ? "heart"
                      : "hearto"
                  }
                  onPress={() => this._toggleFavorite()}
                />
              </View>
            </View>

            <Text style={styles.title_auteur}> Auteur </Text>

            <View
              style={{
                marginTop: -40,
                marginBottom: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AirbnbRating
                count={ratingComment.length}
                reviews={ratingComment}
                defaultRating={0}
                size={20}
                onFinishRating={this._onFinishRating}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "center",
                marginLeft: "auto",
                marginRight: "auto",
                padding: 1,
              }}
            >
              {this._displayPreviously(this.state.index - 1)}

              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={styles.shadow_title}
                  onPress={() => {
                    this.changePlay();
                  }}
                >
                  <Icon
                    reverse
                    color="#caaffe"
                    size={70}
                    name={this.state.play ? "pause" : "play"}
                  />
                </TouchableOpacity>
              </View>

              {this._displayNext(this.state.index + 1)}
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ marginLeft: 30, marginTop: 5 }}>
                <Icon color="#7158B6" size={30} name="sound" />
              </View>

              <View
                style={{
                  flex: 1,
                  alignItems: "stretch",
                  justifyContent: "center",
                  marginLeft: 20,
                  marginRight: 30,
                  marginBottom: 30,
                }}
              >
                <Slider thumbTintColor="#caaffe" />
              </View>
            </View>

            <Divider style={{ backgroundColor: "#caaffe" }} />
          </View>
        </View>

        <View style={{ backgroundColor: "#caaffe" }}>
          <Text h4 style={styles.title_description}>
            {" "}
            Description{" "}
          </Text>
          <Text style={styles.description}>{this.state.item.description}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollview_container: {
    flex: 1,
    backgroundColor: "#caaffe",
  },
  image: {
    height: 250,
    width: 250,
    margin: 10,
    marginTop: 40,
    borderRadius: 200,
    marginRight: "auto",
    marginLeft: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  image_animation_reading: {
    height: 70,
    width: 70,
    margin: 4,
    marginTop: 5,
    marginRight: "auto",
    marginLeft: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    textAlign: "center",
    margin: 15,
    fontSize: 20,
    color: "white",
  },
  title: {
    textAlign: "left",
    margin: 10,
    marginBottom: 5,
    color: "black",
    fontWeight: "700",
  },
  title_description: {
    textAlign: "center",
    marginTop: 10,
    color: "white",
    fontWeight: "500",
  },
  title_auteur: {
    textAlign: "left",
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 10,
    color: "#ababab",
    fontWeight: "700",
    fontSize: 20,
  },
  shadow: {
    shadowColor: "#caaffe",
    shadowOffset: { width: 5, height: 6 },
    shadowRadius: 1,
    shadowOpacity: 0.5,
    marginTop: -30,
  },
  shadow_title: {
    shadowColor: "#EDDFFE",
    shadowOffset: { width: 6, height: 4 },
    shadowOpacity: 1,
  },
});

const mapStateToProps = (state) => {
  return {
    favoritesStories: state.toggleFavorite.favoritesStories,
  };
};

export default connect(mapStateToProps)(StoryDetail);
