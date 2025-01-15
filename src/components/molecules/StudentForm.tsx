import { useForm } from "react-hook-form";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormField,
  Form,
  FormMessage,
} from "../ui/form";
import type { Student } from "../../types/student";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import useStudentApi from "@/hooks/useStudentApi";

const EditStudentForm = () => {
  const { createStudent, loading } = useStudentApi();
  const form = useForm<Student>({
    defaultValues: {
      name: "",
      age: 0,
      class: "",
      phonenumber: "",
    },
  });

  const submitHandler = (values: Student) => {
    createStudent(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)}>
        <FormField
          control={form.control}
          name="name"
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter your age" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="class"
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Class</FormLabel>
              <FormControl>
                <Input placeholder="Enter your class" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phonenumber"
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter your phone number"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="mt-3 bg-blue-600" disabled={loading}>
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default EditStudentForm;
