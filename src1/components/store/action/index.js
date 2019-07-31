// import firebase from '../../../firebase';
import firebase from 'react-native-firebase'


let AppData = [];

export function Getdata() {
    AppData = [];
    return (dispatch) => {
        firebase.database().ref('/').child('AppMenu').on('child_added', (categoryobject) => {
            let obj = categoryobject.val();
            obj.categoryname = categoryobject.key;
            AppData.push(obj);
            dispatch({
                type: 'Get_App_Menu'
                , payload: AppData
            })

            // alert();
        })
    }
}


export function AddItemToCart(Categoryname, subcategoryname, itemobject,Indexes) {
    const cartitem = {
        categoryname: Categoryname,
        subcategoryname: subcategoryname,
        itemdetails: itemobject,
        count:1
    }

    return (dispatch) => {

        dispatch({
            type:'Add_Item_Into_Cart',
            payload:cartitem,
            Indexes:Indexes
        })
    }
}


export function RemoveItemToCart(Categoryname, subcategoryname, itemobject,Indexes) {
    const cartitem = {
        categoryname: Categoryname,
        subcategoryname: subcategoryname,
        itemdetails: itemobject,
        count:1
    }

    return (dispatch) => {

        dispatch({
            type:'abc',
           
        })
    }
}

export function LoginUserData(userdata){
return(dispatch)=>{
    dispatch({type:'Current_User',payload:userdata})
}

}

// export function RemoveItemToCart(Categoryname, subcategoryname, itemobject,Indexes){
//     const removecartitem = {
//         categoryname: Categoryname,
//         subcategoryname: subcategoryname,
//         itemdetails: itemobject,
//         count:1
//     }
//     console.log(Indexes);
    
// return(dispatch)=>{

//     dispatch({
//         type:'Remove_Item_Into_Cart',
//         payload:removecartitem,
//         Indexes:Indexes
//     })
// }
// }




export function IncrementCartItemCount(index ) {
    return (dispatch) => {

        dispatch({
            type:'Increment_CartItem_Count',
            payload:index
        })
    }
}


export function DecrementCartItemCount(index){
return(dispatch)=>{
dispatch({
    type:'Decrement_CartItem_Count',
    payload:index
})
}
}