/**
 * IndexNow submission script
 * Уведомляет поисковые системы об изменениях на сайте
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Конфигурация
const config = {
  host: 'pleskad.ru',
  key: '660380b446b0183b2723e92884838108',
  keyLocation: 'https://pleskad.ru/660380b446b0183b2723e92884838108.txt',
};

// Список всех URL сайта
const urls = [
  'https://pleskad.ru/',
  'https://pleskad.ru/about',
  'https://pleskad.ru/contacts',
  'https://pleskad.ru/request',
  'https://pleskad.ru/blog',
  'https://pleskad.ru/blog/cadastral-value-changes',
  'https://pleskad.ru/blog/law-changes-2025',
  'https://pleskad.ru/blog/registration-simplification',
  'https://pleskad.ru/information',
  'https://pleskad.ru/information/docs',
  'https://pleskad.ru/information/faq',
  'https://pleskad.ru/information/glossary',
  'https://pleskad.ru/information/laws',
  'https://pleskad.ru/kadastrovyi-inzhener-plesetsk',
  'https://pleskad.ru/mezhevanie-plesetsk',
  'https://pleskad.ru/privacy-policy',
  'https://pleskad.ru/services',
  'https://pleskad.ru/services/consultations',
  'https://pleskad.ru/services/geodesic',
  'https://pleskad.ru/services/geodesic/geodesic-basis',
  'https://pleskad.ru/services/geodesic/geodesic-boundary',
  'https://pleskad.ru/services/geodesic/geodesic-calculation',
  'https://pleskad.ru/services/geodesic/geodesic-executive',
  'https://pleskad.ru/services/geodesic/geodesic-survey',
  'https://pleskad.ru/services/geodesic/geodesic-topography',
  'https://pleskad.ru/services/land-survey',
  'https://pleskad.ru/services/land-survey/land-allocation',
  'https://pleskad.ru/services/land-survey/land-boundary',
  'https://pleskad.ru/services/land-survey/land-division',
  'https://pleskad.ru/services/land-survey/land-formation',
  'https://pleskad.ru/services/land-survey/land-redistribution',
  'https://pleskad.ru/services/land-survey/land-union',
  'https://pleskad.ru/services/technical-plans',
  'https://pleskad.ru/services/technical-plans/building',
  'https://pleskad.ru/services/technical-plans/construction-in-progress',
  'https://pleskad.ru/services/technical-plans/construction',
  'https://pleskad.ru/services/technical-plans/floorplan',
  'https://pleskad.ru/services/technical-plans/house',
  'https://pleskad.ru/services/technical-plans/inspection',
  'https://pleskad.ru/services/technical-plans/part-building',
  'https://pleskad.ru/services/technical-plans/room',
];

// Функция для отправки запроса к IndexNow API
function submitToIndexNow(endpoint, urls) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      host: config.host,
      key: config.key,
      keyLocation: config.keyLocation,
      urlList: urls,
    });

    const options = {
      hostname: endpoint,
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
      },
    };

    const req = https.request(options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 202) {
          resolve({
            endpoint,
            status: res.statusCode,
            message: 'Success',
          });
        } else {
          resolve({
            endpoint,
            status: res.statusCode,
            message: responseData || 'Error',
          });
        }
      });
    });

    req.on('error', (error) => {
      reject({
        endpoint,
        error: error.message,
      });
    });

    req.write(data);
    req.end();
  });
}

// Основная функция
async function main() {
  console.log('🚀 Starting IndexNow submission...\n');
  console.log(`📊 Total URLs to submit: ${urls.length}\n`);

  // Список поддерживаемых поисковых систем
  const searchEngines = [
    'api.indexnow.org', // Основной endpoint (поддерживает Bing, Yandex и другие)
    'www.bing.com', // Microsoft Bing
    'yandex.com', // Yandex
  ];

  const results = [];

  for (const engine of searchEngines) {
    try {
      console.log(`📤 Submitting to ${engine}...`);
      const result = await submitToIndexNow(engine, urls);
      results.push(result);
      console.log(`✅ ${engine}: ${result.status} - ${result.message}\n`);
    } catch (error) {
      results.push(error);
      console.error(`❌ ${engine}: ${error.error}\n`);
    }
  }

  console.log('📋 Summary:');
  console.log('─────────────────────────────────────');
  results.forEach((result) => {
    const status = result.status ? `${result.status}` : 'Error';
    const icon = result.status && (result.status === 200 || result.status === 202) ? '✅' : '❌';
    console.log(`${icon} ${result.endpoint}: ${status}`);
  });
  console.log('─────────────────────────────────────');
  console.log('\n✨ IndexNow submission completed!');
}

// Запуск
main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
