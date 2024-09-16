import PropTypes from 'prop-types'

function Student(props)
{
   return(
    <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
    </div>
   )
}
Student.propTypes = {
name: PropTypes.string,
age: PropTypes.age,

}
Student.defaultProps = {
    name: "Guest",
    age: 0
}
export default Student