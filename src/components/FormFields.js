import React, { Fragment } from 'react';
import { Formik, Form, Field, useField } from 'formik';
import * as Yup from 'yup';

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className='row mb-1 d-flex align-items-center'>
            <label htmlFor={props.id || props.name} className='col-sm-2 col-form-label'>{label}</label>
            <div className='col-sm-10'>
            <input className='text-input form-control' {...field} {...props} />
           
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null }
            </div>
        </div>
    );
};

const ContactForm = ({services}) => {
    const sendEmail = (value) => {
        console.log(value);
        console.log('running email');
       
    }

    // retrieve services for dropdown selection
    const serviceOptions = services.map( (item, index) => {
        return (item.description) ?
            <option value={item.name} key={index}>{item.name}</option> 
            : (
                item.content.map((cItem, cIndex) => {
                    return <option value={cItem.name} key={cIndex}>{cItem.name}</option> 
                })
            );
    });

    return (
        <Fragment>
            <h1 className='text-center'>Contact Me</h1>
            <Formik 
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    method: '',
                    services: '',
                    call: false,
                    additional: '',
                }}
                validationSchema={ Yup.object().shape({
                    name: Yup.string()
                        .min(5, 'Please enter your full name')
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    phone: Yup.number()
                        .min(10, 'Please include the area code'),
                    method: Yup.string()
                        .oneOf(
                            ['Email', 'Phone call'],
                            'Please select contact method'
                        )
                        .required('Required'),
                    services: Yup.string()
                        .oneOf(
                            ['Copyediting', 'Developmental editing', 'Tutoring or Writing Coaching', 'Application Essay Package', 'Other'],
                            'Please select a service'
                        )
                        .required('Required'),
                    // call: Yup.boolean()
                    //     .oneOf([true]),
                    // additional: Yup.string()



                })}
              
                onSubmit={(values) => {
                    sendEmail(values);
                    console.log('onsubmit');
                    //setSubmitting(false);
                }}
                >
                 {({ values, errors, touched }) => {
                    return(
                    <Form className='container py-3'>
                        <TextInput 
                            label='Name:'
                            name='name'
                            type='text'
                            placeholder='First and Last Name'
                        />
                        <TextInput 
                            label='Email address:'
                            name='email'
                            type='email'
                            placeholder='example@domain.org'
                        />
                        <TextInput 
                            label='Phone number:'
                            name='phone'
                            type='text'
                            placeholder='123456789'
                        />
                       
                        {/* <div id='method-group'>How would you like me to respond to you?</div>
                        <div role='group' aria-labelledby='method-group'>
                            <label>
                                <Field type='radio' name='method' value='Email' />
                                Email
                            </label>
                            <label>
                                <Field type='radio' name='method' value='Phone call' />
                                Phone call
                            </label>
                            {errors.method ? (<div className='error'>{errors.method}</div>) : null}
                        </div>  */}

                        <fieldset className='row mb-1'>
                            <div id='method-group' className='col-sm-9 d-flex align-items-center'>How would you like me to respond to you?</div>
                            <div className='col-sm-3'>
                                <div className='row'>
                                    <label className='col-12'>
                                        <Field type='radio' name='method' value='Email' className='mr-2'/>
                                        Email
                                    </label>
                                </div>
                                <div className='row'>
                                    <label className='col-12'>
                                        <Field type='radio' name='method' value='Phone call' className='mr-2'/>
                                        Phone call
                                    </label>
                                </div>
                                {errors.method ? (<div className='error'>{errors.method}</div>) : null}  
                            </div>                            
                        </fieldset>
                       
                        <label className='row mb-1'>
                            <div className='col-sm-9'>
                                Would you like to schedule a free, 15-minute video call to discuss your project and determine what services best fit your needs? 
                            </div>
                            <div className='col-sm-3 d-flex align-items-center'>
                                <Field type='checkbox' name='call' className='mr-2' />
                                {(values.call ? 'Yes' : 'No')}
                            </div>
                            
                        </label>

                        <fieldset className='row mb-1 d-flex align-items-center'>
                            <label htmlFor='services' className='col-sm-6 col-form-label'>Which service are you interested in?</label>
                            <div className='col-sm-6 text-right'>
                                <Field name='services' as='select' className='select-fields'>
                                    <option value=''>Select a service</option>
                                        {serviceOptions}
                                    <option value='Other'>Other</option>
                                </Field>
                                {(errors.services && touched.services) ? (<div className='error'>{errors.services}</div>) : null}
                            </div>
                          
                            
                        </fieldset>
                        
                        <fieldset className='row mb-1'>
                        <label htmlFor='additional' className='col-12'>
                            Is there anything else you’d like to add or ask about?   
                        </label>
                        <div className='col-12'>
                        <Field 
                                name='additional'
                                as='textarea'
                                rows={4}
                                placeholder='Enter message'
                                className='col-12 '
                            >
                        </Field>
                        </div>
                        
                        </fieldset>
                        
                <button type='submit'>submit</button>
                    </Form>  
                    )}}
                </Formik>
        </Fragment>
    )
}

export default ContactForm;


