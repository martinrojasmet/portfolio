import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import profilePic from '../assets/profile-pic.jpg';
import { getTranslation, type Locale } from '../i18n';
import { TechChip } from './TechChip';
import { projectMeta } from './projectMeta';

function ProjectSlider({
  lang,
  onOpenProject,
}: {
  lang: Locale;
  onOpenProject: (id: string) => void;
}) {
  const t = getTranslation(lang);
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const ids = Object.keys(t.projects.items);
  const count = ids.length;

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(count - 1, i));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: 'smooth' });
  };

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <section className="wrap">
      <div className="section-head">
        <h2>{t.projects.title}</h2>
      </div>
      <div className="slider">
        <div
          className="slider-track"
          ref={trackRef}
          onScroll={onScroll}
          tabIndex={0}
          aria-roledescription="carousel"
        >
          {ids.map((id) => {
            const meta = projectMeta[id];
            const item = t.projects.items[id];
            return (
              <article className="slide" key={id} aria-roledescription="slide">
                <div className="slide-media">
                  <img src={meta.image} alt={item.title} loading="lazy" />
                </div>
                <div className="slide-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="tech">
                    {meta.technologies.map((tech) => (
                      <TechChip key={tech} label={tech} />
                    ))}
                  </span>
                  <div className="slide-actions">
                    <button
                      type="button"
                      className="chip-link chip-accent"
                      onClick={() => onOpenProject(id)}
                    >
                      {t.projects.details}
                    </button>
                    {/* "Try" — reserved for the live project website.
                        When projectMeta[id].liveUrl is set, this renders as a link to it;
                        while it is null it simply redirects to the home page. */}
                    {projectMeta[id].liveUrl && (
                      <a
                        className="chip-link chip-accent"
                        href={projectMeta[id].liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t.projects.tryLabel}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="slider-nav">
          <button
            type="button"
            className="nav-btn"
            aria-label="Previous"
            disabled={index <= 0}
            onClick={() => goTo(index - 1)}
          >
            <ArrowLeft />
          </button>
          <span className="slider-count" aria-live="polite">
            <b>{index + 1}</b> / {count}
          </span>
          <button
            type="button"
            className="nav-btn"
            aria-label="Next"
            disabled={index >= count - 1}
            onClick={() => goTo(index + 1)}
          >
            <ArrowRight />
          </button>
          <div className="dots">
            {ids.map((id, i) => (
              <button
                key={id}
                type="button"
                className="dot"
                aria-label={`Show item ${i + 1}`}
                aria-current={i === index}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Home({
  lang,
  onOpenProject,
}: {
  lang: Locale;
  onOpenProject: (id: string) => void;
}) {
  const t = getTranslation(lang);

  return (
    <div className="home-stack">
      <section className="wrap hero">
        <div>
          <h1>Hello, I'm Martin</h1>
          <span className="eyebrow">{t.home.eyebrow}</span>
          <p className="lede">{t.home.lede}</p>
        </div>
        <div className="hero-photo">
          <img src={profilePic} alt="Martin Rojas" width={240} height={300} />
          <div className="seq-rule" />
        </div>
      </section>

      <ProjectSlider lang={lang} onOpenProject={onOpenProject} />
    </div>
  );
}
