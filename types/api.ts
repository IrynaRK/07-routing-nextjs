import { Tags } from "./note";

export interface FetchNotesResponse {
  notes: Tags[];
  totalItems: number;
  page: number;
  perPage: number;
  totalPages: number;
}