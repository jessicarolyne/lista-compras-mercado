import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "@/utils/theme";

const Home = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text variant="text2Xl" color="pink500">Home</Text>
      <Pressable onPress={()=>{
        navigation.navigate("CreateTask")
      }}>
        <Text>
          Navigate to create task
        </Text>
      </Pressable>
    </View>
  )
}
export default Home
