import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { CustomerAccountClient } from 'src/layout/protos-gen/Customer_grpc_web_pb'
import { CustomerAccountMessage } from 'src/layout/protos-gen/Customer_pb'

const useRegister = (url) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const client = new CustomerAccountClient(url, null, null)
  const [errorMSG, setErrorMSG] = useState({})

  function setRegister(data) {
    const request = new CustomerAccountMessage()
    request.setFirstname(data.firstname)
    request.setLastname(data.lastname)
    request.setEmailaddress(data.email)
    request.setBusinessname(data.businessname)
    request.setMobileorweb('WEB')
    request.setPersonalbusinessgroupvalue(2)
    request.setMobilenumber(data.mobilenumber)
    console.log(data)

    const metadata = {
      eganowappcustkey: 'keY-a6ee91c7-493a-4e0d-814d-06919674cea1-a0UoThthyys30a-Ey',
      eganowapppassword: 'passW-5e4cd4d1-515b-4047-aa63-288be83e44ff-x001223Th76x-Word',
    }

    client.CreateCustomerAccount(request, metadata, (err, response) => {
      if (err) {
        console.error(err.message)
        return
      }

      const obj = response.toObject()

      if (obj.issuccess && obj.messagesuccessfulorfailed === 'SUCCESSFUL') {
        dispatch({ type: 'setCustomerInfo', customerInfo: obj })
        navigate('/login')
      } else {
        setErrorMSG({
          state: obj.messagesuccessfulorfailed,
          message: obj.message,
        })
      }
    })
  }

  return [errorMSG, setRegister]
}

export default useRegister
