import React from 'react';
import { View, Text, Image } from 'react-native';

import style from './style'

export default function QuotationItems(props) {
    return (
        <View style={style.mainContent}>

            <View style={style.contextLeft}>

                <View>

                    <View style={style.boxLogo}>
                        <Image
                            style={style.logBitcoin}
                            source={require('../../../img/logo.png')} />
                        <Text
                            style={style.dayQuotation}>
                            {props.data}</Text>
                    </View>

                </View>
            </View>

            <View
                style={style.contextRigth}>
                <Text
                    style={style.price}>
                    {props.valor}</Text>
            </View>



        </View>
    )
}
