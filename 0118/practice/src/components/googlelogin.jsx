import React from 'react';
import GoogleLogin, { useGoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response.profileObj.email)
  console.log(response.profileObj.name)
  console.log(response)
}

export default function googleLogin() {
  
  return (
    <GoogleLogin
    clientId="197120058866-e0ssuuid9sv12e3skj34809aalpuapfs.apps.googleusercontent.com"
    buttonText="Login"
    useGoogleLogin
    onSuccess={useGoogleLogin, responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  )
}
