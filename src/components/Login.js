import React from 'react';

const Login = () => {
  return (
    <div className='login'>
      <form>
        <label>Username: </label>
        <input /><br/>
        <label>Password: </label>
        <input /><br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Login;
