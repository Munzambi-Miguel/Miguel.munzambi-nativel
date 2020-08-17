import React from 'react';
import {Link} from 'react-router-dom';

import heroImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

import {FiLogIn} from 'react-icons/fi'

import './style.css';


export default function Login() {
    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="logo" />
                <form>
                    <h1>Faça seu login</h1>

                    <input placeholder="Seu ID" />
                    <button type="submit" className="button">Entrar</button>
                    <Link to="/Registro" className="back-link">
                        <FiLogIn size="16" color="#e02041" />
                        Não tenho Cadastro
                    </Link>
                </form>
            </section>
            <img src={heroImg} alt="Heroes" />
        </div>
    );
}
