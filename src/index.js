import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Title, Box, Button, Input, Edit, Editor} from './styles';

import api from './services/api';

export default function App() {
  const [git, setGit] = useState([]);
  const [newGit, setNewGit] = useState({name: ''});

  useEffect(() => {
    api.get('users/pedroimpulcetto/repos').then(res => {
      setGit(res.data);
    });
  }, []);

  function handleNewRep(item) {
    if (item.id) {
      let newList = git.map(i => {
        if (i.id === item.id) {
          i = item;
        }
        return i;
      });
      setGit(newList);
      setNewGit({name: ''});

      return;
    }

    setGit([...git, {id: Date.now(), name: item.name}]);
    setNewGit({name: ''});
  }

  function handleEdit(item) {
    setNewGit({id: item.id, name: item.name});
  }

  return (
    <>
      <Container>
        <Input
          onChangeText={text => setNewGit({...newGit, name: text})}
          value={newGit.name}
          autoCapitalize="words"
          autoCorrect={false}
          placeholder="Insirt here.."
          placeholderTextColor="#737373"
          textAlign="left"
        />

        <FlatList
          data={git}
          keyExtractor={repository => String(repository.id)}
          renderItem={({item}) => (
            <Editor>
              <Box>
                <Title>{item.name}</Title>
              </Box>
              <Edit onPress={() => handleEdit(item)}>
                <Icon name="edit" size={30} color="#fff" />
              </Edit>
            </Editor>
          )}
        />

        <Button onPress={() => handleNewRep(newGit)} activeOpacity={0.8}>
          <Title>
            {newGit.id ? 'Save Repository' : 'Add Repository'}
            <Icon name="add" size={20} />
          </Title>
        </Button>
      </Container>
    </>
  );
}
