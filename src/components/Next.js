import React from 'react'

const Next = ({
    prev,
    next,
    onPrevious,
    onNext
}) => {

    const bottonPrevious = () => {
        onPrevious();
    }

    const bottonNext = () => {
        onNext();
    }

    return ( 
        <nav className='my-5'>
        <ul className = 'pagination justify-content-center'> 
        { prev ? (
            <li className = 'page-item' >
                <button className = 'page-link' onClick = {bottonPrevious}> 
                  Previous 
                </button> 
            </li> 
        ) : null}
            
        { Next ? (
                <li className = 'page-item'>
                <button className = 'page-link' onClick = {bottonNext} > 
                  Next 
                </button> 
            </li>
        ) : null
        }
             
        </ul> 
        </nav>
    )
}
export default Next;