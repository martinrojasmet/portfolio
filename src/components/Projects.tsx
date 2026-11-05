import React, { useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { getTranslation, type Locale } from '../i18n';
import { TechChip } from './TechChip';
import { projectMeta } from './projectMeta';
import { Lightbox } from './Lightbox';

type ProjectsProps = {
  lang: Locale;
  openProject: string | null;
  onConsumeOpenProject: () => void;
};

export function Projects({ lang, openProject, onConsumeOpenProject }: ProjectsProps) {
  const t = getTranslation(lang);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  useEffect(() => {
    if (openProject) {
      setSelectedProject(openProject);
      onConsumeOpenProject();
    }
  }, [openProject, onConsumeOpenProject]);

  const [lightbox, setLightbox] = useState(false);

  if (selectedProject) {
    const meta = projectMeta[selectedProject];
    const item = t.projects.items[selectedProject];
    return (
      <div className="wrap">
        <div className="detail-head">
          <button
            type="button"
            className="back-link"
            onClick={() => setSelectedProject(null)}
          >
            ← {t.projects.back}
          </button>
          <h1>{item.title}</h1>
          <div className="seq-rule" />
        </div>

        <div className="split">
          <div className="prose">
            <p className="whitespace-pre-wrap">{item.longDescription}</p>
          </div>
          <aside className="detail-side">
            <figure className="plate">
              <button
                type="button"
                className="plate-img-btn"
                onClick={() => setLightbox(true)}
                aria-label="Expand image"
              >
                <img src={meta.example} alt={item.title} />
              </button>
            </figure>
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.6rem' }}>
                {t.projects.techUsed}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {meta.technologies.map((tech) => (
                  <TechChip key={tech} label={tech} />
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.6rem' }}>
                {t.projects.links}
              </p>
              <div className="detail-links">
                {/* "Try" — shown only when projectMeta[id].liveUrl is set; it links to the live website. */}
                {meta.liveUrl && (
                  <a
                    className="detail-link link-try"
                    href={meta.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink /> {t.projects.tryLabel}
                  </a>
                )}
                <a
                  className="detail-link link-github"
                  href={meta.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github /> {t.projects.code}
                </a>
              </div>
            </div>
          </aside>
        </div>

        {lightbox && (
          <Lightbox
            src={meta.example}
            alt={item.title}
            onClose={() => setLightbox(false)}
          />
        )}
      </div>
    );
  }

  const ids = Object.keys(t.projects.items);

  return (
    <section className="wrap">
      <div className="proj-rows">
        {ids.map((id) => {
          const meta = projectMeta[id];
          const item = t.projects.items[id];
          return (
            <button
              key={id}
              type="button"
              className="proj-row"
              onClick={() => setSelectedProject(id)}
            >
              <span className="thumb">
                <img src={meta.image} alt={item.title} />
              </span>
              <span className="body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="tech">
                  {meta.technologies.map((tech) => (
                    <TechChip key={tech} label={tech} />
                  ))}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
