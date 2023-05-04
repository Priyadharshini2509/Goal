import { useState } from 'react';
import {View,TextInput,Button,StyleSheet,Modal,Image} from 'react-native';

function GoalInput(props) {
    const [enteredGoalText,setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return(
      <Modal visible ={props.visible} animationType="slide" style={styles.input} statusBarTranslucent={true}>
        <View style ={styles.input}>
          <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput 
        style={styles.textInput} 
        placeholder='Your Course goal!'
        onChangeText={goalInputHandler}
        value={enteredGoalText}/>
        <View style={styles.buttonContainer}>
        <View style={styles.button1}>
        <Button title='Cancel' 
        onPress={props.onCancel} color= "#da1d72"></Button>
        </View>
        <View style={styles.button1}>
        <Button 
        title='Add Goal' 
        onPress={addGoalHandler} color="#5e0acc"/>
        </View>
        </View>
        </View>
      </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    input:{
        flex : 1,
        // flexDirection:'column',
        justifyContent : 'center',
        alignItems : 'center',
        // marginBottom : 24,
        padding:16,
        backgroundColor : '#534c5c'
        // borderBottomWidth : 1,
        // borderBottomColor :'#cccccc'
      },
      image:{
        width:150,
        height:130,
        margin:20
      },
      textInput:{
        borderWidth : 1,
        borderColor : '#e4d0ff',
        backgroundColor :'#e4d0ff',
        color:"#3906c5",
        borderRadius:6,
        width : '100%',
        padding : 16
      },
      buttonContainer:{
        marginTop:16,
        flexDirection:'row'
      },
      button1:{
        width: 100,
        marginHorizontal: 8
      }
});