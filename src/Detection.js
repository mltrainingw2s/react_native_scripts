import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Image,Button, Animated} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import FormData from 'form-data';
import qs from 'qs';
// import { Button } from 'react-native-paper';
export default function Gallery() {
    
    const PostUser = () => {
    const config = {
      headers: {
   
       'Content-Type': 'multipart/form-data'
   
      }
   }
   
   
   const datas = new FormData();
   const uri = imgg;
   const encoded = encodeURI(uri);
   console.log(encoded,"&&&&&&&&&&&&&&&&&&&&&&&&&&&",encoded.split('/').pop());
   console.log('image.' + encoded.split('.').pop(),"&&&&&&&&&&&&&&&&&&&&&&&&&&&",encoded.split('.').pop('/'));
   datas.append('data', {
       uri: encoded,       
        type: 'image/' + encoded.split('.').pop(),
        name: encoded.split('/').pop(),
      })

   axios.post('http://13.234.21.152:8000/mlrest/mlimage/', datas, config)
   .then(function (response) { alert('success');})
    .catch(function (error) { console.log(error.response)
     });
    }





    // const PostUser = () => {
    //   //create object with uri, type, image name
    //   var myfile = {
    //     uri: imgg,
    //     type: 'image/jpeg',
    //     name: 'IMG-20220119-WA0000.jpg ',
    //   };

    //   //use formdata
    //   console.log(myfile,")))))))")
    //   var formData = new FormData(); 
    //   //append created myfile{} to formdata
    //   formData.append('image',  myfile);
    //   //use axios to POST'
    //   console.log(imgg,")))imgg)))")
    //   console.log(formData)
    //   axios({
    //     method: 'POST',
    //     url: 'http://13.234.21.152:8000/mlrest/mlimage/',
    //     data: formData,
         
    //     headers: {
    //         // 'Authorization': "Bearer  "  +  YOUR_BEARER_TOKEN,
    //         'Accept': 'application/json',
    //         'Content-Type': 'multipart/form-data;'    
    //     }}) .then(function (response) { console.log(response)})
    //     .catch(function (error) { console.log(error.response)
    //   });
    // }
    // const PostUser = () => {
    //   const url = "http://13.234.21.152:8000/mlrest/mlimage/";
    //   const data = { 'data': imgg };
    //   const options = {
    //     method: 'POST',
    //     headers: { 'content-type': 'application/x-www-form-urlencoded' },
    //     data: qs.stringify(data),
    //     url,
    //   };
    //   axios(options);
    // }

    const navi = useNavigation();
    const [imgg, setImgg] = useState();
    useEffect(() => {
      return () => {
        ImagePicker.clean()
          .then(() => {
            console.log('removed all tmp images from tmp directory');
          })
          .catch(e => {
            console.log(e);
          });
      };
    }, []);
    const OpenCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
          });
    };
    const OpenGallery = async () => {
      const imgg = await ImagePicker.openPicker({
        width: 300,
        height: 400,
      })
        .then(image => {
          console.log(image, 'imagez');
          setImgg(image.path);
        })
        .catch(err => {
          console.log(err);
        });
    };
    const openVideo = () => {
      ImagePicker.openPicker({
        mediaType: 'video',
      }).then(image => {
        console.log(image);
      });
    };

   
    
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={{uri: imgg}} style={{width: 100, height: 100}} />
        {/* <Text>{imgg}</Text> */}
        <Text
          style={style.btn}
          onPress={() => {
            OpenCamera();
          }}>
          Open Camera
        </Text>
        <Text
          style={style.btn}
          onPress={() => {
            OpenGallery();
          }}>
          Open Gallery
        </Text>
        <Button title='Click me'  onPress={() => {
            PostUser();
          }}></Button>
        {/* <Text style={style.samText}>Welcome Allll!!!</Text> */}
      </View>
    );
  }
  const style = StyleSheet.create({
    btn: {
      paddingVertical: 10,
      paddingHorizontal: 40,
      borderRadius: 5,
      marginBottom: 30,
      backgroundColor:'#00B3B3',
    },
    samText:{
      color:'red',
      fontFamily:'DancingScript-Bold',
    }
  });














// import {useNavigation} from '@react-navigation/native';
// import React, {useState, useEffect, useRef} from 'react';
// import {View, Text, StyleSheet,Button, Image, Animated} from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
// export default function Gallery({ navigation }) {
//     const navi = useNavigation();
//     const [imgg, setImgg] = useState();
//     useEffect(() => {
//       return () => {
//         ImagePicker.clean()
//           .then(() => {
//             console.log('removed all tmp images from tmp directory');
//           })
//           .catch(e => {
//             console.log(e);
//           });
//       };
//     }, []);
//     const OpenGallery = async () => {
//       const imgg = await ImagePicker.openPicker({
//         width: 300,
//         height: 400,
//       })
//         .then(image => {
//           console.log(image, 'imagez');
//           setImgg(image.path);
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     };
   
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Image source={{uri: imgg}} style={{width: 100, height: 100}} />
//         <Text>{imgg}</Text>
//         <Text
//           style={style.btn}
//           onPress={() => {
//             OpenGallery();
//           }}>
//           Open Gallery
//         </Text>
//         <View>
//           <Button onPress={this._onPress} title="Submit" color="#FF00FF" accessibilityLabel="Tap on Me"/>
//         </View>
//       </View>
//     );
//   }
//   const style = StyleSheet.create({
//     btn: {
//       paddingVertical: 10,
//       paddingHorizontal: 40,
//       borderRadius: 5,
//       marginBottom: 30,
//       backgroundColor:'#00B3B3',
//     },
//   });




// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, FlatList, Text, View } from 'react-native';

// export default App = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   const getMovies = async () => {
//      try {
//       // const response = await fetch('https://reactnative.dev/movies.json');
//       const response = await fetch('http://192.168.43.199:8000/venue/venue/1');
//       const json = await response.json();
//       // setData(json.movies);
//       setData(json.data);
//       console.log(json.data)
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     getMovies();
//   }, []);

//   return (
//     <View style={{ flex: 1, padding: 24 }}>
//       {isLoading ? <ActivityIndicator/> : (
//         <FlatList
//           data={data}
//           keyExtractor={({ id }, index) => id}
//           renderItem={({ item }) => (
//             // <Text>{item.title}, {item.releaseYear}</Text>
//             <Text>{item.booking_method}, {item.surface}</Text>
//           )}
//         />
//       )}
//     </View>
//   );
// };








// import React, { Component } from 'react';

// class App extends Component {

//   async postData(){

//     try{
//       let result = await fetch('https://webhook.site/1544ea3e-30c2-416f-b8c5-15c712cc739e' ,{
//         method:'post',
//         mode:'no-cors',
//         headers:{
//           'Accept':'application/json',
//           'Content-type':'application/json',
//         },
//         body: JSON.stringify({
//           key1:'myusername'
//         })
//       });
//       }
//       catch(e){
//         console.log(e)
//       }

//   }
//   render(){
//     return(
//       <div className="App">
//         <button onClick={() => this.postData()}>Press me to post some data</button>
//      </div>
//     );
//   }
// }

// export default App;


// #___________________________________________________________________

// const postUser = () => {
//   const requestOptions = {
//     method : 'POST',
//     headers : { 'Content-Type':'application/json', 'Accept':'application/json'},
//     body : JSON.stringify({
//       image:'',
//     })
//   };

//   fetch("")
//   .then((response) => response.json())
//   .then((json) => {
//     console.log("YUIKKKKKKKKKKKKKKKK",json.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// }