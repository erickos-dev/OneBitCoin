import React, { Fragment } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import style from "./style";


//style={style.contentGraphic}
export default function QuotationList() {
    return (
        <Fragment>

            <View style={style.filters} >

                <TouchableOpacity
                    style={style.buttonQuery}
                    onPress
                >
                    <Text style={style.textButtonQuery}>7D</Text>
                </TouchableOpacity>
              
                <TouchableOpacity
                    style={style.buttonQuery}
                    onPress
                >
                    <Text style={style.textButtonQuery}>15D</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={style.buttonQuery}
                    onPress
                >
                    <Text style={style.textButtonQuery}>1M</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={style.buttonQuery}
                    onPress
                >
                    <Text style={style.textButtonQuery}>3M</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={style.buttonQuery}
                    onPress
                >
                    <Text style={style.textButtonQuery}>6M</Text>
                </TouchableOpacity>
              
            </View>

            <ScrollView></ScrollView>
        </Fragment>
    )
}