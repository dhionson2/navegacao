import React from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { Link } from 'react-router-dom'

const Home = props => (
    <div className="Home">
        <PageTitle
            title="Login"
            subtitle="Ou cadastre-se para logar" />
            <div>
                <div>
                    <div>
                        <label >E-mail</label>
                    </div>
                    <div>
                        <textarea></textarea>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Senha</label>
                    </div>
                    <div>
                        <textarea></textarea>
                    </div>
                </div>
                <div>
                <aside>
                    <nav>
                        <ul>
                            <li>
                    
                        <Link to="/cadastro">Cadastre-se aqui</Link>
                            </li>
                        </ul>
                    </nav>
                </aside>
                    
                </div>
                <div>
                    <button>Entrar</button>
                </div>
               

            </div>
    </div>
)

export default Home