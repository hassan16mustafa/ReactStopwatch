function Button(){
    let count = 0;
    // const handleClick = (name) => {
    //     if ( count <3){
    //         count++;
    //         console.log(` you clicked me ${count} time ${name}`);
    //     } else{
    //         console.log(` Stop clicking me  ${name}`);

    //     }
    // }

    // const handleClick2 = (name) => {
    //     console.log(`${name} stop clicking me`)
    // }



    const handleClick = (e) => {
        e.target.textContent = "Ouch !!!!!!!"
    }

    return (
        <button onClick = { (e) => handleClick(e)}>Click me</button>
    )

}

export default Button