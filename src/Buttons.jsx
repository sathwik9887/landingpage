function Buttons()
{

    let count = 0;
    const handleClick = (name) =>{
     if(count<3)
     {
        count++;
        console.log(`${name} clicked ${count} times`);
      }
      else
      {
        console.log(`${name} stop clicking me!`);
        
      }

    }
    return(
        <button onClick={handleClick}>
            Click me
        </button>
    )

}
export default Buttons;