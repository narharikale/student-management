import { useState, useEffect } from "react";
import axios from "axios";
import { Student } from "@/types/student";

const API_BASE_URL = "http://localhost:5001";

const useStudentApi = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const showToast = (message: string, type: "success" | "error") => {
    console.log(message, type);
  };

  const getStudents = async () => {
    console.log("getStudents running");
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/api/students`);
      const data = response.data as { data: Student[] };
      console.log(data.data, "data from getstudents")
      setStudents(data.data);
      console.log(students, "students from state")
    } catch (err) {
      setError(err as Error);
      showToast("Failed to fetch students", "error");
    } finally {
      setLoading(false);
    }
  };

  const createStudent = async (student: Student) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/students`, student);
      const newStudent = response.data as Student;
      setStudents([...students, newStudent]);
      showToast("Student created successfully", "success");
    } catch (err) {
      setError(err as Error);
      showToast("Failed to create student", "error");
    } finally {
      setLoading(false);
    }
  };

  const updateStudent = async (id: string, student: Student) => {
    setLoading(true);
    try {
      const response = await axios.put(`${API_BASE_URL}/api/students/${id}`, student);
      const updatedStudent = response.data as Student;
      console.log(updatedStudent, "updatedStudent");
      
      showToast("Student updated successfully", "success");
    } catch (err) {
      setError(err as Error);
      showToast("Failed to update student", "error");
    } finally {
      setLoading(false);
    }
  };

  const deleteStudent = async (id: string) => {
    setLoading(true);
    try {
      await axios.delete(`${API_BASE_URL}/api/students/${id}`);
      
      showToast("Student deleted successfully", "success");
    } catch (err) {
      setError(err as Error);
      showToast("Failed to delete student", "error");
    } finally {
      setLoading(false);
    }
  };
  
    
  return {
    students,
    loading,
    error,
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent,
  };
};

export default useStudentApi;