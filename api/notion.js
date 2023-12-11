import Notion from "notion-client";
import { TOKEN, DATABASE_ID } from "@/config";

const notion = new Notion();
notion.auth(TOKEN);

export const getBlogPosts = async () => {
  const db = await notion.getDatabase({
    id: DATABASE_ID,
  });

  const result = db;
  console.log(result);
  return result;
};
