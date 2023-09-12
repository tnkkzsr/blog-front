import axios from "axios";
import { login } from "@/features/user/libs/external/login";

export const postCreater = async (
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

  try {
    const token = await login("tanakakazushiro", "testadmin");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.post(
      "http://localhost:8000/blog/posts/",
      body,
      config
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
