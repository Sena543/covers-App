import React, { createContext, useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Auth } from "./HOC/auth";
import BottomTab from "./navigation/bottomTabScreen";
import AfterVerification from "./navigation/afterVerification";
import VerificationStack from "./navigation/verificationStack";

import { ApolloProvider} from '@apollo/react-hooks';
import ApolloClient,{InMemoryCache} from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://signalc.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

 const countries = new ApolloClient({
  uri: 'https://covid19-graphql.netlify.app/',
  cache:new InMemoryCache(),
 })

export default function App() {
  const [log, setLog] = useState(false);
  const authentication = useMemo(() => {
    return {
      signIn: () => {
        setLog(true);
      },
    };
  });
  return (
    <ApolloProvider client={client, countries}>
    <Auth.Provider value={authentication}>
      <NavigationContainer>
        {log ? <AfterVerification /> : <VerificationStack />}
      </NavigationContainer>
    </Auth.Provider>
    </ApolloProvider>
  );
}
