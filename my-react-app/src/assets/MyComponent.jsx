// // // import React, { useState } from 'react';

// // // function MyComponent() {
// // //     // const [name, setName] = useState("Guest");
// // //     // const [quantity, setQuantity] = useState("");
// // //     // const [comment, setComment] = useState("No Comment");
// // //     // const [payment, setPayment] = useState("Free");
// // //     // const [shipping, setShipping] = useState("");

// // //     // function handleQuantityChange(event) {
// // //     //     setQuantity(event.target.value);
// // //     // }

// // //     // function handleNameChange(event) {
// // //     //     setName(event.target.value);
// // //     // }

// // //     // function handleCommentChange(event) {
// // //     //     setComment(event.target.value);
// // //     // }

// // //     // function handlePaymentChange(event) {
// // //     //     setPayment(event.target.value);
// // //     // }

// // //     // function handleShippingChange(event) {
// // //     //     setShipping(event.target.value);
// // //     // }

// // //     // return (
// // //     //     <div>
// // //     //         <input value={name} onChange={handleNameChange} />
// // //     //         <p>Name: {name}</p>
// // //     //         <input value={quantity} onChange={handleQuantityChange} type="number" />
// // //     //         <p>Quantity: {quantity}</p>
// // //     //         <textarea value={comment} onChange={handleCommentChange}></textarea>
// // //     //         <p>Comments: {comment}</p>
// // //     //         <select value={payment} onChange={handlePaymentChange}>
// // //     //             <option value="">Select an Option</option>
// // //     //             <option value="Visa">Visa</option>
// // //     //             <option value="Mastercard">Mastercard</option>
// // //     //             <option value="Giftcard">Giftcard</option>
// // //     //         </select>
// // //     //         <p>Payment: {payment}</p>
// // //     //         <div>
// // //     //             <label>
// // //     //                 <input
// // //     //                     type="radio"
// // //     //                     value="Pick up"
// // //     //                     checked={shipping === "Pick up"}
// // //     //                     onChange={handleShippingChange}
// // //     //                 />
// // //     //                 Pick up
// // //     //             </label>
// // //     //             <label>
// // //     //                 <input
// // //     //                     type="radio"
// // //     //                     value="Delivery"
// // //     //                     checked={shipping === "Delivery"}
// // //     //                     onChange={handleShippingChange}
// // //     //                 />
// // //     //                 Delivery
// // //     //             </label>

// // //     //             <p>Shipping: {shipping}</p>
// // //     //         </div>
// // //     //     </div>
// // //     // );

// // //     // const [car, setCar] = useState({
// // //     //     year: 2024,
// // //     //     make: "Ford",
// // //     //     model: "Mustang"
// // //     // });

// // //     // function handleYearChange(event) {
// // //     //     setCar(c => ({ ...c, year: event.target.value }));
// // //     // }

// // //     // function handleMakeChange(event) {
// // //     //     setCar({ ...car, make: event.target.value });
// // //     // }

// // //     // function handleModelChange(event) {
// // //     //     setCar(c=> ({...c, make: event.target.value}));
// // //     // }

// // //     // return (
// // //     //     <div>
// // //     //         <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
// // //     //         <input type="number" value={car.year} onChange={handleYearChange} placeholder="Year" />
// // //     //         <input type="text" value={car.make} onChange={handleMakeChange} placeholder="Make" />
// // //     //         <input type="text" value={car.model} onChange={handleModelChange} placeholder="Model" />
// // //     //     </div>
// // //     // );

// // //     const [food, setFood] = useState(["apple", "orange", "banana"]);

// // //     function handleAddFood() {
// // //         const newFood = document.getElementById("foodinput").value;
// // //         document.getElementById("foodinput").value = "";
// // //         setFood(f => [...f, newFood]);
// // //     }

// // //     function handleRemoveFood(index) {
// // //         setFood(f => f.filter((_, i) => i !== index));
// // //     }

