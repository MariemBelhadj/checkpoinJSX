import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    
     
      <div className='container '>
        <div  className='row'>
          <div className="col-md-5">
          <h1 className='shadow-sm text-success mt-5 p-3 text-center rounded'>Registration Form</h1>
          <form  >
          <div className='form-group'>
              <label for="exampleInputName1">Name</label>
              <input type="text" className="form-control" id="exampleInputName1"  placeholder="Enter Name" />
             
            </div>
            <div className='form-group'>
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
              
            </div>
            
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group">
              <label for="exampleInputNumber1">Phone Number</label>
              <input type="number" className="form-control" id="exampleInputNumber1" placeholder="your number" />
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
          </form>
          </div>
      </div>
    </div>
  );
}

export default App;
