import './ProductForm.css';
import { useState} from 'react';


function ProductForm(props){

    // TO HANDLE MULTIPLE PARAMETER AT A TIME->
    // const[productInput,updateProductDetails] = useState(
    //     {
    //         title:'',
    //         date:''

    //     }
    // );

    // >>TO HANDLE ONE PARAMATER AT A TIME->
    const[newTitle,setTitle] =useState('');
    const[newDate,setDate] =useState('');

    // function updateProductDetails(event){

    // }

    function titleChangeHandler(event){
        setTitle(event.target.value);

    };

    function dateChangeHandler(event){
        setDate(event.target.value);

    };

    function submitHandler(event){
        event.preventDefault();
        
        const productData={
            title:newTitle,
            date:newDate,
        }
        console.log(productData);

        setTitle('');
        setDate('');
        props.savePro(productData)

    }

    return(
    <div class="relative bg-black">
        <div class="absolute top-[3em] left-[13em] w-[70%] h-[15rem] bg-[#8b5cf6] rounded-xl">
        <form onSubmit={submitHandler} class="w-[100%] h-[100%] flex justify-center gap-[2 rem] flex-col justify-center items-center" method="post">
            <div class="text-lg relative top-[10px]">
                <label for="title">Title:</label>
                <input  class="bg-white border-2 border-black" type="text" name="title" id="title" placeholder="Enter the product name" onChange={titleChangeHandler} value={newTitle}></input>
            </div>
            <br/>
            <div class="text-xl">
                <label for="date">Date:</label>
                <input class="bg-white border-2 border-black" type="date" id="date" name="date" min="2025-01-01" max="2025-12-31" onChange={dateChangeHandler} value={newDate}></input>
            </div>
            <br/>
            <div class="flex items-center justify-center w-[10rem] h-[3em] rounded-md bg-[#1e1b4b] text-center text-xl text-white">
                <button type="submit">Add Product</button>
            </div> 
        </form>  
    </div>  

    </div>
    );
}

export default ProductForm;