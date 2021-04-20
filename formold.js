import './App.css';
import {useFormik} from 'formik';

const initialValues = {
  downPay: 0,
  tradeIn: 0,
  programming:false,
  vzProtectMD: false,
  tmpMD: false,
  vzHome:false,
  vzProtect:false,
  tmp: false,
  tmpTab: false
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
  return errors;
};

function App() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });
  return (
    <div className = 'container'>
      <form onSubmit={formik.handleSubmit} id='form'>
          <div>Down Payment</div>
            <input id='downPayment' type= 'text' name='downPay' onChange={formik.handleChange} />
            {formik.errors.downPay ? <div>{formik.errors.downPay}</div>: null}
          <div>Trade-in</div>
            <input id='tradeIn' type= 'text' name='tradeIn' onChange={formik.handleChange}/>
            {formik.errors.tradeIn ? <div>{formik.errors.tradeIn}</div>: null}
          <div>
            <input name='programming' id='programCheck' type = 'checkbox' onChange={formik.handleChange}/>
            Programming
          </div>
          <div style = {{borderBottom: '1px solid black'}}></div>
          <div>
            <input type = 'checkbox' name = 'vzProtectMD' onChange={formik.handleChange} />
            VZ Protect MD
          </div>
          <div>
            <input id='tmpMDCheck' type = 'checkbox' name='tmpMD' onChange={formik.handleChange}/>
            TMP MD
          </div>
          <div>
            <input id='vzHomeCheck' type = 'checkbox' name='vzHome' onChange={formik.handleChange}/>
            VZ Protect Home
          </div>
          <div style = {{borderBottom: '1px solid black'}}></div>
          <div>
            <input id='vzProtectCheck' type = 'checkbox' name='vzProtect' onChange={formik.handleChange}/>
            VZ Protect
          </div>
          <div>
            <input id='tmpCheck' type = 'checkbox' name='tmp' onChange={formik.handleChange}/>
            TMP
          </div>
          <div>
            <input id='tmpTabCheck' type = 'checkbox' name='tmpTab' onChange={formik.handleChange}/>
            TMP for tablets/watches
          </div>
          <div style = {{borderBottom: '1px solid black'}}></div>
          <button id = 'submit' type= 'submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
