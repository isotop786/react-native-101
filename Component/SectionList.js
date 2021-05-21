import React from 'react';
import {View,SectionList,StyleSheet,Text} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:22,
        paddingBottom:4,
        marginBottom:10
    },

    sectionHeader: {
        paddingTop:2,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:4 ,
        fontSize:14,
        fontWeight:'bold',
        backgroundColor:'rgba(207,247,247,1.0)'
    },
    item: {
        padding:10,
        fontSize:18,
        height:44
    },
    heading: {
        padding:3,
        fontSize:22,
        fontFamily:'',
        fontWeight:'bold',
        color:'#777',
        textAlign:'center'
    }
});


const countries = [
    {title:'D',data:['Dellas','Delawar','Detorit','Denmark']},
    {title:'E',data:['Estonia','English','Equal']},
    {title:'F',data:['Finland','France','Faruq','Ferrary']},
    {title:'I',data:['India','Italy',]}
]



const SList = () =>{





    return(
        <View style={styles.container}>
            <Text style={styles.heading}>SectionList Demo</Text>
            <SectionList
            
            // sections={[
            //     {title:'D',data:['Dellas','Delawar','Detorit','Denmark']},
            //     {title:'E',data:['Estonia','English','Equal']},
            //     {title:'F',data:['Finland','France','Faruq','Ferrary']}
            // ]}

            sections ={countries.map((c)=>{
                return {
                    title:c.title, data:c.data
                }
            })}


            renderItem={({item})=> <Text style={styles.item}>{item}</Text>}

            renderSectionHeader={({section})=> <Text style={styles.sectionHeader}>{section.title}</Text>}
            
            keyExtractor={(item,index)=> index}
            />
        </View>
    )
}



export default SList;
