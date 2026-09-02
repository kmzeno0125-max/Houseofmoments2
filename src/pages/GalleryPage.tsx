import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import livingRoomImg from '../assets/files_10287071-2026-05-27T12-08-39-381Z-image.png';
import jacuzziImg from '../assets/jacuzzi.png';
import passionRoomImg from '../assets/passion-room.png';
import gardenNightImg from '../assets/files_10287071-2026-05-27T12-55-07-257Z-image.webp';

import selfieCornerImg from '../assets/selfie-corner.png';
import houseExteriorImg from '../assets/welcome-about.png';

const imagesData = {
  hu: [
    { src: livingRoomImg, alt: 'Hangulatos nappali meleg fényekkel', span: 'col-span-2 row-span-2' },
    { src: jacuzziImg, alt: 'Jacuzzi a kertben esti fényben', span: '' },
    { src: passionRoomImg, alt: 'Passion szoba romantikus hangulatfénnyel', span: '' },
    { src: gardenNightImg, alt: 'Kerti terasz hangulatos kivilágítással', span: 'row-span-2' },
    { src: selfieCornerImg, alt: 'Szelfi sarok virágfallal', span: 'col-span-2' },
    { src: houseExteriorImg, alt: 'House of Moments - modern ház külső', span: '' },
    { src: '/WhatsApp_Image_2026-05-30_at_09.49.22 copy.jpeg', alt: 'Fedett terasz fűtött jacuzzival', span: '' },
    { src: '/gallery/WhatsApp_Image_2026-05-29_at_10.12.41.jpeg', alt: 'Hangulatos nappali pezsgővel és gyertyafénnyel', span: 'col-span-2' },
    { src: '/gallery/WhatsApp_Image_2026-05-29_at_10.12.41_(1).jpeg', alt: 'Kerti pihenőhely fedett fa pavilon alatt', span: '' },
    { src: '/gallery/WhatsApp_Image_2026-05-29_at_10.12.41_(2).jpeg', alt: 'Szelfisarok virágfallal és hangulatvilágítással', span: '' },
    { src: '/gallery/WhatsApp_Image_2026-05-30_at_09.49.21_(1).jpeg', alt: 'Kivilágított fedett terasz jacuzzival', span: 'row-span-2' },
    { src: '/gallery/houseofmomentsfurdoszoba1.jpeg', alt: 'Fürdőszoba káddal és mosógéppel', span: '' },
    { src: '/gallery/houseofmomentsfurdoszoba2.jpeg', alt: 'Fürdőszoba esti hangulatvilágítással', span: '' },
    { src: '/gallery/houseofmomentswc1.jpeg', alt: 'Különálló WC mosdóval', span: '' },
  ],
  en: [
    { src: livingRoomImg, alt: 'Cozy living room with warm lighting', span: 'col-span-2 row-span-2' },
    { src: jacuzziImg, alt: 'Jacuzzi in the garden in evening light', span: '' },
    { src: passionRoomImg, alt: 'Passion room with romantic mood lighting', span: '' },
    { src: gardenNightImg, alt: 'Garden terrace with atmospheric lighting', span: 'row-span-2' },
    { src: selfieCornerImg, alt: 'Selfie corner with flower wall', span: 'col-span-2' },
    { src: houseExteriorImg, alt: 'House of Moments - modern house exterior', span: '' },
    { src: '/WhatsApp_Image_2026-05-30_at_09.49.22 copy.jpeg', alt: 'Covered terrace with heated jacuzzi', span: '' },
    { src: '/gallery/WhatsApp_Image_2026-05-29_at_10.12.41.jpeg', alt: 'Cozy living room with champagne and candlelight', span: 'col-span-2' },
    { src: '/gallery/WhatsApp_Image_2026-05-29_at_10.12.41_(1).jpeg', alt: 'Garden seating area beneath a covered wooden pavilion', span: '' },
    { src: '/gallery/WhatsApp_Image_2026-05-29_at_10.12.41_(2).jpeg', alt: 'Selfie corner with a flower wall and mood lighting', span: '' },
    { src: '/gallery/WhatsApp_Image_2026-05-30_at_09.49.21_(1).jpeg', alt: 'Illuminated covered terrace with jacuzzi', span: 'row-span-2' },
    { src: '/gallery/houseofmomentsfurdoszoba1.jpeg', alt: 'Bathroom with bathtub and washing machine', span: '' },
    { src: '/gallery/houseofmomentsfurdoszoba2.jpeg', alt: 'Bathroom with evening mood lighting', span: '' },
    { src: '/gallery/houseofmomentswc1.jpeg', alt: 'Separate toilet with washbasin', span: '' }
  ],
};

export default function GalleryPage() {
  const { lang } = useLanguage();
  const images = imagesData[lang];
  const [lightbox, setLightbox] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + images.length) % images.length);
  };

  const t = {
    heroTitle: lang === 'en' ? 'Gallery' : 'Galéria',
    heroSub: lang === 'en'
      ? 'Snapshots from the house — explore the rooms, the garden and the atmosphere.'
      : 'Pillanatképek a házból — fedezd fel a szobákat, a kertet és a hangulatot.',
    close: lang === 'en' ? 'Close' : 'Bezárás',
    prev: lang === 'en' ? 'Previous image' : 'Előző kép',
    next: lang === 'en' ? 'Next image' : 'Következő kép',
  };

  return (
    <>
      {/* Page hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-plum noise-texture relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-3"
          >
            House of Moments
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink"
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 text-ink/60 text-base sm:text-lg max-w-xl"
          >
            {t.heroSub}
          </motion.p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] sm:auto-rows-[240px] gap-3 sm:gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                viewport={{ once: true }}
                className={`overflow-hidden rounded-2xl cursor-pointer group ${img.span}`}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-plum/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-ink/80 hover:text-ink transition-colors"
              aria-label={t.close}
            >
              <X size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 sm:left-8 text-ink/80 hover:text-ink transition-colors"
              aria-label={t.prev}
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 sm:right-8 text-ink/80 hover:text-ink transition-colors"
              aria-label={t.next}
            >
              <ChevronRight size={40} />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
