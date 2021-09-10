/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {Alert, View, FlatList} from 'react-native';
import {Button, Icon, ListItem, Avatar} from 'react-native-elements';
import UsersContext from '../../context/UsersContext';

const UserList = ({navigation}) => {
  const {state, dispatch} = useContext(UsersContext);

  const getUserItem = ({item: user}) => {
    return (
      <ListItem
        key={user.id}
        onPress={() => navigation.navigate('UserForm', user)}
        bottomDivider>
        <Avatar source={{uri: user.avatarUrl}} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        {getActions(user)}
      </ListItem>
    );
  };

  const getActions = user => {
    return (
      <>
        <Button
          onPress={() => navigation.navigate('UserForm', user)}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
        />
        <Button
          onPress={() => confirmUserDeletion(user)}
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </>
    );
  };

  const confirmUserDeletion = user => {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            type: 'deleteUser',
            payload: user,
          });
        },
      },
      {
        text: 'Não',
      },
    ]);
  };

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  );
};

export default UserList;
