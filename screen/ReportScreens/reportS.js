import React, { useState, createContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";


import CaseReportList from '../../component/caseReport'
const ListContex = createContext()

const CaseReport = ({ navigation }) => {

  const [ caseReports, updateCaseReports] = useState([]);

  const ReportList = ()=>{
    return(
      <ListContex.Provider value={{caseReports, updateCaseReports}}>
        <CaseReportList/>
      </ListContex.Provider>
    )
  }

  return (caseReports.length>0? 
    (<ReportList/>)
    :(
    <View
      style={{backgroundColor:'#ffffff', flex: 1, justifyContent: "space-around", alignItems: "center" }}>
      <Image source={require("../../assets/images/quest.gif")} style={{ width: 130, height: 220 }} />
      <View>
        <Text style={{ marginVertical: 10 }}> You have not made any case reports </Text>
      </View>
      <View style={{borderWidth:1, height:50, width:140, alignItems:'center', justifyContent:'center', borderStyle: 'dashed',}}>
        <TouchableOpacity
          onPress={() => navigation.push("mReport")} >
          <Text style={{}}>Make Case Report</Text>
        </TouchableOpacity>
      </View>
    </View>)
  );
};

export default CaseReport;
