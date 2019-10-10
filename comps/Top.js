import React, {useState} from 'react';
import {View, Switch, Text} from 'react-native';
import styles from "../styles/Styles";

export default function Top() {
    const [mode, setMode] = useState(false);
    let modeTxt, bgCl, txtCl = null;
    if (mode===false){
        modeTxt = "Day mode";
        bgCl = "white";
        txtCl = "black";
    } else {
        modeTxt = "Night mode";
        bgCl = "black";
        txtCl = "white";
    }
    return(
        <View style={[setColor(bgCl, txtCl), styles.top]}>
            <Switch
                onValueChange={setMode}
                value={mode}
            />
            <Text style={setColor(bgCl, txtCl)}>{modeTxt}</Text>
        </View>
    )
}
function setColor(bgCl, txtCl) {
    return{
        backgroundColor: bgCl,
        color: txtCl
    }
}