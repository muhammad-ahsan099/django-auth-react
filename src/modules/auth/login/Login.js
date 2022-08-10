import React from "react";
import { LoginStyle } from "./LoginStyle";
import loginPageLogo from '../../../assets/images/loginPageLogo.png';
import UseLogin from './UseLogin';
import { ToastContainer } from 'react-toastify';
import { ClassicSpinner } from 'react-spinners-kit'

export default function Login() {
    const [{ values, loading, handleChange, handleClickShowPassword, email, setEmail, emailTyping, emaiTypingRemove, passwordTyping, passwordTypingRemove, showPassword, loginHandler, server_error }] = UseLogin();
    return (
        <div>
            <LoginStyle.MainPage>
                <LoginStyle.Image src={loginPageLogo} />

                <LoginStyle.LoginContainer>

                    {/* Below Code for Header. (Login Heading and Logo) */}
                    <LoginStyle.InlineHeaderContainer>
                        <LoginStyle.LoginHeading>
                            Sign In
                        </LoginStyle.LoginHeading>
                    </LoginStyle.InlineHeaderContainer>
                    {/* Below Code for Email Input Field   */}
                    <LoginStyle.ForgotContainer>
                        <LoginStyle.InputFieldHeading>
                            Email<LoginStyle.Estaric>{'*'}</LoginStyle.Estaric>
                        </LoginStyle.InputFieldHeading>
                    </LoginStyle.ForgotContainer>

                    <LoginStyle.IconAndInputField typing={values.emailTyping} onClick={() => emailTyping()}>
                        <LoginStyle.IconContainer>
                            <LoginStyle.PersonOutlineIcon typing={values.emailTyping} />
                        </LoginStyle.IconContainer>
                        <LoginStyle.Input type='text' placeholder='Enter your email address' value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => emaiTypingRemove()} />
                    </LoginStyle.IconAndInputField>
                    <LoginStyle.Typography>{server_error?.email ? server_error?.email[0] : ''}</LoginStyle.Typography>
                    {/* Below Code for Password Input Field */}
                    <LoginStyle.ForgotContainer>

                        <LoginStyle.InputFieldHeading>
                            Password<LoginStyle.Estaric>{'*'}</LoginStyle.Estaric>
                        </LoginStyle.InputFieldHeading>
                        <LoginStyle.ForgotPasswordLink to={"/forgotPassword"}>
                            Forgot Password ?
                        </LoginStyle.ForgotPasswordLink>
                    </LoginStyle.ForgotContainer>

                    <LoginStyle.IconAndInputField typing={values.passwordTyping} onClick={() => passwordTyping()}>
                        <LoginStyle.IconContainer>
                            <LoginStyle.LockIcon typing={values.passwordTyping} />
                        </LoginStyle.IconContainer>
                        <LoginStyle.Input value={values.password} onChange={handleChange('password')} type={showPassword ? 'text' : 'password'} placeholder='Enter your password' onBlur={() => passwordTypingRemove()} />
                        {/* Below Code is part of Password input field used for changing Password visible Icon Color   */}
                        <LoginStyle.PasswordVisibleIconContainer>
                            <LoginStyle.VisibilityIcon showPassword={showPassword} onClick={() => handleClickShowPassword()} />
                        </LoginStyle.PasswordVisibleIconContainer>
                    </LoginStyle.IconAndInputField>
                    <LoginStyle.Typography>{server_error?.password ? server_error?.password[0] : ''}</LoginStyle.Typography>
                    {/* Below Code for login Button   */}
                    {loading ?
                        <LoginStyle.LoaderContainer>
                            <ClassicSpinner color="#0D4cb5" height={30} width={30} />
                        </LoginStyle.LoaderContainer>
                        :
                        <LoginStyle.ButtonContainer>
                            <LoginStyle.LoginButton  onClick={()=> loginHandler()}>Log In</LoginStyle.LoginButton>
                        </LoginStyle.ButtonContainer>
                    }

                    <LoginStyle.InlineHeader>
                        <LoginStyle.ReturnToSignupLink to={"/signup"}>New user? Sign Up</LoginStyle.ReturnToSignupLink>
                    </LoginStyle.InlineHeader>
                </LoginStyle.LoginContainer>
            </LoginStyle.MainPage>
        </div>

    )
}