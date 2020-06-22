import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const Vital = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ height: 250, alignItems:'center', justifyContent:'center' }}>
        <Image source={require('../../assets/images/ecg1.gif')} style={{height:120, width:120}} />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ marginVertical: 10 }}>
          You have not logged your vitals yet
        </Text>
        <TouchableOpacity
          onPress={() => navigation.push("LogVitals")}
          style={{borderWidth: 1, borderStyle: "dashed", borderColor: "#aaa", justifyContent: "center", alignItems: "center",
           height: 50, width: 120, borderRadius: 5, }}>
          <Text style={{ color: "#444" }}>Log vitals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Vital;
