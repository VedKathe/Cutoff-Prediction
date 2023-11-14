"use client";
import React, { useState } from "react";
import styles from "./main.module.css";

export default function Main() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Mock data for the table
  const tableData = [
    { id: 1, name: "John Doe", age: 25, city: "New York" },
    { id: 2, name: "Jane Doe", age: 30, city: "Los Angeles" },
    { id: 1, name: "John Doe", age: 25, city: "New York" },
    { id: 2, name: "Jane Doe", age: 30, city: "Los Angeles" },
    { id: 1, name: "John Doe", age: 25, city: "New York" },
    { id: 2, name: "Jane Doe", age: 30, city: "Los Angeles" },
    { id: 1, name: "John Doe", age: 25, city: "New York" },
    { id: 2, name: "Jane Doe", age: 30, city: "Los Angeles" },
    { id: 1, name: "John Doe", age: 25, city: "New York" },
    { id: 2, name: "Jane Doe", age: 30, city: "Los Angeles" },
    // Add more data as needed
  ];

  // Filter the table data based on the search term
  const filteredData = tableData.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Unlock Your Future!</h1>
          <p>Find the Perfect College</p>
        </div>
        <div className={styles.search}>
          <input
            className={styles.searchbar}
            type="text"
            placeholder="Enter Persent.."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className={styles["table"]}>
          <table className={styles["custom-table"]}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
