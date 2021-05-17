import React from 'react'
import { Text, SafeAreaView, View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'


export default ({ message, name }) => {

    return (
        <View style={style.mainDisplay}>
            <View style={style.displayHeader}>
                <View style={style.displayLogo}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>P<Text style={{ color: '#f5e653', fontSize: 20 }}>.</Text></Text>
                </View>
                <Text style={{ color: '#fff', fontWeight: 'bold', marginLeft: 10, fontSize: 25 }}>{name}</Text>
            </View>


            <View style={style.mainBody}>
                <View style={{ width: '100%', height: '70%', borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
                    <Text style={{ margin: 15, color: '#fff', fontSize: 20 }}>
                        {message}
                    </Text>
                </View>
                <View style={{
                    width: '100%',
                    height: '30%',
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    borderTopWidth: 0.5,
                    borderTopColor: '#fff'
                }}>
                    <Icon name='favorite-outline' color='#fff' />
                    <Icon name='chatbubble-outline' type='ionicon' color='#fff' />
                    <Icon name='eye-outline' type='ionicon' color='#fff' />
                    <Icon name='folder-outline' type='ionicon' color='#fff' />

                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    mainDisplay: {
        width: '90%',
        marginTop: 15,
        margin: 15
    },

    displayHeader: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    displayLogo: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
    },
    mainBody: {
        width: '100%',
        height: 250,
        backgroundColor: '#f5e653',
        borderRadius: 20
    }

})

//'#f5e653'