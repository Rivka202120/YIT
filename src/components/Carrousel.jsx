import React from 'react'

export default function Carrousel({ arrUrlImage }) {

    return (
        <div className='carrousel'>

            {arrUrlImage?.map((item, index) => (
                item ? <img key={index} src={item} alt="" id='img' /> : null
            ))}

            {/* <div className="ContainerCenter">
                {arrUrlImage?.map((item, index) => (
                    <img key={index} src={item} className="Carrusel" alt="" id='img' />
                ))}

                {arrUrlImage?.map((item, index) => (
                    <input type="radio" name="Carrusel" id="Slider1" checked></input>
                ))}

                <div className="Carrusels">
                    {arrUrlImage?.map((item, index) => (
                        <label key={index} htmlFor={`Slider${!index ? arrUrlImage.length : index}`} className={`ArrowLeft Arrow${index + 1}`}><p>❮</p></label>
                    ))}

                    {arrUrlImage?.map((item, index) => (
                        <label key={index} htmlFor={`Slider${index == arrUrlImage.length - 1 ? 1 : index + 2}`} className={`ArrowRight Arrow${index + 1}`}><p>❯</p></label>
                    ))}


                    <div className="Selectors">
                        {arrUrlImage?.map((item, index) => (
                            <label key={index} htmlFor={`Slider${index + 1}`} className="Selector"></label>
                        ))}
                    </div>
                </div>
            </div> */}

        </div>
    )
}
