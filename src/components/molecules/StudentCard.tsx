import { Student } from "@/types/student";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

const StudentCard = (data: Student) => {
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
      <CardFooter>
        <Button type="button">Edit</Button>
        <Button type="button">Delete</Button>
      </CardFooter>
    </Card>
  );
};

export default StudentCard;
