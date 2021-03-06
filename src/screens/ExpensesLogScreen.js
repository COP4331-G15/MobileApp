import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ExpensesList from '../lists/ExpensesList';
const BASE_URL = 'https://cop4331-test-2.herokuapp.com/draftapi/group/';



export function ExpensesLogScreen(navigation){
  // console.log('Members Screen');
  // console.log('Global members id in Expense Log Screen= ' + global.groupId);
  // console.log('Global user id in Expense Log Screen= ' + global.userId);
  // console.log('Global token in Expense Log Screen= ' + global.token);


// Set the groups variable
const [expenses, setExpenses] = React.useState(null);

// Retrieve groups
const handleExpenses = async () => {
  // Check of a group is selected
  // Group is not selected
  if (global.groupId === null) {
    return;
  }
  // Group is selected
  else {
    try {
      // Respone variable from the API
      const response = await fetch(
        BASE_URL + global.groupId + '/expenses',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: global.token,
          },
        },
      );

      // Parse the response
      var txt = await response.text();
      //console.log('Expense Screen - txt = ' + txt);
      var res = JSON.parse(txt);
      //console.log('Expense Screen - res = ' + res);

      // Process the response
      // No permission
      if (response.status === 401) {
        //Alert.alert('Permission Error', response.status, [{text: 'OK'}]);
        //console.log("Permission Error");
      }
      // Error
      else if (response.status !== 200) {
        //Alert.alert('Error', response.status, [{text: 'OK'}]);
        //console.log("Failed");
      }
      // Success, Data found!!
      else {
        //setGroups(cloneDeep(res.groups));
        //Alert.alert('Success', 'Data Found!!', [{text: 'OK'}]);
        setExpenses(res.expenses);
        //console.log('Inside Members Screen => ' + expenses);
      }
    } catch (e) {
      Alert.alert('Error', e.toString(), [{text: 'OK'}]);
      //console.log("Error: " + e.toString());
    }
  }
};


handleExpenses();


  return (
    <View style={styles.container}>
      <ExpensesList
        itemList= {expenses}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    
  },

  text: {
    fontSize: 32,
    color: 'white',
  },
});