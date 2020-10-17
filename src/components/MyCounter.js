import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const MyCounter = () => {
  const [counter3, setCounter3] = useState(0);
  const [counter2, setCounter2] = useState(0);

  return (
    <SafeAreaView style={{flex: 6, backgroundColor: '#ffecb3'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.text11}>
          every 10 counts (plus or minus does not matter) the bottom counter
          increases or decreases one number
        </Text>

        <View style={{flexDirection : "row" , marginVertical : 20}}>
          <Text style={styles.counter}>{counter3}</Text>
          <Text style={styles.counter}>{counter2}</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            setCounter3(counter3 + 1);
            if (counter3 % 10 == 0) {
              if (counter3 === 0) {
                null;
              } else {
                setCounter2(counter2 + 1);
              }
            }
          }}
          onLongPress={() => alert('🤣💥You will break the key slowly💥🤣')}
          style={styles.buttonContainer}>
          <Text style={styles.textStyle}>UP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCounter3(counter3 - 1);
            if (counter3 % 10 == 0) {
              if (counter3 === 0) {
                null;
              } else {
                setCounter2(counter2 - 1);
              }
            }
          }}
          onLongPress={() => alert('🤣💥You will break the key slowly💥🤣')}
          style={styles.buttonContainer}>
          <Text style={styles.textStyle}>DOWN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCounter3(0);
            setCounter2(0);
          }}
          onLongPress={() => alert('🤣💥You will break the key slowly💥🤣')}
          style={styles.buttonContainer}>
          <Text style={styles.textStyle}>RESET</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyCounter;

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
  },

  buttonContainer: {
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
    fontSize: 16,
    borderWidth: 1,
    paddingHorizontal: 5,
    backgroundColor: '#607d8b',
    color: 'white',
    // marginTop : 20,
    // marginBottom : 20,
    marginHorizontal : 3,
    borderRadius : 5
  }
});
