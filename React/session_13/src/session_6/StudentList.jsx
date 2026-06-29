import React from "react";

const StudentList = () => {
  const studentList = [
    { name: "Aryan", rollNo: 2 },
    { name: "Jay", rollNo: 1 },
    { name: "Raj", rollNo: 3 },
    { name: "Karan", rollNo: 5 },
    { name: "Vinod", rollNo: 4 },
  ];
  return (
    <div>
      <h1>Student List</h1>

      <ol>
        {studentList.length > 0 ? (
          studentList.map((s) => {
            return <li key={s.rollNo}>{s.name}</li>;
          })
        ) : (
          <p>No student found</p>
        )}
      </ol>
    </div>
  );
};

export default StudentList;
