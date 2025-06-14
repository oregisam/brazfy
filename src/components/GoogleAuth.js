import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
export default function GoogleAuth({onSuccess}){
    return (
    <GoogleLogin
      width="100%"
      shape="rectangular"
      text="signin_with"
      locale="pt-BR"
      onSuccess={resp => {
        const info = jwtDecode(resp.credential);
        onSuccess(info, resp.credential);
      }}
      onError={() => console.log('Google Auth erro')}
    />
  );
}
