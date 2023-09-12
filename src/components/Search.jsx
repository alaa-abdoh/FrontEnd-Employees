import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function form(props){
    return(
      <div className='searchContent'>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" color="#ddd" className='icon' />
        <input type='text' placeholder={props.placeholder}/>
      </div>                
    )
}
export default form;