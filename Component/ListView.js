import React, {useState, useEffect} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 30,
  height: 30,
};

const LocationList = () => {
  const [lists, setList] = useState([]);
  const [text, setText] = useState('');

  const onPressAddBtn = () => {
    setList(preLists => [...preLists, text]);
    setText('');
  };
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image source={logo} />
        <Text style={styles.text}>{`저장하고 싶은 장소를 \n적어주세요`}</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="장소 이름"
          value={text}
          onChangeText={text => setText(text)}
        />

        <TouchableOpacity onPress={onPressAddBtn} style={styles.button}>
          <Text style={styles.buttonLabel}>추가</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listView}>
        {lists.map(list => {
          return <Text style={styles.listText}>{list}</Text>;
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 40,
  },
  container: {
    marginTop: 30,
    padding: 70,
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  },
  inputView: {
    flexDirection: 'row',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    minWidth: '80%',
  },
  listView: {borderRadius: 4, backgroundColor: '#DB7093'},

  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '20%',
    height: 40,
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '500',
    color: 'coral',
    lineHeight: 30,
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
  listText: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '500',
    color: 'white',
    marginBottom: 3,
    height: 30,
    lineHeight: 30,
    backgroundColor: '#FFB6C1',
  },
});
export default LocationList;
