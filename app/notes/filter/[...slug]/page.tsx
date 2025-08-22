// import { getTags } from "@/lib/api";
// import NoteList from "@/components/NoteList/NoteList";


type Props = {
    params: Promise<{ slug: string[] }>;
};

export default async function NotesByTags ({ params }: Props) {
    const { slug } = await params;
    // const selectedTag = slug?.[0] === 'all' ? undefined : slug?.[0];
    // const response = await getTags();
    return (
<div>
    <h1>NotedByTags</h1>
    <p>Current path: {slug?.join(" / ") || "home"}</p>
{/* {response?.length > 0 && <NoteList tags={response}/>} */}
</div>
    );
}