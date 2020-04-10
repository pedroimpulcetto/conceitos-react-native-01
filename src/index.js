import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import styles from './styles';

import api from './services/api';

export default function App() {
  const [git, setGit] = useState([]);
  const [newGit, setNewGit] = useState('');

  useEffect(() => {
    api.get('users/pedroimpulcetto/repos').then(res => {
      setGit(res.data);
    });
  }, []);

  function handleNewRep() {
    setGit([...git, {id: Date.now(), name: newGit}]);
    setNewGit('');
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={text => setNewGit(text)}
          value={newGit}
          autoCapitalize="words"
        />

        <FlatList
          data={git}
          keyExtractor={repository => repository.id}
          renderItem={({item}) => (
            <View style={styles.box}>
              <Text style={styles.title}>{item.name}</Text>
            </View>
          )}
        />

        <TouchableOpacity
          onPress={handleNewRep}
          activeOpacity={0.8}
          style={styles.button}>
          <Text style={styles.buttonTitle}>New Respository</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}
