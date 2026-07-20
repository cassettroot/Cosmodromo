import { StatusBar } from 'expo-status-bar';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, Text, TouchableHighlight, View, ScrollView} from 'react-native';
import { EstilosGeneral } from '../styles.js';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {anime} from '../componentes/Anime.jsx';

//npm install react-dom@19.1.0

const index =() => {
  const router = useRouter();
  const [contenido,setContenido] = useState([]);
  useEffect(()=>{
    fetch(`https://api.jikan.moe/v4/anime`)
    .then(respuesta => respuesta.json())
    .then(respuesta => {
      const anime =[];
      respuesta.data.map(({mal_id,title,type,source,episodes,status,duration,score,rating,images,trailer})=>{
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
          trailer:trailer
        });
      });
      setContenido(anime)
    })
  },[]);

  return (
    <ScrollView contentContainerStyle = {[styles.container,{backgroundColor:'#0000'}]}>
      <StatusBar  style='auto'/>
      <Grid>
        <Row>
          <Col>
            <ScrollView>
            { contenido.map((datos,i) => <Anime key={i} datos={datos}/>)}
            </ScrollView>
            <TouchableHighlight  style={styles.btn} onPress={()=> router.navigate("/Login")}>
              <Text> Login </Text>
            </TouchableHighlight>
          </Col>
        </Row>
      </Grid>
    </ScrollView>
  );
}

export default index;
const styles = StyleSheet.create(EstilosGeneral);
