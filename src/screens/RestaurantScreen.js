import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    ScrollView,
    YellowBox,
    Button,
    Linking
} from 'react-native'

YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
  ])

const RestaurantScreen = (props) => {
    // console.log(props.navigation.state);
    const { item } = props.navigation.state.params;
    const { restaurant } = item;
    return (
        <>
            <View style={styles.container}>
                <ScrollView>
                    <Image
                        style={styles.image}
                        source={{
                            uri: restaurant.thumb === ''
                                ? null
                                : restaurant.thumb
                        }} />
                    <Text style={styles.title}>{restaurant.name}</Text>
                    <Text style={styles.name}>Address:</Text>
                    <Text style={{ marginLeft: 10 }}>
                        {restaurant.location.address}
                    </Text>
                    <Text style={styles.name}>Average Cost For Two </Text>
                    <Text style={{marginLeft:10}}>{restaurant.currency} {restaurant.average_cost_for_two}</Text>
                    <Text style={styles.name}>Cuisines</Text>
                    <Text style={{marginLeft:10}}>{restaurant.cuisines}</Text>
                    <Text style={styles.name}>Timings</Text>
                    <Text style={{marginLeft:10}}>{restaurant.timings}</Text>
                    <Text style={styles.name}>Highlights</Text>
                    <FlatList
                        data={restaurant.highlights}
                        keyExtractor={it => it}
                        renderItem={({ item }) => {
                            return (
                                <Text>{item}</Text>
                            )
                        }}
                        style={{marginLeft:10}}
                    >

                    </FlatList>
                    <Button title="Menu" onPress={()=>Linking.openURL(restaurant.menu_url)}/>
                </ScrollView>
            </View>
        </>
    )
}

export default RestaurantScreen

const styles = StyleSheet.create({
    image: {
        width: 'auto',
        height: 250,
        borderWidth: 4,
        marginVertical:5
    },
    name: {
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft:10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'blue',
        marginLeft:10
    },
    container: {
        marginHorizontal: 15,
        marginBottom:5
    }
})
