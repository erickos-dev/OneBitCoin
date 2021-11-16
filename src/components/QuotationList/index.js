import React, { Fragment } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import QuotationItems from './QuotationItems';

import style from "./style";


//style={style.contentGraphic}
export default function QuotationList(props) {
    console.log("🚀 ~ file: index.js ~ line 10 ~ QuotationList ~ props", props)
    const daysQuery = props.filterDay
    return (
        <Fragment>

            <View style={style.filters} >

                <TouchableOpacity
                    style={style.buttonQuery}
                    onPress={() => daysQuery(7)}
                >
                    <Text style={style.textButtonQuery}>7D</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={style.buttonQuery}
                    onPress={() => daysQuery(15)}
                >
                    <Text style={style.textButtonQuery}>15D</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={style.buttonQuery}
                    onPress={() => daysQuery(30)}
                >
                    <Text style={style.textButtonQuery}>1M</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={style.buttonQuery}
                    onPress={() => daysQuery(90)}
                >
                    <Text style={style.textButtonQuery}>3M</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={style.buttonQuery}
                    onPress={() => daysQuery(180)}
                >
                    <Text style={style.textButtonQuery}>6M</Text>
                </TouchableOpacity>

            </View>

            <ScrollView>
                <FlatList
                    data={props.listTransactions}
                    renderItem={({item})=>{
                        return <QuotationItems data={item.data} valor={item.valor}/>
                    }}
                    keyExtractor={item => item.data}
                />
            </ScrollView>
        </Fragment>
    )
}