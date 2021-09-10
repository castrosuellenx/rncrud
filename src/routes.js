/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, Icon} from 'react-native-elements';

const Stack = createStackNavigator();

import UserList from './pages/UserList';
import UserForm from './pages/UserForm';

const StackScreens = () => {
  const screenOptions = {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  return (
    <Stack.Navigator initialRouteName="UserList" screenOptions={screenOptions}>
      <Stack.Screen
        name="UserList"
        component={UserList}
        options={({navigation}) => {
          return {
            title: 'Lista de Usuários',
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('UserForm')}
                type="clear"
                icon={<Icon name="add" size={25} color="#fff" />}
              />
            ),
          };
        }}
      />
      <Stack.Screen
        name="UserForm"
        component={UserForm}
        options={{
          title: 'Formulário de Usuários',
        }}
      />
    </Stack.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <StackScreens />
    </NavigationContainer>
  );
};

export default Routes;
