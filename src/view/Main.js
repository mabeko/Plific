import React from 'react'
import { Text, SafeAreaView, View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import MainComponent from '../component/MainComponent'

export default props => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>

            <MainComponent/>

        </SafeAreaView>
    )
}
