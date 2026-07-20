import { View, Text } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import Anime from "../componentes/Anime";

const InfoAnime =()=>{
    const router = useRouter();
    const {id,nombre,transmi,capitulos} = useLocalSearchParams();

    return (
        <View>
            <Text>{id}</Text>
            <Text>{nombre}</Text>
            <Text>{transmi}</Text>
            <Text>{capitulos}</Text>
            
        </View>
    )
}

export default InfoAnime