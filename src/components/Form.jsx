import React, { useEffect, useState } from 'react'

export default function Form({ arrUrlImage, setArrUrlImage, setColorCategory,
    setCategory, setTitle, setSubTitle, setAuthorName, colorCategory, category,
    title, subTitle, authorName }) {

    const onDelete = (index) => {
        console.log("index: ", index);
        let arr = [...arrUrlImage]
        arr.splice(index, 1)
        setArrUrlImage(arr)
    }

    const onAddImg = () => {
        setArrUrlImage([...arrUrlImage, ''])
    }

    function setUrl(url, index) {
        let arr = [...arrUrlImage]
        arr[index] = url
        setArrUrlImage(arr)
        checkUrl(url)
    }

    function checkUrl(url) {
        console.log(url);
        if (arrUrlImage.some(item => item == url)) {
            alert('כבר קיים נתיב תמונה כזה')
        }
    }

    return (
        <div className='form'>

            <div className="myForm">
                <h2 id='title'>Form</h2>
                <div id='gallery'>
                    <p>תמונות</p>
                    {arrUrlImage?.map((item, index) => (
                        <div key={index}>
                            <button id='delbtn' onClick={() => onDelete(index)}>מחק</button>
                            <input type="text" className='fieldForm' defaultValue={item} onChange={e => setUrl(e.target.value, index)} />
                        </div>
                    ))}

                </div>
                <button className='fieldForm' id='addImage' onClick={onAddImg}>הוסף תמונה</button>
                <p>צבע רקע - שם קטגוריה</p>
                <select className='fieldForm' value={colorCategory} onChange={e => setColorCategory(e.target.value)}>
                    <option value='red'>אדום</option>
                    <option value='green'>ירוק</option>
                    <option value='blue'>כחול</option>
                    <option value='yellow'>צהוב</option>
                    <option value='orange'>כתום</option>
                </select>
                <p>שם קטגוריה</p>
                <input type="text" className='fieldForm' maxLength={8} defaultValue={category} onChange={e => setCategory(e.target.value)} />
                <p>כותרת</p>
                <textarea rows="2" cols="50" className='fieldForm' defaultValue={title} onChange={e => setTitle(e.target.value)} />
                <p>כותרת משנה</p>
                <textarea rows="3" cols="50" className='fieldForm' defaultValue={subTitle} onChange={e => setSubTitle(e.target.value)} />
                <p>שם מחבר</p>
                <input type="text" className='fieldForm' defaultValue={authorName} onChange={e => setAuthorName(e.target.value)} />
            </div>
        </div>
    )
}
