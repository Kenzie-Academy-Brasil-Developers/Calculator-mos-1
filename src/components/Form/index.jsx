import { useState } from 'react'
import './style.css'

export const Form = ({listTransactions,setListTransactions})=>{

    const [description,setDescription] = useState ('')
    const [value,setValue] = useState ('')
    const [type,setType] = useState ('prohibited')
    
    function eventForm(event){
        event.preventDefault()

        const transaction = {
            description: description,
            value:type==='exit'? Number(value)*-1: Number(value),
            type:type
        }

        setListTransactions((oldTransictions)=>[...oldTransictions,transaction])
        setDescription('');
        setValue('')
        setType('prohibited')
    }

    return (
     <form onSubmit={eventForm}>
        <section className='section-description'>
            <label htmlFor="description" className='title-1'>Descrição</label>
            <input type='text' value={description} required onChange={event=>setDescription(event.target.value)} placeholder="Digite aqui sua descrição"/>
            <p>Ex: Compra de roupas</p>
        </section>
        <section className='section-value'>
            <div>
                <label htmlFor="value" className='title-1'> Valor</label>
                <input className='input-2' type="number" required value={value} onChange={event=>setValue(event.target.value)} placeholder="1"  />
            </div>
            <div>
                <label className='title-1'> Tipo de valor</label>
                <select name="typeValue" className='input-3' value={type} onChange={event=>setType(event.target.value)}>
                    <option value="prohibited">Entrada</option>
                    <option value="exit">Saída</option>
                </select>
            </div>
        </section>
        <button className='button-form' type="submit">Inserir valor</button>
     </form>
    )
}