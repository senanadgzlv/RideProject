import React from 'react'
import { useTranslation } from 'react-i18next'
import "../../langConfig/i18next"

const Lang = () => {

    const {  t, i18n } = useTranslation();
    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <div>
            <button className='lang' onClick={() => handleClick('en')}>ENG</button>
            <button className='lang' onClick={() => handleClick('az')}>AZE</button>
        </div>
    )
}

export default Lang