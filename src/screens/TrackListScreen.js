import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native'

const TrackListScreen = ({ navigation }) => {
    return (<>
        <Text>TrackListScreen</Text>
        <Button title="sfd" onPress={() => navigation.navigate('TrackDetail')} />
    </>
    )
}
const styles = StyleSheet.create({})

export default TrackListScreen