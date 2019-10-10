import React, {useState} from 'react';
import {View, TextInput, Button, Alert} from 'react-native';
import styles from "../styles/Styles";
export default function Bot() {
    const [txtInput, setTxtInput] = useState("");
    return(
        <View style={styles.bot}>
            <TextInput
                placeholder="Type something"
                onChangeText={text => setTxtInput(text)}
                value={txtInput}
            />
            <Button
                title="Submit"
                onPress={() => Alert.alert("Alert", "You sent: " + txtInput, [{
                    text: "Okie", onPress: () => {}
                }])}
            />

        </View>
    )
}