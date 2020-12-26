import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.head}>
        <Text style={styles.logo}>Seamos solución</Text>
        </View>
        
        <View style={styles.discurso}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur leo neque, eget aliquet ex varius eu. Curabitur eget augue turpis.</Text>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Contraseña" 
            placeholderTextColor="#AEADB3"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    height: "10%",
    backgroundColor: "#A41D00"

  },
  logo:{
    fontWeight:"bold",
    fontSize:30,
    color:"#fb5b5a",
    marginBottom:40
  },
  discurso:{
    width: "80%",
    marginHorizontal:10,
    backgroundColor:"#fb5b5a",
    textAlign:"center",
    alignItems: "center"
  },
  inputView:{
    width:"80%",
    backgroundColor:"#D1D1D1",
    borderRadius:15,
    borderWidth:1,
    borderColor:"#606060",
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"#A41D00"
  }
});
