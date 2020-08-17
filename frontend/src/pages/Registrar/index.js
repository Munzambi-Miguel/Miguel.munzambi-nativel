import React from 'react';
import { Link } from "react-router-dom";
import { FiArrowDownLeft } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";
import './style.css';

export default function Registrar() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="imagem de logo" />
                    <h1>Cadastro</h1>
                    <p>Faça o seu cadastro, entre na plataforma e ajude a encontrarem os casos da sua ONG.</p>
                    <Link to="/" className="back-link">
                        <FiArrowDownLeft size="16" color="#e02041" />
                        Voltar para login
                    </Link>
                </section>
                <form action="">
                    <input placeholder="Nome completo" />
                    <input placeholder="Email" />
                    <input placeholder="WhatSapp" />

                    <div className="input-group">
                        <input placeholder="cidade" />
                        <input placeholder="UF" style={{ width: 80 }} />
                    </div>

                    <button className="button">Cadastrar</button>

                </form>
            </div>
        </div>
    );
}
