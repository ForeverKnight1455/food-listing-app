import { useState } from 'react';
const Createpage = () => {
    const [ food ,setFood ] = useState({
        name: "",
        price: "",
        image: ""
    });

    return (
    <>
        <div id="Add Product" className='bg-black flex flex-col justify-center items-center gap-1.5'>
            <h1 className='font-bold text-3xl'>Add Product</h1>
            <input type='text' className='bg-white text-black rounded' placeholder="name"/>
            <input type='text' className='bg-white text-black rounded' placeholder="price"/>
            <input type='text' className='bg-white text-black rounded' placeholder="image url"/>
            <input type='button' className='btn' value="add"/>
        </div>
    </>
  )
}

export default Createpage
