import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import '../styles/reset.css'
import '../styles/styles.css'


const e = { 
  usernameRequired: 'username is required',
  usernameMin: 'username must be at least 3 characters',
  usernameMax: 'username cannot exceed 20 characters',
  favLanguageRequired: 'favLanguage is required',
  favLanguageOptions: 'favLanguage must be either javascript or rust',
  favFoodRequired: 'favFood is required',
  favFoodOptions: 'favFood must be either broccoli, spaghetti or pizza',
  agreementRequired: 'agreement is required',
  agreementOptions: 'agreement must be accepted',
}


const getIntitialValues = () => ({
  username: '',
  favLanguage: '',
  favFood: '',
  agreement: false,
})

const getIntitialErrors = () => ({
  username: '',
  favLanguage: '',
  favFood: '',
  agreement: '',
})



export default function App () {
const [values, setValues] = useState(getIntitialValues())
const [errors, setErrors] = useState(getIntitialErrors())
// const [serverSuccess, setServerSuccess] = useState()
// const [serverFailure, setServerFailure] = useState()
// const [formEnabled, setFormEnabled] = useState(false)


// useEffect(() => {

// })

const onChange = evt => {
  let { type, name, value, checked } = evt.target
  value = type == 'checkbox' ? checked : value
  setValues({...values, [name]: value})
  console.log(`Name: ${name} Value: ${value} `)
  // yup.reach(userSchema, name).validate(value)
  //   .then(() => setErrors({...errors, [name]: ''}))
  //   .catch((err) => setErrors({...errors, [name]: err.errors[0] }))
}

const onSubmit = evt => {
  evt.preventDefault()
  console.log(evt)
}


  return (
    <div>
      <h2>Create an Account</h2>
      {/* //////FORM */}
      <form onSubmit={onSubmit}>
      {/* //////USERNAME DIV */}
      <div className='inputGroup'>
        <label htmlFor="username">Username:</label>
        <input
          type='text'
          placeholder='Type username here'
          name='username'
          id='username' 
          onChange={onChange}
        >
        </input>
      </div>

      {/* ////// FavLanguage DIV */}
      <div className='inputGroup'>
        <fieldset>
          <legend>Favorite Language</legend>
          <label> 
              <input
                checked={values.favLanguage === 'javascript'}
                type="radio"
                name="favLanguage"
                value="javascript"
                onChange={onChange}
              /> Javscript
              </label>
          <label>
            <input
              checked={values.favLanguage === 'rust'}
              type='radio'
              name="favLanguage"
              value="rust"
              onChange={onChange}
            /> Rust
          </label>
        </fieldset>
        </div>

      {/* ///// Fav Food DIV */}
        <div className='inputGroup'>
          <label htmlFor="favFood" >Favorite Food: </label>
          <select id='favFood' name='favFood' value={values.favFood} onChange={onChange}>
            <option value="">--Select Language--</option>
            <option value="pizza">Pizza</option>
            <option value="spaghetti">Spaghetti</option>
            <option value="broccoli">Broccoli</option>
          </select>
        </div>
      {/* ///// Agree Terms DIV */}
        <div className='inputGroup'>
           <label>
              <input
                type='checkbox'
                id='checkbox'
                name='agreement'
                checked={values.agreement}
                onChange={onChange}
              /> Agree to terms
          </label>
        </div>

        {/* ////// SUBMIT BUTTON DIV WITH INPUT */}
        <div>
         <input type='submit' ></input> 
        </div>

      </form>
    </div>
  )
}