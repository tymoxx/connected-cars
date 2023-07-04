import MapView, {Marker} from "react-native-maps";
import React, {useEffect} from "react";
import {StyleSheet} from "react-native";
import {markerInterface, markersInterface} from "../App";

export const Map = ({markers, setMarkers}: {
    markers: markersInterface,
    setMarkers: (markers: markersInterface) => void,
}): React.ReactElement => {

    const updateMarkers = (markers: markerInterface[]) => {
        const updatedMarkers = markers.map((marker) => ({
            ...marker,
            latlng: {
                latitude: marker.latlng.latitude + (Math.random() - 0.5) * 0.01,
                longitude: marker.latlng.longitude + (Math.random() - 0.5) * 0.01,
            }
        }));

        setMarkers(updatedMarkers);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            updateMarkers(markers)
        }, 200);
        return () => clearInterval(interval);
    }, []);

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 55.64652,
                longitude: 12.53991,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            {markers.map((marker: markerInterface) => (
                <Marker
                    coordinate={marker.latlng}
                    title={marker.title}
                    description={marker.description}
                />
            ))}
        </MapView>
    );
}


const styles = StyleSheet.create({
    map: {
        height: '100%',
        width: '100%',
    },
});
