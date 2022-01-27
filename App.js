// import React, { useState, useEffect } from "react";
// import ImagePicker from "react-native-image-picker";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   SafeAreaView,
//   ActivityIndicator,
//   FlatList,
//   ScrollView,
//   Button,
//   TouchableOpacity,
//   Alert,
//   Dimensions,
// } from "react-native";

// // get data from this URL!
// const movieURL = "https://reactnative.dev/movies.json";
// const testURL = "http://13.234.21.152:8000/mlrest/mlimage/";
// const imgURL = "http://13.234.21.152:8000/static/img/";
// const numbercolumns = 3
// const App = () => {
//   // managing state with 'useState'
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   const [title, setTitle] = useState([]);
//   const [description, setDescription] = useState([]);

//   state = {
//     photo: null,
//   };
  
//   const Insertdata = () => {
//     fetch(testURL,{
//       method:"POST",
//       headers:{
//         'Content-Type':'application/json'
//       },
//       body: JSON.stringify({data:'http://13.234.21.152:8000/static/detectimg/1.jpg'})
//     }).then((response) => response.json()).then((data) => {
//       console.log(data)
//       Alert.alert(data)
//     })
//   }
//   // similar to 'componentDidMount', gets called once
//   useEffect(() => {
//     fetch(testURL)
//       .then((response) => response.json()) // get response, convert to json
//       .then((json) => {
//         setData(json.gallery);
//         // setTitle(json.title);
//         // setDescription(json.description);
//       })
//       .catch((error) => alert(error)) // display errors
//       .finally(() => setLoading(false)); // change loading state
//   }, []);

//   // Also get call asynchronous function
//   // async function getMoviesAsync() {
//   //   try {
//   //     let response = await fetch(movieURL);
//   //     let json = await response.json();
//   //     setData(json.movies);
//   //     // setTitle(json.title);
//   //     // setDescription(json.description);
//   //     setLoading(false);
//   //   } catch (error) {
//   //     alert(error);
//   //   }
//   // }
  
//   return (
    
//     <ScrollView style={styles.container}>
//       <View style={styles.card1}>

//       </View>
//       <View>
//             <TouchableOpacity
//               style={styles.buttonStyle}
//               activeOpacity={0.6}
//               onPress={Insertdata}
//               >
//               <Text style={styles.buttonStyle}>UPLOAD IMAGE</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity
//               style={styles.buttonStyle}
//               activeOpacity={0.6}
//               onPress={Insertdata}
//               >
//               <Text style={styles.buttonStyle}> IMAGE</Text>
//             </TouchableOpacity>
//         </View>
//       {isLoading ? (
//         <ActivityIndicator />
//       ) : (
//         <View>
//           {/* Title from URL */}
//           {/* <Text style={styles.title}>{title}</Text> */}
//           {/* Display each movie */}
//           <View style={styles.card}>
//             <Text>Hello</Text>
//           </View>
          
//           <FlatList style ={styles.flatlists}
//             horizontal
//             // numColumns = {numbercolumns}
//             data={data}
//             keyExtractor={({ id }, index) => id}
//             renderItem={({ item }) => (
//               <View style={{ padding: 10,backgroundColor:"#225e23", width:300, height:300, }}>
                
//                 <Image style={styles.image} source={{ uri:  "http://13.234.21.152:8000/static/detectimg/"+item.image_upload}}></Image>
//               </View>
              
//             )}
//           />
//         </View>
//       )}

//     </ScrollView>
    
//   );
// };

// const styles = StyleSheet.create({
//   card1:{
//     width:Dimensions.get('window').width,
//     height:271,
//     backgroundColor:'red',
//   },
//   container: {
//     flex: 1,
//     // alignItems: "center",
//     // justifyContent:"center",
//     backgroundColor:"#f4f4f4",
//     marginTop: 48,
//   },
//   card:{
//     flex:2,
//     // alignItems:"center",
//     // justifyContent:"center",
//     backgroundColor:"#fff",
//     marginTop: 48,
//   },
//   movieText: {
//     fontSize: 26,
//     fontWeight: "200",
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: "bold",
//   },
//   buttonStyle:{
//     backgroundColor:"#7DE24a",
//     color:"#000",
//     paddingLeft:5,
//     paddingRight:5,
//     paddingBottom:3,
//     paddingTop:3,
//   },
//   flatlists:{
//     flex:1,
//     marginVertical:20,
//     width:Dimensions.get('window').width/1,
//     backgroundColor:'#fff',
//     padding:5,
//   },
//   description: {
//     textAlign: "center",
//     marginBottom: 18,
//     fontWeight: "200",
//     color: "green",
//   },
//   image:{
//     width:"80%",
//     height:"100%",
//     backgroundColor:'#000',
//     padding:5,
//   }
// });

// export default App;

import React, { useEffect, useState } from 'react';
import { FlatList,Image, Text, View,StyleSheet,Dimensions, } from 'react-native';
// import GridImageView from 'react-native-grid-image-viewer';
var numCol = 3;

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  const styles = StyleSheet.create({
    loadinglogo:{
      flex:1,
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
      backgroundColor:"red",
    },
  });

  useEffect(() => {
    fetch('http://13.234.21.152:8000/mlrest/mlimage/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    
    <View style={{ flex: 1, padding: 10 }}>
      
      {isLoading ? <Text style={styles.loadinglogo}>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{'Galleries'}</Text>
          {/* <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>smile_percentage:</Text> */}
          
          <FlatList
            numColumns={numCol}
            data={data.gallery}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
            //   <View>
            // <Text>{item.id + '. ' + item.smile_percentage}</Text>
              // <Image style={{ height: 100, width: 100}} source = {{uri:'http://13.234.21.152:8000/static/detectimg/'+item.image_upload}}></Image>
            //   </View>
            <View > 
            <Image style={{ height: 100, width: 100}} source={{ uri:  "http://13.234.21.152:8000/static/detectimg/"+item.image_upload}}></Image>  
            {/* <GridImageView  data={['http://13.234.21.152:8000/static/detectimg/'+item.image_upload  ]} /> */}
             </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

