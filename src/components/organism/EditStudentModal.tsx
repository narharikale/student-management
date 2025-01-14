import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Student } from "@/types/student";

type Props = {
  handleModalOpen: (open: boolean) => void;
  isModalOpen: boolean;
  values: Student;
};

const EditStudentModal = ({ isModalOpen, handleModalOpen, values }: Props) => {
  const form = useForm<Student>({ values });

  const submitHandler = (values: Student) => {
    console.log(values, "submit");
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={(open) => handleModalOpen(open)}>
      <DialogContent className="sm:max-w-[425px]" title="edit">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitHandler)}
            className="flex flex-col gap-4"
          >
            <div>
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
                      <Input
                        type="number"
                        placeholder="Enter your age"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="studentClass"
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
                name="phone"
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
            </div>

            <Button
              type="button"
              onClick={() => handleModalOpen(false)}
              variant="secondary"
            >
              Close
            </Button>
            <Button type="submit">Update Changes</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditStudentModal;
