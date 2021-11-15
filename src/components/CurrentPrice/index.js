import React from 'react';
import { View, Text } from 'react-native';
import style from "./style";



export default function CurrentPrice(){
    return(
        <View style={style.headerPrice}>
            <Text style={style.currentPrice}>$ 349.339,98</Text>
            <Text style={style.textPrice}>Ultima Contação</Text>
        </View>
    )
}