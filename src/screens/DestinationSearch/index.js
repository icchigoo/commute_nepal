import React from "react";
import { View, TextInput, SafeAreaView } from "react-native/types";

import styles from "./styles";

import React from "react";
import { View, Dimensions, Text } from "react-native";
import styles from "../../components/CovidMessage/styles";



const destinationSearch = (props) => {
  



  return (
    <SafeAreaView>
       <View>
      <TextInput style ={styles.TextInput} placeholder = "from" />
      <TextInput style ={styles.TextInput} placeholder = "from" />
       </View>

    </SafeAreaView>
   
  );
};

export default destinationSearch;
