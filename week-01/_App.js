import { StyleSheet, View } from 'react-native';

export default function App() {
  //JSX - Js içerisinde işaretleme dilini kullanmamızı sağlayan bir sözdizimi uzantısıdır. React Native'de kullanıcı arayüzlerini tanımlamak için kullanılır.
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
      <View style={styles.greenBox}></View>
      <View style={styles.redBox}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
  greenBox: {
    width: 80,
    height: 50,
    backgroundColor: 'green',
  },
  redBox: {
    width: 40,
    height: 70,
    backgroundColor: 'red',
  }
});
