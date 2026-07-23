import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Linking, TouchableHighlight } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const InfoAnime = () => {
    const {
        id, nombre, transmi, origen, capitulos, estatus, duracion, puntuacion, audiencia, imagen, descripcion, video } = useLocalSearchParams();

    const [traducido, setTraducido] = useState(false);
    const [descTraducida, setDescTraducida] = useState('');
    const [cargando, setCargando] = useState(false);

    const dicEstatus = {
        'Finished Airing': 'Finalizado',
        'Currently Airing': 'En emisión',
        'Not yet aired': 'Aún no emitido'
    };

    const dicOrigen = {
        'Manga': 'Manga',
        'Original': 'Original',
        'Light novel': 'Novela ligera',
        'Visual novel': 'Novela visual',
        'Game': 'Juego',
        'Web manga': 'Web Manga'
    };

    const dicTransmi = {
        'TV': 'Serie TV',
        'Movie': 'Película',
        'OVA': 'OVA',
        'Special': 'Especial',
        'ONA': 'ONA',
        'Music': 'Música'
    };

    const traducir = () => {
        if (traducido) {
            setTraducido(false);
        } else {
            if (descTraducida) {
                setTraducido(true);
            } else {
                setCargando(true);
                fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=${encodeURIComponent(descripcion || '')}`)
                    .then(respuesta => respuesta.json())
                    .then(respuesta => {
                        const texto = respuesta[0].map(item => item[0]).join('');
                        setDescTraducida(texto);
                        setTraducido(true);
                        setCargando(false);
                    })
                    .catch(() => {
                        setCargando(false);
                    });
            }
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {imagen ? (
                <Image style={styles.imagen} source={{ uri: imagen }} />
            ) : null}
            <Text style={styles.titulo}>{nombre}</Text>

            <TouchableHighlight style={styles.btn} onPress={traducir}>
                <Text style={styles.textoBtn}>
                    {cargando ? 'Traduciendo...' : traducido ? 'Ver en Inglés' : 'Traducir a Español'}
                </Text>
            </TouchableHighlight>

            <View>
                <Text style={styles.texto}>
                    <Text style={styles.bold}>Transmisión:</Text> {traducido ? (dicTransmi[transmi] || transmi) : transmi}
                </Text>
                <Text style={styles.texto}>
                    <Text style={styles.bold}>Origen:</Text> {traducido ? (dicOrigen[origen] || origen) : origen}
                </Text>
                <Text style={styles.texto}>
                    <Text style={styles.bold}>Capítulos:</Text> {capitulos}
                </Text>
                <Text style={styles.texto}>
                    <Text style={styles.bold}>Estatus:</Text> {traducido ? (dicEstatus[estatus] || estatus) : estatus}
                </Text>
                <Text style={styles.texto}>
                    <Text style={styles.bold}>Duración:</Text> {duracion}
                </Text>
                <Text style={styles.texto}>
                    <Text style={styles.bold}>Puntuación:</Text> {puntuacion}
                </Text>
                <Text style={styles.texto}>
                    <Text style={styles.bold}>Audiencia:</Text> {audiencia}
                </Text>
                <Text style={styles.texto}>
                    <Text style={styles.bold}>Descripción:</Text> {traducido ? (descTraducida || descripcion) : (descripcion || 'No disponible')}
                </Text>
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
    btn: {
        backgroundColor: '#f89900',
        padding: 12,
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 15,
        width: '60%',
    },
    textoBtn: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
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