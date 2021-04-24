import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = ({services}) => {
    // form state
    const [ service, setService ] = useState('');
    const [ fullName, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');
    // keeps track of valid input
    const [validEmail, setValidEmail] = useState(true);
    const [validName, setValidName] = useState(true);
    const [validMessage, setValidMessage] = useState(true);
    // toggles modal visibility upon submission
    const [ show, setShow ] = useState(false);

    // retrieve services for dropdown selection
    const options = services.map( (item, index) => {
        return (item.description) ?
            <option value={item.name} key={index}>{item.name}</option> 
            : (
                item.content.map((cItem, cIndex) => {
                    return <option value={cItem.name} key={cIndex}>{cItem.name}</option> 
                })
            );
    });

    // reset form upon submission
    const resetForm = () => {
        setName('');
        setEmail('');
        setService('');
        setMessage('');
        setValidEmail(true);
        setValidName(true);
        setValidMessage(true);
    };

    // check that all inputs are valid
    const checkValidity = () => {
        const emailCheck = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
        const nameCheck = val => /^[A-Z-]{2,}\s[A-Z-]{2,}$/i.test(val);

        const emailIsValid = (emailCheck(email)) ? true : false;
        const nameIsValid = (nameCheck(fullName)) ? true : false;
        const msgIsValid = (message.length > 5) ? true : false;

        setValidEmail(emailIsValid);
        setValidName(nameIsValid);
        setValidMessage(msgIsValid);

        return (emailIsValid && nameIsValid && msgIsValid);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        const templateParams = {
            name: fullName,
            email: email,
            subject: 'Inquiry',
            message: message
            };   

        if (checkValidity()) {
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            );
            setShow(true);
        } else {
            e.stopPropagation();
        }         
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:
                    <input 
                        required
                        type='text' 
                        value={fullName} 
                        placeholder='Enter your full name here'
                        onChange={e => setName(e.currentTarget.value)}
                        isInvalid={!validName}
                    />
                </label>
            </div>
            <div>
                <label>Email:
                    <input 
                        required
                        type='email' 
                        value={email} 
                        placeholder='example@domain.org'
                        onChange={e => setEmail(e.currentTarget.value)}
                        isInvalid={!validEmail}
                    />
                </label>
            </div>
            <div>
                <label>Which service are you interested in?
                    <select value={service} onChange={e => setService(e.target.value)}>
                    {options}
                    <option value='Other'>Other</option> 
                    </select>
                </label>
            </div>
            <div>
                <label>Message:
                    <textarea 
                        required
                        rows={4}
                        value={message} 
                        placeholder='Enter your message here'
                        onChange={e => setMessage(e.currentTarget.value)}
                        isInvalid={!validMessage}
                    />
                </label>
            </div>
            <div>
                <input type='submit' className='btn btn-lg btn-primary mx-auto' value='Send' />
            </div>
        </form>
           
        </div>
    );
}

export default Contact;