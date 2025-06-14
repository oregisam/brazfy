// src/pages/DynamicChat.js
import React, { useState, useEffect, useRef } from 'react';
import { FaMicrophone, FaPaperPlane } from 'react-icons/fa';
import DOMPurify from 'dompurify';
import './DynamicChat.css';

const getCurrentTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

// 20 promoções reais simuladas, com link curto: https://bzfy.link/xxxx
const messagesData = [
  `🪥 Oral-B Escova de Dente 5 Ações Carvão 4 Unidades<br>🔥 R$ 29,90 à vista<br><br>🛍 Compre aqui: <span style="color: #0b93f6;">https://bzfy.link/escov01</span>`,
  `🍔 Burger King Delícia! 🍟 Combo Super Econômico!<br>Burger King Whopper + Batata + Bebida<br>🔥 R$ 19,90 à vista<br><br>🛒 Peça agora: <span style="color: #0b93f6;">https://bzfy.link/bk001</span>`,
  `🍫 Barra de Chocolate Lindt 70% Cacau 100g<br>Chocolate Suíço Premium<br>�� R$ 14,90<br><br>🛍 Adquira: <span style="color: #0b93f6;">https://bzfy.link/lindt70</span>`,
  `💻 Notebook ASUS 15.6" Core i5 8GB RAM<br>Perfeito para estudos e trabalho!<br>🔥 R$ 2.399,00<br><br>�� Confira: <span style="color: #0b93f6;">https://bzfy.link/asus15</span>`,
  `👟 Tênis Nike AirMax Running<br>Conforto e estilo para o seu dia a dia<br>🔥 R$ 299,90<br><br>🛍 Veja mais: <span style="color: #0b93f6;">https://bzfy.link/nikeRun</span>`,
  `📱 Smartphone Samsung Galaxy S20<br>Tela 6.2", 128GB<br>🔥 R$ 1.999,00<br><br>🛒 Garanta já: <span style="color: #0b93f6;">https://bzfy.link/galS20</span>`,
  `🐱 Areia Sanitária para Gatos 4kg<br>Super absorção, sem odor<br>🔥 R$ 25,90<br><br>🛍 Comprar: <span style="color: #0b93f6;">https://bzfy.link/gato4kg</span>`,
  `🔥 Air Fryer Philips Viva<br>Prepare alimentos saudáveis e crocantes<br>🔥 R$ 399,90<br><br>🛒 Peça agora: <span style="color: #0b93f6;">https://bzfy.link/philAF</span>`,
  `🌱 Terra Adubada para Plantas 10kg<br>Ideal para hortas e jardins<br>🔥 R$ 19,90<br><br>🛍 Mais detalhes: <span style="color: #0b93f6;">https://bzfy.link/terra10</span>`,
  `📺 Smart TV LG 50" 4K<br>Com Wi-Fi e Inteligência Artificial<br>🔥 R$ 2.499,00<br><br>🛒 Confira: <span style="color: #0b93f6;">https://bzfy.link/lg50</span>`,
  `🥩 Churrasqueira Elétrica Mondial<br>Compacta, fácil de limpar!<br>🔥 R$ 129,90<br><br>🛍 Garanta: <span style="color: #0b93f6;">https://bzfy.link/churrM</span>`,
  `🎮 Console PlayStation 5<br>Edição Standard, DualSense incluso<br>🔥 R$ 4.399,00<br><br>🛒 Compre agora: <span style="color: #0b93f6;">https://bzfy.link/ps5std</span>`,
  `📸 Câmera Canon EOS Rebel T7<br>Kit com lente 18-55mm<br>🔥 R$ 2.199,00<br><br>🛍 Confira: <span style="color: #0b93f6;">https://bzfy.link/canonT7</span>`,
  `🔥 Fone Bluetooth Xiaomi Redmi Airdots<br>Som de qualidade e bateria duradoura<br>🔥 R$ 99,00<br><br>🛒 Pegue aqui: <span style="color: #0b93f6;">https://bzfy.link/redmiX</span>`,
  `🧸 Pelúcia Gigante Ursinho 1m<br>Presente fofo para quem você ama<br>🔥 R$ 89,90<br><br>🛍 Adquira: <span style="color: #0b93f6;">https://bzfy.link/peluc1m</span>`,
  `💡 Lâmpada Inteligente Wi-Fi<br>Controle por app e voz<br>🔥 R$ 49,90<br><br>🛒 Veja agora: <span style="color: #0b93f6;">https://bzfy.link/lampWifi</span>`,
  `🔌 Carregador Veicular Turbo 2 USB<br>Carregue rapidamente seus dispositivos<br>🔥 R$ 39,90<br><br>🛍 Garanta: <span style="color: #0b93f6;">https://bzfy.link/carTur2</span>`,
  `🪑 Cadeira Gamer RGB<br>Conforto e estilo para longas partidas<br>🔥 R$ 899,90<br><br>🛒 Pegue aqui: <span style="color: #0b93f6;">https://bzfy.link/cadRGB</span>`,
  `☕ Cafeteira Nespresso Essenza Mini<br>Cafés especiais em casa<br>🔥 R$ 349,00<br><br>🛍 Compre agora: <span style="color: #0b93f6;">https://bzfy.link/essMini</span>`,
  `📖 Box Harry Potter (7 Livros)<br>Edição completa em português<br>🔥 R$ 149,90<br><br>🛒 Confira: <span style="color: #0b93f6;">https://bzfy.link/hpBox7</span>`
];

function DynamicChat() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const containerRef = useRef(null);
  const indexRef = useRef(0);

  const maxMessages = 4; // Exibimos até 4 mensagens

  useEffect(() => {
    const interval = setInterval(() => {
      const newMsg = {
        html: messagesData[indexRef.current],
        time: getCurrentTime()
      };

      setMessages(prev => {
        const updated = [...prev, newMsg];
        // Se exceder 4, remove a mais antiga
        if (updated.length > maxMessages) {
          updated.shift();
        }
        return updated;
      });

      indexRef.current = (indexRef.current + 1) % messagesData.length;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (inputText.trim() !== '') {
      const userMsg = {
        html: inputText.replace(/\n/g, '<br>'),
        time: getCurrentTime()
      };
      setMessages(prev => {
        const updated = [...prev, userMsg];
        if (updated.length > maxMessages) {
          updated.shift();
        }
        return updated;
      });
      setInputText('');
    }
  };

  return (
    <div className="chat-window-dynamic">
      <div className="chat-header">
        <span className="back-arrow">&#8592;</span>
        <span className="chat-title">Grupo de Promoções</span>
      </div>
      <div className="chat-messages-dynamic" ref={containerRef}>
        {messages.map((msg, index) => {
          const sanitized = DOMPurify.sanitize(msg.html);
          return (
            <div key={index} className="chat-message">
              <div
                className="message-text"
                dangerouslySetInnerHTML={{ __html: sanitized }}
              />
              <span className="message-time">{msg.time}</span>
            </div>
          );
        })}
      </div>
      <div className="chat-footer-dynamic">
        <input
          type="text"
          placeholder="Digite uma mensagem"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="audio-button">
          <FaMicrophone />
        </button>
        <button className="send-button" onClick={handleSend}>
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}

export default DynamicChat;

