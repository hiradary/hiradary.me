import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { notFound } from 'next/navigation';

import { Container } from '@/components/container';
import { getProject, projects } from '@/data/projects';

type ProjectPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects
    .filter((project) => project.caseStudySlug)
    .map((project) => ({ slug: project.caseStudySlug! }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.caseStudySlug) return { title: 'Project not found' };

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.caseStudySlug || slug !== 'reoverlay') notFound();

  return (
    <main id="main-content" className="page-content">
      <Container className="case-study page-shell">
        <Link className="back-link" href="/projects">
          <ArrowLeft size={15} aria-hidden="true" /> Back to Projects
        </Link>

        <header className="case-study-header">
          <p className="eyebrow">Open source · React infrastructure</p>
          <h1>Reoverlay</h1>
          <p>{project.description}</p>
          <div className="case-study-actions">
            <a
              className="button button-primary"
              href="https://github.com/hiradary/reoverlay"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Github size={17} aria-hidden="true" /> View source
            </a>
            <a
              className="button button-secondary"
              href="https://hiradary.github.io/reoverlay/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Live demo <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </header>

        <div className="case-study-visual">
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={1600}
            height={900}
            priority
          />
        </div>

        <div className="case-study-body">
          <aside className="case-study-facts">
            <div>
              <span>Role</span>
              <p>Creator and maintainer</p>
            </div>
            <div>
              <span>Stack</span>
              <p>TypeScript, React, Vitest, tsup</p>
            </div>
            <div>
              <span>License</span>
              <p>MIT</p>
            </div>
          </aside>
          <article className="case-study-copy prose prose-neutral dark:prose-invert">
            <section>
              <p className="eyebrow">The problem</p>
              <h2>Modal state rarely belongs to one component.</h2>
              <p>
                Authentication prompts, destructive confirmations, and global
                interceptors often need to open outside the component hierarchy
                that owns their UI. Reoverlay provides one top-level container
                and a deliberately small API for coordinating those moments.
              </p>
            </section>
            <section>
              <p className="eyebrow">The approach</p>
              <h2>A focused API with escape hatches.</h2>
              <p>
                Consumers can open a modal by component, element, or configured
                name; stack multiple modals; close a specific modal or the
                active one; and bring their own visual shell when the default
                wrapper is not appropriate.
              </p>
              <pre aria-label="Reoverlay example">
                <code>{`Reoverlay.showModal(ConfirmModal, {
  message: 'Archive this item?',
  onConfirm: () => Reoverlay.hideModal(),
})`}</code>
              </pre>
            </section>
            <section>
              <p className="eyebrow">Production details</p>
              <h2>Typed, accessible, and small by design.</h2>
              <p>
                The package includes typed props, optional named modal
                configuration, stack-aware close behavior, Escape and
                outside-click handling, accessible dialog attributes, and a
                default animated wrapper that can be replaced entirely.
              </p>
            </section>
          </article>
        </div>
      </Container>
    </main>
  );
}
