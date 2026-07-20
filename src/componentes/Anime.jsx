import { View,Text,Image,TouchableHighlight,StyleSheet,Pressable } from "react-native";
import { ImageBackground } from "react-native-web";
import { router, useRouter } from "expo-router";

const Anime=({datos})=>{
    const router = useRouter();
    const cambioVista = () =>{
        router.push({
            pathname:'/InfoAnime',
            params:{
                id:datos.mal_id
            }
        })
    }
    return(
        <Pressable style={styles.contenedor} onPress={()=> cambioVista()}>
            <Image style={styles.img} source={{uri : datos.Images.webp,large_image_url}}/>
            <Text>{datos.title}</Text>
            <Text>{datos.type}</Text>
            <Text>{datos.score}</Text>
        </Pressable>
    )
}

const styles= StyleSheet.create({
    contenedor:{
        flexDirection:'row',
        justifyContent:'center',
        alignitems:'flex-start',
        gap:10,
        marginBottom:10,
        borderRadius:10,
        borderColor:'#000000',
        borderWidth:1,
        backgroundColor:'#3e5c9b'
    },
    img:{
        width:60,
        height:60,
        borderRadius:'8',
        borderColor:'#0c00ad',
        borderWidth:1
    }
})