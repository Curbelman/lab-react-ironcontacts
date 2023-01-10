import './App.css';
import contactsList from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts] = useState(contactsList.slice(0, 5));

return (
  <div className="App">

    <table>
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
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
        </tr>
      );
    })}
    </tbody>
  </table>

  </div>
)
}

export default App;
