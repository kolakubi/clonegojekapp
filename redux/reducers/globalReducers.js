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
        // this.saveCart();
    }

    const updateTambahItem = (data, index) => {
        return{
            ...state,
            cart: {
                ...state.cart,
                detailitem: state.cart.detailItem[index].jumlah += 1,
                jumlahItem: updateJumlahItem(),
                JumlahPembelian: updateJumlahPembelian(),
            }
        }
        // this.saveCart();
    }

    const updateKurangItem = (data, index) => {

        let a = state.cart.detailItem[index].jumlah -= 1;

        if(a <= 0){
            return hapusItem(data.id_produk);
        }
        else{
            return{
                ...state,
                cart: {
                    ...state.cart,
                    detailitem: state.cart.detailItem[index].jumlah -= 1,
                    jumlahItem: updateJumlahItem(),
                    JumlahPembelian: updateJumlahPembelian(),
                }
            }
        }

        // this.saveCart();
    }

    const filterItem = (idProduk) => {

        const newArr = state.cart.detailItem.filter(item => item.id_produk != idProduk);
        const a = updateJumlahItem(newArr);
        const b = updateJumlahPembelian(newArr);
        
        return{
            ...state,
            cart: {
                ...state.cart,
                detailItem: [],
                jumlahItem: a,
                JumlahPembelian: b,
            }
        }
    }

    const hapusItem = (produkId) => {
        console.log(filterItem(produkId));
        return filterItem(produkId);
        // saveCart();
    }

    if(action.type === actionTypes.ADD_CART){
        const detailItem = state.cart.detailItem;

        if(detailItem.length > 0){
            // console.log('sdh ada item')
            // loop daftar cart
            for(let i=0; i<detailItem.length; i++){
                // jika item sdh masuk cart
                if(action.dataProduk.id_produk == detailItem[i].id_produk){
                    // console.log('item kembar')
                    // update
                    return updateTambahItem(action.dataProduk, i);
                }
            }
            return pushItem(action.dataProduk);
        }
        else{
            // console.log('belum ada item sama sekali')
            // push
            return pushItem(action.dataProduk);
        }
    }

    if(action.type === actionTypes.DETELE_CART){

        if(state.cart.jumlahItem > 0){
            
            const detailItem = state.cart.detailItem;
    
            if(detailItem.length > 0){
                // console.log('sdh ada item')
                // loop daftar cart
                for(let i=0; i<detailItem.length; i++){
                    // jika item sdh masuk cart
                    if(action.dataProduk.id_produk == detailItem[i].id_produk){
                        // console.log('item kembar')
                        // update
                        return updateKurangItem(action.dataProduk, i);
                        break;
                    }
                }
            }
        }
    }

    if(action.type === actionTypes.TRASH_CART){
        return hapusItem(action.dataProduk.id_produk);
    }

    return state;
}

export default globalReducer;