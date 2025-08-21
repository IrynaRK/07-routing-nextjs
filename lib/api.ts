import axios from 'axios';
import type { NoteTag } from '../types/note';
import type { FetchNotesResponse } from '../types/api';


axios.defaults.baseURL = "https://notehub-public.goit.study/api";


const getHeaders = () => {
const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
return {
  Authorization: `Bearer ${token}`,
}
}

export const fetchNotes = async (searchText: string, page:number): Promise<FetchNotesResponse> => {
  const response = await axios.get<FetchNotesResponse>('/notes', {
    params: {
      ...(searchText ? { search: searchText } : {}),
      page,
      perPage: 12,
    },
    headers: getHeaders(),
    
  });
  return response.data;
};


export const createNote = async (
  note: { title: string; content: string; tag: NoteTag }
): Promise<Tags> => {
  const response = await axios.post<Tags>(`/notes`, note, { headers: getHeaders() });
  return response.data;
};

export const deleteNote = async (id: string): Promise<Tags> => {
  const response = await axios.delete<Tags>(`/notes/${id}`, { headers: getHeaders() });
  return response.data;
};

export const fetchNoteById = async (id: string): Promise<Tags> => {
  const response = await axios.get<Tags>(`/notes/${id}`, { headers: getHeaders() });
  return response.data;

};

export type Tags = {
  id: string;
  title: string;
  content: string;
  tag: NoteTag;
  createdAt: string;
  updatedAt: string;
};

export const getTags = async () => {
  const res = await axios<Tags[]>(`/notes`);
  return res.data;
};