import React,{useState} from 'react'
import { RecyclerViewBackedScrollViewComponent } from 'react-native'
import { View,Text } from 'react-native'
import { Avatar,Button } from 'react-native-elements'
import { useDispatch,useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'
import Data from './Data'



export default function PlusMinus(props) {
 

  const[value,setValue]=useState(0)
  const[qty,setQty]=useState('')
  const navigation=useNavigation()
  const [refresh,setRefresh]=useState(false)
  var dispatch=useDispatch()
 
  const handlePlus=()=>{
    var c= value+1
    setValue(c)
    props.onChange(c)
    setRefresh(!refresh)
}

const handleMinus=()=>{
    var c=value-1
    if(c>=1)
 { setValue(c)
  props.onChange(c)}
else{
  setRefresh(!refresh)
   setValue(0)
   props.onChange(c)
}
}

  return (
  <View>
  {value==0?<Button title="ADD TO CART" onPress={handlePlus} />:
  <View style={{display:'flex',flexDirection:'row',width:'40%',}}>
<Avatar   size="medium"
rounded
overlayContainerStyle={{backgroundColor: 'blue'}}
icon={{name: 'minus', color: 'white', type: 'feather'}}
onPress={handleMinus}
activeOpacity={0.7}></Avatar>

<Text style={{fontSize:30,marginLeft:10,marginRight:10,color:'#000'}}>{value}</Text>

  <Avatar   size="medium"
  rounded
overlayContainerStyle={{backgroundColor: 'blue'}}
icon={{name: 'plus', color: 'white', type: 'feather'}}
onPress={handlePlus}
activeOpacity={0.7}></Avatar>
</View>
  }
</View>


  )
  
}
