import React from 'react'
import {Text,Image,View} from 'react-native'

const Maruf = ()=>{
    return(
        <View>
            <Text>I am Maruf</Text>
            <Image
            source={require('../res/Maruf.jpg')}
            style={{width:80,height:80,borderRadius:100}}
            ></Image>
        </View>
    )
}


export default Maruf;