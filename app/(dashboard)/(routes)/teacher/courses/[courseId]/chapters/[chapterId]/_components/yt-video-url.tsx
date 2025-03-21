"use client";
import * as z from "zod";
import axios from "axios"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Pencil } from "lucide-react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface YtVideoFormProps{
    initialData: {
        videoUrl: string;
    };
    courseId: string;
    chapterId: string;
}

const formSchema = z.object({
    videoUrl: z.string().min(1),
    
});

const YtVideoForm =  ({
    initialData,
    courseId,
    chapterId
}: YtVideoFormProps) => {

    const [isEditing, setIsEditing] = useState(false);
    const toggleEdit = () => setIsEditing((current) =>!current);

    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData,
    });
    
    const { isSubmitting, isValid } = form.formState;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try{
            //console.log("not patch");
            await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}`, values);
            toast.success("Video updated");
            toggleEdit();
            router.refresh();
        } catch{
            toast.error("something went wrong");
        }
    }

    return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Chapter video url
        <Button onClick={toggleEdit} variant="ghost">
            {isEditing ?(
                <>Cancel</>
            ) : (
                <>
                <Pencil className="h-4 w-4 mr-2"/>
                Edit Video
                </>
            )}
            
        </Button>
      </div>
      {!isEditing && (
        <p className="text-sm mt-2">
            {initialData.videoUrl}
        </p>
      ) }
      {isEditing && (
        <Form {...form}>
            <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 mt-4"
            >
                <FormField
                    control={form.control}
                    name="videoUrl"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    disabled = {isSubmitting}
                                    placeholder="upload youtube video Url"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage></FormMessage>
                        </FormItem>
                    )}
                ></FormField>
                <div className="flex items-center gap-x-2">
                    <Button
                        disabled={!isValid || isSubmitting}
                        type="submit"
                    >
                        Save
                    </Button>
                </div>
            </form>
        </Form>
      ) }
    </div>
  )
}

export default YtVideoForm
