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

  const alphabeticalSort = () => {
    const alphaSortedContacts = [
      ...contacts.sort((a, b) => {
        const contactA = a.name.toUpperCase();
        const contactB = b.name.toLocaleUpperCase();
        if (contactA < contactB) {
          return -1;
        }
        if (contactA > contactB){
          return 1;
        }
        return 0;
      }),
    ];
    setContacts(alphaSortedContacts);
  };

  const popularitySort = () => {
    const popSortedContacts = [
      ...contacts.sort((a, b) => {
        return b.popularity - a.popularity;
      }),
    ];
    setContacts(popSortedContacts);
  };

  const deleteContact = (index) => {
    const removedContact = [...contacts];
    removedContact.splice(index, 1);

    setContacts(removedContact);
};

return (
  <div className="App">
  <h1>IronContacts</h1>

<button onClick={() => addNewRandomContact()}>Add Random Contact to list</button>
<div>
  <button onClick={() => alphabeticalSort()}>Sort by Name</button>
  <button onClick={() => popularitySort()}>Sort by Popularity</button>
</div>

    <table>
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won Oscar</th>
        <th>Won Emmy</th>
        <th>Delete</th>
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
          <td><button onClick={() => deleteContact(i)}>Delete</button></td>
        </tr>
      );
    })}
    </tbody>
  </table>

  </div>
)
}

export default App;
