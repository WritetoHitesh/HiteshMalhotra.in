import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const workDir = path.join(process.cwd(), 'src', 'content', 'work');
const teardownDir = path.join(process.cwd(), 'src', 'content', 'teardowns');

export type ContentItem = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  heroImage?: string;
  content: string;
  pdfUrl?: string;
};

function getItems(directory: string): Omit<ContentItem, 'content'>[] {
  if (!fs.existsSync(directory)) return [];
  
  const files = fs.readdirSync(directory);
  
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(directory, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      
      return {
        slug: file.replace('.mdx', ''),
        title: data.title || '',
        date: data.date || '',
        description: data.description || '',
        tags: data.tags || [],
        heroImage: data.heroImage,
        pdfUrl: data.pdfUrl,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function getItemBySlug(directory: string, slug: string): ContentItem | null {
  const filePath = path.join(directory, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) return null;
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  
  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    description: data.description || '',
    tags: data.tags || [],
    heroImage: data.heroImage,
    pdfUrl: data.pdfUrl,
    content,
  };
}

export const getCaseStudies = () => getItems(workDir);
export const getCaseStudyBySlug = (slug: string) => getItemBySlug(workDir, slug);

export const getTeardowns = () => getItems(teardownDir);
export const getTeardownBySlug = (slug: string) => getItemBySlug(teardownDir, slug);
