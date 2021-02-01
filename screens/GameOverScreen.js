import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import Title from '../components/TitleText';
import MainButton from '../components/MainButton';

import Colors from '../constants/colors';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Title>The Game is Over!</Title>
      <View style={styles.imageContainer} >
        {/* <Image source={require('../assets/success.png')} style={styles.image} resizeMode="cover" /> */}
        <Image
          source={{ uri: 'https://static.wikia.nocookie.net/picsou/images/8/86/Balthazar_Picsou_2.jpg/revision/latest?cb=20160414111124&path-prefix=fr' }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds
         to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>.
      </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>
        NEW GAME
      </MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  resultContainer: {
    marginHorizontal: 30,
    marginBottom: 30
  },
  resultText: {
    textAlign: 'center',
    fontSize: 18
  },
  highlight: {
    color: Colors.primary,
  },
});

export default GameOverScreen;
