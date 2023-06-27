import './App.css'
import React from 'react'
import { BrowserRouter as Router } from  'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';



import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
//fazendo assim eu passo pra toda minha aplicação o objeto data do meu dataContext.js
import  DataContext, { data }  from '../data/DataContext'
import Store from '../data/Store'
import { useState } from 'react'

const App = props => {

    const [state, setState] = useState(data)

    return (
        <Store>
            <DataContext.Provider value={{state, setState}}>
                    <div className="App">
                        <Router>
                            <Menu />
                            <Content />
                        </Router>
                    </div>
            </DataContext.Provider>
        </Store>
    )
}

export default App