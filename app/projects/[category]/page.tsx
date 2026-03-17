import { notFound } from 'next/navigation';
import { projects, type ProjectCategory } from '@/data/projects';
import ProjectDetail from '@/components/projects/ProjectDetail';
import Footer from '@/components/shared/Footer';

const categoryTitles: Record<ProjectCategory, string> = {
  web: 'Web Services',
  game: 'Indie Games',
};

interface ProjectsPageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return [{ category: 'web' }, { category: 'game' }];
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { category } = await params;

  if (!['web', 'game'].includes(category)) {
    notFound();
  }

  const cat = category as ProjectCategory;
  const title = categoryTitles[cat];
  const categoryProjects = projects[cat] || [];

  return (
    <div className="landing">
      <ProjectDetail title={title} projects={categoryProjects} />
      <Footer />
    </div>
  );
}
