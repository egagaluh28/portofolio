-- Clear existing data (optional, comment out if you want to keep existing data)
-- TRUNCATE TABLE "SocialLink", "Skill", "Certificate", "Project", "Education", "Experience", "About", "Profile" CASCADE;

-- Insert Profile
INSERT INTO "Profile" (id, name, title, tagline, bio, available, "resumeUrl", "profileImage", "createdAt", "updatedAt")
VALUES (
  'profile1',
  'Muhammad Galuh Gumelar',
  'Software Engineer',
  'Software Engineer specializing in backend development and full-stack solutions. Building scalable systems with clean architecture and efficient database design.',
  'Final-year Software Engineering Technology student at IPB University with strong backend development skills.',
  true,
  '/resume.pdf',
  '/poto.jpeg',
  NOW(),
  NOW()
) ON CONFLICT (id) DO NOTHING;

-- Insert About
INSERT INTO "About" (id, paragraph1, paragraph2, "yearsExp", projects, technologies, collaborations, "createdAt", "updatedAt")
VALUES (
  'about1',
  'I am a final-year Software Engineering Technology student at IPB University with a strong focus on backend development. Experienced in designing efficient database schemas, building secure APIs, and implementing complex business logic with clean architecture principles.',
  'Currently working as a Software Engineer Intern at PT Kuantum Solusi Teknologi, developing large-scale budgeting systems. Passionate about creating scalable, high-performance solutions that solve real-world problems.',
  '3+',
  '10+',
  '15+',
  '5+',
  NOW(),
  NOW()
) ON CONFLICT (id) DO NOTHING;

-- Insert Experiences
INSERT INTO "Experience" (id, role, company, location, period, description, tags, current, "order", "createdAt", "updatedAt")
VALUES
  ('exp1', 'Software Engineer Intern (Backend Focus)', 'PT Kuantum Solusi Teknologi', 'Jakarta, Indonesia', 'Jul 2025 – Present', 'Developed a large-scale budgeting system with complex business logic. Optimized backend performance, multi-layer data validation, and secure API implementation. Contributed to scalable backend architecture.', ARRAY['Backend', 'API', 'Database'], true, 1, NOW(), NOW()),
  ('exp2', 'Web Developer', 'Buanakonstruksi', 'Remote', 'Sep 2024 – Apr 2025', 'Developed and maintained the company website. Integrated internal systems (booking forms, project databases) and performed SEO/speed optimization.', ARRAY['Full-stack', 'SEO', 'Integration'], false, 2, NOW(), NOW()),
  ('exp3', 'Staff of Software & Web Master Division', 'Himavo Micro IT Community', 'Bogor, Indonesia', 'Aug 2024 – Nov 2024', 'Developed Village Website for community information. Built CRUD features for institutional data management and ensured system integration.', ARRAY['Web Development', 'CRUD', 'Community'], false, 3, NOW(), NOW()),
  ('exp4', 'UI Designer', 'DSITD IPB', 'Bogor, Indonesia', 'Jan 2023 – Mar 2023', 'Designed wireframes and dynamic UI for a map feature, enhancing navigation and user engagement.', ARRAY['UI/UX', 'Design', 'Wireframing'], false, 4, NOW(), NOW())
ON CONFLICT (id) DO NOTHING;

-- Insert Education
INSERT INTO "Education" (id, degree, institution, location, period, description, gpa, "order", "createdAt", "updatedAt")
VALUES
  ('edu1', 'Bachelor of Software Engineering Technology', 'IPB University', 'Bogor, Indonesia', '2021 – 2025', 'Focused on software development, database design, and system architecture. Active in programming competitions and tech communities.', '3.8', 1, NOW(), NOW()),
  ('edu2', 'Senior High School - Science', 'SMAN 1 Bogor', 'Bogor, Indonesia', '2018 – 2021', 'Graduated with honors. Member of computer club and robotics team.', NULL, 2, NOW(), NOW())
ON CONFLICT (id) DO NOTHING;

-- Insert Projects
INSERT INTO "Project" (id, title, category, description, tech, image, year, featured, "liveUrl", "githubUrl", "order", "createdAt", "updatedAt")
VALUES
  ('proj1', 'Upsite', 'Agency E-commerce', 'An online platform for web development agency services, featuring service listing, client order management, and responsive portfolio display.', ARRAY['Next.js', 'React', 'PostgreSQL', 'Stripe'], '/project1.png', '2025', true, NULL, NULL, 1, NOW(), NOW()),
  ('proj2', 'Inventory System', 'CV CAHAYA BARU', 'Designed relational database schemas to track stock movements. implemented automated reporting features and transaction logic to reduce errors.', ARRAY['MySQL', 'Express', 'Node.js', 'React'], '/project1.png', '2024', false, NULL, NULL, 2, NOW(), NOW()),
  ('proj3', 'StudyLens', 'Productivity Platform', 'Built a productivity platform for educational tools using modern JavaScript stacks and secure authentication.', ARRAY['MERN Stack', 'Auth0', 'Tailwind'], '/project1.png', '2025', false, NULL, NULL, 3, NOW(), NOW()),
  ('proj4', 'Harris Hotel', 'Fullstack Web', 'Developed a comprehensive booking and informational website for Harris Hotel.', ARRAY['PHP', 'Laravel', 'MySQL'], '/project1.png', '2024', false, NULL, NULL, 4, NOW(), NOW())
