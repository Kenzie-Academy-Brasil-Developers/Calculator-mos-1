import './style.css'

export const TotalMoney = ({listTransactions})=>{
    
    const valueExit =listTransactions
    .reduce((acumulador, valorCorrent)=>{return acumulador + valorCorrent.value},0)

    return(
        <section className='section-total'>
             <div>
                 <h2> Valor total:</h2>
                 <p>{valueExit.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
             </div>
             <p>O valor se refere ao saldo</p>
        </section>
    )
}
    
    

   
