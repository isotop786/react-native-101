import React, {useState} from 'react';
import {View,Text,Button} from 'react-native';

const Cat = (props)=>{
    const name = 'Karu';
    const [isHangry, setHangry] = useState(true);

    const getFullName = (fn,mn,ln)=>{
        return fn+" "+mn+" "+ln ;
    }

    return (
        <View>
       <Text> Hello, this is a Cat , my name is {props.name} </Text>
        
        <Text>I am {isHangry ?'Hangry':'Full'}</Text>
        
        <Button
         
        title={isHangry?"Pour some milk":"Thank you"}
        disabled={!isHangry}
        onPress={()=>{
            setHangry(false)
        }}
        >
        </Button>

        </View>

        )
}

export default Cat;