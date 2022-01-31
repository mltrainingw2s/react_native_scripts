import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  LayoutAnimation,
  UIManager,
  Platform,
  TouchableOpacity,
  Dimensions,
  Image,
  Button,
} from "react-native";
import { Card } from "react-native-paper";
import Detection from './Detection';

const { width } = Dimensions.get('window');




const dummyData = [
  {
    id: 1,
    name: "Image Classification",
    color: "orange",
  },
  {
    id: 2,
    name: "Object Detection",
    color: "red",
  },
  {
    id: 3,
    name: "Text Summarization",
    color: "green",
  },
 

];

export default function Home({ navigation }) {
  const [data, setData] = React.useState(dummyData); 
  
  

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
        vertical={true}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.cardContainer}
            >
              <Card style={[styles.card, {backgroundColor: '#A0A0A0'}]}>
              <Text style={styles.text}>{item.name}</Text>
              </Card>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 50,
    padding: 8,
    paddingBottom:10,
  },
  text: { 
    justifyContent: "center",
    color: "white", 
    fontWeight: 'bold',
    fontSize:20,
    top:60,
    textAlign:'center',
   },
  cardContainer: {
    padding:20,
  },
  card: {
    height: 150,
    borderRadius: 12,
    // padding: 50,
  },
 


});