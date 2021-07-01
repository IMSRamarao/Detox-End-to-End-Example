import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <View style={styles.screen}>
      <Modal
        testID={'show-model'}
        transparent
        visible={props.visible}
        animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput
            testID={'course-goal'}
            placeholder="Course Goal"
            placeholderTextColor="black"
            style={styles.input}
            autoFocus
            onChangeText={goalInputHandler}
            value={enteredGoal}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button_cancel}>
              <Button
                testID={'cancel-btn'}
                title="Cancel"
                color="white"
                onPress={props.onCancel}
              />
            </View>
            <View style={styles.button_add}>
              <Button
                testID={'add-btn'}
                title="Add"
                color="black"
                onPress={addGoalHandler}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    shadowColor: 'white',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#000000a0',
    marginLeft: '10%',
    marginTop: '80%',
    width: '80%',
    maxWidth: 400,
    maxHeight: 500,
    height: '20%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    borderColor: 'white',
    color: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
  },
  button_cancel: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: '40%',
  },
  button_add: {
    backgroundColor: 'orange',
    borderRadius: 10,
    width: '40%',
  },
});

export default GoalInput;
