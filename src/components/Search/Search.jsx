import React, {useState} from 'react'
import style from './Search.module.css'

export const Search = ({setTitle}) => {
  const [value, setValue] = useState("");

  return (
    <>
        <label htmlFor="" className={style.search}>
            <input className={style.input__search} value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder='Write the anything' />
            <button className={style.input__search__button} onClick={() => setTitle(value)}>Search</button>
        </label>
    </>
  )
}
