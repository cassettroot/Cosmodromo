const EstilosGeneral = {
    container: {
        flexGrow: 1,
        backgroundColor: '#fafbf9',
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
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
    btn: {
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f89900',
        padding: 12,
        borderColor: '#fff',
        borderRadius: 30,
        marginTop: 10,
    },
    textoBtn: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        width: '85%',
        backgroundColor: '#fff',
        color: '#000000',
        padding: 12,
        borderRadius: 10,
        marginBottom: 12,
        borderColor: '#422929',
        borderWidth: 1,
        fontSize: 16,
    }
};

const EstilosLogin = {};

export { EstilosGeneral, EstilosLogin };