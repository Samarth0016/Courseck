"use client"

import { Course } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
        return (
            <Button 
                variant="ghost" 
                onClick={ () => 
                    column.toggleSorting(column.getIsSorted()==="asc")
                }
            >
                Title 
                <ArrowUpDown/>
            </Button>
        )
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({row}) => {
        const price = parseFloat(row.getValue("price") || "0");
        const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "INR"
        }).format(price);

        return <div>{formatted}</div>
    }
  },
  {
    accessorKey: "isPublished",
    header: "Published",
    cell: ({row}) => {
        const isPublished = row.getValue("isPublished") || false;

        return (
            <Badge className={cn(
                "bg-slate-500",
                isPublished && "bg-sky-700"
            )}> 
                {isPublished ? "Published" : "Draft"}
            </Badge>
        )
    }
  },
  {
    id: "actions",
    cell: ( { row }) => {
        const { id } = row.original;

        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-4 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="w-4 h-4"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="end"
                >
                    <Link href={`/teacher/courses/${id}`}>
                        <DropdownMenuItem>
                            <Pencil className="h-4 w-4 mr-2">
                            </Pencil>
                            Edit
                        </DropdownMenuItem>
                    </Link>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }
  }
]
