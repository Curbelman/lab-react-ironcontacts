import './App.css';
import contactsList from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsList.slice(0, 5));
  const otherContacts = contactsList.slice(5,contactsList.length);

  const addNewRandomContact = () => {
    let randomIndex = Math.floor(Math.random()*otherContacts.length);

    let randomContact = otherContacts.splice(randomIndex,1);

    setContacts([...contacts, randomContact[0]]);
  };

return (
  <div className="App">
  <h1>IronContacts</h1>

<button onClick={() => addNewRandomContact()}>Add Random Contact to list</button>

    <table>
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won Oscar</th>
        <th>Won Emmy</th>
      </tr>
    </thead>
    <tbody>
    {contacts.map((eachContact, i) => {
      return (
        <tr key={i}>
          <td>
            <img src={eachContact.pictureUrl} alt="contact profile" height="200px"/>
          </td>
          <td>{eachContact.name}</td>
          <td>{eachContact.popularity}</td>
          {eachContact.wonOscar ? <td>🏆</td> : <td></td>}
          {eachContact.wonEmmy ? <td>🏆</td> : <td></td>}
        </tr>
      );
    })}
    </tbody>
  </table>

  </div>
)
}

export default App;
