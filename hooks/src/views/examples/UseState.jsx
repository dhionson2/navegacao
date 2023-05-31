import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    const [count,setCount] = useState(0)
    const [name, setName] = useState("Inicial")

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"/>
                <SectionTitle title="Exemplo #01"/>
                <div className="center">
                    <span className="text">{count}</span>
                    <div>
                        <button className="btn" onClick={() => setCount(count - 1)}>- 1</button>
                        <button onClick={() => setCount(count + 1)} className="btn">+ 1</button>
                        <button onClick={() => setCount(currect => currect +1000)} className="btn">+ 1000</button>
                    </div>
                </div>

                <SectionTitle title="Exemplo #02"/>
                <input type="text" className="input" 
                value={name} onChange={e => setName(console.log(e.target.value))}/>
        </div>
    )
}

export default UseState
