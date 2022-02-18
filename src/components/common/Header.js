import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../Context';

const Header =  () => {
    const { user, setUser, cometChat } = useContext(Context);
}

const history = useHistory();

const logout = async () => {
    const isLogout = window.confirm("Are you sure you want to log out ?");
        if (isLogout) {
            await cometchat.logout();
            setUser(null);
            localStorage.removeItem('auth');
            history.push('/login');
        }
}

return (
    <div className="header">
        <div class="header__left">
            <img src={logoWhite} alt="A discord clone!" />
            {
                user && (
                    <div className="header__right">
                        <img src={user.avatar} alt={user.email}/>
                            <span>Hi :) {user.email} </span>
                            </div>
                )
            }
    
)
</div>
    <span className="header__logout" onClick={logout}></span>
</div>
);

export default Header;