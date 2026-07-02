import React, { useState } from 'react';
import UserContext from './UserContext';   //import the UserContext to provide the context value to its children

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}  
        </UserContext.Provider>
    );
};

export default UserContextProvider;