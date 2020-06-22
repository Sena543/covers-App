import React from "react";
import { View, Text, ImageBackground, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

const CoverScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/images/virus.jpg")}
        style={{ height: "100%", borderRadius: 100 }}
        resizeMode="stretch"
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 65, fontWeight: "600", color: "#ddd" }}>
              COVERS
            </Text>
            <Text style={{ color: "#fff", fontSize: 14, fontWeight: "500" }}>
              (COVID-19 EMERGENCY RESPONSE SOLUTION)
            </Text>
            <View style={{ justifyContent: "center" }}>
              <Text
                style={{ fontSize: 15, color: "#fff", textAlign: "center" }}
              >
                Join the effort by well-meaning Africans using technology to
                show{"\n"}
                down and eventually halt the spread of COVID-19
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 30, width: "100%" }}>
            <TextInput
              style={{
                height: 35,
                marginHorizontal: 30,
                padding: 10,
                marginVertical: 10,
                color: "#999",
                backgroundColor: "#fff",
              }}
              keyboardType="number-pad"
            />
            <TouchableOpacity
              onPress={() => navigation.push("verification")}
              style={{
                height: 35,
                backgroundColor: "#677180",
                marginHorizontal: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#efefef", fontSize: 12 }}>
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "rgba(180,180,180,0.6)",
              marginTop: 20,
              fontSize: 11,
              fontWeight: "400",
            }}
          >
            Beta 0.1.2
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CoverScreen;
