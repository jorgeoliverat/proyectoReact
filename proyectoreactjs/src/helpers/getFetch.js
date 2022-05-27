const productos = [
    { id: '1', categoria: 'Zapatilla', name: "Vans Old Skool",   price: 265, descripcion: "El modelo Old Skool, es un zapato clasico de skate y es el primer modelo en llevar la única franja lateral, su diseño de perfil bajo con amarre de pasadores cuenta con una parte superior de cuero y lona, con una lengueta y forro acolchados, además de la muy reconocida suela de goma con forma de Waffle.", foto: 'https://cdn.shopify.com/s/files/1/0112/4394/6046/products/VN000D3HY28_3_6af694fc-4d6f-40d7-96c9-1b8905a2ca80.jpg?v=1611347576'},

    { id: '2', categoria: 'Polera', name: "Nike Sportswear Club Hoodie",  price: 189, descripcion: "Polera urbana hombre color negro", foto: 'https://www.tradeinn.com/f/13719/137194767/nike-sportswear-club-hoodie.jpg' },

    { id: '3', categoria: 'Polo', name: "Hombre Core Chuck Patch Tee",   price: 89.90, descripcion:"La camiseta Chuck Patch tiene todas las características de un elemento básico para cualquier look. Ajuste clásico, construcción de algodón y un parche de logo atemporal.", foto: 'https://coliseum.vteximg.com.br/arquivos/ids/218553-1000-1000/10007887-102_1.jpg?v=637003711571830000' },

    { id: '4', categoria: 'Zapatilla',  name: "Nike Air Force 1 Pixel", price: 319, descripcion: "Conquista la duda y haz una declaración con el Nike Air Force 1 Pixel, un estilo reimaginado fuera de la cancha hecho por y para las mujeres. La elegante parte superior de cuero cuenta con líneas limpias y texturización sutil para brindar un look fresco y fácil de combinar con estilo. La suela y entresuela distorsionadas tienen detalles grandes y pixelados para brindar un toque moderno, mientras que el nuevo logotipo y el diseño de Swoosh invertido son un acto de audacia inquebrantable.",  foto: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/73809aca-992a-4ae2-a128-ca468ec4e6ae/air-force-1-pixel-zapatillas-GDL857.png' },

    { id: '5', categoria: 'Polo',  name: "Trifolio",   price: 79, descripcion: "El Trifolio ha venido dejando su marca desde su debut en Múnich en 1972. Este polo para hombres inspirado en los archivos celebra su legado con un logo del Trifolio contrastante en el frente. Su diseño de manga corta está hecho en tejido de punto de algodón con cuello redondo acanalado que le da un ajuste perfecto para tus aventuras urbanas.", foto: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/a14fe2f850984703b433aa03014ac157_9366/polo-trifolio.jpg' },

    { id: '6', categoria: 'Polera',  name: "Must Haves Badge Of Sport", price: 149, 
    descripcion: "Esta polera con capucha para jóvenes deportistas es perfecta para el colegio, el entrenamiento y el tiempo libre. Presenta un bolsillo canguro para guardar aquellas cosas indispensables y un gran logo adidas Badge of Sport en el pecho que demuestra tu amor por la marca.", foto: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/dc33f7dbbee841ec807faa7100bdfcaa_9366/polera-must-haves-badge-of-sport.jpg' },

    ]

    
    export const getFetch = (id) => {  
        return new Promise((resolve)=>{
        setTimeout(()=>{
                const query = id ? productos.find(producto => producto.id === id) : productos 
            resolve( query )        
        }, 2000)
    })
    }