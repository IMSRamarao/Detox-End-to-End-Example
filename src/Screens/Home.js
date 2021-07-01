import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Button,
  FlatList,
  ImageBackground,
} from 'react-native';

import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';

export default function Home(props) {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const logoutAction = () => {
    const {navigation} = props;

    navigation.replace('LoginScene');
  };

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), value: goalTitle},
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen} testID={'welcome-to-home'}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: 'https://wallpapercave.com/wp/wp3518042.jpg',
        }}>
        <View style={styles.addGoalContainer}>
          <Button
            color="black"
            testID={'add-new-goal'}
            title="Add New Goal"
            onPress={() => setIsAddMode(true)}
          />
        </View>
        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancel={cancelGoalAdditionHandler}
        />
        <FlatList
          testID={'data-displayed'}
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
            />
          )}
        />
        <View style={styles.buttonContainer}>
          <Button
            color="white"
            testID={'logout'}
            title="Log Out"
            onPress={logoutAction}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: 'red',
    justifyContent: 'flex-end',
    borderRadius: 10,
  },
  image: {
    flex: 1,
    padding: 50,
  },
  addGoalContainer: {
    backgroundColor: 'orange',
    borderRadius: 10,
  },
});

// import React from 'react';
// import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

// export default class HomeScene extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {}

//   logoutAction = () => {
//     const {navigation} = this.props;

//     navigation.replace('LoginScene');
//   };

//   render() {
//     return (
//       <View style={styles.MainContainer}>
//         <View style={styles.Container}>
//           <Text testID={'welcome-to-home'}>Welcome to Home</Text>
//           <View>
//             <TouchableOpacity onPress={this.logoutAction} testID={'logout-btn'}>
//               <Text>Log out</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//   },
//   Container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
