import { studentData } from "@/lib/utils";
import StudentCard from "../molecules/StudentCard";
import { Input } from "../ui/input";

const StudentList = () => {
  return (
    <div className="flex flex-col gap-4">
      <Input type="text" placeholder="Search by name..." />
      {studentData.map((student) => {
        return <StudentCard key={student.id} {...student} />;
      })}
    </div>
  );
};

export default StudentList;
