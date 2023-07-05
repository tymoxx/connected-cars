import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text} from 'react-native';
import React, {useState} from "react";
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Map} from "./components/Map";

export type markerType = {
    latlng: {
        latitude: number,
        longitude: number,
    },
    title: string,
    description: string,
}

export type markersType = markerType[];

const initialMarkers: markersType = [
    {
        latlng: {
            latitude: 55.64652,
            longitude: 12.53991,
        },
        title: 'title',
        description: 'description',
    },
    {
        latlng: {
            latitude: 55.64252,
            longitude: 12.53991,
        },
        title: 'title',
        description: 'description',
    },
]
export default function App() {
    const [markers, setMarkers] = useState<markersType>(initialMarkers);

    return (
        <SafeAreaProvider style={styles.container}>
            <SafeAreaView>
                <StatusBar style="auto"/>
                <Text style={styles.name}>Connected Cars</Text>
                <Map markers={markers} setMarkers={setMarkers}/>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 1,
        flex: 1,
    },
    name: {
        fontSize: 21,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#620070',
    }
});
