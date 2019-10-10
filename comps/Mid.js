import React, {useState} from 'react';
import {View, Picker, Text} from 'react-native';
import styles from "../styles/Styles";

export default function Mid(){
    const [color, setColor] = useState('#fff9ef');
    console.log(color);
    return(
        <View style={[bgColor(color), styles.mid] }>
            <Picker
                selectedValue={color}
                onValueChange={(itemValue) => setColor(itemValue)}
            >
                <Picker.Item label='Yellow' value='#fff9ef'/>
                <Picker.Item label='Blue' value='#edfaff'/>
                <Picker.Item label='Green' value='#eef7e6'/>
            </Picker>
        </View>
    );
}

function bgColor(color) {
    return{
        backgroundColor: color
    }
}
