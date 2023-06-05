import { useNavigation } from '@react-navigation/native';
import React,{useState,useEffect}  from 'react';
import { Icon,Avatar} from 'react-native-elements';
import {useSelector,useDispatch} from "react-redux"
 import {View,Dimensions,StyleSheet,ImageBackground,StatusBar,Text,ScrollView,TouchableOpacity,Modal,Pressable,Alert} from "react-native"
 import MI from "react-native-vector-icons/MaterialIcons"
 import AD from "react-native-vector-icons/AntDesign"
 import FT from "react-native-vector-icons/Feather"
 import PlusMinus from './PlusMinus';
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
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginBottom:30,
    },
    modalView: {
      marginBottom:20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 25,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 15,
      marginLeft:5,
      marginRight:5,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      textAlign: "center"
    }
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

 const HomeScreen=(props)=> {
  const navigation= useNavigation();

const [showSign,setShowsign]=useState('')
const [refresh,setRefresh]=useState(false)
const [modalVisible, setModalVisible] = useState(false);

var dispatch=useDispatch()

var product=useSelector(state=>state.products)
var keys=Object.keys(product).length

const handleClick=(item,value,index)=>{
   const type=item.type-1

  DATA[type].info[index].value=value
  dispatch({type:'ADD_PRODUCT',payload:[DATA[type].info[index].id,DATA[type].info[index]]})

  setRefresh(!refresh)

  
  if( DATA[type].info[index].value==0)
  {dispatch({type:'DEL_PRODUCT',payload:[DATA[type].info[index].id]})
  setRefresh(!refresh)
  }
  
}
  
   return (
    <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={{width:width,height:height*0.42}}>
      <ImageBackground
         source={require('./images/Thali.jpeg')}
         style={{width:width,height:height*0.25}}
      >
      <View style={{flexDirection:'row',width:width*0.90,justifyContent:'space-between',marginTop:40}}>
      <View style={{flexDirection:'row',width:width*0.90,justifyContent:'space-between'}}>
      <MI name='arrow-back' size={24} color="#FFF"/>
      <AD name='upload' size={24} color="#FFF" style={{marginRight:15}} />
      </View>
      <MI name='info-outline' size={24} color="#FFF" />
      </View>
      </ImageBackground>

      <View style={{width:width*0.9,justifyContent:'center',alignSelf:'center',position:'absolute',marginTop:150}}>
        <View style={{width:width*0.9,height:height*0.22,backgroundColor:'#FFF',borderRadius:5,elevation:10}}>
         
        <View style={{width:width*0.9,marginTop:10}}>
            <Text style={{padding:5,fontSize:22,color:'#000',alignSelf:'center',fontWeight:'bold'}}>
            Inka Restaurant
            </Text>
           </View>

           <View style={{width:width*0.9,marginTop:10,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
           <MI name='star-border' size={18} color="#000" />
            <Text style={{fontSize:16,color:'#000'}}>
                     5.0(200+) | All days : 09:00 AM - 06:00 PM
            </Text>
           </View>

           <View style={{width:width*0.9,marginTop:5,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
           <FT name='phone-call' size={16} color="#000" />
            <Text style={{fontSize:16,color:'#000',marginLeft:6}}>
                    Reach us at : 9876543210
            </Text>
           </View>

           <View style={{width:width*0.9,marginTop:10,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
           <View style={{width:width*0.35,backgroundColor:'#2f3640',padding:8,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:16,color:'#FFF'}}>
                   BOOK A TABLE
            </Text>
            </View>
           </View>
          
           </View>
           </View>
     </View>

     <View style={{width:width,alignSelf:'center'}}>
        <View style={{width:width,height:height*0.5,backgroundColor:'#FFF'}}>
           
        <View style={styles.screen}>
         <ScrollView>
          {DATA.map((element, index) => {
            return (
              <View key={index}>
                <Text style={styles.text}>{element.title}</Text>
    
                {element.info.map((item, index) => {
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
            <EditPlusMinus  onChange={(value)=>handleClick(item,value,index)} item={item}/>
                    
             </View>
           </View>
                  );
                })}
              </View>
            );
          })}
          </ScrollView>
          <View style={{position:'absolute',justifyContent:'center',alignSelf:'center',marginTop:315}}>
          <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {DATA.map((element, index) => {
            return (
              <View style={styles.summary} key={index}>
                <Text style={styles.summaryText}>{element.title}</Text>
              </View>
            );
          })}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Menu</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Menu</Text>
      </Pressable>
    </View>
    </View>
      </View>

         </View>
      </View>
 <TouchableOpacity onPress={()=>props.navigation.navigate("Data")}>
    <View style={{width:width,alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
        <View style={{width:width,height:height*0.08,backgroundColor:'#2f3640',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
            <AD name='shoppingcart' size={30} color="#FFF" style={{marginRight:10}} />
               <Text style={{fontSize:24,color:'#FFF'}}>
                   VIEW CART ( {keys} ITEMS)
               </Text>
            
          </View>
    </View>
    </TouchableOpacity>
  </View>
   );
 };
 
 
 export default HomeScreen;