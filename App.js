import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image, Button } from 'react-native';

export default class App extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Image style={styles.imglogo} source = {require('./src/img/small.png')}/>
          <Text style={styles.logo}>SEAMOS SOLUCION</Text>
        </View>
        
        <View style={styles.discurso}>
          <Text>JUGUETES</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur leo neque, eget aliquet ex varius eu.</Text>
        </View>
        <Text>QUIERO OBSEQUIAR</Text>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Describe de manera corta el juguete" 
            placeholderTextColor="#AEADB3"
            onChangeText={text => this.setState({descripcion:text})}/>
        </View>
        
        <TouchableOpacity style={styles.ingresar}>
          <Text style={styles.txtIngresar}>ENVIAR</Text>
        </TouchableOpacity>
        
        
        <View style={styles.footer}>
          <Text style={{color:'white'}} >Conoce mas en:</Text>
          <View style={styles.socialMedia}>
            <TouchableOpacity>
              <Image source = {require('./src/img/SM_FBsmall.png')}/>
            </TouchableOpacity>
          </View>
        </View>

  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    //backgroundColor: '#FFFBCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: "#4573FF",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    paddingTop: 30
  },
  imglogo:{
    width: '10%'
  },
  logo:{
    fontWeight:'bold',
    fontSize:30,
    color:'white',
    paddingTop:5,
    paddingBottom: 10
  },
  discurso:{
    width: '80%',
    textAlign:'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  inputView:{
    width:"80%",
    backgroundColor:"#FFFFFF",
    borderRadius:10,
    borderWidth:1,
    borderColor:"#606060",
    height:50,
    marginBottom:10,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  ingresar:{
    color:"white",
    fontSize:20,
    backgroundColor:"#45DCFF",
    borderRadius:10,
    height:50,
    paddingHorizontal: 10,
    alignItems:"center",
    justifyContent:"center",
  },
  txtIngresar:{
    color:'#FFFFFF',
    fontSize: 20,
    fontWeight:"bold"
  },
  registroBtn:{
    width:"80%",
    backgroundColor:"white",
    borderRadius:10,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:5,
    marginBottom:10,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 3,
  },
  registroText:{
    color:"#71DCFF",
    fontSize: 17,
    fontWeight: 'bold'
  },
  footer:{
    width: '100%',
    backgroundColor: "#4573FF",
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 10,
    paddingTop: 1,
    paddingBottom:5
  },
  footerTex:{
    fontSize:20,
    color:'white'
  },
  socialMedia:{
    height:41,
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
    
  }
});
