import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FitnessData from "../../constants/FitnessData/FitnessData";
import { useNavigation } from "@react-navigation/native";

const FitnessCards = () => {
  const data = FitnessData;
  const navigation = useNavigation();
  return (
    <View>
      {data.map((item, key) => (
        <Pressable
          onPress={() =>
            navigation.navigate("WorkoutScreen", {
              image: item.image,
              name:item.name,
              excersises: item.excersises,
              id: item.id,
            })
          }
          style={{ alignItems: "center", justifyContent: "center", margin: 10 }}
          key={key}
        >
          <Image
            style={{ width: "95%", height: 140, borderRadius: 7 }}
            source={{ uri: item.image }}
          />
          <Text
            style={{
              position: "absolute",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              left: 20,
              top: 20,
            }}
          >
            {item.name}
          </Text>
          <MaterialCommunityIcons
            style={{
              position: "absolute",
              color: "white",
              bottom: 15,
              left: 20,
            }}
            name="lightning-bolt"
            size={24}
            color="black"
          />
        </Pressable>
      ))}
    </View>
  );
};

export default FitnessCards;

const styles = StyleSheet.create({});
