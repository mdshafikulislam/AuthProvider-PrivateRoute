import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>login</h1>
            <div className="ml-10">
            <input type="email" name="" id="" placeholder="Email" className="border-2 border-red-500 ..."/>
            <br/>
            <br/>
            <input type="password" name="" id="" placeholder="Password" className="border-2 border-red-500 ..."/>
            <br/>
            <br/>
            <button className="border-solid border-4 border-red-500 ..."> Sign in with google </button>
            </div>
            <div class="text-5xl font-extrabold ...">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                Hello world
            </span>
            </div>
        </div>
    );
};

export default Login;