import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
function IndividualMember(props){
    return(
        <div className='individualMember'>
            <div className="name" style={!props.checked ? {color:"#cbcdd4"} : null}>
                <FontAwesomeIcon style={{color:"inherit"}} icon={faUser} size="1x" color="black" className='userIcon' />
                <p>{props.name}</p>
            </div>
            {props.checked ? <FontAwesomeIcon icon={faCircleCheck} size="2x" color="green"/> :
             <div className='circle'></div> }
        </div>

    )
}
export default IndividualMember;