import React from "react";
import { ResetPasswordStyle } from "./ResetPasswordStyle";
import loginPageLogo from '../../../assets/images/loginPageLogo.png';
import UseResetPassword from './UseResetPassword';
import { ClassicSpinner } from 'react-spinners-kit'

export default function ResetPassword() {
    const [{ values,loading, handleChange, handleClickShowPassword, passwordTyping, passwordTypingRemove,confirmPassTyping, confirmPassTypingRemove, showPassword, resetHandler, server_error }] = UseResetPassword();

    return (
        <div>
            <ResetPasswordStyle.MainPage>
                <ResetPasswordStyle.Image src={loginPageLogo} />

                <ResetPasswordStyle.LoginContainer>
                    {/* Below Code for Header. (Login Heading and Logo) */}
                    <ResetPasswordStyle.InlineHeaderContainer>
                        <ResetPasswordStyle.LoginHeading>
                            Reset Password
                        </ResetPasswordStyle.LoginHeading>
                    </ResetPasswordStyle.InlineHeaderContainer>
                    {/* Below Code for Password Input Field   */}
                    <ResetPasswordStyle.ForgotContainer>
                        <ResetPasswordStyle.InputFieldHeading>
                            Password<ResetPasswordStyle.Estaric>{'*'}</ResetPasswordStyle.Estaric>
                        </ResetPasswordStyle.InputFieldHeading>
                    </ResetPasswordStyle.ForgotContainer>

                    <ResetPasswordStyle.IconAndInputField typing={values.passwordTyping} onClick={() => passwordTyping()}>
                        <ResetPasswordStyle.IconContainer>
                            <ResetPasswordStyle.LockIcon typing={values.passwordTyping} />
                        </ResetPasswordStyle.IconContainer>
                        <ResetPasswordStyle.Input value={values.password} onChange={handleChange('password')} type={showPassword ? 'text' : 'password'} placeholder='Confirm password' onBlur={() => passwordTypingRemove()} />
                        {/* Below Code is part of Password input field used for changing Password visible Icon Color   */}
                        <ResetPasswordStyle.PasswordVisibleIconContainer>
                            <ResetPasswordStyle.VisibilityIcon showPassword={showPassword} onClick={() => handleClickShowPassword()} />
                        </ResetPasswordStyle.PasswordVisibleIconContainer>
                    </ResetPasswordStyle.IconAndInputField>
                    <ResetPasswordStyle.Typography>{server_error.password ? server_error.password[0] : ''}</ResetPasswordStyle.Typography>
                    {/* Below Code for Password Input Field */}

                    <ResetPasswordStyle.ForgotContainer>
                        <ResetPasswordStyle.InputFieldHeading>
                            Confirm Password<ResetPasswordStyle.Estaric>{'*'}</ResetPasswordStyle.Estaric>
                        </ResetPasswordStyle.InputFieldHeading>
                    </ResetPasswordStyle.ForgotContainer>

                    <ResetPasswordStyle.IconAndInputField typing={values.confirmPassTyping} onClick={() => confirmPassTyping()}>
                        <ResetPasswordStyle.IconContainer>
                            <ResetPasswordStyle.LockIcon typing={values.confirmPassTyping} />
                        </ResetPasswordStyle.IconContainer>
                        <ResetPasswordStyle.Input value={values.confirmPassword} onChange={handleChange('confirmPassword')} type={showPassword ? 'text' : 'password'} placeholder='Confirm password' onBlur={() => confirmPassTypingRemove()} />
                        {/* Below Code is part of Password input field used for changing Password visible Icon Color   */}
                        <ResetPasswordStyle.PasswordVisibleIconContainer>
                            <ResetPasswordStyle.VisibilityIcon showPassword={showPassword} onClick={() => handleClickShowPassword()} />
                        </ResetPasswordStyle.PasswordVisibleIconContainer>
                    </ResetPasswordStyle.IconAndInputField>
                    <ResetPasswordStyle.Typography>{server_error.password2 ? server_error.password2[0] : ''}</ResetPasswordStyle.Typography>


                    {/* Below Code for login Button   */}
                    {loading ?
                        <ResetPasswordStyle.LoaderContainer>
                            <ClassicSpinner color="#0D4cb5" height={30} width={30} />
                        </ResetPasswordStyle.LoaderContainer>
                        :
                        <ResetPasswordStyle.ButtonContainer>
                            <ResetPasswordStyle.LoginButton  onClick={()=> resetHandler()}>Reset</ResetPasswordStyle.LoginButton>
                        </ResetPasswordStyle.ButtonContainer>
                    }
                </ResetPasswordStyle.LoginContainer>
            </ResetPasswordStyle.MainPage>
        </div>

    )
}