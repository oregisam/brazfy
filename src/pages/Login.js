import React from 'react';
import GoogleAuth from '../components/GoogleAuth';
import './AuthCard.css';

export default function Login() {
  const handleSuccess = (u, jwt) => window.location.href = '/onboarding';
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Entre na <span className="brand">Brazfy</span> e comece a ganhar</h2>
        <p>Conecte com Google para acessar a plataforma.</p>
        <GoogleAuth onSuccess={handleSuccess}/>
        <small>Criando a conta você aceita nossos <a href="/termos">termos</a>.</small>
      </div>
    </div>
  );
}
