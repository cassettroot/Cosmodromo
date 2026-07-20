import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { EstilosGeneral } from "../styles";
import { useRouter } from "expo-router";

const Login = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <TouchableHighlight style={styles.btn} onPress={() => router.back()}>
                <Text>Regresar</Text>
            </TouchableHighlight>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create(EstilosGeneral);