import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          <Text>This is my version</Text>
        </ScrollView>
      </View>
    );
  }
}
