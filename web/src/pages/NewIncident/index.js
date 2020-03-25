import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoIgm from '../../assets/logo.svg';

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoIgm} alt="Be The Hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para Home
          </Link>
        </section>
        <form>
          <input placeholder="Títuto do caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor em reais" />

          <button className="red-button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
