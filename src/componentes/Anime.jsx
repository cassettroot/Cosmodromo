import { View,Text,Image,TouchableHighlight,StyleSheet,Pressable } from "react-native";
import { ImageBackground } from "react-native-web";
import { router, useRouter } from "expo-router";

const Anime=({datos})=>{
    const router = useRouter();
    const cambioVista = () =>{
        router.push({
            pathname:'/InfoAnime',
            params:{
                id:datos.mal_id,
                nombre:datos.title,
                transmi:datos.type,
                origen:datos.source,
                capitulos:datos.episodes,
                estatus:datos.status,
                duracion:datos.duration,
                calificacion:datos.score,
                
                   
            }
        })
    }
    return(
        <Pressable style={styles.contenedor} onPress={()=> cambioVista()}>
            <Image style={styles.img} source={{uri : datos.images.webp.large_image_url}}/>
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
        alignItems:'flex-start',
        gap:10,
        marginBottom:20,
        borderRadius:30,
        borderColor:'#000000',
        borderWidth:1,
        backgroundColor:'#f8f8f9'
    },
    img:{
        width:60,
        height:60,
        borderRadius:8,
        borderColor:'#0c00ad',
        borderWidth:1
    }
})

export default Anime;
