import React from 'react'
import {View, ImageBackground, Dimensions} from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


const Showimages = props => {
    return (
        <View>
            <ImageBackground
            source={props.route.params.url} 
            style={{height:deviceHeight, width:deviceWidth}}/>
        </View>
    )
}

export default Showimages;