ON CONFLICT (id) DO NOTHING;

-- Insert Skills (Hard Skills)
INSERT INTO "Skill" (id, name, type, "order", "createdAt", "updatedAt")
VALUES
  ('skill1', 'Next.js', 'hard', 1, NOW(), NOW()),
  ('skill2', 'React.js', 'hard', 2, NOW(), NOW()),
  ('skill3', 'Tailwind CSS', 'hard', 3, NOW(), NOW()),
  ('skill4', 'Node.js', 'hard', 4, NOW(), NOW()),
  ('skill5', 'Express.js', 'hard', 5, NOW(), NOW()),
  ('skill6', 'Fastify', 'hard', 6, NOW(), NOW()),
  ('skill7', 'DBeaver', 'hard', 7, NOW(), NOW()),
  ('skill8', 'Php', 'hard', 8, NOW(), NOW()),
  ('skill9', 'Laravel', 'hard', 9, NOW(), NOW()),
  ('skill10', 'PostgreSQL', 'hard', 10, NOW(), NOW()),
  ('skill11', 'MySQL', 'hard', 11, NOW(), NOW()),
  ('skill12', 'MongoDB', 'hard', 12, NOW(), NOW()),
  ('skill13', 'Docker', 'hard', 13, NOW(), NOW()),
  ('skill14', 'Git', 'hard', 14, NOW(), NOW())
ON CONFLICT (id) DO NOTHING;

-- Insert Skills (Soft Skills)
INSERT INTO "Skill" (id, name, type, "order", "createdAt", "updatedAt")
VALUES
  ('skill15', 'Effective Communication', 'soft', 1, NOW(), NOW()),
  ('skill16', 'Teamwork', 'soft', 2, NOW(), NOW()),
  ('skill17', 'Problem Solving', 'soft', 3, NOW(), NOW()),
  ('skill18', 'Analytical Thinking', 'soft', 4, NOW(), NOW()),
  ('skill19', 'Time Management', 'soft', 5, NOW(), NOW())
ON CONFLICT (id) DO NOTHING;

-- Insert Certificates
INSERT INTO "Certificate" (id, title, issuer, date, description, "credentialUrl", image, "order", "createdAt", "updatedAt")
VALUES
  ('cert1', 'AWS Certified Solutions Architect', 'Amazon Web Services', '2024', 'Demonstrated expertise in designing distributed systems on AWS.', 'https://aws.amazon.com/certification/', '/cert1.png', 1, NOW(), NOW()),
  ('cert2', 'Professional Scrum Master I', 'Scrum.org', '2023', 'Certified in Scrum framework and agile methodologies.', 'https://www.scrum.org/', '/cert2.png', 2, NOW(), NOW()),
  ('cert3', 'Meta Front-End Developer', 'Meta (Coursera)', '2023', 'Completed comprehensive front-end development program.', 'https://www.coursera.org/', '/cert3.png', 3, NOW(), NOW())
ON CONFLICT (id) DO NOTHING;

-- Insert Social Links
INSERT INTO "SocialLink" (id, platform, url, icon, "order", "createdAt", "updatedAt")
VALUES
  ('social1', 'github', 'https://github.com/yourusername', NULL, 1, NOW(), NOW()),
  ('social2', 'linkedin', 'https://linkedin.com/in/yourusername', NULL, 2, NOW(), NOW()),
  ('social3', 'instagram', 'https://instagram.com/yourusername', NULL, 3, NOW(), NOW()),
  ('social4', 'email', 'mailto:mggart39@gmail.com', NULL, 4, NOW(), NOW())
ON CONFLICT (id) DO NOTHING;

-- Verify data
SELECT 'Profile' as table_name, COUNT(*) as count FROM "Profile"
UNION ALL
SELECT 'About', COUNT(*) FROM "About"
UNION ALL
SELECT 'Experience', COUNT(*) FROM "Experience"
UNION ALL
SELECT 'Education', COUNT(*) FROM "Education"
UNION ALL
SELECT 'Project', COUNT(*) FROM "Project"
UNION ALL
SELECT 'Skill', COUNT(*) FROM "Skill"
UNION ALL
SELECT 'Certificate', COUNT(*) FROM "Certificate"
UNION ALL
SELECT 'SocialLink', COUNT(*) FROM "SocialLink";
