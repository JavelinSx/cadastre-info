import { technicalPlansData } from './technical-plans/technical-plans';
import { technicalPlanConstructionData } from './technical-plans/construction';
import { technicalPlanBuildingData } from './technical-plans/building';
import { technicalPlanHouseData } from './technical-plans/house';
import { technicalPlanConstructionInProgressData } from './technical-plans/construction-in-progress';
import { technicalPlanPartBuildingData } from './technical-plans/part-building';
import { technicalPlanRoomData } from './technical-plans/room';

const servicesBaseList = [
  {
    id: 1,
    icon: 'i-heroicons-map',
    title: 'Кадастровые работы в отношении земельного участка(ов)',
    description:
      'Геодезические измерения, определение и закрепление границ земельного участка, постановка на кадастровый учет.',
    link: '/services/land-survey',
  },
  {
    id: 2,
    icon: 'i-heroicons-home-modern',
    title: 'Кадастровые работы в отношении домов, зданий и т.д',
    description:
      'Подготовка технических планов зданий, сооружений, помещений, объектов незавершенного строительства с внесением в ЕГРН.',
    link: '/services/technical-plans',
  },
  {
    id: 3,
    icon: 'i-heroicons-pencil-square',
    title: 'Геодезические работы',
    description:
      'Топографическая съемка местности, создание геодезических планов и карт, определение координат и высотных отметок объектов. Обеспечение точных геопространственных данных для проектирования, строительства и землеустройства.',
    link: '/services/geodesic',
  },
  {
    id: 4,
    icon: 'i-heroicons-chat-bubble-oval-left',
    title: 'Профессиональные консультации',
    description:
      'Экспертная поддержка по юридическим аспектам, техническим вопросам и оформлению документации. Помощь в разрешении спорных ситуаций и минимизации рисков при работе с недвижимостью.',
    link: '/services/consultations',
  },
];

// Преимущества
const featuresList = [
  {
    id: 1,
    icon: 'i-heroicons-academic-cap',
    title: 'Экспертность',
    description: 'Более 20 лет опыта работы в сфере кадастра и недвижимости.',
  },
  {
    id: 2,
    icon: 'i-heroicons-document-check',
    title: 'Гарантия качества',
    description: 'Все документы соответствуют актуальным требованиям законодательства.',
  },
  {
    id: 3,
    icon: 'i-heroicons-clock',
    title: 'Оперативность',
    description: 'Соблюдаем установленные сроки, ценим ваше время.',
  },
  {
    id: 4,
    icon: 'i-heroicons-user-circle',
    title: 'Персональный подход',
    description: 'Индивидуальные решения с учетом особенностей каждого объекта и пожеланий клиента.',
  },
];

export {
  technicalPlansData,
  servicesBaseList,
  featuresList,
  technicalPlanConstructionData,
  technicalPlanHouseData,
  technicalPlanBuildingData,
  technicalPlanConstructionInProgressData,
  technicalPlanPartBuildingData,
  technicalPlanRoomData,
};
