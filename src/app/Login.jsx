import { useState } from "react";
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from "react-native";
import { EstilosGeneral } from "../styles";
import { useRouter } from "expo-router";

const Login = () => {
    const router = useRouter();
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");

    const handleLogin = () => {
        if (usuario && contrasena) {
            router.navigate("/");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.titulo, { color: '#000000', marginBottom: 20 }]}>Iniciar Sesión</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Usuario"
                value={usuario}
                onChangeText={setUsuario}
            />

            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={contrasena}
                onChangeText={setContrasena}
                secureTextEntry={true}
            />

            <TouchableHighlight style={styles.btn} onPress={handleLogin}>
                <Text style={styles.textoBtn}>Ingresar</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.btn} onPress={() => router.back()}>
                <Text style={styles.textoBtn}>Regresar</Text>
            </TouchableHighlight>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create(EstilosGeneral);