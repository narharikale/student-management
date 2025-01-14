import { useState } from "react";
import { Student } from "@/types/student";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import EditStudentModal from "../organism/EditStudentModal";

const StudentCard = (data: Student) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{data.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Age: {data.age}</p>
        <p>Class: {data.studentClass}</p>
        <p>Phone: {data.phone}</p>
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button
          onClick={() => setModalOpen(true)}
          type="button"
          className="bg-blue-600"
        >
          Edit
        </Button>
        <Button type="button" className="bg-red-600">
          Delete
        </Button>
      </CardFooter>
      <EditStudentModal
        values={data}
        isModalOpen={modalOpen}
        handleModalOpen={setModalOpen}
      ></EditStudentModal>
    </Card>
  );
};

export default StudentCard;
