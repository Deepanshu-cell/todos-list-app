import React from 'react'
// we can also import css files here

export const Footer = () => {
    // we can make style object and then apply on to the tags within js file as seen below in footer
    // let footerStyle = {
    //     position: "sticky",
    //     // top: "100vh",
    //     width: "100%"
    // }

    return (
        <footer className='bg-dark text-light py-3' >
            <p className='text-center'>
                Copyrights  &copy;  MyTodosList.com
            </p>
            <div className='text-center'>
                MyTodosList.com is generally developed by Mr.Deepanshu khorwal student of Maharaja agrasen institute of technology.
            </div>
        </footer>
    )
}
