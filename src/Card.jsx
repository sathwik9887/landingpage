import ProfilePic from './assets/garoh-2.jpg'

function Card()
{
  return (
    <div className="card">
       <img src={ProfilePic} alt="Profile Pic" className='card-image' />
       <h2 className='card-title'>Sathwik</h2>
       <p className='card-desc'>Hello this is me</p>
    </div>
  )
}
export default Card;