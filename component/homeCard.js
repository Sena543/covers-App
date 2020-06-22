import React from "react";
import { View, Text, Image } from "react-native";

export const HomeCard = ({ value, feeds, pic }) => {
  return (
    <View
      style={{
        width: 300,
        height: 150,
        borderRadius: 50,
        margin: 20,
        borderWidth: 0.1,
      }}
    >
      <Image
        style={{ flex: 1, borderRadius: 20, width: 300, height: 150 }}
        source={pic}
        resizeMode="cover"
      />
      <View
        style={{
          width: 300,
          height: 50,
          borderRadius: 20,
          backgroundColor: "rgba(0,0,0,0.6)",
          alignItems: "flex-end",
          padding: 30,
          position: "absolute",
        }}
      >
        <Text style={{ fontSize: 35, fontWeight: "700", color: "#fff" }}>
          {value}{" "}
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "500", color: "#ddd" }}>
          {feeds}{" "}
        </Text>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

export const News = () => {
  return (
    <View style={{ marginVertical: 20, minHeight: 300 }}>
      <Text style={{ marginBottom: 15, fontSize: 15, fontWeight: "700" }}>
        {" "}
        Confirmed Covid-19 Cases In Ghana As At 25 March 2020, 09:00Hr
      </Text>
      <Text style={{fontSize:16}}>
      Lorem Ipsum is simply dummy 
      text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
      specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, r
      emaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of 
      Lorem Ipsum.
      </Text>
    </View>
  );
};
