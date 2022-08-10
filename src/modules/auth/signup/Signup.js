import React from "react";
import { SignupStyle } from "./SignupStyle";
import loginPageLogo from '../../../assets/images/loginPageLogo.png';
import UseSignup from './UseSignup';
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { ToastContainer } from 'react-toastify';
import { ClassicSpinner } from 'react-spinners-kit'

export default function Signup() {
    const [{ values, loading, handleChange, handleClickShowPassword, email, setEmail, emailTyping, emaiTypingRemove, passwordTyping, passwordTypingRemove, confirmPassTypingRemove, showPassword, nameTyping, nameTypingRemove, confirmPassTyping, userName, setUserName, signupHandler, setTermsCondition, server_error }] = UseSignup();
    return (
        <div>
            <SignupStyle.MainPage>
                <SignupStyle.Image src={loginPageLogo} />

                <SignupStyle.LoginContainer>
                    {/* Below Code for toastify   */}
                    <ToastContainer />
                    {/* Below Code for Header. (Login Heading and Logo) */}
                    <SignupStyle.InlineHeaderContainer>
                        <SignupStyle.LoginHeading>
                            Sign Up
                        </SignupStyle.LoginHeading>
                    </SignupStyle.InlineHeaderContainer>
                    {/* Below Code for Email Input Field   */}

                    <SignupStyle.ForgotContainer>
                        <SignupStyle.InputFieldHeading>
                            Username<SignupStyle.Estaric>{'*'}</SignupStyle.Estaric>
                        </SignupStyle.InputFieldHeading>
                    </SignupStyle.ForgotContainer>

                    <SignupStyle.IconAndInputField typing={values.nameTyping} onClick={() => nameTyping()}>
                        <SignupStyle.IconContainer>
                            <SignupStyle.PersonIcon typing={values.nameTyping} />
                        </SignupStyle.IconContainer>
                        <SignupStyle.Input type='text' placeholder='Enter your username' value={userName} onChange={(e) => setUserName(e.target.value)} onBlur={() => nameTypingRemove()} />
                    </SignupStyle.IconAndInputField>
                    <SignupStyle.Typography>{server_error.name ? server_error.name[0] : ''}</SignupStyle.Typography>
                    <SignupStyle.ForgotContainer>
                        <SignupStyle.InputFieldHeading>
                            Email<SignupStyle.Estaric>{'*'}</SignupStyle.Estaric>
                        </SignupStyle.InputFieldHeading>
                    </SignupStyle.ForgotContainer>

                    <SignupStyle.IconAndInputField typing={values.emailTyping} onClick={() => emailTyping()}>
                        <SignupStyle.IconContainer>
                            <SignupStyle.PersonOutlineIcon typing={values.emailTyping} />
                        </SignupStyle.IconContainer>
                        <SignupStyle.Input type='text' placeholder='Enter your email address' value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => emaiTypingRemove()} />
                    </SignupStyle.IconAndInputField>
                    <SignupStyle.Typography>{server_error.email ? server_error.email[0] : ''}</SignupStyle.Typography>


                    {/* Below Code for Password Input Field */}


                    <SignupStyle.ForgotContainer>
                        <SignupStyle.InputFieldHeading>
                            Password<SignupStyle.Estaric>{'*'}</SignupStyle.Estaric>
                        </SignupStyle.InputFieldHeading>
                    </SignupStyle.ForgotContainer>
                    <SignupStyle.IconAndInputField typing={values.passwordTyping} onClick={() => passwordTyping()}>
                        <SignupStyle.IconContainer>
                            <SignupStyle.LockIcon typing={values.passwordTyping} />
                        </SignupStyle.IconContainer>
                        <SignupStyle.Input value={values.password} onChange={handleChange('password')} type={showPassword ? 'text' : 'password'} placeholder='Enter your password' onBlur={() => passwordTypingRemove()} />
                        {/* Below Code is part of Password input field used for changing Password visible Icon Color   */}
                        <SignupStyle.PasswordVisibleIconContainer>
                            <SignupStyle.VisibilityIcon showPassword={showPassword} onClick={() => handleClickShowPassword()} />
                        </SignupStyle.PasswordVisibleIconContainer>
                    </SignupStyle.IconAndInputField>
                    <SignupStyle.Typography>{server_error.password ? server_error.password[0] : ''}</SignupStyle.Typography>


                    <SignupStyle.ForgotContainer>
                        <SignupStyle.InputFieldHeading>
                            Confirm Password<SignupStyle.Estaric>{'*'}</SignupStyle.Estaric>
                        </SignupStyle.InputFieldHeading>
                    </SignupStyle.ForgotContainer>

                    <SignupStyle.IconAndInputField typing={values.confirmPassTyping} onClick={() => confirmPassTyping()}>
                        <SignupStyle.IconContainer>
                            <SignupStyle.LockIcon typing={values.confirmPassTyping} />
                        </SignupStyle.IconContainer>
                        <SignupStyle.Input value={values.confirmPassword} onChange={handleChange('confirmPassword')} type={showPassword ? 'text' : 'password'} placeholder='Confirm password' onBlur={() => confirmPassTypingRemove()} />
                        {/* Below Code is part of Password input field used for changing Password visible Icon Color   */}
                        <SignupStyle.PasswordVisibleIconContainer>
                            <SignupStyle.VisibilityIcon showPassword={showPassword} onClick={() => handleClickShowPassword()} />
                        </SignupStyle.PasswordVisibleIconContainer>
                    </SignupStyle.IconAndInputField>
                    <SignupStyle.Typography>{server_error.password2 ? server_error.password2[0] : ''}</SignupStyle.Typography>

                    <SignupStyle.OrgCheckbox>
                        <FormControlLabel
                            sx={{
                                color: '#121F3E',
                                fontSize: 12,
                            }}
                            control={<Checkbox
                                size={'small'}
                                sx={{
                                    color: '#1E86FF',
                                    '&.Mui-checked': {
                                        color: '#1E86FF',
                                    },
                                }}
                                onChange={() => setTermsCondition(true)}
                            />
                            }
                            label="I agree to term and condition."
                        />
                    </SignupStyle.OrgCheckbox>

                    {/* Below Code for login Button   */}
                    {loading ?
                        <SignupStyle.LoaderContainer>
                            <ClassicSpinner color="#0D4cb5" height={30} width={30} />
                        </SignupStyle.LoaderContainer>
                        :
                        <SignupStyle.ButtonContainer>
                            <SignupStyle.LoginButton onClick={() => signupHandler()} >Sign Up</SignupStyle.LoginButton>
                        </SignupStyle.ButtonContainer>
                    }
                    <SignupStyle.InlineHeader>
                        <SignupStyle.ReturnToLoginLink to={"/login"}>Return to Login</SignupStyle.ReturnToLoginLink>
                    </SignupStyle.InlineHeader>
                </SignupStyle.LoginContainer>
            </SignupStyle.MainPage>
        </div>

    )
}
