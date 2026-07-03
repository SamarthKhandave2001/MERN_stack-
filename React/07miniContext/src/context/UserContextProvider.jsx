import React, { useState } from 'react';
import UserContext from './UserContext';   //import the UserContext to provide the context value to its children

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);  // Initialize the user state to null

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}  // Render the children components that will have access to the context value
        </UserContext.Provider>
    );
};

export default UserContextProvider;