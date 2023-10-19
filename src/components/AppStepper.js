import React, { useState } from 'react'
import './AppStepper.css'

const App = () => {
  const [formNumber, setFormNumber] = useState(0)
  const [username, setUsername] = useState('')

  const handleNextClick = () => {
    if (!validateForm()) {
      return
    }
    setFormNumber((prevFormNumber) => prevFormNumber + 1)
  }

  const handleBackClick = () => {
    setFormNumber((prevFormNumber) => prevFormNumber - 1)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const validateForm = () => {
    const inputs = document.querySelectorAll('.main.active input')
    let isValid = true
    inputs.forEach((input) => {
      input.classList.remove('warning')
      if (input.hasAttribute('required') && input.value.length === 0) {
        isValid = false
        input.classList.add('warning')
      }
    })
    return isValid
  }

  const stepList = ['Personal Information', 'Education', 'Work Experience', 'User Photo']

  const stepNumberContent = [
    'Enter your personal information to get closer to companies.',
    'Get to know better by adding your diploma, certificate, and education life.',
    'Help companies get to know you better by telling them about your past experiences.',
    'Add your profile picture and let companies find you fast.',
  ]

  return (
    <div className="container">
      <div className="card">
        <div className="form">
          <div className="left-side">
            <div className="left-heading">
              <h3>indeed</h3>
            </div>
            <div className="steps-content">
              <h3>
                Step <span className="step-number">{formNumber + 1}</span>
              </h3>
              {stepNumberContent.map((content, index) => (
                <p
                  key={index}
                  className={`step-number-content ${formNumber === index ? 'active' : 'd-none'}`}
                >
                  {content}
                </p>
              ))}
            </div>
            <ul className="progress-bar">
              {stepList.map((step, index) => (
                <li key={index} className={formNumber === index ? 'active' : ''}>
                  {step}
                </li>
              ))}
            </ul>
          </div>
          <div className="right-side">
            <div className={`main ${formNumber === 3 ? 'active' : ''}`}>
              <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
              <div className="text congrats">
                <h2>Congratulations!</h2>
                <p>
                  Thanks Mr./Mrs. <span className="shown_name">{username}</span>, your information
                  has been submitted successfully for future reference. We will contact you soon.
                </p>
              </div>
            </div>
            <div className={`main ${formNumber !== 3 ? 'active' : ''}`}>
              <small>
                <i className="fa fa-smile-o"></i>
              </small>
              <div className="text">
                <h2>
                  {formNumber === 0
                    ? 'Your Personal Information'
                    : formNumber === 1
                    ? 'Education'
                    : formNumber === 2
                    ? 'Work Experiences'
                    : 'User Photo'}
                </h2>
                <p>
                  {formNumber === 0
                    ? 'Enter your personal information to get closer to companies.'
                    : formNumber === 1
                    ? 'Inform companies about your education life.'
                    : formNumber === 2
                    ? 'Can you talk about your past work experience?'
                    : 'Upload your profile picture and share yourself.'}
                </p>
              </div>
              {formNumber === 0 && (
                <div className="input-text">
                  <div className="input-div">
                    <input type="text" required onChange={handleUsernameChange} />
                    <span>First Name</span>
                  </div>
                  <div className="input-div">
                    <input type="text" required />
                    <span>Last Name</span>
                  </div>
                </div>
              )}
              {formNumber === 0 && (
                <div className="input-text">
                  <div className="input-div">
                    <input type="text" required />
                    <span>Phone number</span>
                  </div>
                  <div className="input-div">
                    <input type="text" required />
                    <span>E-mail Address</span>
                  </div>
                </div>
              )}
              {formNumber === 0 && (
                <div className="input-text">
                  <div className="input-div">
                    <select>
                      <option>Select Country</option>
                      <option>India</option>
                      <option>France</option>
                      <option>UK</option>
                      <option>USA</option>
                      <option>Germany</option>
                      <option>Russia</option>
                      <option>China</option>
                      <option>Japan</option>
                      <option>Pakistan</option>
                    </select>
                  </div>
                  <div className="input-div">
                    <select>
                      <option>Select City</option>
                      <option>New Delhi</option>
                      <option>Paris</option>
                      <option>London</option>
                      <option>Washington D.C.</option>
                      <option>Berlin</option>
                      <option>Moscow</option>
                      <option>Bejing</option>
                      <option>Tokyo</option>
                      <option>Islamabad</option>
                    </select>
                  </div>
                </div>
              )}
              {formNumber === 1 && (
                <div className="input-text">
                  <div className="input-div">
                    <input type="text" required />
                    <span>School Name</span>
                  </div>
                  <div className="input-div">
                    <input type="text" required />
                    <span>Board Name</span>
                  </div>
                </div>
              )}
              {formNumber === 1 && (
                <div className="input-text">
                  <div className="input-div">
                    <input type="text" required />
                    <span>College/University name</span>
                  </div>
                </div>
              )}
              {formNumber === 1 && (
                <div className="input-text">
                  <div className="input-div">
                    <select>
                      <option>Select Course</option>
                      <option>BCA</option>
                      <option>B-TECH</option>
                      <option>BA</option>
                      <option>B-COM</option>
                      <option>B-SC</option>
                      <option>MBA</option>
                      <option>MCA</option>
                      <option>M-COM</option>
                      <option>M-TECH</option>
                    </select>
                  </div>
                </div>
              )}
              {formNumber === 2 && (
                <div className="input-text">
                  <div className="input-div">
                    <input type="text" required />
                    <span>Experience 1</span>
                  </div>
                  <div className="input-div">
                    <input type="text" required />
                    <span>Position</span>
                  </div>
                </div>
              )}
              {formNumber === 2 && (
                <div className="input-text">
                  <div className="input-div">
                    <input type="text" required />
                    <span>Experience 2</span>
                  </div>
                  <div className="input-div">
                    <input type="text" required />
                    <span>Position</span>
                  </div>
                </div>
              )}
              {formNumber === 2 && (
                <div className="input-text">
                  <div className="input-div">
                    <input type="text" required />
                    <span>Experience 3</span>
                  </div>
                  <div className="input-div">
                    <input type="text" required />
                    <span>Position</span>
                  </div>
                </div>
              )}
              {formNumber === 3 && (
                <div className="user_card">
                  <span></span>
                  <div className="circle">
                    <span>
                      <img src="https://i.imgur.com/hnwphgM.jpg" alt="user" />
                    </span>
                  </div>
                  <div className="social">
                    <span>
                      <i className="fa fa-share-alt"></i>
                    </span>
                    <span>
                      <i className="fa fa-heart"></i>
                    </span>
                  </div>
                  <div className="user_name">
                    <h3>Peter Hawkins</h3>
                    <div className="detail">
                      <p>
                        <a href="#">Izmar, Turkey</a>Hiring
                      </p>
                      <p>17 last day. 94Apply</p>
                    </div>
                  </div>
                </div>
              )}
              <div className="buttons button_space">
                {formNumber !== 0 && (
                  <button className="back_button" onClick={handleBackClick}>
                    Back
                  </button>
                )}
                {formNumber !== 3 && (
                  <button className="next_button" onClick={handleNextClick}>
                    Next Step
                  </button>
                )}
                {formNumber === 3 && (
                  <button className="submit_button" onClick={handleNextClick}>
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
