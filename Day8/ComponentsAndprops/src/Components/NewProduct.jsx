import './NewProduct.css';
import ProductForm from './ProductForm';

function NewProduct(props){
    function saveProduct(product){
        console.log("I'm inside new product");
        console.log(product);
        props.printProduct(product)
    }
    return(
    <div className="newProduct">
    <ProductForm savePro={saveProduct}/>
    </div>
    );
        
}
export default NewProduct;