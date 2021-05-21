import React, {useState} from 'react';
import {Text,TextInput,View,ScrollView} from 'react-native';

const Pizza = ()=>{
    const [text,setText] = useState('')

    return (
        <View>
            <TextInput
            style={{height:40}}
            placeholder="Type here to get Pizza"
            defaultValue={text}

            onChangeText={text=>setText(text)}
            />

            {/* <Text style={{padding:10,fontSize:42}}>
            {text.split(' ').map((word)=> word && '🍕').join(' ')}
            </Text> */}

<Text style={{padding: 10, fontSize: 42}}>  
        {/* {text.split(' ').map((word) => word && '🍕').join(' ')} */}
        {text.split(' ').map(word=> word && '🍕').join(' ')}
      </Text>
        </View>
    )
}

export default Pizza;