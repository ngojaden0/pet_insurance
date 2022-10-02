import React, { useState } from 'react';
import { View, SafeArea, ImageBackground, Text, StyleSheet, ScrollView } from 'react-native'

import Icons from 'react-native-vector-icons/Ionicons'
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';


function Home() {
    return (
        <ScrollView>
            <ImageBackground style = {styles.eventCard} imageStyle = {styles.imageCard}
                source = {require('../../assets/images/event/LSTD.jpg')}>
                <Text style = {styles.eventText}>

                </Text>
            </ImageBackground>

            <ImageBackground style = {styles.eventCard} imageStyle = {styles.imageCard}
                source = {require('../../assets/images/event/Houston.jpg')}>
                <Text style = {styles.eventText}>
                    
                </Text>
            </ImageBackground>

            <Text style = {styles.header}>
                Upcoming Events!
            </Text>

            <View style = {styles.upcomingEvent}>
                <Text style = {styles.upcomingDate}>
                    <Icons name = "time-outline" color = 'red' size = { 12 } />
                    10/5 - 10/8
                </Text>
                <Text style = {styles.upcomingTitle}>
                    National Conference
                </Text>
                <Text style = {styles.upcomingDescription}>
                    Professional workshops and career fair
                </Text>
            </View>

            <View style = {styles.upcomingEvent}>
                <Text style = {styles.upcomingDate}>
                    <Icons name = "time-outline" color = 'red' size = { 12 } />
                    10/14 @ 1PM - 2PM
                </Text>
                <Text style = {styles.upcomingTitle}>
                    Undergraduate Research Info Session
                </Text>
                <Text style = {styles.upcomingDescription}>
                    Learn about research opportunities
                </Text>
            </View>
            
            <View style = {styles.upcomingEvent}>
                <Text style = {styles.upcomingDate}>
                    <Icons name = "time-outline" color = 'red' size = { 12 } />
                    10/15 @ 8AM - 11AM
                </Text>
                <Text style = {styles.upcomingTitle}>
                    Tarrant Area Food Bank
                </Text>
                <Text style = {styles.upcomingDescription}>
                    Give back to the communty by volunteering
                </Text>
            </View>
            
        </ScrollView>
    );
}

export default Home;

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
        backgroundColor: '#296E85',
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
    },
    upcomingEvent: {
        backgroundColor: 'white',
        flex: 1,
        height: 80,
        borderRadius: 20,
        justifyContent: 'center',
        margin: 10,
        marginBottom: 0
    },
    upcomingDate: {
        color: "black",
        textAlign: 'left',
        fontSize: 12,
        left: 20,
        margin: 2
    },
    upcomingTitle: {
        color: "black",
        textAlign: 'left',
        fontSize: 16,
        fontWeight: 'bold',
        left: 20,
        margin: 2
    },
    upcomingDescription: {
        color: "black",
        textAlign: 'left',
        fontSize: 12,
        left: 20,
        margin: 2
    },
    
})