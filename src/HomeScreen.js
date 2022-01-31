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


const { width } = Dimensions.get('window');

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const dummyData = [
  {
    id: 1,
    name: "orange card",
    color: "#D7DBDD",
    redirect: "Detection",
    image: "http://13.234.21.152:8000/static/img/face.jpg",
    title : 'Smile Detetcion',
  },
  {
    id: 2,
    name: "red card",
    color: "#D7DBDD",
    redirect: "FileUpload",
    image: "http://13.234.21.152:8000/static/img/text.png",
    title : 'Text Summarization',
  },
  {
    id: 3,
    name: "red card",
    color: "#D7DBDD",
    redirect: "Home",
    image: "http://13.234.21.152:8000/static/img/videodetect.jpg",
    title : 'Video Detection',
  },
  
];

export default function Home({ navigation }) {
  const [data, setData] = React.useState(dummyData); 
  const removeItem = (id) => {
    let arr = data.filter(function(item) {
      return item.id !== id
    })
    setData(arr);
  };

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
              // onPress={onPressHandler}
              // onPress={() => removeItem(item.id)}
            >
              <Card style={[styles.card, {backgroundColor: item.color}]}>
              <View style={[styles.box, {backgroundColor: item.color }]}>
              <Image
                  style={styles.tinyLogo}
                  // source={require("http://13.234.21.152:8000/static/img/11.png")}
                  // source={require("http://13.234.21.152:8000/static/img/11.png")}
                  source={{uri:item.image}}
                  // source={require(item.image)}
                />
                </View>

                {/* <View style={[styles.box1, { backgroundColor: item.color}]}> */}
                  <Text style={styles.text}>
                    
                  </Text>
                  <Button style={styles.btn} mode="contained"  title={item.title} onPress={() => navigation.navigate(item.redirect)}>
                </Button>
                {/* </View> */}
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
    // backgroundColor: "#ecf0f1",
    padding: 8,
    paddingBottom:10,
  },
  flatList: {
    // paddingHorizontal: 16,
    // paddingVertical: 16,
  },
  cardContainer: {
    padding:20,
  },
  card: {
    height: 250,
    borderRadius: 12,
    padding: 10,
  },
  tinyLogo: {
      width: 310,
      height: 190,
      },
  text: {
    color: "blue",
    fontWeight: 'bold',
    justifyContent: "center",
    paddingTop:50,
    left:50
   },
   box: {
    width: 120,
    height: 130,
  },
  btn: {
    color:'red',
    backgroundColor:'black',
  }
});