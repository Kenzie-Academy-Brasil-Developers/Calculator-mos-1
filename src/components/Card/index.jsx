import './style.css'

export const Card = ({transaction,index,listTransactions,setListTransactions})=>{

        function deleteTrasanction(itemDelete){
            const arrayFilter = listTransactions.filter((item)=>{
                return item !== itemDelete
            })
            setListTransactions(arrayFilter)
        }

        return(
                 
            <li key={index} className={transaction.type==='exit'?'list-card boder-left-exit':'list-card boder-left-start'}>
                <div>
                    <h2>{transaction.description}</h2>
    
                    <p>{transaction.type === 'exit'? 'Despesa' : 'Entrada'}</p>
                </div>
    
                <p>{transaction.type === 'exit'?(transaction.value *-1).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}): (transaction.value).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                <button onClick={()=>deleteTrasanction(transaction)} className='div-img'/>
    
            </li>
                         
        )
}