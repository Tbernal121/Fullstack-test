import React, { useState } from 'react'
import './../../styles/auth.css';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';


function Auth() {
  return (
    <section className="section">
        <div className="container">
            <div className="row full-height justify-content-center">
                <div className="col-12 text-center align-self-center py-5">
                    <div className="section pb-5 pt-5 pt-sm-2 text-center">
                        <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                        <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                        <label htmlFor="reg-log"></label>
                        <div className="card-3d-wrap mx-auto">
                            <div className="card-3d-wrapper">
                                <div className="card-front">
                                    <div className="center-wrap">
                                        <LoginForm />
                                    </div>
                                </div>
                                <div className="card-back">
                                    <div className="center-wrap">
                                        <SignUpForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Auth