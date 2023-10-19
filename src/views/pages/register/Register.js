import React, { useEffect, useState } from 'react'
import { CContainer, CForm } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCode, cilGlobeAlt, cilLockLocked, cilPhone, cilUser, cilWallet } from '@coreui/icons'
import { useForm } from 'react-hook-form'
import useCountries from 'src/hooks/useCountries'
import useRegister from 'src/hooks/useRegister'
import AppStepper from 'src/components/AppStepper'

const Register = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        {/* <CForm noValidate onSubmit={handleSubmit(onSubmit)}> */}
        <CForm>
          <AppStepper />
        </CForm>
      </CContainer>
    </div>
  )
}
export default Register
