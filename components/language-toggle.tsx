'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-10 right-0 z-50">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setLanguage(language === 'ro' ? 'ru' : 'ro')}
        className="font-medium text-black"
      >
        {language === 'ro' ? 'RU' : 'RO'}
      </Button>
    </div>
  );
}