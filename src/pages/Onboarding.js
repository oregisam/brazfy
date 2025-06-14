import React,{useState} from 'react';
export default function Onboarding(){
  const [link,set]=useState('');
  const [step,setStep]=useState(1);
  const submit=e=>{e.preventDefault();setStep(2)};
  return(
   <div className="auth-wrapper">
    <div className="auth-card">
      <h2>Vincular Grupo WhatsApp</h2>
      {step===1&&(
        <form onSubmit={submit}>
          <input placeholder="https://chat.whatsapp.com/..." value={link} onChange={e=>set(e.target.value)} required/>
          <button type="submit">Enviar</button>
        </form>
      )}
      {step===2&&(
        <>
          <p>✅ Bot entrou no grupo.<br/>Dê permissão de admin ao número.</p>
          <button onClick={()=>{window.location='/dashboard'}}>Ir ao dashboard</button>
        </>
      )}
    </div>
   </div>);
}
