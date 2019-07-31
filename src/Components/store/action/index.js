// import firebase from '../../../firebase';
import firebase from 'react-native-firebase'


let AppData = [];

export function Getdata() {
//     alert('get data')
//     firebase.database().ref('').push({name:'bilal'}).then((obj)=>{
// console.log(obj.key);
//     }).catch((err)=>console.log(err))
//     const yourGeoPoint = new firebase.database().ref('/position').GeoPoint();
// console.log(yourGeoPoint);
// const yourGeoPoint={
//     location: new firebase.firestore.GeoPoint(24.881431460380554, 67.05078363418579)
//   }
//   firebase.database().ref('/position').on('child_added',(yourGeo)=>{
// obj=new firebase.firestore.GeoPoint(yourGeo.val().location);
// console.log(obj)
//   });


//   firebase.database().ref('/position').push(yourGeoPoint);
//   firebase.database().ref('/').on('child_added',(data)=>{

//     console.log(data.key);



//       console.log(data.val())
//   });



// console.log('yourGeoPoint');

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

let riders=[];

export function getriders(){
    return (dispatch) => {
        firebase.database().ref('/').child('stripe_customers').on('child_added', (users) => {

            
            if(users.val().usertype!='user'){
                let userobj=users.val();
                userobj.uid=users.key;
                riders.push(userobj)
            }
          
            dispatch({
                type: 'Riders'
                , payload: riders
            })

        })
    }
}