import React from 'react'
import whithToggle from '../../hoc/withToogle'

import './Card.css'

const Card = ({open, toggle}) => {
    return (
        <div>
            <h1>Card Title</h1>
            <p>Card content</p>
            {open && (
            <ul style={{listStyle: 'none'}}>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
                <li>Item 6</li>
                <li>Item 7</li>
                <li>Item 8</li>
            </ul>
            )}
            <button type="button" onClick={toggle}>Show more</button>
        </div>
    )
}

export default whithToggle(Card)