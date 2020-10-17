import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const MyNumber = () => {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);

  return (
    <View style={{flex: 4,  backgroundColor: '#b2dfdb'}}>
      <Text style={styles.text11}>
        the left counter increments by one. the counter on the right decrements
        one number
      </Text>
      <View style={styles.container1}>
        <View style={styles.conta1}>
          <Text style={styles.counter}>{counter}</Text>
          <TouchableOpacity
          onPress={() => setCounter(counter + 1)} 
          onLongPress={() => alert('🤣💥You will break the key slowly💥🤣')}
          style={styles.buttonContainer}>
          <Text style={styles.textStyle}>UP</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.conta2}>
          <Text style={styles.counter}>{counter1}</Text>
          <TouchableOpacity
          onPress={() => setCounter1(counter1 - 1)} 
          onLongPress={() => alert('🤣💥You will break the key slowly💥🤣')}
          style={styles.buttonContainer2}>
          <Text style={styles.textStyle}>DOWN</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MyNumber;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  conta1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  conta2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#4F4F4F',
    padding: 10,
    margin: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonContainer2: {
    backgroundColor: '#4F4F4F',
    padding: 10,
    margin: 13,
    borderRadius: 5,
   
    alignItems: 'center',
  },
  textStyle: {
      
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 50,
  },
  counter: {
    fontSize: 75,
    borderWidth: 1,
    paddingHorizontal: 15,
    backgroundColor: 'black',
    color: 'white',
    marginHorizontal : 33,
    borderRadius : 15
  },
  text11 : {
    marginTop : 10,
    textAlign : "center",
    fontSize: 16,
    borderWidth: 1,
    paddingHorizontal: 5,
    // backgroundColor: 'black',
    // color: 'white',
    // marginTop : 0,
    marginBottom : 20,
    marginHorizontal : 3,
    borderRadius : 5, 
    backgroundColor : '#ffecb3'
  }
});
