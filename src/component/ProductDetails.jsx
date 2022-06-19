import React from "react";
import { useParams } from "react-router-dom";

let ProductDetails = () =>{
    const [data, setData] = React.useState([]);
    const {id} = useParams();

React.useEffect(() =>{
    fetch(`http://localhost:3002/product/${id}`,{
    method : "GET",
   })
   .then((res) => res.json())
   .then((res) => {
    setData(res)
})
   .catch((err) => console.log(err));
},[id])
    return <> { data.name ? <table>
                <thead>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>More Details</th>
                </thead>
                <tbody>
                    {    
                data ? <div key={data.id}>
                <p>ID : {data.id}</p>
                <p>Name : {data.name}</p>
                <p>Price : {data.price}</p>
               </div> : <div>Something Went Wrong...</div>
               }
                </tbody>
            </table> : 
            <h1> Id does not exist </h1>
}
    </>
    
}

export {ProductDetails};
