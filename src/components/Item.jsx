import React from 'react'
import Carrousel from './Carrousel'

export default function Item({ arrUrlImage, colorCategory, category,
    title, subTitle, authorName }) {
    return (
        <div className='item'>

            <div className='myItem'>
                <div className="zoomWrapper">
                    <Carrousel arrUrlImage={arrUrlImage} />
                </div>
                <div className="nameCategory" style={{ backgroundColor: colorCategory }}>
                    <h4 id='category' >{category}</h4>
                </div>
                <h1 id='titleItem'>{title}</h1><p>{ }</p>
                <br />
                <p id='subItem'>{subTitle}</p>
                <br />
                <h4 id='authorName'>{authorName}</h4>
            </div>

        </div>
    )
}
