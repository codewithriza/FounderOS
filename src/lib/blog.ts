import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  tags: string[];
  content: string;
  readingTime: number;
}

/**
 * Get all blog post slugs.
 */
export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

/**
 * Get a single blog post by slug.
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  // Convert markdown to HTML
  const processedContent = await remark().use(html).process(content);
  const htmlContent = processedContent.toString();

  // Calculate reading time (avg 200 words per minute)
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date || new Date().toISOString(),
    author: data.author || "FounderOS Team",
    image: data.image,
    tags: data.tags || [],
    content: htmlContent,
    readingTime,
  };
}

/**
 * Get all blog posts, sorted by date (newest first).
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const slugs = getBlogSlugs();
  const posts = await Promise.all(slugs.map((slug) => getBlogPost(slug)));

  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
