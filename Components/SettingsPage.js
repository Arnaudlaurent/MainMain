import React from "react";
import { Text, View, FlatList } from "react-native";
import ConnectionPage from "../Components/ConnectionPage";
import AboutUsPage from "../Components/AboutUsPage";

import settings from "../Utils/Settings";

class SettingsPage extends React.Component {
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#caaffe",
        }}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={settings}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={({ item }) => (
            <Text style={styles.listItem}>{item.title}</Text>
          )}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    borderColor: "black",
    borderBottom: "1px solid",
    backgroundColor: "#fff",
  },
  listItem: {
    backgroundColor: "#fff",
    padding: 20,
    marginHorizontal: 2,
    fontSize: 20,
  },
};

export default SettingsPage;
