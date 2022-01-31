export default Images =[
    {url:require('../assets/1.jpg')},
    {url:require('../assets/2.jpg')},
    {url:require('../assets/3.jpg')},
    {url:require('../assets/4.jpg')},
    {url:require('../assets/5.jpg')},
    {url:require('../assets/7.jpg')},
    {url:require('../assets/8.jpg')},
    {url:require('../assets/9.jpg')},
   
]




// import React, { useEffect, useState } from 'react';
// import { FlatList, Image, Text, View } from 'react-native';
// import GridImageView from 'react-native-grid-image-viewer';

// import { ImageStore } from "react-native"
// import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"

// export default Images = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   console.log(data);

//   useEffect(() => {
//     fetch('http://13.234.21.152:8000/mlrest/mlimage/')
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);

//   return (

//     <View>
      
//         <FlatList
//         data={data.gallery}
//         keyExtractor={({ id }, index) => id}
        
//         renderItem={({ item }) => (
//             <View>

//             <Image style={{ height: 100, width: 100}} source = {{uri:'http://13.234.21.152:8000/static/detectimg/'+item.image_upload}}></Image>
//             </View>
//         )}
//         />

//         </View>
//   );
// };