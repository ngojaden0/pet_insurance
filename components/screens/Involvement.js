import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native'

function Involvement() {
    return (
        <ScrollView>
            <ImageBackground style = {styles.eventCard} imageStyle = {styles.imageCard}
                source = {require('../../assets/images/involvement/Houses.png')}>
                <Text style = {styles.eventText}>

                </Text>
            </ImageBackground>

            <ImageBackground style = {styles.eventCard} imageStyle = {styles.imageCard}
                source = {require('../../assets/images/involvement/Interns.png')}>
                <Text style = {styles.eventText}>
                    
                </Text>
            </ImageBackground>

            <ImageBackground style = {styles.eventCard} imageStyle = {styles.imageCard}
                source = {require('../../assets/images/involvement/RIG.png')}>
                <Text style = {styles.eventText}>
                    
                </Text>
            </ImageBackground>
        </ScrollView>
    );
}

export default Involvement;

const styles = StyleSheet.create({
    mainCard: {
        backgroundColor: '#296E85',
        flex: 1,
        height: 240,
        borderRadius: 20,
        justifyContent: 'center',
        margin: 10,
        marginBottom: 0
    },
    eventCard: {
        flex: 1,
        height: 180,
        borderRadius: 20,
        justifyContent: 'center',
        margin: 10,
        marginBottom: 0
    },
    eventText: {
        color: "white",
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold'
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        margin: 15,
        color: "#222222"
    },
    imageCard: {
        borderRadius:20
    }
})