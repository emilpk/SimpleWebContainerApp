import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';

const targetSite = 'https://www.sportingnews.com/uk/football/news';

export default function App() {
  const newLocal = {width: '100%', height: '100%'};
  return (
    <View style={styles.container}>
      <View style={newLocal}>
        <WebView source={{uri: targetSite}} onLoad={console.log('Loaded')} />
      </View>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
