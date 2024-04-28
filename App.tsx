import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'

export default function App() {
    const [bgColor, setbgColor] = useState("color")
    const generate = () => {
        const hexColor = "0123456789ABCDEF"
        let color = "#"

        for(let i=0;i<6;i++){
          let x=hexColor[Math.floor(Math.random()*16)];
          color+=x;
        }
        setbgColor(color)
    } 

    return (
    <>
    <StatusBar backgroundColor={bgColor}/>
      <View style={[styles.container, {backgroundColor: bgColor}]}> 
        <View style={styles.btn}>
          <TouchableOpacity onPress={generate}>
          <Text style={styles.btnTxt}>Press Me</Text>
          </TouchableOpacity>
        
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#ffffff',
    borderRadius: 12
  },
  btnTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000'
  }
})