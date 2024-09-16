function Greeting(props)
{
   return(props.isLoggedIn ? <h1>Welcome {props.username}</h1> : <h1>Please Continue to Logged In</h1>) 
}
export default Greeting;