
import { LinearGradient } from "expo-linear-gradient";
import {  StyleSheet, Text, TouchableWithoutFeedback, View, Image, Linking } from 'react-native';

export default function App() {

  const openUrl = (url) => {
    Linking.openURL(url)
  }
  const randomValue = (max) => {
    return Math.random() * max;
  }
  

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#DE4377', '#2C5CDE']}
        start={{x: 0, y: randomValue(-0.5)}}
        end={{x: randomValue(1.5), y: randomValue(0.9)}}
        style={styles.background}
      >
     {/* Personal Photo */}
     <View style={styles.headerWrapper}>
     <Image
        style={styles.img}
        source={require('./assets/img.png')}
      />
      <Text style={styles.sectionTitle}>Enrico Peruselli</Text>
      <Text style={styles.roleTitle}>Front End Developer</Text>
     </View>
     <View style={styles.sectionWrapper}>
        <TouchableWithoutFeedback onPress={() => openUrl('https://github.com/EnricoPeruselli')}>
          <Image
            style={styles.imgContact}
            source={require('./assets/github.png')}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => openUrl('mailto:peruselli.enrico@gmail.com')}>
          <Image
            style={styles.imgContact}
            source={require('./assets/email.png')}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => openUrl('https://cv-enrico.s3.eu-central-1.amazonaws.com/cv-enrico-peruselli.pdf')}>
          <Image
            style={styles.imgContact}
            source={require('./assets/cv.png')}
          />
        </TouchableWithoutFeedback>
     </View>

      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    position: 'relative'
  },
  headerWrapper: {
    paddingTop: 180,
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff',
    fontFamily: 'Helvetica',
    letterSpacing: 2,
    marginBottom: 10,
    textAlign: 'center',
  },
  roleTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff',
    fontFamily: 'Helvetica',
    letterSpacing: 2
  },
  sectionWrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
  },
  background: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    transitionDuration: '1s'
  },
  img: {
    width: '40%',
    height: '40%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 40,
  },
  imgContact: {
    width: '15%',
    height: '15%',
    resizeMode: 'contain',
    marginBottom: 40,
    
  },
});
