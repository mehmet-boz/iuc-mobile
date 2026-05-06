import Feather from '@expo/vector-icons/Feather';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Image source={require('./assets/images/profile.jpeg')} style={styles.avatar} />
        </View>
        <Text style={styles.headerText}>My React Native App</Text>
        <Feather name="search" size={24} color="#353535" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',

  },
  header: {
    backgroundColor: '#fff',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',

  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#141414',
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: '#777777',
    borderRadius: 25,
    overflow: 'hidden',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
  }
});
