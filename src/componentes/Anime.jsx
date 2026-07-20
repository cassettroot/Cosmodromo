import { View,Text,Image,TouchableHighlight,StyleSheet,Pressable } from "react-native";
import { router, useRouter } from "expo-router";

const Anime=({datos})=>{
    const router = useRouter();
    const cambioVista = () =>{
        router.push({
            pathname:'/InfoAnime',
            params:{
                id: datos.mal_id,
                nombre: datos.title,
                transmi: datos.type,
                origen: datos.source,
                capitulos: datos.episodes,
                estatus: datos.status,
                duracion: datos.duration,
                puntuacion: datos.score,
                audiencia: datos.rating,
                imagen: datos.images.webp.large_image_url || datos.images.jpg.large_image_url,
                descripcion: datos.synopsis,
                video: datos.trailer.url || datos.trailer.embed_url || ''
            }
        })
    }
    return(
        <Pressable style={styles.contenedor} onPress={()=> cambioVista()}>
            <Image style={styles.img} source={{uri : datos.images.webp.large_image_url}}/>
            <View style={{ flex: 1 }}>
                <Text>{datos.title}</Text>
                <Text>{datos.type}</Text>
                <Text>{datos.score}</Text>
            </View>
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