// // //     return (
// // //         <>
// // //             <div>
// // //                 <h2>List of Food</h2>
// // //                 <ul>
// // //                     {food.map((foo, index) => (
// // //                         <li key={index}>
// // //                             {foo} <button onClick={() => handleRemoveFood(index)}>Remove</button>
// // //                         </li>
// // //                     ))}
// // //                 </ul>
// // //                 <input type="text" id="foodinput" placeholder="Enter food name" />
// // //                 <button onClick={handleAddFood}>Add food</button>
// // //             </div>
// // //         </>
// // //     );
// // // }

// // // export default MyComponent;




// // import React, { useState } from 'react';

// // function MyComponent() {
// //     const [cars, setCars] = useState([]);
// //     const [carYear, setCarYear] = useState(new Date().getFullYear());
// //     const [carMake, setCarMake] = useState("");
// //     const [carModel, setCarModel] = useState("");

// //     function handleAddCar() {
// //         const newCar = {
// //             year: carYear,
// //             make: carMake,
// //             model: carModel
// //         };
// //         setCars(c => [...c, newCar]);
// //         setCarYear(new Date().getFullYear());
// //         setCarMake("");
// //         setCarModel("");
// //     }

// //     function handleRemoveCar(index) {
// //         setCars(c => c.filter((_, i) => i !== index));
// //     }

// //     function handleYearChange(event) {
// //         setCarYear(event.target.value);
// //     }

// //     function handleModelChange(event) {
// //         setCarModel(event.target.value);
// //     }

// //     function handleMakeChange(event) {
// //         setCarMake(event.target.value);
// //     }

// //     return (
// //         <div>
// //             <h2>List of car objects</h2>
// //             <ul>
// //                 {cars.map((car, index) => (
// //                     <li key={index}>
// //                         {car.year} {car.make} {car.model}
// //                         <button onClick={() => handleRemoveCar(index)}>Remove</button>
// //                     </li>
// //                 ))}
// //             </ul>
// //             <input type="number" value={carYear} onChange={handleYearChange} placeholder="Year" />
// //             <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Make" />
// //             <input type="text" value={carModel} onChange={handleModelChange} placeholder="Model" />
// //             <button onClick={handleAddCar}>Add car</button>
// //         </div>
// //     );
// // }

// // export default MyComponent;


// import React, {useState, useEffect} from "react";

// function MyComponent(){
//     const [count,setCount] = useState(0);
//     const [color, setColor] = useState("green")

//     useEffect(() => {
//         document.title = `COunt: ${count} ${color}`;
//     }, [count,color

//     ]);


//     function addCount(){
//         setCount(c => c +1);

//     }

//     function subCount(){
//         setCount(c => c -1);

//     }

//     function changeColor(){
//         setColor(c=> c =="green" ? "red" : "green");
//     }

//     return(
//         <>
//         <p style= {
//             {color: color}
//         }>COunt : {count}</p>
//         <button onClick={addCount}>Add</button>
        
//         <button onClick={subCount}>sub</button>
//         <button onClick={changeColor}>CHnage Color</button>
//         </>)
        
//     }









//     const [width, setWidth] = useState(window.innerWidth);
//     const [height, setHeight] = useState(window.innerHeight);

//     useEffect(() => {
//         const handleResize = () => {
//             setWidth(window.innerWidth);
//             setHeight(window.innerHeight);
//         };

//         window.addEventListener("resize", handleResize);

//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []); // Empty dependency array to ensure this runs only once on mount and unmount


//     useEffect(() => {
//         document.title = `Size = ${height} and  ${width}`;

//     })


//     return (
//         <>
//             <p>Window Width: {width}</p>
//             <p>Window Height: {height}</p>
//         </>
//     );
// }


import React, { useEffect, useState, useRef } from 'react';

function MyComponent() {

    const inputRef = useRef(null);

    useEffect(() => {
        console.log("db3enm");
    });

    function handleClick(){
       inputRef.current.focus();
       inputRef.current.style.backgroundColor = "yellow";
        
    }



    return(
        <>
        <div>
        <button onClick={handleClick}>Click me</button>
        <input></input>
        </div>
       
        </>
    );



}

export default MyComponent;
