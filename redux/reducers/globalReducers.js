import actionTypes from './actionTypes'

const initialState = {
    cart: {
        jumlahItem: 0,
        JumlahPembelian: 0,
        detailItem: []
    },
}

const globalReducer = (state = initialState, action) => {

    const updateJumlahItem = (arr = null) => {
        let a = 0;
        if(arr){
            arr.forEach(item => {
                a += item.jumlah;
            });
        }
        else{
            state.cart.detailItem.forEach(item => {
                a += item.jumlah;
            });
        }
        return a;
    }

    const updateJumlahPembelian = (arr = null) => {
        let b = 0;
        if(arr){
            arr.forEach(item => {
                b += (item.harga*item.jumlah);
            });
        }
        else{
            state.cart.detailItem.forEach(item => {
                b += (item.harga*item.jumlah);
            });
        }
        return b;
    }

    const pushItem = (data) => {
        return{
            ...state,
            cart: {
                ...state.cart,
                detailitem: state.cart.detailItem.push(data),
                jumlahItem: updateJumlahItem(),
                JumlahPembelian: updateJumlahPembelian()
            }
        }
    }

    const updateTambahItem = (data, index) => {
        const a = state.cart.detailItem;
        a[index].jumlah += 1;
        return{
            ...state,
            cart: {
                ...state.cart,
                detailItem: a,
                jumlahItem: updateJumlahItem(),
                JumlahPembelian: updateJumlahPembelian(),
            }
        }
    }

    const updateKurangItem = (data, index) => {
        // jumlah item di array
        // index ke [index]
        let a = state.cart.detailItem[index].jumlah -= 1;
        // kurangin jumlah di array
        // index ke [index]
        const b = state.cart.detailItem;
        b[index].jumlah -= 1;
        if(a <= 0){
            return hapusItem(data.id_produk);
        }
        else{
            return{
                ...state,
                cart: {
                    ...state.cart,
                    detailItem: b,
                    jumlahItem: updateJumlahItem(),
                    JumlahPembelian: updateJumlahPembelian(),
                }
            }
        }
    }

    const filterItem = (idProduk) => {
        const newArr = state.cart.detailItem.filter(item => item.id_produk != idProduk);
        const a = updateJumlahItem(newArr);
        const b = updateJumlahPembelian(newArr);
        return{
            ...state,
            cart: {
                ...state.cart,
                detailItem: newArr,
                jumlahItem: a,
                JumlahPembelian: b,
            }
        }
    }

    const hapusItem = (produkId) => {
        console.log(filterItem(produkId));
        return filterItem(produkId);
    }

    //////////////////////////////////////////////////////
    // BEGIN ACTION
    //////////////////////////////////////////////////////

    if(action.type === actionTypes.ADD_CART){
        const detailItem = state.cart.detailItem;

        if(detailItem.length > 0){
            // loop daftar cart
            for(let i=0; i<detailItem.length; i++){
                // jika item sdh masuk cart
                if(action.dataProduk.id_produk == detailItem[i].id_produk){
                    // update
                    return updateTambahItem(action.dataProduk, i);
                }
            }
            return pushItem(action.dataProduk);
        }
        else{
            // push
            return pushItem(action.dataProduk);
        }
    }

    if(action.type === actionTypes.DELETE_CART){

        if(state.cart.jumlahItem > 0){
            
            const detailItem = state.cart.detailItem;
    
            if(detailItem.length > 0){
                // loop daftar cart
                for(let i=0; i<detailItem.length; i++){
                    // jika item sdh masuk cart
                    if(action.dataProduk.id_produk == detailItem[i].id_produk){
                        // update
                        return updateKurangItem(action.dataProduk, i);
                    }
                }
            }
        }
    }

    if(action.type === actionTypes.TRASH_CART){
        return hapusItem(action.dataProduk.id_produk);
    }

    if(action.type === actionTypes.GET_CART){
        return {
            ...state,
                cart: action.cartFromStorage
        }
    }

    return state;
}

export default globalReducer;