import React from 'react'
import { FlatList, StyleSheet, Text, View,Button} from 'react-native'

const styles = StyleSheet.create({
    container :{
        flex:1,
        paddingTop:22
    },
    item: {
        padding:10,
        fontSize:18,
        height:44
    },
    btn:{
        margin:10,
        padding:5,
        fontFamily:'Arial',
        fontWeight:'bold'
    }
});

const FList = ()=>{
    const data = [
        {id:1, name:'apple'},
        {id:1, name:'Orange'},
        {id:1, name:'Grape'},
        {id:1, name:'Pome Granett'},
        {id:1, name:'Strawberry'}
    ]
    return(
        <View style={styles.container}>
            <Text>FlatList Demo</Text>
            <FlatList style={{margin:10}}
            data={
                data.map((d)=>{
                  return {key:d.name}
                })
                // [
                // {key:'React'},
                // {key:'React Native'},
                // {key:'Javascript'},
                // {key:'Vue'} 
                // ]
            
            }

                // renderItem={({item})=> <Text style={styles.item}>{item.key}</Text>}
          
                renderItem= {({item})=> <Button  title={item.key}></Button>}
              
                // renderItem={ ({item})=> <Text style={styles.item}>{item.key}</Text> }

                renderItem = {({item}) => <Text style={styles.item}>{item.key}</Text>}
            
            
            />
        </View>
    )
}



export default FList;