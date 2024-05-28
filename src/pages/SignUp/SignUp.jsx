import React, {useState} from 'react'
import style from './SignUp.module.css'
import {Formik} from 'formik';
import {NavLink} from 'react-router-dom'
import {createClient} from '@supabase/supabase-js';
import {RandomIndexArray} from '../../../func/random-index-array'
import {images_links} from '../../../const/index'


export const SignUp = () => {
  const supabase = createClient('https://ndnfqgznxmxuserdlhhl.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kbmZxZ3pueG14dXNlcmRsaGhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0MDQwNjUsImV4cCI6MjAxNTk4MDA2NX0.XBHCk_KnwRYLHRGt3jqjdVrls5Y6x3Z-nX9YL4zIaAs");
  const [type, setType] = useState('password')
  const [eye, setEye] = useState(style.showPassword)

  const switchType = () => {
    if (type === 'password') {
      setType('text')
      setEye(style.hidePassword)
    } else {
      setType('password')
      setEye(style.showPassword)
    }
  }

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


  const registerUser = async (email, password) => {
      const image = RandomIndexArray(images_links);

    const {data, error} = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    const {data: data2} = await supabase
      .from('users')
      .insert({email: email, avatar: image});

    const {data: data3} = await supabase
      .from('users')
      .select("id")
      .eq("email", email);

    const {data: data4} = await supabase
      .from('resumes')
      .insert({
        user_id: data3[0].id,
        email: email,
          user_avatar: image
      });

      if (error) {
        setError(error.message);
        return console.log(error.message);
    }

    location.href = `${location.origin}/`;
  }

  return (
    <div className={style.logIn}>
      <img className={style.logo} src="/LogoLogIn.svg" alt=""/>
      <Formik
        initialValues={{email: '', password: ''}}
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
          } else if (values.password != values.passwordConfirm) {
            errors.passwordConfirm = 'Password mismatch'
          }
          return errors;
        }}

        onSubmit={(values, {registerUser}) => {
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
          <form className={style.form__content} onSubmit={() => console.log(values.email, values.password)}>
            <div className={style.content__title}>
              <h2 className={style.title__h2}>Sign up with your work email</h2>
              <p className={style.title__p}>Use your work email to Sign up in to your account </p>
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

            <button type="button" disabled={isSubmitting} className={style.form__button} onClick={(e) => {
              e.preventDefault();
              registerUser(values.email, values.password)
            }}>
              Sign up
            </button>
            <div className={style.form__sign}>
              Already have an account?

              <NavLink to={login.src}>
                <span className={style.sign__span}>{login.name}</span>
              </NavLink>
            </div>
            <NavLink to={home.src} className={style.form__home}>
              <span className={style.sign__span}>{home.name}</span>
            </NavLink>
          </form>
        )}
      </Formik>
    </div>
  )
}
