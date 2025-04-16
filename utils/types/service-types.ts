// Типы данных для страниц услуг

// Тип для элементов списка или нумерованного списка
export interface ListItem {
  title?: string;
  description?: string;
}

// Тип для секций основной информации
export interface ServiceSection {
  title: string;
  type: 'list' | 'numbered';
  items: (string | ListItem)[];
}

// Тип для изображения
export interface ServiceImage {
  src: string;
  alt: string;
}

// Тип для основной информации услуги
export interface ServiceMainInfo {
  title: string;
  paragraphs: string[];
  image?: ServiceImage;
  sections: ServiceSection[];
}

// Тип для вопросов FAQ
export interface ServiceQuestion {
  question: string;
  answer: string;
  list?: string[];
}

// Тип для FAQ секции
export interface ServiceFaq {
  title: string;
  questions: ServiceQuestion[];
}

// Тип для элемента бокового меню
export interface ServiceSidebarItem {
  icon: string;
  text: string;
  link: string;
}

// Тип для результатов работы
export interface ServiceSidebarResults {
  title: string;
  items: string[];
}

// Тип для видов услуг в боковом меню
export interface ServiceSidebarTypes {
  title: string;
  items: ServiceSidebarItem[];
}

// Тип для преимуществ
export interface ServiceSidebarAdvantages {
  title: string;
  items: string[];
}

// Тип для необходимых документов
export interface ServiceSidebarDocuments {
  title: string;
  items: string[];
}

// Тип для бокового меню
export interface ServiceSidebar {
  types?: ServiceSidebarTypes;
  results?: ServiceSidebarResults;
  advantages?: ServiceSidebarAdvantages;
  documents?: ServiceSidebarDocuments;
}

// Тип для кнопок в секции CTA
export interface ServiceButton {
  text: string;
  link: string;
}

// Тип для секции CTA (Call to Action)
export interface ServiceCta {
  title: string;
  description: string;
  buttons: {
    primary: ServiceButton;
    secondary: ServiceButton;
  };
}

// Основной тип для данных услуги
export interface ServiceData {
  title: string;
  description: string;
  mainInfo: ServiceMainInfo;
  faq: ServiceFaq;
  sidebar: ServiceSidebar;
  cta: ServiceCta;
}
