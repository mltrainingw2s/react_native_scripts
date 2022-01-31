import React, { useEffect, useState } from 'react';
import { FlatList,Image, Text, View } from 'react-native';
import GridImageView from 'react-native-grid-image-viewer';

import { ImageStore } from "react-native"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('http://13.234.21.152:8000/mlrest/mlimage/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (

    <View style={{ flex: 1, padding: 24, flexDirection: 'row', flexWrap:'wrap'}}>
      
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'row',flexWrap:'wrap', justifyContent:  'space-between'}}>
          {/* <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{'smile_percentage'}</Text> */}
          {/* <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>smile_percentage:</Text> */}
          <FlatList
            data={data.gallery}
            keyExtractor={({ id }, index) => id}
            // numColumns={3}
            // key={3}
            renderItem={({ item }) => (
            
            <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
             
            <GridImageView  
             data={['http://13.234.21.152:8000/static/detectimg/'+item.image_upload,]} />
            </View> 


            )}
          />

        </View>
      )}
    </View>
  );
};



// import React from 'react'
// import { View, Image, Dimensions,ScrollView, TouchableOpacity} from "react-native"
// import { managePanProps } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';
// import Images from './Images';
// // import Showimages from './Showimages';

// let deviceHeight = Dimensions.get('window').height;
// let deviceWidth = Dimensions.get('window').width;

// const Gallary = (props) => {
//   return (
//     <ScrollView>
//     <View style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
//       {
//         Images.map((image,index) => (
//           <TouchableOpacity key ={index} onPress={()=> 
//           props.navigation.navigate('Showimages',{
//             url:image.url
//           })}>
//             <Image source ={image.url}
//             style={{height:deviceHeight/3,
//             width:deviceWidth/3-6,
//             borderRadius:10,
//             margin:2}}/>
//           </TouchableOpacity>
//        ))
//       }
//     </View>
//     </ScrollView>
//   )
// }
// export default Gallary;