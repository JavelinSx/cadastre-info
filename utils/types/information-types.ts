// Типы для информационных страниц

// Общие компоненты для разных страниц
export interface SidebarLink {
  text: string;
  url: string;
  icon: string;
}

export interface ExternalLink {
  text: string;
  url: string;
  icon: string;
}

export interface ContactCta {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

// Главная страница информации
export interface UsefulMaterial {
  icon: string;
  title: string;
  description: string;
  url: string;
  linkText: string;
}

export interface Subsection {
  title: string;
  content: string;
}

export interface NumberedItem {
  title: string;
  description: string;
}

export interface Section {
  title: string;
  paragraphs: string[];
  list?: string[];
  numberedList?: NumberedItem[];
  subsections?: Subsection[];
  linkText?: string;
  linkUrl?: string;
  subtitleText?: string;
  paragraphsAfter?: string[];
}

export interface InformationPageData {
  title: string;
  description: string;
  sections: Section[];
  sidebarLinks: SidebarLink[];
  popularQuestions: string[];
  usefulMaterials: UsefulMaterial[];
}

// Страница с законодательством
export interface Law {
  name: string;
  title: string;
  description: string;
  link: string;
  isMain?: boolean;
  isUpdate?: boolean;
}

export interface LawCategory {
  title: string;
  laws: Law[];
}

export interface ResourceCategory {
  title: string;
  links: ExternalLink[];
}

export interface Faq {
  question: string;
  answer: string;
}

export interface LawsPageData {
  title: string;
  description: string;
  introText: string;
  lawCategories: LawCategory[];
  usefulResources: ResourceCategory[];
  faq: Faq[];
}

// Страница FAQ
export interface QuestionWithAnswer {
  question: string;
  answer: string;
}

export interface QuestionCategory {
  title: string;
  icon: string;
  questions: QuestionWithAnswer[];
}

export interface FaqPageData {
  title: string;
  description: string;
  introText: string;
  categories: QuestionCategory[];
  popularQuestions: string[];
  searchText: string;
  contactCta: ContactCta;
}

// Страница с документами
export interface DocumentProcess {
  requiredDocuments: string[];
  preparationProcess: string[];
  sampleLink: string;
  instructionLink: string;
}

export interface Document extends DocumentProcess {
  title: string;
  description: string;
}

export interface DocumentCategory {
  title: string;
  icon: string;
  documents: Document[];
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

export interface RegistrationProcess {
  title: string;
  steps: ProcessStep[];
}

export interface DownloadableTemplate {
  title: string;
  description: string;
  fileFormat: string;
  fileSize: string;
  downloadLink: string;
}

export interface DocsPageData {
  title: string;
  description: string;
  introText: string;
  documentCategories: DocumentCategory[];
  registrationProcess: RegistrationProcess;
  downloadableTemplates: DownloadableTemplate[];
  contactCta: ContactCta;
}

// Страница словаря терминов
export interface Term {
  term: string;
  definition: string;
}

export interface RelatedLinkCategory {
  title: string;
  links: ExternalLink[];
}

export interface GlossaryPageData {
  title: string;
  description: string;
  introText: string;
  alphabet: string[];
  terms: Term[];
  relatedLinks: RelatedLinkCategory[];
  contactCta: ContactCta;
}
