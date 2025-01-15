import { useEffect, useState } from "react";
import useStudentApi from "@/hooks/useStudentApi";
import StudentCard from "../molecules/StudentCard";
import { Input } from "../ui/input";

const StudentList = () => {
  const { students, getStudents, loading } = useStudentApi();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getStudents();
  }, []);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-4">
      <Input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        filteredStudents.map((student) => {
          return <StudentCard key={student.id} {...student} />;
        })
      )}
    </div>
  );
};

export default StudentList;
