import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Image,Button, Animated} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import FormData from 'form-data';
import qs from 'qs';
// import { Button } from 'react-native-paper';
export default function Gallery({ navigation }) {
    
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
   .then(function (response) { navigation.navigate('Gallary')})
    .catch(function (error) { console.log(error.response)
     });
    }


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











