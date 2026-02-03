import { view } from 'framer-motion/client';

export const translations = {
    en: {
        nav: {
            logo: 'My Portfolio',
            about: 'About',
            skills: 'Skills',
            experience: 'Experience',
            projects: 'Projects',
            automations: 'AI Automations',
            contact: 'Contact',
        },
        hero: {
            greeting: "Hi, I'm",
            name: 'Max',
            title: 'Frontend Developer & AI Automation',
            mainTitle: 'Max Studoliak',
            subtitle: 'Frontend Developer & AI Automation Specialist',
            description: 'I build web apps that people actually enjoy using & automating business processes with AI',
            stats: {
                automations: 'AI Automations',
                hoursSaved: 'Hours Saved/Week',
                accuracy: 'AI Accuracy',
            },
            viewWork: 'See my work',
            viewAutomations: 'View Automations',
            contactMe: 'Contact',
            downloadCV: 'Download CV',
        },
        about: {
            title: 'About',
            subtitle: 'Combining frontend development and AI automation for efficient solutions. ',
            description:
                'Year of experience working on real commercial projects under the guidance of a Senior Developer. I follow a component-based approach and clean code principles. I build interfaces that work well and are pleasant to use.',
            // Frontend features
            cleanCode: 'Clean Code',
            cleanCodeDesc:
                'Writing structured code following standards and best practices for easy project maintenance',
            responsive: 'Responsive Design',
            responsiveDesc: 'Creating interfaces that display correctly on all devices and screen resolutions',
            performance: 'Performance',
            performanceDesc: 'Optimizing page load times and app performance for better user experience',
            innovation: 'Practical Approach',
            innovationDesc: 'Focusing on solving specific business tasks using proven solutions',
            // AI Automation features
            aiAutomation: 'AI Automation',
            aiAutomationDesc: 'Automating business processes with AI and no-code tools, saving time and resources',
            smartWorkflows: 'Smart Workflows',
            smartWorkflowsDesc: 'Creating intelligent workflows that handle routine tasks automatically',
            integration: 'API Integration',
            integrationDesc: 'Connecting different services and creating custom integrations for seamless data flow',
        },
        skills: {
            title: 'Skills & Technologies',
            subtitle: 'Tools I use to build and automate',
            core: 'Core Technologies',
            frameworks: 'Frameworks & Libraries',
            frontend: 'Frontend Development',
            tools: 'Tools & Workflow',
            automation: 'Automation',
            soft: 'Professional Skills',
            teamCollaboration: 'Team Collaboration',
            agileScrum: 'Agile Development',
            problemSolving: 'Problem Solving',
        },
        projects: {
            title: 'My Projects',
            projectOne: 'Admin Panel',
            projectOneDesc:
                'Built components and pages for the admin panel based on Figma designs. Responsive layout, code refactoring.',
            projectTwo: 'Web Inspection Mobile App',
            projectTwoDesc:
                'Built mobile app layout based on Figma mockups. Created inspection functionality, built reusable components, refactored code.',
            projectThree: 'Portfolio Website',
            projectThreeDesc:
                "This site you're looking at right now. React, TypeScript, Material UI. Dark theme, language switcher, animations, responsive.",
            projectFour: 'Finance Tracker',
            projectFourDesc:
                'Personal finance management system with AI-powered insights, budgeting, goal tracking, and multi-language support. JWT authentication with Google OAuth.',
            projectFive: 'TaskFlow',
            projectFiveDesc:
                'Modern task management system with drag-and-drop Kanban boards, real-time updates via WebSocket, and team collaboration features.',
            projectSix: 'Shop-Hub',
            projectSixDesc:
                'E-commerce platform with admin panel, Stripe payment integration, product reviews, multi-language support, and Cloudinary image storage.',
            code: 'Code',
            demo: 'Demo',
            automationOne: 'Automated Candidate Qualification',
            automationOneDesc:
                'Tally form → Airtable: job fit check → if suitable: interview invite via email + team notification in Slack. Reduced resume screening time by ~85–90%.',
            automationTwo: 'Smart Feedback Handling',
            automationTwoDesc:
                'Feedback from Tally → sentiment analysis → Airtable update → positive: thank-you email to customer; negative: urgent Slack alert. Enables quick response to criticism.',
            automationThree: 'Intelligent Email Categorization',
            automationThreeDesc:
                'New email → category (spam / support / business / job / important) and priority determination → 5 different routes: auto-replies, tickets, notifications, escalation. Significantly speeds up email sorting.',
            automationLoom: 'Watch Loom',
        },
        contact: {
            title: "Let's Connect",
            subtitle: 'How to reach me',
            description: "I'd love to hear about your opportunity.",
            email: 'Email',
            phone: 'Phone',
            location: 'Location',
            city: 'Kozyatyn, Ukraine',
            name: 'Name',
            message: 'Your message',
            send: 'Send Message',
        },
        experience: {
            title: 'Experience',
            jobTitle: 'Junior Frontend Developer & AI Automation Specialist',
            jobCompany: 'Contract work',
            jobPeriod: 'April 2025 — Present',
            jobDescription: 'Working on commercial projects under the guidance of a Senior Developer.',
            jobAchievement1: 'Building layouts from Figma that work across browsers and devices',
            jobAchievement2: 'Creating React components with TypeScript',
            jobAchievement3: 'Refactoring old code',
            jobAchievement4: 'Automating business processes with AI tools (Make.com, Airtable)',
            educationTitle: 'Self-learning',
            educationCompany: 'Learning by doing',
            educationPeriod: '2024',
            educationDescription:
                'Learned frontend development — React, modern JavaScript, how to write clear and maintainable code.',
        },
        footer: {
            name: 'Maksym Studoliak',
            rights: 'All rights reserved',
            builtWith: 'Built with',
        },
        share: {
            title: 'Share via',
            copyLink: 'Copy Link',
            linkCopied: 'Link copied to clipboard!',
            instagramCopied: 'Link copied! Paste it in your Instagram story or bio',
        },
    },
    uk: {
        nav: {
            logo: 'Моє Портфоліо',
            about: 'Про мене',
            skills: 'Навички',
            experience: 'Досвід',
            projects: 'Проєкти',
            automations: 'AI Автоматизації',
            contact: 'Контакти',
        },
        hero: {
            greeting: 'Привіт, я',
            name: 'Макс',
            title: 'Frontend Розробник & AI Автоматизатор',
            mainTitle: 'Максим Студоляк',
            subtitle: 'Frontend Розробник & Спеціаліст з AI Автоматизації',
            description: 'Роблю веб-додатки, якими приємно користуватись та автоматизую бізнес-процеси за допомогою AI',
            stats: {
                automations: 'AI Автоматизацій',
                hoursSaved: 'Годин Економії/Тиждень',
                accuracy: 'Точність AI',
            },
            viewWork: 'Мої проєкти',
            viewAutomations: 'Переглянути Автоматизації',
            contactMe: 'Контакти для звʼязку',
            downloadCV: 'Завантажити резюме',
        },
        about: {
            title: 'Про мене',
            subtitle: 'Поєдную frontend розробку та AI автоматизацію для ефективних рішень. ',
            description:
                'Рік досвіду роботи над реальними комерційними проєктами під керівництвом Senior розробника. Дотримуюсь компонентного підходу та чистого коду. Роблю інтерфейси, які добре працюють і приємні в використанні.',
            // Frontend features
            cleanCode: 'Чистий код',
            cleanCodeDesc:
                'Пишу структурований код з дотриманням стандартів і best practices для легкої підтримки проєкту',
            responsive: 'Адаптивний дизайн',
            responsiveDesc: 'Створюю інтерфейси, які коректно відображаються на всіх пристроях і розширеннях екрану',
            performance: 'Швидкість',
            performanceDesc:
                'Оптимізую завантаження сторінок та продуктивність додатків для кращого користувацького досвіду',
            innovation: 'Практичність',
            innovationDesc: 'Фокусуюсь на вирішенні конкретних бізнес-задач з використанням перевірених рішень',
            // AI Automation features
            aiAutomation: 'AI Автоматизація',
            aiAutomationDesc:
                'Автоматизую бізнес-процеси за допомогою AI та no-code інструментів, економлячи час та ресурси',
            smartWorkflows: 'Розумні Процеси',
            smartWorkflowsDesc: 'Створюю інтелектуальні процеси, які виконують рутинні задачі автоматично',
            integration: 'API Інтеграція',
            integrationDesc: 'Зʼєдную різні сервіси та створюю кастомні інтеграції для безперебійного обміну даними',
        },
        skills: {
            title: 'Навички та Технології',
            subtitle: 'Інструменти, які я використовую для розробки та автоматизації',
            core: 'Основні Технології',
            frameworks: 'Фреймворки та Бібліотеки',
            frontend: 'Фронтенд Розробка',
            tools: 'Інструменти та Робочий Процес',
            automation: 'Автоматизація',
            soft: 'Професійні Навички',
            teamCollaboration: 'Командна Робота',
            agileScrum: 'Гнучка Розробка',
            problemSolving: 'Вирішення Проблем',
        },
        projects: {
            title: 'Мої проєкти',
            projectOne: 'Адмін Панель',
            projectOneDesc:
                'Робив компоненти та сторінки для адмін панелі за дизайном з Figma. Адаптивна верстка, рефакторинг коду.',
            projectTwo: 'Мобільний додаток Web Inspection',
            projectTwoDesc:
                'Верстка мобільного додатка за макетами з Figma. Зробив функціонал інспекцій, створив перевикористовувані компоненти, порефакторив код.',
            projectThree: 'Сайт-портфоліо',
            projectThreeDesc:
                'Цей сайт, який ви зараз дивитесь. React, TypeScript, Material UI. Темна тема, перемикач мови, анімації, адаптивність.',
            projectFour: 'Finance Tracker',
            projectFourDesc:
                'Система управління особистими фінансами з AI-аналізом, бюджетуванням, відстеженням цілей та підтримкою багатьох мов. JWT автентифікація з Google OAuth.',
            projectFive: 'TaskFlow',
            projectFiveDesc:
                'Сучасна система управління завданнями з drag-and-drop Kanban дошками, оновленнями в реальному часі через WebSocket та функціями командної роботи.',
            projectSix: 'Shop-Hub',
            projectSixDesc:
                'E-commerce платформа з адмін панеллю, інтеграцією Stripe платежів, відгуками на товари, підтримкою багатьох мов та зберіганням зображень на Cloudinary.',
            code: 'Код',
            demo: 'Демо',
            automationOne: 'Автоматична кваліфікація кандидатів',
            automationOneDesc:
                'Форма Tally → Airtable: перевірка відповідності вакансії → якщо підходить: запрошення на співбесіду на email + сповіщення команді в Slack. Скоротив час перевірки резюме на ~85–90%.',

            automationTwo: 'Розумна обробка відгуків',
            automationTwoDesc:
                'Відгук з Tally → аналіз тональності → оновлення Airtable → позитивний: подяка клієнту на email; негативний: термінове сповіщення в Slack. Дозволяє швидко реагувати на критику.',

            automationThree: 'Інтелектуальна категоризація email',
            automationThreeDesc:
                'Нове повідомлення → визначення категорії (spam / support / business / job / important) та пріоритету → 5 різних роутів: авто-відповіді, тікети, сповіщення, ескалація. Значно прискорює сортування пошти.',
            automationLoom: 'Переглянути Loom',
        },
        contact: {
            title: "Контакти для зв'язку",
            subtitle: 'Як зі мною звʼязатися',
            description: 'Буду радий обговорити можливість співпраці.',
            email: 'Email',
            phone: 'Телефон',
            location: 'Місцезнаходження',
            city: 'Козятин, Україна',
            name: "Ім'я",
            message: 'Ваше повідомлення',
            send: 'Надіслати',
        },
        experience: {
            title: 'Досвід',
            jobTitle: 'Junior Frontend Розробник & AI Автоматизатор',
            jobCompany: 'Контрактна робота',
            jobPeriod: 'Квітень 2025 — Зараз',
            jobDescription: 'Працюю над комерційними проєктами під керівництвом Senior розробника.',
            jobAchievement1: 'Верстаю макети з Figma, щоб працювало на всіх браузерах і пристроях',
            jobAchievement2: 'Роблю компоненти на React з TypeScript',
            jobAchievement3: 'Рефакторю старий код',
            jobAchievement4: 'Автоматизую бізнес-процеси за допомогою AI інструментів (Make.com, Airtable)',
            educationTitle: 'Навчання самостійно',
            educationCompany: 'Вчився на практиці',
            educationPeriod: '2024',
            educationDescription:
                'Вивчив фронтенд-розробку — React, сучасний JavaScript, як писати зрозумілий і підтримуваний код',
        },
        footer: {
            name: 'Максим Студоляк',
            rights: 'Всі права захищені',
            builtWith: 'Створено за допомогою',
        },
        share: {
            title: 'Поділитися через',
            copyLink: 'Скопіювати посилання',
            linkCopied: 'Посилання скопійовано!',
            instagramCopied: 'Посилання скопійовано! Вставте його в свою історію або био Instagram',
        },
    },
};

export type Locale = keyof typeof translations;
