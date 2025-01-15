import { useEffect } from "react";
import useStudentApi from "@/hooks/useStudentApi";
import StudentCard from "../molecules/StudentCard";
import { Input } from "../ui/input";

const StudentList = () => {
  const { students, getStudents, loading } = useStudentApi();

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <Input type="text" placeholder="Search by name..." />
      {loading ? (
        <p>Loading...</p>
      ) : (
        students?.map((student) => {
          return <StudentCard key={student.id} {...student} />;
        })
      )}
    </div>
  );
};

export default StudentList;
