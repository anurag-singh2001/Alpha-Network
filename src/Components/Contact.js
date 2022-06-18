import React from 'react'
import { useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export const Contact = () => {

  const [data, setData] = useState({
    fullname:"",
    phone:"",
    email:"",
    msg:"",
  });
  const InputEvent = (event)=>{
    const{ name, value } = event.target;
    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value,
      };
    });
};
const formSubmit=(e)=>{
  e.preventDefault();
  alert(
     `My name is ${data.fullname} .My mobile number is ${data.phone} and email is ${data.email} and message is ${data.msg}`
  );
  toast.success('We will contact you soon!!!', {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
 };

return (
  <>
   <ToastContainer
          position="bottom-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    <div className="my-5">
      <h1 className="text-center">Contact US</h1>
    </div>
    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6col-10 mx-auto">
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
              <input name="fullname" value={data.fullname} onChange={InputEvent}  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Phone No.</label>
              <input name="phone" value={data.phone} onChange={InputEvent}  type="number" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
              <input name="email" value={data.email} onChange={InputEvent}  type="email" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
              <textarea name="msg" value={data.msg} onChange={InputEvent}  className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <button type="submit" className="btn btn-outline-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </>
)
}

