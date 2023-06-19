//import logo from './logo.svg';
import './App.css';
import shopItemsData from './Data.js';

import './clothes.css';
 
function App() {
  return (
    <div className="shop">
      {shopItemsData && shopItemsData.map(record => {
         return(
            <div className="box" key={record.id}>
                  <h4>{record.id}</h4>
                  <br/>
                  <h3>{record.name}</h3> <br/>
                  <img width="220" src={record.pict} alt=""/> <br/>
                  <strong>{record.pict}</strong> <br/>
                 <h2>${record.price}</h2> <br/>
                 <p>{record.desc}</p>
              </div>
            )
        })}
      </div>
      );
}
export default App;   
