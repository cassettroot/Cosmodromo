import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Linking } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const InfoAnime = () => {
    const {
        id,nombre,transmi,origen,capitulos,estatus,duracion,puntuacion,audiencia,imagen, descripcion,video} = useLocalSearchParams();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {imagen ? (
                <Image style={styles.imagen} source={{ uri: imagen }} />
            ) : null}
            <Text style={styles.titulo}>{nombre}</Text>

            <View>
            
                <Text style={styles.texto}><Text style={styles.bold}>Transmisión:</Text> {transmi}</Text>
                <Text style={styles.texto}><Text style={styles.bold}>Origen:</Text> {origen}</Text>
                <Text style={styles.texto}><Text style={styles.bold}>Capítulos:</Text> {capitulos}</Text>
                <Text style={styles.texto}><Text style={styles.bold}>Estatus:</Text> {estatus}</Text>
                <Text style={styles.texto}><Text style={styles.bold}>Duración:</Text> {duracion}</Text>
                <Text style={styles.texto}><Text style={styles.bold}>Puntuación:</Text> {puntuacion}</Text>
                <Text style={styles.texto}><Text style={styles.bold}>Audiencia:</Text> {audiencia}</Text>
                <Text style={styles.texto}><Text style={styles.bold}>Descripción:</Text> {descripcion || 'No disponible'}</Text>
                <Text style={styles.texto}>
                    <Text style={styles.bold}>Trailer:</Text>{' '}
                    {video ? (
                        <Text style={styles.link} onPress={() => Linking.openURL(video)}>
                            {video}
                        </Text>
                    ) : (
                        'No disponible'
                    )}
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        flexGrow: 1,
    },
    imagen: {
        width: 150,
        height: 220,
        borderRadius: 0,
        marginBottom: 15,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
        color: '#333333',
    },
    texto: {
        fontSize: 16,
        color: '#444444',
        marginBottom: 6,
    },
    bold: {
        fontWeight: 'bold',
        color: '#000000',
    },
    link: {
        color: '#0c00ad',
        textDecorationLine: 'underline',
    },
});

export default InfoAnime;