// redireciona para Login (Google faz signup implícito)
import { useEffect } from 'react';
export default function Signup(){ useEffect(()=>{window.location='/login'},[]); return null;}
