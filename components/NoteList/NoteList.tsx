import css from './NoteList.module.css';
import type { Tags } from '../../types/note';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteNote } from '../../lib/api';
import Link from 'next/link';


interface NoteListProps {
  tags: Tags[];
}

export default function NoteList({ tags }: NoteListProps) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tags'] });
    },
  });

  const handleDelete = (id: string) => {
    mutation.mutate(id);
  };

  if (tags.length === 0) {
    return <p className={css.empty}>No notes found</p>;
  }

  return (
    <ul className={css.list}>
      {tags.map(({ id, title, content, tag }) => (
        <li key={id} className={css.listItem}>
          <h2 className={css.title}>{title}</h2>
          <p className={css.content}>{content}</p>
          <div className={css.footer}>
            <span className={css.tag}>{tag}</span>

          <Link href={`/tags/${id}`} className={css.link}>View details</Link>
          
            <button className={css.button} onClick={() => handleDelete(id)} disabled={mutation.isPending}
> {mutation.isPending ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}



