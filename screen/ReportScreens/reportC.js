import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { useMutation } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import {graphql } from 'react-apollo';

// const reportMutation = gql`
//   {
//     mutation reportCaseMutation{
//     reportCase($reportWho: String!, 
//   $location: String!, $landmark: String!, 
//   $alternateContact: String!, $description: String!)}
// }
// `


function MakeReport({ navigation }){

   // const [report, {data}] = useMutation(reportMutation)


  const [fcheck, setFCheck] = useState(false);
  const [mcheck, setMCheck] = useState(false);  
  const [location, setLocation] = useState('eg Goil Filling Station');
  const [landmark, setLandmark] = useState('eg GA-492-74');
  const [contact, setContact] = useState('Contact');
  const [description, setDescription] = useState('Describe Symptoms');
  function fChecker() {
    setFCheck(!fcheck);
    setMCheck(false);
  }
  function mChecker() {
    setMCheck(!mcheck);
    setFCheck(false);
  }


  // const sendReport = ()=>{
  //   report({variables:{
  //     reportWho: reportWho,
  //     location: landmark,
  //     alternateContact: contact,
  //     description: description
  //   }})
  //   setShowReport(!showReport);
  // }


  return (
    <View
      style={{
        backgroundColor: "#fff",
        justifyContent: "space-between",
        flex: 1,
      }}
    >
      <View style={{ marginVertical: 20 }}>
        <Text style={{ fontWeight: "700", marginHorizontal: 20 }}> Who are you reporting ?{" "}</Text>
        <View style={{flexDirection: "row", marginHorizontal: 20,marginVertical: 10,}}>
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => fChecker()}
          >
            <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center",}} >
              <Ionicons name={ fcheck ? "ios-checkmark-circle" : "ios-checkmark-circle-outline" } size={26}/>
              <Text style={{ marginLeft: 5 }}>Self</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => mChecker()}
          >
          <View style={{flexDirection: "row",justifyContent: "center",alignItems: "center", }}
            >
              <Ionicons
                name={
                  mcheck
                    ? "ios-checkmark-circle"
                    : "ios-checkmark-circle-outline"
                }
                size={26}
              />
              <Text style={{ marginLeft: 5 }}> Other Individual</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={{ fontWeight: "700", marginHorizontal: 20 }}>
            Location of Digital Address
          </Text>
          <TextInput
           onChangeText={text => setLocation(text)}
            style={{
              height: 40,
              borderWidth: 1,
              borderColor: "#aaa",
              marginHorizontal: 20,
              marginVertical: 10,
            }}
            placeholder="eg. GA-492-74"
          />
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={{ marginHorizontal: 20, fontWeight: "700" }}>
                Nearest Landmark
              </Text>
              <TextInput
               onChangeText={text => setLandmark(text)}
                style={{
                  height: 40,
                  borderWidth: 1,
                  borderColor: "#aaa",
                  marginHorizontal: 20,
                  marginVertical: 10,
                }}
                placeholder="eg. Goil Filling Station"
              />
            </View>
            <View>
              <Text style={{ marginHorizontal: 20, fontWeight: "700" }}>
                {" "}
                Alternate Contact
              </Text>
              <TextInput
              onChangeText={text => setContact(text)}
                style={{
                  height: 40,
                  borderWidth: 1,
                  borderColor: "#aaa",
                  marginHorizontal: 20,
                  marginVertical: 10,
                }}
                placeholder="Contact Number"
              />
            </View>
          </View>
          <View>
            <Text style={{ marginHorizontal: 20, fontWeight: "700" }}>
              {" "}
              Description
            </Text>
            <TextInput
            onChangeText={text => setDescription(text)}
              style={{
                height: 90,
                borderWidth: 1,
                borderColor: "#aaa",
                marginHorizontal: 20,
                textAlignVertical: "top",
                marginVertical: 10,
              }}
              placeholder="Type something"
            />
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={{
          height: 40,
          marginHorizontal: 20,
          backgroundColor: "#000",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 40,
        }}
        onPress={() => navigation.navigate("mReportItem")}
      >
        <Text style={{ color: "#fff", fontWeight: "500" }}>Report Case</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MakeReport;
