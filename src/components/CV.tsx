import React from 'react';
import { Download } from 'lucide-react';
import { getTranslation, type Locale } from '../i18n';
import { TechChip } from './TechChip';

/* Set to the CV file URL (e.g. '/cv-martin-rojas.pdf' placed in the public/ folder)
   to show the "Download CV" button. While it is null the button stays hidden. */
const CV_DOWNLOAD_URL: string | null = null;

export function CV({ lang }: { lang: Locale }) {
  const t = getTranslation(lang);
  const sectionIds = Object.keys(t.cv.sections);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="wrap cv-grid">
      <div className="cv-side">
        <nav className="cv-toc" aria-label="CV sections">
          <button type="button" onClick={() => scrollTo('cv-summary')}>
            {t.cv.summaryLabel}
          </button>
          {sectionIds.map((id) => (
            <button key={id} type="button" onClick={() => scrollTo(id)}>
              {t.cv.sections[id].title}
            </button>
          ))}
        </nav>
        {CV_DOWNLOAD_URL && (
          <a className="chip-link chip-accent" href={CV_DOWNLOAD_URL} download>
            <Download size={16} /> {t.cv.download}
          </a>
        )}
      </div>

      <div className="cv-body">
        <section id="cv-summary">
          <h2>{t.cv.summaryLabel}</h2>
          {/* <div className="cv-prose"> */}
            <p className="ink-2">{t.cv.summary}</p>
            {/* <p>
              <span className="eyebrow">{t.cv.objectiveLabel}</span>
              {t.cv.objective}
            </p> */}
          {/* </div> */}
        </section>

        {sectionIds.map((id) => {
          const section = t.cv.sections[id];
          const isSkills = id === 'skills';
          return (
            <section key={id} id={id}>
              <h2>{section.title}</h2>
              {isSkills ? (
                <div className="skill-groups">
                  {t.cv.skillGroups.map((group) => (
                    <div className="skill-group" key={group.title}>
                      <h3>{group.title}</h3>
                      <div className="skill-chips">
                        {group.skills.map((skill) => (
                          <TechChip key={skill} label={skill} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rows">
                  {section.entries.map((entry, i) => (
                    <div className="row" key={i}>
                      <span className="when">{entry.period}</span>
                      <div className="what">
                        <div>
                          <strong>
                            {entry.titleLink ? (
                              <a
                                href={entry.titleLink}
                                style={{
                                  display: 'inline-block',
                                  transition: 'transform 150ms ease',
                                }}
                                onMouseEnter={(event) => {
                                  event.currentTarget.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(event) => {
                                  event.currentTarget.style.transform = 'scale(1)';
                                }}
                              >
                                {entry.title}
                              </a>
                            ) : (
                              entry.title
                            )}
                          </strong>
                          {entry.group && (
                            <span>
                              {' - '}
                              {entry.groupLink ? (
                                <a
                                  href={entry.groupLink}
                                  style={{
                                    display: 'inline-block',
                                    transition: 'transform 150ms ease',
                                  }}
                                  onMouseEnter={(event) => {
                                    event.currentTarget.style.transform = 'scale(1.05)';
                                  }}
                                  onMouseLeave={(event) => {
                                    event.currentTarget.style.transform = 'scale(1)';
                                  }}
                                >
                                  {entry.group}
                                </a>
                              ) : (
                                entry.group
                              )}
                            </span>
                          )}
                        </div>
                        <span className="whitespace-pre-line">{entry.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </section>
  );
}
