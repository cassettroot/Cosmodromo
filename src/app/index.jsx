import { StatusBar } from 'expo-status-bar';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, Text, TouchableHighlight, View, ScrollView} from 'react-native';
import { EstilosGeneral } from '../styles.js';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import Anime from '../componentes/Anime.jsx';

const index =() => {
  const router = useRouter();
  const [contenido,setContenido] = useState([]);
  useEffect(()=>{
    fetch(`https://api.jikan.moe/v4/anime`)
    .then(respuesta => respuesta.json())
    .then(respuesta => {
      const anime =[];
      respuesta.data.map(({mal_id,title,type,source,episodes,status,duration,score,rating,images,trailer,synopsis})=>{
        anime.push({
          mal_id:mal_id,
          title:title,
          type:type,
          source:source,
          episodes:episodes,
          status:status,
          duration:duration,
          score:score,
          rating:rating,
          images:images,
          trailer:trailer,
          synopsis:synopsis
        });
      });
      setContenido(anime)
    })
  },[]);

  return (
    <ScrollView contentContainerStyle = {[styles.container,{backgroundColor:'#d0bebe00'}]}>
      <StatusBar  style='auto'/>
      <Grid>
        <Row>
          <Col style={{ width: '100%' }}>
            <View style={{ width: '100%' }}>
            { contenido.map((datos,i) => <Anime key={i} datos={datos}/>)}
            </View>
            <TouchableHighlight style={styles.btn} onPress={()=> router.navigate("/Login")}>
              <Text style={styles.textoBtn}> Login </Text>
            </TouchableHighlight>
          </Col>
        </Row>
      </Grid>
    </ScrollView> 
  );
}

export default index;
const styles = StyleSheet.create(EstilosGeneral);
