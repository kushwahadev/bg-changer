import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [randomBackground, setRandomBackground] = useState('#FFFFFF');
  const [alignItem, setAlignItem] = useState('center');
  const [justifyContent, setJustifyContent] = useState('center');

  const getAlign = () => {
    let property = '';
    const arr = [
      'center',
      'normal',
      'strech',
      'flex-start',
      'flex-end',
      'start',
      'end',
      'baseline',
      'initial',
      'inherit',
    ];
    const arr2 = [
      'center',
      'space-between',
      'space-around',
      'flex-start',
      'flex-end',
      'space-evenly',
      'initial',
      'inherit',
    ];
    let property2 = arr2[Math.floor(Math.random() * 8)];
    property += arr[Math.floor(Math.random() * 10)];
    setAlignItem(property);
    setJustifyContent(property2);
  };

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(color);
    getAlign();
  };
  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View
        style={[
          styles.container,
          {
            backgroundColor: randomBackground,
            alignItems: alignItem,
            justifyContent: justifyContent,
          },
        ]}>
        <TouchableOpacity onPress={generateRandomColor}>
          <View style={[styles.actionBtn]}>
            <Text style={[styles.actionBtnText]}>Press ME</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtn: {
    width: 120,
    borderRadius: 5,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  actionBtnText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
