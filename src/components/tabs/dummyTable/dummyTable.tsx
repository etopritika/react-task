import React from "react";
import "./dummyTable.css";

const dummyTable = () => {
  return (
    <section>
      <h2>DummyTable</h2>
      <table>
        <caption>List of users</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ivan</td>
            <td>Petrov</td>
            <td>ivan@example.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Maria</td>
            <td>Ivanova</td>
            <td>maria@example.com</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Petro</td>
            <td>Sidorov</td>
            <td>petro@example.com</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default dummyTable;
