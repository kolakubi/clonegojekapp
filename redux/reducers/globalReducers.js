import actionTypes from './actionTypes'

 // ===================================== START CHILD FUNCTION
// const updateJumlahItem = (arr = null) => {
//     let a = 0;
//     if(arr){
//         arr.forEach(item => {
//             a += item.jumlah;
//         });
//     }
//     else{
//         this.state.cart.detailItem.forEach(item => {
//             a += item.jumlah;
//         });
//     }
    
//     return a;
// }

// const updateJumlahPembelian = (arr = null) => {
//     let b = 0;
//     if(arr){
//         arr.forEach(item => {
//             b += (item.harga*item.jumlah);
//         });
//     }
//     else{
//         this.state.cart.detailItem.forEach(item => {
//             b += (item.harga*item.jumlah);
//         });
//     }
    
//     return b;
// }

// const updateTambahItem = (data, index) => {
//     this.setState({
//         cart: {
//             ...this.state.cart,
//             detailitem: this.state.cart.detailItem[index].jumlah += data.jumlah,
//             jumlahItem: this.updateJumlahItem(),
//             JumlahPembelian: this.updateJumlahPembelian(),
//         }
//     });

//     this.saveCart();
// }

// const updateKurangItem = (data, index) => {
//     this.setState({
//         cart: {
//             ...this.state.cart,
//             detailitem: this.state.cart.detailItem[index].jumlah -= data.jumlah,
//             jumlahItem: this.updateJumlahItem(),
//             JumlahPembelian: this.updateJumlahPembelian(),
//         }
//     });

//     if(this.state.cart.detailItem[index].jumlah < 1){
//         this.hapusItem(data.id_produk);
//     }

//     this.saveCart();
// }

// const pushItem = (data) => {
//     this.setState({
//         cart: {
//             ...this.state.cart,
//             detailitem: this.state.cart.detailItem.push(data),
//             jumlahItem: this.updateJumlahItem(),
//             JumlahPembelian: this.updateJumlahPembelian()
//         }
//     });

//     this.saveCart();
// }

// const filterItem = async (data) => {

//     const newArr = this.state.cart.detailItem.filter(item=> item.id_produk != data);
//     const a = this.updateJumlahItem(newArr);
//     const b = this.updateJumlahPembelian(newArr);
    
//     this.setState({
//         cart: {
//             ...this.state.cart,
//             detailItem: newArr,
//             jumlahItem: a,
//             JumlahPembelian: b 
//         }
//     });
// }
// ==================================== END OF CHILD FUNCTION

const initialState = {
    cart: {
        jumlahItem: 0,
        JumlahPembelian: 0,
        detailItem: []
    },
}

const globalReducer = (state = initialState, action) => {
    if(action.type === actionTypes.ADD_COUNTER){
        
        return {
            ...state,
            state: {
                ...cart,
                jumlahItem: state.cart.jumlahItem +=1
            }
        }
        
    }

    return state;
}

export default globalReducer;