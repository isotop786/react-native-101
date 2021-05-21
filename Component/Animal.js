import React from 'react'
import {Text} from 'react-native'

const Animal = (props)=>{
    const init = ()=>{
        if(props.type){
            switch(props.type){
                case 'dog': 
                    return (
                        <Text>Waff Waff! I am a dog</Text>
                        
                    )
                    break;
                    case 'cat': 
                    return(
                        <Text>Meow meow, I am a cat{props.name ? 'I have a name' : 'I forgot my name'}</Text>
                    )
                    break;

                    }
        }else{
            return (
                <Text>I don't this animal</Text>
            )
        }
    }
    return(
        <>
         {
           init()
         }
        </>
    )
}

export default Animal;