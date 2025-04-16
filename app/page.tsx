'use client';

import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/translations';
import { LanguageToggle } from '@/components/language-toggle';
import { Confetti } from '@/components/confetti';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Gift, Car, Fuel, Facebook, Instagram, MessageCircle, BookIcon as TiktokIcon } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  const bannerImages = language == 'ro' ? [
    "/images/ro/1.jpg",
    "/images/ro/2.jpg",
    "/images/ro/3.jpg",
    "/images/ro/4.jpg",
  ] : [
    "/images/ru/1.jpg",
    "/images/ru/2.jpg",
    "/images/ru/3.jpg",
    "/images/ru/4.jpg",
  ];

  return (
    <>
      <Confetti />
      <LanguageToggle />
      
      <main className="min-h-screen bg-[#0B0B2B]">
        {/* Top Banner */}
        <div className="bg-blue-600 text-white py-3 px-4 text-center">
          <p className="text-sm md:text-base font-medium">
            🎉 CipAuto împlinește 15 ani – și tu primești cadouri! 🎉
          </p>
        </div>
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 px-4">
          <div className="max-w-6xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t.title}
            </h1>
            <p className="text-xl mb-12 text-blue-200 max-w-3xl mx-auto">
              {t.description}
            </p>
            
            {/* Image Carousel */}
            <div className="relative max-w-4xl mx-auto mb-16">
              <Carousel className="w-full">
                <CarouselContent>
                  {bannerImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative">
                        <img
                          src={image}
                          alt={`Banner ${index + 1}`}
                          className="rounded-xl shadow-2xl border border-white/10 w-full aspect-[16/9] object-contain"
                        />
                        {index === 0 && (
                          <div className="absolute -top-4 -right-4 bg-red-500 text-white px-6 py-3 rounded-full transform rotate-12 font-bold shadow-lg">
                            {t.grandPrize}
                          </div>
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="text-white" />
                <CarouselNext className="text-white" />
              </Carousel>
            </div>

            <section className="py-16 px-4 text-center">
          <Button 
            size="lg" 
            className="bg-blue-500 text-white hover:bg-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6 h-auto"
          >
            {t.viewCatalog}
          </Button>
        </section>
          </div>
        </section>

        {/* How to Participate */}
        <section className="py-24 px-4 bg-[#1A1A4A]">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">{t.howToParticipate.title}</h2>
            <div className="space-y-8">
              <div className="bg-[#2A2A5A] p-6 rounded-lg">
                <p className="text-lg">{t.howToParticipate.step1}</p>
              </div>
              
              <div className="bg-[#2A2A5A] p-6 rounded-lg">
                <p className="text-lg mb-4">{t.howToParticipate.step2}</p>
                <div className="flex gap-4">
                  <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                    Google
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                    Facebook
                  </a>
                </div>
              </div>
              
              <div className="bg-[#2A2A5A] p-6 rounded-lg">
                <p className="text-lg mb-4">{t.howToParticipate.step3}</p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                    Facebook
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                    Instagram
                  </a>
                  <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                    Telegram
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                    TikTok
                  </a>
                </div>
              </div>
              
              <div className="text-center text-xl font-medium text-green-400">
                {t.howToParticipate.confirmation}
              </div>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-white text-center">
            <h2 className="text-3xl font-bold mb-4">{t.event.title}</h2>
            <p className="text-xl mb-2">{t.event.date}</p>
            <p className="text-xl mb-6">{t.event.location}</p>
            <p className="text-xl text-blue-200">{t.event.description}</p>
          </div>
        </section>

        {/* Campaign Validity */}
        <section className="py-16 px-4 bg-[#1A1A4A]">
          <div className="max-w-4xl mx-auto text-white text-center">
            <p className="text-xl mb-4">{t.campaign.validity}</p>
            <p className="text-2xl font-bold text-blue-300">{t.campaign.cta}</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 text-center">
          <Button 
            size="lg" 
            className="bg-blue-500 text-white hover:bg-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6 h-auto"
          >
            {t.viewCatalog}
          </Button>
        </section>

        {/* Footer */}
        <footer className="bg-[#0B0B2B] py-12 px-4 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between text-white mb-8">
              <div className="text-3xl font-bold mb-6 md:mb-0">
                <img src='https://cipauto.md/images/main/logo.svg'/>
              </div>
              <div className="text-center md:text-right">
                <p className="text-gray-400">{t.address}</p>
                <p className="text-blue-400 font-medium">{t.phone}</p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-6 pt-6 border-t border-white/10">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <MessageCircle size={24} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <TiktokIcon size={24} />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}