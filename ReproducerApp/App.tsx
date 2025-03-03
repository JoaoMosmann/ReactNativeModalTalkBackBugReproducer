/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  Modal,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView>
        <Header/>
        <View>
          <Button title="Open Modal" onPress={() => setIsOpen(true)} />
          <Modal visible={isOpen} onRequestClose={() => setIsOpen(false)}>
            <View>
              <Text role="heading">Title</Text>
              <Text>Body description</Text>
              <Text>Body description 2</Text>
              <Text>Body description 3</Text>
              <Button title="Close Modal" onPress={() => setIsOpen(false)} />
            </View>
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
}


export default App;
