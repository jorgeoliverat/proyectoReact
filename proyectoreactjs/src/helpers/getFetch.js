const productos = [
    { id: '1', categoria: 'Vinilo', name: "Currents",   price: 165, foto: 'https://monterreyrock.com/wp-content/uploads/2015/07/Tame-Impala-Currents-final-packshot-1200px_800.jpg'},
    { id: '2', categoria: 'Vinilo', name: "The Dark Side Of the Moon",  price: 169, foto: 'https://m.media-amazon.com/images/I/51hPSyv9hYL._SL1280_.jpg' },
    { id: '3', categoria: 'Vinilo', name: "Legend",   price: 189, foto: 'https://m.media-amazon.com/images/I/51DWv2t4UVL._SX355_.jpg' },
    { id: '4', categoria: 'Vinilo',  name: "Discovery",    price: 179, foto: 'https://m.media-amazon.com/images/I/71bsHTr6idL._SL1500_.jpg' },
    { id: '5', categoria: 'Vinilo',  name: "Ready to Die",   price: 159, foto: 'https://i.ebayimg.com/images/g/nVAAAOSwdjNZCXoK/s-l1600.jpg' },
    { id: '6', categoria: 'Vinilo',  name: "Locket", price: 159, foto: 'https://m.media-amazon.com/images/I/71Bxdnv3ZDL._SL1000_.jpg' },
    { id: '7', categoria: 'Vinilo',  name: "Is There Is Are",    price: 169,  foto: 'https://m.media-amazon.com/images/I/91dpGvabz3L._SL1400_.jpg'  }
    ]

    
    export const getFetch = (id) => {  
        return new Promise((resolve)=>{
        setTimeout(()=>{
                const query = id ? productos.find(producto => producto.id === id) : productos 
            resolve( query )        
        }, 2000)
    })
    }