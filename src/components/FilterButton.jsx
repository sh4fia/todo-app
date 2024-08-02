import React from 'react'

const FilterButton = ( props ) => {
    return (
        <>
            <button type='button' className='btn' aria-pressed={props.isPressed} onClick={() => props.setFilter(props.name)}>
                Show {props.name} tasks</button>
        </>
    )
}

export default FilterButton;