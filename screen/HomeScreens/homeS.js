import React from "react";
import { View, Text, ScrollView, ActionSheetIOS, ActivityIndicator } from "react-native";
import { HomeCard, News } from "../../component/homeCard";
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import {graphql, Query } from 'react-apollo';

const countriesDataQuery = (gql`
{
  country(name:"Togo"){
    result{
      cases,
      recovered,
      deaths,
      updated
    }
  }
}
`)

function HomeS(){
  const {loading, error, data}= useQuery(countriesDataQuery);
  //console.log(data)
 
  const Activity = ()=>{
    return(
      <View>
        <View>
          <ActivityIndicator color='#969693'/>
        </View>
        <View>
          <Text>Fetching Data</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, minHeight: 300 }}>
      <ScrollView style={{ flex: 1 }}>
        {loading?
        (
          <Activity/>
        ):(
          <View style={{ height: 200, justifyContent: "flex-start" }}>
         <ScrollView style={{ flex: 1 }} horizontal={true}>
                
                <HomeCard
                value={data.country.result.cases}
                feeds="Confirmed Cases"
                pic={require("../../assets/images/virus.jpg")}
              />
              <HomeCard
                value={data.country.result.recovered}
                feeds="Recovered"
                pic={require("../../assets/images/sanitizer.jpg")}
              />
              <HomeCard
                value={data.country.result.deaths}
                feeds="Death"
                pic={require("../../assets/images/reaper.jpg")}
              />
          </ScrollView>
        </View>)}
        <View style={{ flex: 0.2, paddingLeft: 5 }}>
          <Text style={{ fontWeight: "700" }}>Ghana's Situation Updatees</Text>
          <Text style={{ fontSize: 12 }}>Last Updated 4/16/2020</Text>
        </View>
        <View style={{ flex: 7.5, paddingVertical: 5, paddingHorizontal: 15 }}>
          <News />
          <News />
        </View>
      </ScrollView>
    </View>
  );
};

export default graphql(countriesDataQuery)(HomeS);
