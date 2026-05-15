import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image style={styles.image} source={require('./assets/react-vs-react-native.webp')} />
        <Image style={styles.networkImage} source={{ uri: "https://www.aceinfoway.com/blog/wp-content/uploads/2020/04/why-should-you-choose-react-native-for-your-next-mobile-development-project.jpg" }} />
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: '#fff' }}>This is a button</Text>
        </TouchableOpacity>
        <Button title="This is a standart button" />
        <TextInput style={styles.input} defaultValue="Enter a value" />
        <View style={styles.box}>
          <Text>Lorem ipsum dolor sit amet, consectetur</Text>
        </View>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae ligula urna. Duis vitae feugiat eros. Curabitur quis nunc sed risus vestibulum volutpat nec vitae ex. In facilisis dolor quis turpis sagittis sagittis. Fusce nec interdum nunc. Sed porttitor ultricies diam at luctus. Nullam volutpat est lacus, quis rutrum neque vehicula eu. Curabitur lacus lorem, sodales a sodales vitae, hendrerit eget ligula. Maecenas ut tristique purus. Proin consectetur lectus nec felis fermentum, id ornare felis sagittis. Praesent ac nulla felis. In faucibus varius est vitae facilisis. Nulla iaculis tellus non egestas ultrices. Vestibulum in risus id dolor dapibus consequat commodo malesuada ante. Morbi maximus scelerisque urna vel eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Etiam suscipit orci quam. Morbi nec venenatis eros. Ut est velit, pulvinar et lectus a, bibendum dapibus ex. Vestibulum fringilla bibendum iaculis. Maecenas nec porta elit. Etiam ut suscipit orci. Maecenas malesuada libero vitae purus mollis bibendum. Suspendisse potenti. Praesent vitae facilisis ante. Nunc et odio id felis volutpat placerat vitae posuere ex. Sed volutpat quis massa nec convallis.
          Morbi dictum dui vel efficitur malesuada. Sed ante velit, elementum vel orci rhoncus, maximus tempus dui. Ut congue dolor in malesuada lobortis. Quisque congue ligula orci, eget rutrum urna viverra eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque congue dui a urna posuere tristique. Duis et condimentum nisi. Proin lobortis nisl sed diam suscipit placerat. Pellentesque ante nisl, efficitur ut lorem nec, aliquam auctor eros.
          Fusce luctus tellus nulla, sit amet laoreet nibh rhoncus non. Sed sit amet elementum libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque laoreet turpis nec urna dapibus, a interdum ante hendrerit. Nullam placerat, sem luctus mattis fermentum, mauris metus rutrum ipsum, nec fermentum lorem ex sit amet ipsum. Aenean rhoncus eros dignissim arcu imperdiet, sed dignissim leo varius. Duis a libero placerat, dapibus sapien at, hendrerit lectus. Morbi congue sem ac leo dapibus, at efficitur lectus facilisis. Donec consequat risus id elit laoreet, vitae auctor elit posuere.
          Suspendisse non odio ac urna dictum vulputate sed sit amet lacus. Duis bibendum diam non porta bibendum. Vivamus quis lectus eget ligula sodales commodo. Cras tristique neque ut justo feugiat, ac commodo nibh condimentum. Morbi eget leo eu quam scelerisque porttitor. Sed justo libero, sagittis quis condimentum et, faucibus et odio. Maecenas ipsum ex, egestas vel augue eget, euismod pharetra metus. Nam dapibus tellus quis metus commodo, a tincidunt risus blandit. Nam nec malesuada dolor, efficitur faucibus tortor. Morbi aliquam mattis diam, sed pretium quam condimentum quis. Pellentesque lectus quam, interdum id quam in, bibendum sollicitudin tellus.
          Proin elementum erat id tortor rhoncus vestibulum. Maecenas dignissim tempor tellus, eu pharetra risus imperdiet non. Aliquam posuere risus quam, at rhoncus diam vestibulum a. Suspendisse vel urna magna. Donec ut diam tortor. Mauris consectetur pellentesque mauris facilisis congue. Phasellus nisl tortor, gravida vitae felis et, euismod iaculis nisl. Aenean sed nunc et ante blandit gravida ut a ipsum. Proin dapibus lobortis est quis pulvinar. Nunc lacus velit, aliquam id erat nec, finibus luctus est. Morbi in sem justo.
          Etiam mattis, erat eu vestibulum mattis, metus quam vestibulum mi, a euismod lacus nisl venenatis elit. Donec turpis velit, porttitor eu ornare vel, porta non odio. Sed ut faucibus ligula. Cras dictum enim rhoncus diam consequat, non auctor nisl viverra. Integer aliquet risus eros, id fermentum ex facilisis sed. Mauris congue leo tellus, ut mattis libero venenatis et. Etiam porttitor erat eu bibendum faucibus. Suspendisse vel nulla porttitor, ultrices libero sit amet, blandit ex. Duis vitae quam elit. Praesent sem urna, fermentum non dapibus eget, lobortis vel orci. Donec ullamcorper nisi vel accumsan varius. Vestibulum et dui ac arcu aliquam tempor. Fusce interdum, arcu non gravida facilisis, felis eros interdum mi, vel cursus velit sapien at magna. In ultricies mauris a erat elementum, eu aliquet felis condimentum.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    objectFit: 'contain',
    backgroundColor: '#f55'
  },
  networkImage: {
    width: 100,
    height: 100,
  },
  button: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#ff5555dd',
    borderRadius: 15
  },
  scrollContainer: {
    backgroundColor: '#bedbff',
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 50,
    margin: 30,
    borderWidth: 10,
    borderColor: '#55f'
  },
  box: {
    width:100,
    height:100,
    backgroundColor:'#a30f0f',
    padding:20,
    borderColor:'#000',
    borderWidth:10,
    margin:50

  },
  input:{
    width:'80%',
    height:40,
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#000'
  }
});
