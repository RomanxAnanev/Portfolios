import React from 'react'
import style from './Login.module.css'
import { Formik } from 'formik';
import { NavLink } from 'react-router-dom'
export const Login = () => {

  const signUp = 
    {
      name: 'SignUp',
      src: '/SignUp',
    }
  const home = 
    {
      name: 'Go back to home page',
      src: '/',
    }

  return (
    <div className={style.logIn}>
     <a href="/"><img className={style.logo} src="/LogoLogIn.svg" alt="" /></a>
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
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
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
         <form className={style.form__content} onSubmit={handleSubmit}>
            <div className={style.content__title}>
                <h2 className={style.title__h2}>Log in with your work email</h2>
                <p className={style.title__p}>Use your work email to log in to your account </p>
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
            <div className={style.error}>
             {errors.email && touched.email && errors.email}
            </div>
            </label>
           
            <label htmlFor="" className={style.content__input}>
            <div className={style.input__title}>
             <p>Password</p>
             <span className={style.password__span}>Forgot your password?</span>
            </div>

           <input
             className={style.inputText}
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
            <div className={style.error}>
              {errors.password && touched.password && errors.password}
            </div>
            </label>

           <button type="submit" disabled={isSubmitting} className={style.form__button}>
             Log in
           </button>
           
              <div className={style.form__sign}>
                Dont have an account? 
                <NavLink to={signUp.src} >
                  <span className={style.sign__span}>{signUp.name}</span>
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


//    <div className={style.Login}>
//      <img className={style.logo} src="/LogoLogIn.svg" alt="" />
//      <div className={style.logIn__Form}>
//          <div className={style.form__content}>
//              <div className={style.content__title}>
//                  <h2 className={style.title__h2}>Log in with your work email</h2>
//                  <p className={style.title__p}>Use your work email to log in to your account </p>
//              </div>
//              <label className={style.content__input} htmlFor="">
//                  Email
//                  <input className={style.inputText}  type="email"/>
//              </label>
//              <label className={style.content__input} htmlFor="">
//                  <div className={style.input__title}>
//                      <p>Password</p>
//                      <span className={style.password__span}>Forgot your password?</span>
//                  </div>
//                  <input className={style.inputText} type="password" />
//              </label>
//              <button className={style.form__button} type='submit'>Log in</button>
//              <div className={style.form__sign}>Dont have an account?  <span className={style.sign__span}>Sign up</span></div>
//              <div className={style.form__home}>Go back to home page</div>
//          </div>
//      </div>
//  </div>