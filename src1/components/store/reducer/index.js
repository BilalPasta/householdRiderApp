
var initial_state={
    CategoryWithMenu:[],
    selectedItems:[],
    CurrentUser:{},
    TotalAmount:0
}

export const App=(state=initial_state,action)=>{
    switch(action.type){
        

case 'Get_App_Menu':
// console.log(typeof( action.payload));
return{...state,CategoryWithMenu:[...action.payload]}
case 'Add_Item_Into_Cart':
state.CategoryWithMenu[action.Indexes.categoryindex].
subcategoryitemlist[action.Indexes.subcategoryindex].
itemlist[action.Indexes.itemindex].cartstatus=true;
TotalAmount=state.TotalAmount+state.CategoryWithMenu[action.Indexes.categoryindex].
subcategoryitemlist[action.Indexes.subcategoryindex].
itemlist[action.Indexes.itemindex].itemprice;

// console.log(state.CategoryWithMenu[action.Indexes.categoryindex].
//     subcategoryitemlist[action.Indexes.subcategoryindex].
//     itemlist[action.Indexes.itemindex]);
let Menu=state.CategoryWithMenu;
let items;
items=state.selectedItems;
items.push(action.payload)


// console.log(items.indexOf(action.payload));
// index=items.indexOf(action.payload);
// console.log(index);
// if(index==-1){
//     console.log('already')
//         items.push(action.payload)


// }
// else{
//     console.log('no ready')


// }

// console.log(items);
return{...state,selectedItems:[...items],CategoryWithMenu:[...Menu],TotalAmount:TotalAmount}
case 'Increment_CartItem_Count':
let updateselectitems=state.selectedItems;
updateselectitems[action.payload].count++;
console.log(updateselectitems[action.payload]);
TotalAmount=state.TotalAmount+updateselectitems[action.payload].itemdetails.itemprice;
return{...state,selectedItems:[...updateselectitems],TotalAmount:TotalAmount}
case 'Current_User':
console.log(action.payload);
return{...state,CurrentUser:{...action.payload}}
case 'Remove_Item_Into_Cart':

// delete state.CategoryWithMenu[action.Indexes.categoryindex].
// subcategoryitemlist[action.Indexes.subcategoryindex].
// itemlist[action.Indexes.itemindex].cartstatus;

// console.log(action.Indexes);
let CategoryWithMenu=state.CategoryWithMenu;

let selectedItems=JSON.stringify(state.selectedItems);
let data=JSON.stringify(action.payload);
let index=selectedItems.indexOf(data);
selectedItems=JSON.parse(selectedItems);
selectedItems.splice(index,1);
selectedItems.splice(action.payload,1);

return{...state,selectedItems:[...selectedItems],CategoryWithMenu:[...CategoryWithMenu]}

case 'abc':
return{...state}
case 'Decrement_CartItem_Count':
updateselectitems=state.selectedItems;
TotalAmount=state.TotalAmount-updateselectitems[action.payload].itemdetails.itemprice;
updateselectitems[action.payload].count<=1?(updateselectitems.splice(action.payload,1)):(updateselectitems[action.payload].count--)
return {...state,selectedItems:[...updateselectitems],TotalAmount:TotalAmount};
default :
return state;
    }
}

