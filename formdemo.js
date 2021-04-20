import React from "react";
import '../App.css';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import TextError from "./error";

const initialValues = {
    downPay: '',
    tradeIn: '',
    programming:false,
    vzProtectMD: false,
    tmpMD: false,
    vzHome:false,
    vzProtect:false,
    tmp: false,
    tmpTab: false,
    monthly: []
  };
  
  const onSubmit = values =>{
    console.log('values:',values)
    };
  
  const validate = values => {
    let errors = {};
    if(isNaN(values.downPay)) {
      errors.downPay = 'Must be a number!';
    }
    if(isNaN(values.tradeIn)){ 
      errors.tradeIn = 'Must be a number!';
    }
    if(values.monthly.length === 0){
      errors.monthly = 'Required!'
    }
    return errors;
  };

const ExtraForm = () => (
    <div className = 'container'>
      <h1>Extras</h1>
      <Formik
        initialValues={initialValues}
        onSubmit= {onSubmit}
        validate={validate}
      >
          <Form id ='form'>
            <div>Down Payment</div>
              <Field id='downPayment'  type= 'text' name='downPay' placeholder = '$0'/>
            <div className='errorMsg'><ErrorMessage name='downPay' /></div> 
            <div>Trade-in</div>
              <Field id='tradeIn' type= 'text' name='tradeIn' placeholder = '$0'/>
            <div className='errorMsg'><ErrorMessage name='tradeIn'/></div>
            <div>Monthly Period</div>
            <div id='monthlyCheckGroup' role="group" aria-labelledby="checkbox-group">
              <label>
              <Field type='checkbox' name='monthly' value='24'/>
              24
              </label>
              <label id='rightCheck' >
              <Field type='checkbox' name='monthly' value='30'/>
              30
              </label>
              <ErrorMessage name='monthly' component = {TextError}/>
            </div>
            <div style = {{borderBottom: '1px solid black'}}></div>
            <div>
              <Field name='programming' id='programCheck' type = 'checkbox' />
              Programming
            </div>
            <div style = {{borderBottom: '1px solid black'}}></div>
            <div>
              <input type = 'checkbox' name = 'vzProtectMD'  />
              VZ Protect MD
            </div>
            <div>
              <Field id='tmpMDCheck' type = 'checkbox' name='tmpMD' />
              TMP MD
            </div>
            <div>
              <Field id='vzHomeCheck' type = 'checkbox' name='vzHome'/>
              VZ Protect Home
            </div>
            <div style = {{borderBottom: '1px solid black'}}></div>
            <div>
              <Field id='vzProtectCheck' type = 'checkbox' name='vzProtect' />
              VZ Protect
            </div>
            <div>
              <Field id='tmpCheck' type = 'checkbox' name='tmp' />
              TMP
            </div>
            <div>
              <Field id='tmpTabCheck' type = 'checkbox' name='tmpTab' />
              TMP for tablets/watches
            </div>
            <div style = {{borderBottom: '1px solid black'}}></div>
            <button id = 'submit' type= 'submit'>Submit</button>
          </Form>
      </Formik>
    </div>
    );
    export default ExtraForm;
    
  
  
