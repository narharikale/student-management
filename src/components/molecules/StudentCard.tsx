import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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

import useStudentApi from "@/hooks/useStudentApi";

import EditStudentModal from "../organism/EditStudentModal";

const StudentCard = (data: Student) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { deleteStudent, loading, getStudents } = useStudentApi();

  const handleDelete = async () => {
    await deleteStudent(data.id);
    await getStudents();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{data.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Age: {data.age}</p>
        <p>Class: {data.class}</p>
        <p>Phone: {data.phonenumber}</p>
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button
          onClick={() => setModalOpen(true)}
          type="button"
          className="bg-blue-600"
          disabled={loading}
        >
          Edit
        </Button>
        <Button
          onClick={handleDelete}
          type="button"
          className="bg-red-600"
          disabled={loading}
        >
          Delete
        </Button>
      </CardFooter>
      <EditStudentModal
        values={data}
        isModalOpen={modalOpen}
        handleModalOpen={setModalOpen}
        // onSave={handleEdit}
      ></EditStudentModal>
      <ToastContainer />
    </Card>
  );
};

export default StudentCard;
