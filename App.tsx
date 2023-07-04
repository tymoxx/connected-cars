import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import React, {useEffect, useState} from "react";

interface markerInterface {
    latlng: {
        latitude: number,
        longitude: number,
    },
    title: string,
    description: string,
}

interface markersInterface {
    markers: markerInterface[],
}

export default function App() {
    const [marker, setMarker] = useState<markerInterface>({
        latlng: {
            latitude: 37.78825,
            longitude: -122.4324,
        },
        title: 'title',
        description: 'descr',
    });


    useEffect(() => {
        const interval = setInterval(() => {
            setMarker((prevMarker) => ({
                latlng: {
                    latitude: prevMarker.latlng.latitude + (Math.random() - 0.5) * 0.01,
                    longitude: prevMarker.latlng.longitude + (Math.random() - 0.5) * 0.01,
                },
                title: prevMarker.title,
                description: prevMarker.description
            }))
        }, 200);
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>

            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={marker.latlng}
                    title={marker.title}
                    description={marker.description}
                />
                <Marker
                    coordinate={marker.latlng}
                    title={marker.title}
                    description={marker.description}
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 1,
        flex: 1,
    },
    map: {
        height: 50,
        flex: 1,
    }
});
