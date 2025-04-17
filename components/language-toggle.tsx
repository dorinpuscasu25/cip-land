'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === 'ro' ? 'ru' : 'ro')}
      className="font-medium"
    >
      {language === 'ro' ? 'RU' : 'RO'}
    </Button>
  );
}