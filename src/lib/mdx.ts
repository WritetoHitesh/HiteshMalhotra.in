import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'src', 'content', 'work');

export type CaseStudy = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  heroImage?: string;
  content: string;
};

export function getCaseStudies(): Omit<CaseStudy, 'content'>[] {
  if (!fs.existsSync(contentDir)) return [];
  
  const files = fs.readdirSync(contentDir);
  
  const caseStudies = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      
      return {
        slug: file.replace('.mdx', ''),
        title: data.title || '',
        date: data.date || '',
        description: data.description || '',
        tags: data.tags || [],
        heroImage: data.heroImage,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
  return caseStudies;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  
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
    content,
  };
}
