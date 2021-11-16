import React, { useState, useEffect } from 'react';

import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

import CurrentPrice from './src/components/CurrentPrice/';
import HistoryGraphic from './src/components/HistoryGraphic/';
import QuotationList from './src/components/QuotationList/';
import QuotationItems from './src/components/QuotationList/QuotationItems';


//https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05


function addZero(number) {
  if (number <= 9) {
    return "0" + number;
  } else {
    return number;
  };
};

function url(qtdDays) {
  const date = new Date();
  const listLastDays = qtdDays;
  const startDate = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDay())}`;

  date.setDate(date.getDay() - listLastDays);

  const endDate = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDay())}`;

  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${endDate}&end=${startDate}`
};

async function getListCoin(url) {
console.log("🚀 ~ file: App.js ~ line 35 ~ getListCoin ~ url", url)
  
  let response = await fetch(url);

  let returnApi = await response.json();
  let selectListQuotations = returnApi.bpi;
  const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
    return {
      data: key.split('-').reverse().join('/'),
      valor: selectListQuotations[key]
    }
  })
  let data = queryCoinsList.reverse();
  // console.log("🚀 ~ file: App.js ~ line 49 ~ getListCoin ~ data", data)

  return data;
}

async function getPriceCoinsGraphic(url) {
  // console.log("🚀 ~ file: App.js ~ line 54 ~ getPriceCoinsGraphic ~ url", url)
  let responseG = await fetch(url);
  // console.log("🚀 ~ file: App.js ~ line 55 ~ getPriceCoinsGraphic ~ responseG", responseG)
  let returnApiG = await responseG.json();
  // console.log("🚀 ~ file: App.js ~ line 58 ~ getPriceCoinsGraphic ~ returnApiG", returnApiG)
  let selectListQuotationsG = returnApiG.bpi;
  const queryCoinsList = Object.keys(selectListQuotationsG).map((key) => {
   return selectListQuotationsG[key]
  });
  let dataG = queryCoinsList;
  // console.log("🚀 ~ file: App.js ~ line 64 ~ getPriceCoinsGraphic ~ dataG", dataG)
  return dataG;
}


export default function App() {

  const [coinList, setCoinsList] = useState([]);
  const [coinsGraphicList, setCoinsGraphicList] = useState([0]);
  const [days, setDays] = useState(30);
  const [updateData, setUpdateData] = useState(true);

  function updateDay(number) {
    setDays(number);
    setUpdateData(true);
  }

  useEffect(() => {
    setCoinsList([])
    getListCoin(url(days)).then((data) => {
   
      setCoinsList(data)
      console.log(coinList);
    });

    getPriceCoinsGraphic(url(days)).then((dataG) => {
      setCoinsGraphicList(dataG)
    })
    if (updateData) {
      setUpdateData(false)
    }
  }, [updateData]);

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar
        backgroundColor="#f50d41"
        barStyle="ligth.content"
      />
      <CurrentPrice />
      <HistoryGraphic />
      <QuotationList filterDay={updateDay} listTransactions={coinList}/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40 : 0
  },
});
