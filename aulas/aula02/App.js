import { View, StyleSheet } from 'react-native';
import Box from './components/Box';
// App.js

// componente principal
const App = () => (
  <View style={styles.container}>
    <Box color={'red'} size={30}></Box>
    <Box color={'green'} size={30}></Box>
    <Box color={'blue'} size={30}></Box>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});

export default App;