// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link ,useHistory} from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { UserContext } from '../App';

const Navbar = () => {
    const { state, dispatch } = useContext(UserContext);
    const history=useHistory();
    const renderList = () => {
        if (state) {
            return [
                <li><Link to="/profile">Profile</Link></li>,
                <li><Link to="/create">Create Posts</Link></li>,
                <li><Link to="/myfollowingpost">My following Posts</Link></li>,
                <li>      <button className="btn #c62828 red darken-3"
                onClick={() =>{
                    localStorage.clear();
                    dispatch({type:"CLEAR"});
                    history.push('/signin');
                }}>
                    Logout
            </button></li>
            ]
        }
        else {
            return[
                <li><Link to="/signin">Login</Link></li>,
                <li><Link to="/signup">Signup</Link></li>
            ]
        }

    }
    return (
        <nav>
            <div className="nav-wrapper white " >
                <Link to={state?"/":"/signin"} className="brand-logo left">Instagram Clone</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                {renderList()}
                </ul>
            </div>
        </nav>
    );
}


export default Navbar;
