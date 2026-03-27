import React from 'react';
import styles from './PlatformSection.module.css';

export default function PlatformSection() {
  return (
    <section className={styles.platformSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.label}>Собственная разработка</span>
          <h2 className={styles.title}>Собственная платформа &mdash;<br/>ученика не потеряют</h2>
          <p className={styles.subtitle}>Не просто видеозвонок. Технология, которая видит каждого ученика и держит преподавателя в курсе.</p>
        </div>

        <div className={styles.gridContainer}>

          {/* Left Column: Laptop Mockup */}
          <div className={styles.laptopFrame}>
            <div className={styles.laptopScreen}>
              <div className={styles.screenHeader}>
                <div className={styles.screenDots}>
                  <span className={styles.screenDot}></span>
                  <span className={styles.screenDot}></span>
                  <span className={styles.screenDot}></span>
                </div>
                <div className={styles.lessonTitle}>Урок 5: Подготовка к ЕГЭ по математике</div>
              </div>
              <div className={styles.videoZone}>
                <div className={styles.teacherIllustration}></div>

                {/* Sidebar */}
                <div className={styles.screenSidebar}>
                  <div className={styles.sidebarItem}>
                    <span className={styles.sidebarCheck}>&#10003;</span>
                    Презентация урока
                  </div>
                  <div className={styles.sidebarItem}>
                    <span className={styles.sidebarCheck}>&#10003;</span>
                    Домашнее задание
                  </div>
                  <div className={styles.sidebarItem}>
                    <span className={styles.sidebarCheck}>&#10003;</span>
                    Дополнительные материалы
                  </div>
                  <div className={styles.sidebarItem}>
                    <span className={styles.sidebarCheck}>&#9998;</span>
                    Тест
                  </div>
                </div>

                {/* Bottom Left Overlay: Student Progress */}
                <div className={styles.studentOverlay}>
                  <div className={styles.studentAvatar}></div>
                  <div className={styles.studentInfo}>
                    <span className={styles.studentStatus}>Внимание: 98%</span>
                    <div className={styles.progressTrack}>
                      <div className={styles.progressFill}></div>
                    </div>
                  </div>
                </div>

                {/* Top Right Overlay: Toast */}
                <div className={styles.toastOverlay}>
                  <span className={styles.toastIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                  </span>
                  <span className={styles.toastText}>Алексей отвлёкся</span>
                </div>
              </div>
            </div>
            <div className={styles.laptopChin}></div>
          </div>

          {/* Right Column: Features Cards */}
          <div className={styles.featuresList}>

            <div className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Мониторинг внимания</h3>
                <p className={styles.featureDesc}>Система видит, кто отвлёкся — ещё во время урока</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Преподаватель реагирует сразу</h3>
                <p className={styles.featureDesc}>Уведомление приходит в реальном времени</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Контроль посещаемости</h3>
                <p className={styles.featureDesc}>Каждый урок фиксируется автоматически</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Кабинет родителя</h3>
                <p className={styles.featureDesc}>Прогресс, оценки и посещаемость — в любое время</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Все материалы в одном месте</h3>
                <p className={styles.featureDesc}>ДЗ, тетради, 10 пробных ЕГЭ — не нужно ничего искать</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
