import { Category } from "./Category";

export class News{
    id: number;
    title: string;
    image: string;
    date: string;
    category: Category;
    slider: boolean;
    content: string;
    description: string;
    comments: Comment[];
}

