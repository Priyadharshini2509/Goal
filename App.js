import { useState } from 'react';
import { StyleSheet,View,FlatList,Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalInput from './components/GoalInput';
import GoalItem from './components/Goalitem';

export default function App() {
  const [modalIsVisible,setModalIsVisible] = useState(false)
  const [courseGoals,setCourseGoals] = useState([]);

  function startAddGoalHandler(){
    setModalIsVisible(true)
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text :enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals =>{
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <>
    <StatusBar style='light' />
    <View style={styles.container}>
      <Button 
      title='Add New Goal' 
      color= "#b07ef2" 
      onPress={startAddGoalHandler}/>
      <GoalInput 
      visible ={modalIsVisible} onAddGoal ={addGoalHandler} onCancel ={endAddGoalHandler}/>
        <View style ={styles.goalsContainer}>
          <FlatList data={courseGoals} 
              renderItem = {(itemData) =>{
                return (
                  <GoalItem 
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}/>
                  );
          }} 
              keyExtractor ={(item,index) =>{
                return item.id;
          }}
          alwaysBounceVertical = {false} />
        {/* <Text>List of goals</Text> */}
        {/* {courseGoals.map((goal) => (
        <View style={styles.goalItem} key={goal}>
          <Text style={styles.textgoal}>{goal}</Text>
        </View>
         ))} */}
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    padding : 50,
    paddingHorizontal : 16,
    backgroundColor :"#1e085a" 
  },
  goalsContainer:{
    flex:4
  },
});
