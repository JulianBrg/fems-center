import React from 'react'

export const ButtonList = ({ categories, filterCategory }) => {
    return (
        <div className='categories'>
            {
                categories.map(category => (
                    <button
                        type='button'
                        key={category}
                        onClick={() => filterCategory(category)}
                        className='btn'
                    >
                        {category}
                    </button>
                ))
            }
        </div>
    )
}
