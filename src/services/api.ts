import axios from "axios"
import { IPost } from "@/types/post.type"

const BASE_URL = "https://jsonplaceholder.typicode.com"

export const getPosts = async (): Promise<IPost[]> => {
    const response = await axios.get(`${BASE_URL}/posts`)
    return response.data
}