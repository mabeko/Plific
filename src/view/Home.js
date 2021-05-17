import React from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { Button, Icon } from 'react-native-elements'

export default props => {

    return (
        <SafeAreaView style={style.display}>
            <View style={style.mainDisplay}>
                <Text style={style.txtP}>
                    P<Text style={{ color: '#f5e653' }}>.</Text>
                </Text>
            </View>

            <View style={style.bottomDisplay}>
                <Button
                    title='Enter'
                    buttonStyle={{
                        backgroundColor: '#f5e653',
                        textAlign: 'center',
                        width: 300,
                        borderRadius: 8,
                    }}
                    onPress={()=>{
                        props.navigation.navigate('Main')
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    display: {
        flex: 1,
        backgroundColor: '#000'
    },
    mainDisplay: {
        flex: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },

    bottomDisplay: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 30
    },
    txtP: {
        fontSize: 150,
        fontWeight: 'bold',
        color: '#fff'
    }
})