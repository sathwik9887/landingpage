import PropTypes from "prop-types";

function Teacher(props)
{
   return(
    <div className="student">
        <p>Name: {props.name}</p>
        <p>Sub:  {props.subject}</p>
    </div>
   )
   
}
Teacher.propTypes = {
 name: PropTypes.string,
 subject: PropTypes.string,
}
Teacher.defaultProps = {
 name : "Guest",
 subject: "NA",
}
export default Teacher;