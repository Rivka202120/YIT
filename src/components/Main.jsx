import React, { useState } from 'react'
import Form from './Form'
import Item from './Item'

export default function Main() {

    const [arrUrlImage, setArrUrlImage] = useState(['https://img1.ad.co.il/SecondHandImages/4338560_7.jpg'])
    const [colorCategory, setColorCategory] = useState('red')
    const [category, setCategory] = useState('חופש')
    const [title, setTitle] = useState('סיור קולינרי בין המסעדות הכי טובות בחיפה')
    const [subTitle, setSubTitle] = useState('גם אני, שעסוק כל השבוע, מתפנה לצפות בטלוויזיה רק בסופי השבוע, ונוכחתי שרוב תוכניות הטלוויזיה בכל הערוצים הם תוכניות אוכל')
    const [authorName, setAuthorName] = useState('ישראלי')
    const [refresh, setRefresh] = useState(false)

    return (
        <div className='main'>
            <Form arrUrlImage={arrUrlImage} setArrUrlImage={setArrUrlImage} setColorCategory={setColorCategory}
                setCategory={setCategory} setTitle={setTitle} setSubTitle={setSubTitle} setAuthorName={setAuthorName}
                colorCategory={colorCategory} category={category}
                title={title} subTitle={subTitle} authorName={authorName} />

            <Item arrUrlImage={arrUrlImage} colorCategory={colorCategory} category={category}
                title={title} subTitle={subTitle} authorName={authorName} />
        </div>
    )
}
