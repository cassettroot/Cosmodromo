const EstilosGeneral = {
    container: {
        flexGrow: 1,
        padding: 20,
    },
    center: {
        justifyContent: "center",
        alignItems: "center",
        gap: 18,
        marginBottom: 10
    },
    controles: {
        justifyContent: "center",
        alignItems: "center",
        gap: 28,
        padding: 20
    },
    contenedorAlbum: {
        width: 300,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#000000',
        overflow: 'hidden'
    },
    contenedorVideo: {
        width: 300,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#000000',
        overflow: 'hidden'
    },
    video: {
        width: 300,
        height: 300,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#000000',
    },
    img: {
        width: '100%',
        height: '100%'
    },
    mt5: {
        marginTop: 20
    },
    titulo: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    artista: {
        fontSize: 15,
        color: '#fff',
        marginBottom: 5
    },
    genero: {
        fontSize: 13,
        color: '#ffffffaa',
        marginTop: 2
    },
    lanzamiento: {
        fontSize: 12,
        color: '#ffffff88',
        marginTop: 2
    },
    album: {
        fontSize: 12,
        color: '#ffffff88',
        marginTop: 2
    },
    tiempos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 10,
        marginBottom: 5,
        width: '100%'
    },
    textoTiempo: {
        color: '#ffffffb3',
        fontSize: 14,
        fontWeight: '500'
    },
    playlistItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#ffffff1a',
        marginBottom: 8,
        width: '100%',
    },
    playlistItemActive: {
        backgroundColor: '#ffffff33',
        borderWidth: 1,
        borderColor: '#ffffff55',
    },
    playlistThumbnail: {
        width: 40,
        height: 40,
        borderRadius: 6,
        marginRight: 10,
    },
    playlistTextContainer: {
        flex: 1,
    },
    playlistTitle: {
        fontSize: 14,
        color: '#ffffffd0',
        fontWeight: '600',
    },
    playlistTitleActive: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    playlistArtist: {
        fontSize: 12,
        color: '#ffffff80',
        marginTop: 2,
    },  

//hola xd

  container: {
    flex: 1,
    backgroundColor: '#607538',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },

  titulo:{
    color:'#fff',
    fontSize:25,
    fontWeight:'bold'

  },
  btn:{
    width:'25%',
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#4d2b1e',
    padding:10,
    borderColor:'#fff',
    borderRadius:8,
  },

  input:{
    width:60,
    alignContent:'center',
    justifyContent:'center',
    backgroundColor:'#fff',
    color:'#000000',
    padding:10,
    borderRadius:10,
    marginBottom:10,
    borderColor:'#422929'
  }

};

const EstilosLogin = {

};


export { EstilosGeneral, EstilosLogin };