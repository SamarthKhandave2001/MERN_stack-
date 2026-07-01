import React, {UseState} from 'react';

import UserContext from './UserContext';

const UserContextProvider = ({childern}) => {
const [user, setUser] = UseState('null')

return (
    <UserContext.Provider >

        {childern}
    </UserContext.Provider>
)



}




export default UserContextProvider;