import Link from 'next/link';

import { About } from '@/components/about';
import { BlogPreview } from '@/components/blog-preview';
import { ContactCta } from '@/components/contact-cta';
import { Container } from '@/components/container';
import { ExperienceCard } from '@/components/experience-card';
import { Hero } from '@/components/hero';
import { ProjectCard } from '@/components/project-card';
import { SectionHeading } from '@/components/section-heading';
import { experiences } from '@/data/experience';
import { projects } from '@/data/projects';
import { getPublishedBlogPosts } from '@/lib/blog';

export default function HomePage() {
  const posts = getPublishedBlogPosts();

  return (
    <main id="main-content">
      <Container>
        <Hero />

        <section className="section" aria-labelledby="experience-heading">
          <SectionHeading eyebrow="Featured">Experience</SectionHeading>
          <div className="experience-list" id="experience-heading">
            {experiences.slice(0, 2).map((experience) => (
              <ExperienceCard key={experience.company} experience={experience} />
            ))}
          </div>
          <Link className="text-link section-link" href="/work-experience">
            Show all work experience <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section className="section" aria-labelledby="projects-heading">
          <SectionHeading eyebrow="Selected">Projects</SectionHeading>
          <div className="project-grid" id="projects-heading">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <Link className="text-link section-link" href="/projects">
            View all projects <span aria-hidden="true">→</span>
          </Link>
        </section>

        <About />
        <BlogPreview posts={posts} />
        <ContactCta />
      </Container>
    </main>
  );
}
