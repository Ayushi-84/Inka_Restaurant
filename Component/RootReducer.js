var initialState={
    products:{}
}

export default function RootReducer(state=initialState,action)
{
    switch(action.type)
    {
        case 'ADD_PRODUCT':
            state.products[action.payload[0]]=action.payload[1]
            console.log(state.products)
            return ({products:state.products})

        case 'DEL_PRODUCT':
            delete  state.products[action.payload[0]]
            console.log(state.products)
            return ({products:state.products})

      case 'EDIT_PRODUCT':
         state.products[action.payload[0]]=action.payload[1] 
         console.log(state.products)
              return ({products:state.products})


        default:
            return ({products:state.products})
    }
}