import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const studentData = [
  {
    'id':1,
    "name": "Alice Johnson",
    "age": "14",
    "studentClass": "9A",
    "phone": "123342356"
  },
  {
    'id':2,
    "name": "Bob Smith",
    "age": "15",
    "studentClass": "10B",
    "phone": "8998879809"
  },
  {

    'id':3,
    "name": "Charlie Davis",
    "age": "13",
    "studentClass": "8C",
    "phone": "1234567896"
  },
  {
    'id':4,
    "name": "Diana King",
    "age": "16",
    "studentClass": "11A",
    "phone": "9076756455"
  },
 
]
