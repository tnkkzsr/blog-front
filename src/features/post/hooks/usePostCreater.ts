import { useAuthContext } from "@/features/user/contexts/AuthContext";
import axios from "axios";

export const usePostCreater = () => {
  const { session } = useAuthContext();

  const postCreater = async (
    title: string,
    content: string,
    category_id: string
  ) => {
    const body = {
      title,
      content,
    } as { title: string; content: string; category?: string };
    if (category_id !== "") {
      body["category"] = category_id;
    }

    const token = session?.access;
    if (!token) {
      console.log("token not found");
      throw new Error("token not found");
    }
    console.log("token", token);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.post(
      "http://localhost:8000/blog/posts/",
      body,
      config
    );
    return response.data;
  };

  return {
    postCreater,
  };
};
