"use client";
import React, { useEffect, useState } from "react";
import styles from "./main.module.css";

export default function Main() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  
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

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getCollages');
        if (response.ok) {
          const result = await response.json();
          setData(result);
          console.log(data);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
                <th>Collage Name</th>
                <th>University</th>
                <th>Zip Code</th>
                <th>CutOff</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.collage_name}>
                  <td>{item.collage_name}</td>
                  <td>{item.university}</td>
                  <td>{item.zip_code}</td>
                  <td>{item.cs_department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
