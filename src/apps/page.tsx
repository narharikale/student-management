import StudentForm from "@/components/molecules/StudentForm";
import StudentList from "@/components/organism/StudentList";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <main className="mx-auto p-6 min-h-full">
      <h1 className="mb-8 scroll-m-20 text-4xl font-bold tracking-tight">
        Student Management System
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Add New Student</CardTitle>
          </CardHeader>
          <CardContent>
            <StudentForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Student List</CardTitle>
          </CardHeader>
          <CardContent>
            <StudentList />
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Home;
