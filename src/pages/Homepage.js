// src/pages/Homepage.js
import React from 'react';
import './Homepage.css';
import DynamicChat from './DynamicChat';
import {
  FaPuzzlePiece,
  FaChartLine,
  FaRobot,
  FaMoneyBillWave,
  FaHandshake,
  FaCheckCircle,
  FaUsers,
  FaLink,
  FaBullhorn,
  FaDollarSign
} from 'react-icons/fa';
import GoogleAuth from '../components/GoogleAuth';   // ⬅️ NOVO

function Homepage() {
  return (
    <div className="homepage">

      {/* 1. Seção Hero */}
      <section className="hero" id="hero">
        <div className="container hero-container">
          <div className="hero-text">
            {/* logo e botão dentro da hero */}
            <div className="hero-header">
              <div className="brand">🛜<span>Brazfy</span></div>
              <button className="login-btn" onClick={() => window.location.href='/login'}>
                Já tenho acesso
              </button>
            </div>
            <h2>Transforme seu grupo do WhatsApp em uma máquina de ganhar dinheiro</h2>
            <div className="mobile-chat"><DynamicChat /></div>
            <p>
              <span className="thin-bold">
                Adicione nosso feed de promoções ao seu grupo do WhatsApp e comece a receber comissões em cada venda.
              </span>
            </p>
            <div className="google-wrapper">
              <GoogleAuth onSuccess={() => window.location.href = '/onboarding'} />
            </div>
          </div>
          <div className="hero-image">
            <DynamicChat />
          </div>
        </div>
      </section>

      {/* 2. Seção Sobre (Passo a Passo) */}
      <section className="about" id="about">
        <div className="container about-container">
          <h2>Como Funciona</h2>
          <div className="steps-container">
            <div className="step-card">
              <FaUsers size={48} color="#25D366" />
              <h3>1. Crie ou Use seu Grupo</h3>
              <p>Utilize um grupo existente ou crie um novo grupo no WhatsApp.</p>
            </div>
            <div className="step-card">
              <FaLink size={48} color="#25D366" />
              <h3>2. Conecte nosso Feed</h3>
              <p>Adicione o feed de promoções do Brazfy ao seu grupo de forma simples e rápida.</p>
            </div>
            <div className="step-card">
              <FaBullhorn size={48} color="#25D366" />
              <h3>3. Divulgue seu Grupo</h3>
              <p>Convide pessoas para aumentar o alcance e as chances de vendas.</p>
            </div>
            <div className="step-card">
              <FaDollarSign size={48} color="#25D366" />
              <h3>4. Receba Comissões</h3>
              <p>Cada venda realizada gera comissões direto para você, sem burocracia!</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Seção Recursos */}
      <section className="features" id="features">
        <div className="container features-container">
          <div className="feature-item">
            <FaPuzzlePiece size={64} color="#25D366" />
            <h3>Integração Fácil</h3>
            <p>
              Adicione nosso feed ao seu grupo do WhatsApp sem complicações e comece a monetizar imediatamente.
            </p>
          </div>
          <div className="feature-item">
            <FaChartLine size={64} color="#25D366" />
            <h3>Rastreamento Preciso</h3>
            <p>
              Acompanhe cliques e conversões com relatórios detalhados para maximizar suas comissões.
            </p>
          </div>
          <div className="feature-item">
            <FaRobot size={64} color="#25D366" />
            <h3>Automatização de Promoções</h3>
            <p>
              Programe seu feed de promoções e deixe a Brazfy cuidar de tudo para você.
            </p>
          </div>
        </div>
        <div className="features-cta">
          <button className="cta-primary">Descubra mais recursos</button>
        </div>
      </section>

      {/* 4. Seção Preço */}
      <section className="pricing" id="pricing">
        <div className="container pricing-container">
          <h2>Sem Custos para Você</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <FaMoneyBillWave size={64} color="#25D366" />
              <h3>Gratuito</h3>
              <p>
                Utilize Brazfy sem mensalidades ou taxas. É 100% grátis para você!
              </p>
            </div>
            <div className="pricing-card">
              <FaHandshake size={64} color="#25D366" />
              <h3>Comissões sobre Vendas</h3>
              <p>
                Nós ganhamos comissões apenas sobre as vendas realizadas. Você não paga nada.
              </p>
            </div>
            <div className="pricing-card">
              <FaCheckCircle size={64} color="#25D366" />
              <h3>Transparência Total</h3>
              <p>
                Sem custos ocultos – você tem controle total e transparência em todos os processos.
              </p>
            </div>
          </div>
          <div className="pricing-cta">
            <button className="cta-primary">Cadastre-se Gratuitamente</button>
          </div>
        </div>
      </section>

      {/* 5. Seção Contato */}
      <section className="contact" id="contact">
        <div className="container contact-container">
          <div className="contact-card">
            <h2>Entre em Contato</h2>
            <p>
              Quer saber mais? Clique no botão abaixo e fale conosco para descobrir como Brazfy pode transformar o seu grupo.
            </p>
            <button className="contact-button">Fale Conosco</button>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="homepage-footer">
        <div className="container footer-container">
          <p>&copy; 2025 Brazfy. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;

