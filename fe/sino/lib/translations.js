// Server-side translation utilities
export async function getTranslations(locale = 'en') {
  try {
    const fs = require('fs');
    const path = require('path');
    const filePath = path.join(process.cwd(), 'public', 'locales', locale, 'common.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Failed to load translations:', error);
    // Fallback to English
    try {
      const fs = require('fs');
      const path = require('path');
      const fallbackPath = path.join(process.cwd(), 'public', 'locales', 'en', 'common.json');
      const fallbackContents = fs.readFileSync(fallbackPath, 'utf8');
      return JSON.parse(fallbackContents);
    } catch (fallbackError) {
      console.error('Failed to load fallback translations:', fallbackError);
      return {};
    }
  }
}

export function createTranslationFunction(translations) {
  return (key) => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
}



