import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
export default function Perros(){
 return(
<View>
        <View style={styles.listado}>

        <View style={styles.listaItem}>
            <Image  style={styles.foto} source={require('../img/pastorAleman.jpg')} />
            <View style={styles.data}>
                <Text style={styles.raza}>Pastor Aleman</Text>
                <Text style={styles.descripcion}>Origen: Alemania</Text>
            </View>
          </View>

          <View style={styles.listaItem}>
            <Image  style={styles.foto} source={require('../img/bulldog.jpg')} />
            <View style={styles.data}>
                <Text style={styles.raza}>Bulldog</Text>
                <Text style={styles.descripcion}>Origen: Reino Unido</Text>
            </View>
          </View>

          <View style={styles.listaItem}>
            <Image  style={styles.foto} source={require('../img/chihuahua.jpg')} />
            <View style={styles.data}>
                <Text style={styles.raza}>Chihuahua</Text>
                <Text style={styles.descripcion}>Origen: México</Text>
            </View>
          </View>

          <View style={styles.listaItem}>
            <Image  style={styles.foto} source={require('../img/Rottweiler.jpg')} />
            <View style={styles.data}>
                <Text style={styles.raza}>Rottweiler</Text>
                <Text style={styles.descripcion}>Origen: Alemania</Text>
            </View>
          </View>

          <View style={styles.listaItem}>
            <Image  style={styles.foto} source={require('../img/ShibaInu.jpg')} />
            <View style={styles.data}>
                <Text style={styles.raza}>Shiba Inu</Text>
                <Text style={styles.descripcion}>Origen: Japón</Text>
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