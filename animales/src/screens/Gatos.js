import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
export default function Gatos(){
 return(
 <View>
        <View style={styles.listado}>

          <View style={styles.listaItem}>
            <Image  style={styles.foto} source={require('../img/GatoPersa.jpg')} />
            <View style={styles.data}>
                <Text style={styles.raza}>Persa</Text>
                <Text style={styles.descripcion}>Origen: Irán</Text>
            </View>
          </View>

          <View style={styles.listaItem}>
            <Image  style={styles.foto} source={require('../img/Siames.jpg')} />
            <View style={styles.data}>
                <Text style={styles.raza}>Siames</Text>
                <Text style={styles.descripcion}>Origen: Tailandia</Text>
            </View>
          </View>

          <View style={styles.listaItem}>
            <Image  style={styles.foto} source={require('../img/FoldEscoces.jpg')} />
            <View style={styles.data}>
                <Text style={styles.raza}>Fold Escoces</Text>
                <Text style={styles.descripcion}>Origen: Escocia</Text>
            </View>
          </View>

          <View style={styles.listaItem}>
            <Image  style={styles.foto} source={require('../img/Ragroll.jpg')} />
            <View style={styles.data}>
                <Text style={styles.raza}>Ragroll</Text>
                <Text style={styles.descripcion}>Origen: Estados Unidos</Text>
            </View>
          </View>

          <View style={styles.listaItem}>
            <Image  style={styles.foto} source={require('../img/GatoAmericano.jpg')} />
            <View style={styles.data}>
                <Text style={styles.raza}>Americano</Text>
                <Text style={styles.descripcion}>Origen: Estados Unidos</Text>
            </View>
          </View>
        </View>
 </View>
 );
}

const styles = StyleSheet.create({ 
    
    titulo:{
      fontWeight:'bold',
      fontSize:24,
      marginVertical:10,
      color:'rgb(221, 151, 45)'
    },
    
    
    foto:{
      width:100,
      height:100,
      marginVertical:5,
      left:40,
    },
    
    listaItem:{
      flexBasis:'20%',
      backgroundColor: '#EEEEEE',
      flexDirection:'row',

    },

    data:{

      },
    
    raza:{
        fontWeight:'bold',
        fontSize:22,
        color:'rgb(0, 122, 255)',
        left:50
    },

    descripcion:{
        fontSize:18,
        color:'#000',
        left:50,
        marginVertical:45
    },
    
    }); 