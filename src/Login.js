import React ,{ useState } from 'react'
import { View, Text,StyleSheet,Image,TextInput,Pressable } from 'react-native';
import Toast from 'react-native-simple-toast';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const baseUrl = 'http://127.0.0.1:8000/login/';
export default class Main extends React.Component {
    constructor(props){
        super(props)
        this.state={
          email:"",
          password:"",
          emailError:"",
          passError:"",
        }
      }
        // storing data in asyncstorage
        _storeData = async (token) => {
          try {
            await AsyncStorage.setItem('token',token);
            console.log(token,"token value")
          } catch (error) {
           console.log(error)
          }
        };
        //retriving data
        _retrieveData = async () => {
          console.log("retriveee")
          try {
            const value = await AsyncStorage.getItem('token');
            if (value !== null) {
               this.props.navigation.navigate('Home');
               console.log("ggggg")
            }else{
               this.props.navigation.navigate('App');
            }
          } catch (error) {
            console.log(error);
          }
        };
       submit = async (event) =>{
        if(this.state.email=='' && this.state.password==''){
            Toast.show('Please enter login Credentials')
        }else{
        const formData = new FormData();
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
        axios({
          url: 'http://127.0.0.1:8000/login/',
          method: 'POST',
          data: formData,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
        }).then((resp) => {
          if(resp.data.is_buyer == false){
            console.log(resp.data);
            let token=resp.data.access;
            this._storeData(token);
            this.props.navigation.navigate('Home');
          }else{
            Toast.show(resp.data.message)
          }
        }).catch(err => {
          console.log(err);
        });
        }
      }
      emailValidator(){
        if(this.state.email==""){
          this.setState({emailError:"Email Feild is Required"})
        }
        else{
          this.setState({emailError:""})
        }
      }
      passValidator(){
          if(this.state.password==""){
            this.setState({passError:"Password Field is Required"})
          }
          else{
            this.setState({passError:""})
          }
      }
      componentDidMount(){
          console.log("Sdfds")
          this._retrieveData();
      }
    render(){
    return (
        <View style={styles.bg}>
            {/* <Text style={styles.logoText}>Fasino</Text> */}
             <Image style={styles.logoImg}
             source={require('../assets/footer.png')} />
             {/* </Text> */}
             {/* <Text style={styles.logoWord}>Welcome to Our Baby World.</Text> */}
            <View style={styles.content}>
            <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="black"
            onBlur={()=>this.emailValidator()}
            onChangeText={text => this.setState({email:text})}/>
            <Text style={{color:"red",height:20,marginRight:150}}>{this.state.emailError}</Text>
            <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="black"
            onBlur={()=>this.passValidator()}
            onChangeText={text => this.setState({password:text})}/>
            <Text style={{color:"red",height:20,marginRight:130}}>{this.state.passError}</Text>
            <Pressable style={styles.loginBtn} onPress={()=>{this.submit()}}  >
            <Text style={{color:'white',fontWeight:'bold'}}>LOGIN</Text>
           </Pressable>
            </View>
        </View>
    )
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputView:{
      width:"80%",
      // backgroundColor:"#465881",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20,
      marginTop:200,
      marginLeft:40
    },
    inputText:{
      height:50,
      color:'black',
      // backgroundColor:"#465881",
      borderBottomColor:'#00B3B3',
      borderRadius:20,
      marginTop:20,
      padding:15 ,
      borderColor:'#00B3B3',
      borderBottomWidth: 1,
      width:'90%',
      alignItems:'center'
    },
    loginBtn:{
      width:"70%",
      backgroundColor:"#00B3B3",
      borderRadius:25,
      height:40,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10,
      margin:20
    },
    bg:{
      // backgroundColor:'#00B3B3',
      backgroundColor:"#c6e6f5",
      flex:1,
      position:'relative',
    },
    content:{
      backgroundColor:'white',
      marginTop:200,
      flex:2,
      alignItems:'center'
    },
    logoText:{
      textAlign:'center',
      fontSize:25,
      fontWeight:'bold',
      fontStyle:'italic',
      // color:'#B30059',
      position:'absolute',
      top:50,
      left:70,
    },
    logoImg: {
      flex: 1,
      width: null,
      height: null,
      top:50,
      resizeMode: 'contain',
      
  },
    // logoImg:{
    //   height:100,
    //   width:200,
    //   backgroundColor:"black",
    //   position:'absolute',
    //   top:5,
    //   left:0,
    // },
    logoWord:{
      position:'absolute',
      top:100,
      left:120,
      fontStyle:'italic',
      color:'#B30059',
    }
});



