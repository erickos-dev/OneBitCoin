import React from 'react';
import { View, Text, Image } from 'react-native';

import style from './style'

export default function QuotationItems() {
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
                            15/12/2021</Text>
                    </View>

                </View>
            </View>

            <View
                style={style.contextRigth}>
                <Text
                    style={style.price}>
                    53331.50</Text>
            </View>



        </View>
    )
}
