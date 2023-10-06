import React, { useState } from 'react';

function Button() {
  const [count, setCount] = useState(0);
  const [bookList, setBookList] = useState([]);
  const libros = [
    { id: 1, Libro: 'Todo se desmorona', autor: 'Chinua Achebe', año: 1958 },
    { id: 2, Libro: 'Divina comedia', autor: 'Dante Alighieri', año: 1265 },
    { id: 3, Libro: 'Orgullo y prejuicio', autor: 'Jane Austen', año: 1813 },
    { id: 4, Libro: 'El extranjero', autor: 'Albert Camus', año: 1942 },
    { id: 5, Libro: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', año: 1605 },
    { id: 6, Libro: 'Crimen y castigo', autor: 'Fiódor Dostoievski', año: 1886 },
    { id: 7, Libro: 'El hombre invisible', autor: 'Ralph Ellison', año: 1952 },
    { id: 8, Libro: 'Almas muertas', autor: 'Nikolai Gogol', año: 1842 },
    { id: 9, Libro: 'Casa de muñecas', autor: 'Henrik Ibsen', año: 1879 },
    { id: 10, Libro: 'La historia', autor: 'Elsa Morante', año: 1974 },
  ];

  const handleClick = () => {
    if (bookList.length < 10) {
      setCount(count + 1);
      const newBook = {
        id: count + 1,
        title: libros[count].Libro,
        author: libros[count].autor,
        year: libros[count].año,
      };
      setBookList([...bookList, newBook]);
    } else {
      alert('Solo se pueden agregar hasta de 10 Libros.');
    }
  };

  const handleClearOne = () => {
    if (bookList.length > 0) {
      const newList = [...bookList];
      newList.pop();
      setBookList(newList);
    }
  };

  return (
    <div>
      <div className="header">
        <div className="header-title">
          <h1>Título de la página</h1>
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleClick}>Agregar 1 a la lista</button>
        <button onClick={handleClearOne}>Quitar 1 a la lista</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID (posición)</th>
              <th>Título</th>
              <th>Autor</th>
              <th>Año</th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((book, index) => (
              <tr key={index}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Button;
