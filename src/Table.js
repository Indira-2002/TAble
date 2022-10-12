import React from "react";
function Hooks() {
  const items = [
    { sid: "101", name: "Krishna", Course: "CSE" },
    { sid: "102", name: "Abc", Course: "CSE" },
    { sid: "103", name: "bcd", Course: "IT" },
    { sid: "104", name: "Abcd", Course: "ECE" },
    { sid: "105", name: "Abce", Course: "CSE" },
    { sid: "106", name: "Abci", Course: "IT" }
  ];
  return (
    <div>
      <table border="4" cellpadding="10px">
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.sid}</td>
            <td>{item.name}</td>
            <td>{item.Course}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default Hooks;
