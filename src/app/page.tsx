import { Link } from 'next-view-transitions';

import { BlogPreview } from '@/components/blog-preview';
import { Container } from '@/components/container';
import { ExperienceCard } from '@/components/experience-card';
import { Hero } from '@/components/hero';
import { Reveal } from '@/components/reveal';
import { experiences } from '@/data/experience';
import { getPublishedBlogPosts } from '@/lib/blog';

export default function HomePage() {
  const posts = getPublishedBlogPosts();

  return (
    <main id="main-content" className="page-content">
      <Container className="home-shell">
        <Reveal className="hero-reveal">
          <Hero />
        </Reveal>

        <section className="home-section" aria-labelledby="experience-heading">
          <Reveal>
            <h2 id="experience-heading">Experience</h2>
          </Reveal>
          <div className="experience-list">
            {experiences.slice(0, 3).map((experience, index) => (
              <Reveal key={experience.company} delay={(index + 1) * 50}>
                <ExperienceCard experience={experience} expandable />
              </Reveal>
            ))}
          </div>
          <Reveal className="section-action" delay={200}>
            <Link className="button" href="/work-experience">
              Show all work experiences
            </Link>
          </Reveal>
        </section>

        <BlogPreview posts={posts} />
      </Container>
    </main>
  );
}
