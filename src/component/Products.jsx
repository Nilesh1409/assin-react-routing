import React from "react";
import {Link} from "react-router-dom"

let Product = () =>{
    const [data, setData] = React.useState("");
    console.log(data)

    React.useEffect(() =>{
        console.log(1)
        fetch(`http://localhost:3002/product`,)
       .then((res) => res.json())
       .then((res) => setData(res))
       .catch((err) => console.log(err));
    },[])
       
    return <>
    <div>Products</div>
                
                
                <table>
                <thead>
                    <th>
                        <td>Product Name</td>
                        <td>Price</td>
                        <td>More Details</td>
                    </th>
                </thead>
                <tbody>
                    {
                data ? data.map((product) =>(<tr>
                   <td>{product.name}</td>
                   <td>{product.price}</td>
                   <td>
                    <Link to={`/product/${product.id}`} > 
                    More...
                    </Link>
                   </td>
                   </tr>
                   )) : <div>Something Went Wrong...</div>
                    }
                </tbody>
            </table>
    
                
    
    </>
}

export {Product};
