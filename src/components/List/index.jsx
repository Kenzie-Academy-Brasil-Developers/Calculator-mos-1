import { Card } from "../Card"
import './style.css'
import NoCard from  '../../img/NoCard.svg'
import { useState } from "react"


export const List = ({listTransactions, setListTransactions})=>{

    const [moneyFilter,setMoneyFilter] = useState('all')

    const arrayRender = moneyFilter === 'all'? [...listTransactions]: (listTransactions.filter((item)=>{
        return item.type === moneyFilter
    }))

     return(
        <div className="div-father">
            <section className="header-list">
                <h2>Resumo financeiro</h2>
                <div>
                    <button onClick={()=>setMoneyFilter('all')} className={moneyFilter==='all'? 'button-pink':'button-all'}>Todos</button>
                    <button onClick={()=>setMoneyFilter('prohibited')} className={moneyFilter==='prohibited'? 'button-pink':'button-all'}>Entradas</button>
                    <button onClick={()=>setMoneyFilter('exit')} className={moneyFilter==='exit'? 'button-pink':'button-all'}>Despesas</button>
                </div>
            </section>
            <section className="main-list">
                {
                     arrayRender.length !== 0?
                     
                      (arrayRender.map((transaction, index)=> 
                    <ul>
                        <Card transaction={transaction} setListTransactions={setListTransactions} listTransactions={listTransactions} index={index}/>
                    </ul>
                    ))
                     :
                      <div className="no-item">
                        <img src={NoCard} alt="" />
                        <img src={NoCard} alt="" />
                        <img src={NoCard} alt="" />
                      </div>
                }
            </section>
        </div>
     )
}