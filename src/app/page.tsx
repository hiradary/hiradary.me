import { Link } from 'next-view-transitions';

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
      <Container className="home-shell">
        <Hero />

        <section className="section" aria-labelledby="experience-heading">
          <SectionHeading eyebrow="Featured">Experience</SectionHeading>
          <div className="experience-list" id="experience-heading">
            {experiences.slice(0, 2).map((experience) => (
              <ExperienceCard
                key={experience.company}
                experience={experience}
              />
            ))}
          </div>
          <div className="section-link-wrap">
            <Link className="button button-secondary" href="/work-experience">
              Show all work experiences
            </Link>
          </div>
        </section>

        <section className="section" aria-labelledby="projects-heading">
          <SectionHeading eyebrow="Featured">Projects</SectionHeading>
          <div className="project-grid" id="projects-heading">
            {projects.slice(0, 4).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="section-link-wrap">
            <Link className="button button-secondary" href="/projects">
              Show all projects
            </Link>
          </div>
        </section>

        <About />
        <BlogPreview posts={posts} />
        <ContactCta />
      </Container>
    </main>
  );
}
