import React from 'react';
import {View} from 'react-native';
import Top from "./Top";
import Mid from "./Mid";
import Bot from "./Bot";
import styles from "../styles/Styles";

export default function Main(){
    return(
    <View style={styles.main}>
        <Top/>
        <Mid/>
        <Bot/>
    </View>
    )
}