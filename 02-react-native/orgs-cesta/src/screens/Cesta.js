import React from "react";
import {Image,Text, StyleSheet, Dimensions} from 'react-native';
import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return(
        <>
            <Image source={topo} style={styles.topo} />
            <Text style={styles.titulo}>Detales da cesta</Text>
        </>
    )
}

const styles = StyleSheet.create({
    topo: {
      width: "100%",
      height: 578 / 768 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16

    }
  });