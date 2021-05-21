import React from 'react'
import {Image} from 'react-native'

const Logo = ()=>{
    return(
        <Image
        source={require('../res/logo2.png')}
        style={{width: 64,height:64}}
        >

        </Image>
    )
}


export default Logo;