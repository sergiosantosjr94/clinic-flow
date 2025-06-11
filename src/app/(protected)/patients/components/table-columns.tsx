"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Ellipsis, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { patientsTable } from "@/db/schema";
type Patient = typeof patientsTable.$inferSelect;

export const columns: ColumnDef<Patient>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: "Name",
  },
  {
    id: "email",
    accessorKey: "email",
    header: "Email",
  },
  {
    id: "phoneNumber",
    accessorKey: "phoneNumber",
    header: "Phone Number",
    cell: ({ row }) => {
      const phoneNumber = row.original.phoneNumber;
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
    },
  },
  {
    id: "sex",
    accessorKey: "sex",
    header: "Gender",
    cell: ({ row }) => {
      const sex = row.original.sex;
      return sex === "male" ? "Male" : "Female";
    },
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const patient = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild onClick={() => console.log(patient.id)}>
            <Button variant="ghost" size="icon">
              <Ellipsis />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{patient.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button variant="ghost" size="sm">
                <Edit />
                Edit
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button variant="ghost" size="sm">
                <Trash />
                Delete
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
