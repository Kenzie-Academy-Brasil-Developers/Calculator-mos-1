
import './App.css';
import { useState } from 'react';
import { Form } from './components/Form';
import { TotalMoney } from './components/TotalMoney';
import { List } from './components/List';
import { Header } from './components/Header';
import { Init } from './components/Init';



function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false)

  const [listTransactions,setListTransactions] = useState([])

  function Start(){
    return setIsLoggedIn(true)
  }

  function Logout(){
    return setIsLoggedIn(false)
  }


  return (
    isLoggedIn === false?
    (<div>
      <Init Start={Start} Logout={Logout}/>
      </div>
    )
    
    :
    <div className="App">
      <header className='header-page'>
        <Header Logout={Logout}/>
      </header>
      <main className="App-main">
       <div>
         <section className='section-value-init'>
           <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
           {
            listTransactions.length !== 0 && <TotalMoney listTransactions={listTransactions}/>
           }
          
         </section>
         <List listTransactions={listTransactions} setListTransactions={setListTransactions}/>
       </div>
      </main>
    </div>
  );
}

export default App;
