// export default Login
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormSelect,
  CAlert,
  CSpinner,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilGlobeAlt, cilLockLocked, cilUser } from '@coreui/icons'
import { useForm } from 'react-hook-form'
import useCountries from 'src/hooks/useCountries'
import useLogin from 'src/hooks/useLogin'
const url = 'https://egamaingrpcapiforeganowappsv1.azurewebsites.net/'
const Login = () => {
  const [countryOption] = useCountries(url)
  const [errorMSG, setLogin] = useLogin(url)
  const [flag, setFlag] = useState()
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm()

  const watchFlag = watch('country')

  useEffect(() => {
    const flagObj = countryOption.find((obj) => {
      return obj.value === watchFlag
    })
    setFlag(flagObj?.flag)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchFlag])

  const onSubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setLogin(data)
      }, 1000)
    })
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm noValidate onSubmit={handleSubmit(onSubmit)}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    {errorMSG.message && <CAlert color="danger">{errorMSG.message}</CAlert>}
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        {flag && (
                          // eslint-disable-next-line jsx-a11y/img-redundant-alt
                          <img
                            alt="country image"
                            src={flag}
                            style={{
                              width: '16px',
                              height: 'auto',
                            }}
                          />
                        )}
                        {!flag && <CIcon icon={cilGlobeAlt} />}
                      </CInputGroupText>
                      <CFormSelect
                        aria-label="Default select example"
                        options={countryOption}
                        {...register('country', { required: true, minLength: 2, maxLength: 50 })}
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                        {...register('username', { required: true, minLength: 2, maxLength: 50 })}
                        required
                        feedbackInvalid="Please provide a valid username."
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        {...register('password', { required: true, minLength: 2, maxLength: 50 })}
                        required
                        feedbackInvalid="Please provide a valid password."
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          color="primary"
                          type="submit"
                          className="px-4"
                          active
                          disabled={isSubmitting}
                        >
                          Login{' '}
                          {isSubmitting ? (
                            <CSpinner
                              component="span"
                              size="sm"
                              variant="grow"
                              aria-hidden="true"
                            />
                          ) : null}
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5">
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
