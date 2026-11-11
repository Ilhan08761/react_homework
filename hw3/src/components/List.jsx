import { useState } from "react";
import "./List.css";

function List() {
  const [people, setPeople] = useState([
    { id: 1, name: "Иван", age: 20 },
    { id: 2, name: "Мария", age: 22 },
    { id: 3, name: "Алексей", age: 21 },
    { id: 4, name: "Марина", age: 19 },
    { id: 5, name: "Даша", age: 23 },
    { id: 6, name: "Глеб", age: 24 },
    { id: 7, name: "Дима", age: 18 },
    { id: 8, name: "Гриша", age: 20 },
    { id: 9, name: "Серафим", age: 21 },
  ]);

  function removePerson(id) {
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
  }

  return (
    <div className="list-container">
      <h2>Список приглашенных ({people.length})</h2>
      {people.length === 0 ? (
        <p className="empty-message">Список приглашенных пуст</p>
      ) : (
        <ul className="people-list">
          {people.map((person) => (
            <li key={person.id} className="person-item">
              <span>
                <strong>{person.name}</strong> — {person.age} лет
              </span>
              <button
                onClick={() => removePerson(person.id)}
                className="delete-btn"
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;
