import { Link } from "react-router-dom";
import {useState} from "react";


const Login = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const doLogin = async (e) => {

    }
    return (
        <>
        <div class="cotainer">
            <div class="row justify-content-center">
               <div class="col-md-8">
                  <div class="card">
                     <div class="card-header">Login</div>
                        <div class="card-body">
                            <form onSubmit={e => {doLogin(e)}}>
                                <div class="form-group row">
                                    <label for="email_address" class="col-md-4 col-form-label text-md-right">Username</label>
                                    <div class="col-md-6">
                                        <input type="text" id="email_address" class="form-control" value={username}
                          onChange={e => setUsername(e.target.value)}/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                    <div class="col-md-5">
                                        <input type="password" id="password" class="form-control" value={password}
                          onChange={e => setPassword(e.target.value)}/>
                                    </div>                
                                </div>
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Login
                                    </button>
                                </div>
                            </form>
                            <Link to="/signup">
                                <button class="btn btn-secondary">Register</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
  };
  
  export default Login;
  