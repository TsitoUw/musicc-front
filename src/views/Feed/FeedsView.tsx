import { Link } from 'react-router-dom'
import authService from '../../services/auth.service'
import { UserContext } from '../../context/userContext';
import { useContext } from 'react';

const FeedsView = () => {
  const user = useContext(UserContext);

  function signout(){
    authService.signout();
    user?.setCurrentUser(null)
  }

  function test(){
    authService.test();
  }
  return (
    <div>
      <Link to="/signin"> login</Link>
      <button onClick={signout}> logout </button>
      <button onClick={test}> test </button>
    </div>
  )
}

export default FeedsView