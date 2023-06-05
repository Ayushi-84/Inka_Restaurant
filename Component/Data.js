import { useNavigation } from '@react-navigation/native';
import React,{useState}  from 'react';
import { Icon,Avatar, Button} from 'react-native-elements';
import {useSelector,useDispatch} from "react-redux"
 import {View,Dimensions,StyleSheet,ImageBackground,StatusBar,Text,ScrollView,TouchableOpacity} from "react-native"
 import MI from "react-native-vector-icons/MaterialIcons"
 import AD from "react-native-vector-icons/AntDesign"
 import FT from "react-native-vector-icons/Feather"
 import EditPlusMinus from './EditPlusMinus';
 
 const {width,height}=Dimensions.get("window")

 const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 36,
    color:'#000'
  },
  screen: {
    margin: 20,
  },
    summary: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 20,
      padding: 10,
      shadowColor: "black",
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      borderRadius: 10,
      backgroundColor: "white",
    },
    summaryText: {
      fontFamily: "openSansBold",
      fontSize: 20,
      color:'#000'
    },
    amount: {
      color: "#C2185B",
    },
})

const DATA=[
  {title:'Starters',
  type:1,
 info:[
   {   
         id: 1,
         type: 1,
         name: 'Paneer Tikka',
         description: 'Description',
         price: 100,
         status: 'VEG',
         value:0
         },
         {
         id: 2,
         type: 1,
         name: 'Aloo Tikki',
         description: 'Description',
         price: 80,
         status: 'VEG',
         value:0
         },
         {
         id: 3,
         type: 1,
         name: 'Cheese Balls',
         description: 'Description',
         price: 150,
         status: 'VEG',
         value:0
         },
       ]},
     { title:'Main Course',
     type:2,
 info:[
         {
         id: 4,
         type: 2,
         name: 'BPM',
         description: 'Description',
         price: 100,
         status: 'VEG',
         value:0
         },
         {
         id: 5,
         type: 2,
         name: 'Naan',
         description: 'Description',
         price: 80,
         status: 'VEG',
         value:0
         },
         {
         id: 6,
         type: 2,
         name: 'Daal Fry',
         description: 'Description',
         price: 150,
         status: 'VEG',
         value:0
         },
 ]},
 {title:'Desserts',
 type:3,
 info:[
         {
         id: 7,
         type: 3,
         name: 'Mint Oreo Cake',
         description: 'Description',
         price: 100,
         status: 'VEG',
         value:0
         },
         {
         id: 8,
         type: 3,
         name: 'Coconut Cream Cake',
         description: 'Description',
         price: 80,
         status: 'VEG',
         value:0
         },
         {
         id: 9,
         type: 3,
         name: 'Brownies',
         description: 'Description',
         price: 150,
         status: 'VEG',
         value:0
         },
       ]},
   {title:'Drinks',
   type:4,
   info:[
         {
         id: 10,
         type: 4,
         name: 'Sprite',
         description: 'Description',
         price: 100,
         status: 'VEG',
         value:0
         },
         {
         id: 11,
         type: 4,
         name: 'Pepsi',
         description: 'Description',
         price: 80,
         status: 'VEG',
         value:0
         },
         {
         id: 12,
         type: 4,
         name: '7 Up',
         description: 'Description',
         price: 150,
         status: 'VEG',
         value:0
         },
         {
         id: 13,
         type: 4,
         name: 'Fanta',
         description: 'Description',
         price: 80,
         status: 'VEG',
         value:0
         }
       ]}
 ]

 const Data=(props)=> {
  const navigation= useNavigation();
const [refresh,setRefresh]=useState(false)

var dispatch=useDispatch()

var product=useSelector(state=>state.products)
var keys=Object.keys(product).length
var productval=Object.values(product)

const handleClick=(index,item,value)=>{

 const type=item.type-1

  DATA[type].info[index].value=value
  dispatch({type:'EDIT_PRODUCT',payload:[DATA[type].info[index].id,DATA[type].info[index]]})

  setRefresh(!refresh)

  
  if( DATA[type].info[index].value==0)
  {dispatch({type:'DEL_PRODUCT',payload:[DATA[type].info[index].id]})
  setRefresh(!refresh)
  }

  
}

var info=0

productval.map((item, index) => {
  info+=item.value*item.price
          return (
           info
          );
        })
  
   return (
    <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={{width:width,height:height*0.42}}>
      <ImageBackground
         source={require('./images/bg.jpeg')}
         style={{width:width,height:height*0.35}}
      >
      <View style={{flexDirection:'row',width:width*0.90,justifyContent:'space-between',marginTop:40}}>
      <View style={{flexDirection:'row',width:width*0.90,justifyContent:'space-between'}}>
     
      <TouchableOpacity onPress={()=>props.navigation.navigate("HomeScreen",{setRefresh:!refresh})}>
      <MI name='arrow-back' size={24} color="#FFF" style={{marginLeft:15}}  />
      </TouchableOpacity>

      <Text style={{fontSize:24,color:'#FFF',marginRight:160}}>My Cart</Text>

      <AD name='upload' size={24} color="#FFF" style={{marginRight:15}} />
      </View>
      <MI name='info-outline' size={24} color="#FFF" />
      </View>
      </ImageBackground>

      <View style={{width:width*0.66,justifyContent:'center',alignItems:'center',alignSelf:'center',position:'absolute',marginTop:100}}>
        <View style={{width:width*0.66,height:height*0.16,backgroundColor:'#FFF',borderRadius:5,elevation:10,justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
   
            <Text style={{fontSize:30,color:'#000'}}>Cost: &#8377;{info}</Text>
          
           </View>
           </View>
           <View style={{marginTop:5}}>
            
           <Text style={{fontSize:26,color:'#000'}}>Review Orders</Text>
           </View>
     </View>

     <View style={{width:width,alignSelf:'center'}}>
        <View style={{width:width,height:height*0.5,backgroundColor:'#FFF'}}>

      <ScrollView>
        {productval.map((item, index) => {
                  return (        
                    <View key={item.id}>
            <View style={styles.summary}>
                
                <View style={styles.summaryText}>

               <Text style={styles.summaryText}>
                  {item.name} 
               </Text>
               <Text style={styles.amount}>
                  Price:{item.price}
                  </Text>
                  <Text style={{color:'green'}}>
                  {item.status}
                  </Text>
                    </View>
            <EditPlusMinus onChange={(value)=>handleClick(index,item,value)} item={item}/>
                    
             </View>
           </View>
                  );
                
                })}
                </ScrollView>
           </View>
           </View>
    
 <TouchableOpacity>
    <View style={{width:width,alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
        <View style={{width:width,height:height*0.08,backgroundColor:'#2f3640',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
            <AD name='shoppingcart' size={30} color="#FFF" style={{marginRight:10}} />
               <Text style={{fontSize:24,color:'#FFF'}}>
                  PLACE ORDER
               </Text>
            
          </View>
    </View>
    </TouchableOpacity>
  </View>
   );
 };
 
 
 export default Data;