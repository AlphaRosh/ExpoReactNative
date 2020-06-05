import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

const ResultsDetail = ({result}) => {
    return (
        <View style={styles.containerStyle}>
            <Image
                style={styles.imageStyle}
                source={{uri:result.thumb===''?null:result.thumb}}
                    />
            <Text style={styles.name}>{result.name}</Text>
            {/* <Text style={styles.innerTextStyle}>
                Cuisines : {result.cuisines}
            </Text> */}
            <Text style={styles.innerTextStyle}>
                Timings:{result.timings}
            </Text>
            <Text style={[styles.innerTextStyle,{color:`#${result.user_rating.rating_color}`}]}>
                User Rating : <FontAwesome name="star" style={{color:`#${result.user_rating.rating_color}`}} /> {result.user_rating.aggregate_rating}             
                
            </Text>
        </View>
    )
}

export default ResultsDetail

const styles = StyleSheet.create({
    containerStyle: {
        marginLeft: 15
       
    },
    imageStyle: {
        width: 250,
        height: 150,
        borderRadius: 5,
        marginBottom:5
    },
    name: {
        fontWeight:'bold'
    },
    innerTextStyle: {
        fontSize: 15,
        fontStyle: 'italic',
        marginLeft: 15,
        marginBottom: 5
    }
})
