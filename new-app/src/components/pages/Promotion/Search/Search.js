import React from 'react'
import PromotionCard from 'components/Promotion/Card/Card'


const promotion = {
    "id": 1,
    "title": "Notebook Acer Aspirion",
    "price": 1778.00,
    "imageUrl": "https://acerstore.vteximg.com.br/arquivos/ids/158265-760-760/A315-23-R215_01.jpg?v=637580880903600000",
    "url": "https://br-store.acer.com/notebook-acer-a315-23-r215-r73700u-12gb-512gb-ssd-w10hgsl64-black-15-6-hd-nx-a39al-008/p",
    "comments": [
      {
        "id": 1,
        "comment": "TELA HD"
      }
    ]
            
  }

const PagesPromotionSearch = () => {
    return (
        <div             
            style={{ 
            maxWidth:800,
            margin: '30px auto',
            }}
            >
            <PromotionCard promotion={promotion}/>      
        </div>
    );
}

export default PagesPromotionSearch;