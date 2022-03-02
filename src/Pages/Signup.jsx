import { Link } from "react-router-dom";
import {useState} from "react";
import axios from "axios";

const Register = () => {

   const [username, setUsername] = useState();
   const [password, setPassword] = useState();

   const validateUsername = (username) => {
      if(username !== null) return true;
      return false;
    }

    const validatePassword = (password) => {
      if(password !== null) return true;
      return false;
    }

    const doRegister = async (e) => {

      e.preventDefault();


      let validUser = validateUsername(username);
      let validPwd = validatePassword(password);

      if(validPwd && validUser) {
            fetch('http://www239.cfgs.esliceu.net/signup', {
               method:'POST',
               headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
               body: JSON.stringify({username: username ,password:password})
            })
            .then((response) => response.json())
            .then((res) => {
              localStorage.setItem("id", res.id);
            })
            .catch((err) => {
              console.log(err);
            });

    }

   }

  return (
      
<div class="container">
         <div class="row justify-content-center align-items-center">
            <div class="col-4">
               <div class="card">
                  <div class="card-body">
                     <h1>Register</h1>
                     <form onSubmit={e => {doRegister(e)}}>
                        <div class="form-group">
                           <label for="username">User:</label>
                           <input type="text" id="username" class="form-control" value={username}
                          onChange={e => setUsername(e.target.value)}/>
                        </div>
                        <div class="form-group">
                           <label for="password">Password:</label>
                           <input type="password" id="password" class="form-control" value={password}
                          onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <button type="submit" id="register" class="btn btn-primary">Register</button>
                        <Link to="/Login"id="back">Back</Link>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
  );
};

export default Register;
