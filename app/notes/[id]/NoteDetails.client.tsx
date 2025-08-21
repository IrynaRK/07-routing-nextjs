"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import css from "../../page.module.css";
import { useRouter  } from "next/router";

type Props = {
  id: string;
};

const NoteDetailsClient = ({ id }: Props) => { 
  const router = useRouter();

	  const { data: note, isLoading, error } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
    
  });


    const handleGoBack = () => {
      const isSure = confirm('Are you sure?')
      if (isSure) {
        router.back();
      }
    };

  if (isLoading) return <p>Loading...</p>;
  if (error || !note) return <p>Some error..</p>;

  const formattedDate = note.updatedAt
    ? `Updated at: ${note.updatedAt}`
    : `Created at: ${note.createdAt}`;

   

  return (
    <div className={css.container}>
       <button onClick={handleGoBack}>Back</button>
        <div className={css.item}>
      <h2 className={css.header}>{note.title}</h2>
      <p className={css.content}>{note.content}</p>
      <p className={css.data}>{formattedDate}</p>
      </div>
    </div>
  );
};

export default NoteDetailsClient;
