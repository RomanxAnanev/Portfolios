import React, { useContext, useState } from 'react'
import style from './SignUp.module.css'
import { Formik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CustomContextProvider } from '../../../context';

export const SignUp = () => {

  // const [type,setType] = useState('password')
  // const [eye, setEye] = useState(style.showPassword)
  
  // const switchType = () =>{
  //   if(type === 'password'){
  //       setType('text')
  //       setEye(style.hidePassword)
  //   } else{
  //       setType('password')
  //       setEye(style.showPassword)
  //   }
  // }
  

  // роутинг 
  const login = 
  {
      name: 'Login now',
      src: '/LogIn',
  }
  const home = 
    {
      name: 'Go back to home page',
      src: '/',
    }


  // регистрация
  const navigate = useNavigate()

  const {user, setUser} = useContext(CustomContextProvider)

  const registerUser = (e) => {
    e.preventDefault()
    
    let newUser = {
        email: e.target[0].value,
        password: e.target[1].value
    }
    axios.post('http://localhost:8080/User' , newUser)
      .then(({data}) => {
        setUser({
          token: data.accessToken,
          ...data.user
        })

        localStorage.setItem('user', JSON.stringify({
          token: data.accessToken,
          ...data.user
        }))

        navigate('/')
      })
      .catch((err) => console.log(err.massage ))

  }

  return (
    <div className={style.logIn}>
        <img className={style.logo} src="/LogoLogIn.svg" alt="" />
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         } else if (!values.password) {
                errors.password = 'Required';
         } else if (values.password != values.passwordConfirm){
                errors.passwordConfirm = 'Password mismatch'
         }
        return errors;
       }}
    
       onSubmit={(values, { registerUser }) => {
         setTimeout(() => {
           registerUser(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form className={style.form__content} onSubmit={registerUser}>
            <div className={style.content__title}>
                <h2 className={style.title__h2}>Sign up with your work email</h2>
                <p className={style.title__p}>Use your work email to Sign up in to your account  </p>
            </div>
            <label htmlFor="" className={style.content__input}>
                Email
            <input
             className={style.inputText}
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
            />
            <div className={style.error__email}>
             {errors.email && touched.email && errors.email}
            </div>
            </label>
           
            <label htmlFor="" className={style.content__input}>
            <div className={style.input__title}>
             <p>Password</p>
            </div>

           <input
             className={style.inputText}
             type={type}
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {/* <button className={eye} onClick={switchType}></button> */}
           <div className={style.error__password}>
                {errors.password && touched.password && errors.password}
           </div>
           </label>

            <label htmlFor="" className={style.content__input}>
            <div className={style.input__title}>
             <p>Confirm password</p>
            </div>

           <input
             className={style.inputText}
             type={type}
             name="passwordConfirm"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.passwordConfirm}
           />
           {/* <button className={eye} onClick={switchType}></button> */}
           
           <div className={style.error__password}>
                {errors.passwordConfirm && touched.passwordConfirm && errors.passwordConfirm}
            </div>
            </label>
           
           <button type="submit" disabled={isSubmitting} className={style.form__button}>
             Sign up
           </button>
           <div className={style.form__sign}>
            Already have an account? 
            
            <NavLink to={login.src} >
              <span className={style.sign__span}>{login.name}</span>
            </NavLink>
           </div>
           <NavLink to={home.src}  className={style.form__home}>
              <span className={style.sign__span}>{home.name}</span>
           </NavLink>
         </form>
       )}
     </Formik>
    </div>
  )
}
