import React from 'react'
import { Text, SafeAreaView, View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { FlatList } from 'react-native-gesture-handler'
import MyUser from './MyUser'

import users from '../data/users'

export default props => {

    function getUsers({ item: user }) {
        return (
            <MyUser message={user.message} name={user.name}/>
        )
    }

    return (
        <View style={{ flex: 1 }}>

            <View style={style.containerHeader}>
                <Icon name="menu" color={'#fff'} />
                <Text style={style.txtLogo}>Plific<Text style={{ color: '#f5e653' }}>.</Text></Text>
                <Icon name="search" color={'#fff'} />
            </View>

            <View style={style.mainContainer}>
                <View style={style.mainInside}>
                    <Button title='Popular' buttonStyle={{ backgroundColor: '#f5e653', borderRadius: 8 }} />
                    <Button title='Following' />
                    <Button title='Recent' />
                </View>

                <FlatList
                    keyExtractor={user => user.id.toString()}
                    data={users}
                    renderItem={getUsers}
                    style={{padding:0}}
                />

            </View>


            <View style={style.bottomContainer}>
                <Icon name="mail-outline" color={'#fff'} size={30} />
                <Icon name="person-outline" color={'#fff'} size={30} />
            </View>

        </View>

    )
}

const style = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    txtLogo: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold'
    },
    mainContainer: {
        width: '100%',
        height: '80%',
        backgroundColor: '#95a5a6',
        borderRadius: 20,
        alignItems: 'center'
    },
    mainInside: {
        width: '90%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    bottomContainer: {
        width: '70%',
        height: 60,
        marginLeft: '15%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})





