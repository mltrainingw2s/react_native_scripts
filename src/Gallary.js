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

    <View style={{ flex: 1, padding: 24 }}>
      
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          {/* <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{'smile_percentage'}</Text> */}
          {/* <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>smile_percentage:</Text> */}
          <FlatList
            data={data.gallery}
            keyExtractor={({ id }, index) => id}
            // numColumns={3}
            // key={3}
            renderItem={({ item }) => (
            //   <View>
            // <Text>{item.id + '. ' + item.smile_percentage}</Text>
            //   <Image style={{ height: 100, width: 100}} source = {{uri:'http://13.234.21.152:8000/static/detectimg/'+item.image_upload}}></Image>
            //   </View>
            
            <View>
              {/* <Text>{item.image_upload}</Text> */}
            <GridImageView   data={['http://13.234.21.152:8000/static/detectimg/'+item.image_upload]} />
            </View> 


            )}
          />

        </View>
      )}
    </View>
  );
            };