import React from 'react';
import './Dashboard.css';
export default function Dashboard(){
  const stats={clicks:0,vendas:0,comissoes:0};
  return(
    <div className="dashboard">
      <h2>Resumo</h2>
      <div className="cards">
        {Object.entries(stats).map(([k,v])=>(
          <div className="card" key={k}><span>{k}</span><strong>{v}</strong></div>
        ))}
      </div>
      <h3>Histórico de ofertas</h3><p>Em breve…</p>
    </div>);
}
