import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <Header className='shadow sticky z-50 top-0;'>
            <nav className='bg-white border-grey-200 px-4 lg:px-6 py-2.5'>
                <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>

                    <Link to="/" className='flex items-center'>

                    </Link>
                </div>

            </nav>


        </Header>
    )
}
export default Header;