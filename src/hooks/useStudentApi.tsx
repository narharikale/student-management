import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import axios from "axios";
export type Student = {
  name: string;
  age: number;
  class: string;
  phonenumber: string;
};

export interface Studentwithid extends Student {
  id: string;
}

interface StudentApiContextType {
  students: Studentwithid[];
  loading: boolean;
  error: Error | null;
  getStudents: () => Promise<void>;
  createStudent: (student: Student) => Promise<void>;
  updateStudent: (
    id: string,
    student: Studentwithid
  ) => Promise<Studentwithid | undefined>;
  deleteStudent: (id: string) => Promise<void>;
  setStudents: React.Dispatch<React.SetStateAction<Studentwithid[]>>;
}

const StudentApiContext = createContext<StudentApiContextType | undefined>(
  undefined
);

// cons= import.meta.env.VITE_API_BASE_URL || '';

export const StudentApiProvider = ({ children }: { children: ReactNode }) => {
  const [students, setStudents] = useState<Studentwithid[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const showToast = (message: string, type: "success" | "error") => {
    console.log(message, type);
  };

  const getStudents = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/students`);
      const data = response.data as { data: Studentwithid[] };
      setStudents(data.data);
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
      const response = await axios.post(`/api/students`, student);
      const newStudent = (response.data as { data: Studentwithid }).data;
      setStudents([newStudent, ...students]);
      showToast("Student created successfully", "success");
    } catch (err) {
      setError(err as Error);
      showToast("Failed to create student", "error");
    } finally {
      setLoading(false);
    }
  };

  const updateStudent = async (id: string, student: Studentwithid) => {
    setLoading(true);
    try {
      const response = await axios.put(`/api/students/${id}`, student);
      const updatedStudent = (response.data as { data: Studentwithid }).data;

      // Update the students state directly in the hook
      setStudents((currentStudents) =>
        currentStudents.map((s) =>
          s.id === updatedStudent.id ? updatedStudent : s
        )
      );

      showToast("Student updated successfully", "success");
      return updatedStudent;
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
      await axios.delete(`/api/students/${id}`);
      setStudents((currentStudents) =>
        currentStudents.filter((s) => s.id !== id)
      );

      showToast("Student deleted successfully", "success");
    } catch (err) {
      setError(err as Error);
      showToast("Failed to delete student", "error");
    } finally {
      setLoading(false);
    }
  };

  const value = {
    students,
    loading,
    error,
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent,
    setStudents,
  };

  return (
    <StudentApiContext.Provider value={value}>
      {children}
    </StudentApiContext.Provider>
  );
};

export const useStudentApi = () => {
  const context = useContext(StudentApiContext);
  if (context === undefined) {
    throw new Error("useStudentApi must be used within a StudentApiProvider");
  }
  return context;
};

export default useStudentApi;
