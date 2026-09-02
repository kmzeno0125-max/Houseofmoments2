import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, TreePine, Car, Plane, Compass, ArrowRight, TrainFront } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const margitszigetImg = '/WhatsApp_Image_2026-06-12_at_14.25.16.jpeg';
const fishermanBastionImg = '/WhatsApp_Image_2026-06-12_at_14.26.39.jpeg';
const gyomroiLakeImg = '/WhatsApp_Image_2026-06-12_at_14.31.23.jpeg';

const pageData = {
  hu: {
    heroTitle: 'Elhelyezkedés & Programok',
    heroSub: 'Fedezd fel Maglód nyugodt környezetét, a közeli kikapcsolódási lehetőségeket és a környék élményeit.',
    locationLabel: 'Elhelyezkedés',
    locationTitle: 'Nyugodt pihenés Maglódon',
    locationText: 'A House of Moments Maglód csendes, könnyen megközelíthető környezetben várja vendégeit. Ideális választás azoknak, akik nyugodt kikapcsolódásra vágynak, mégis fontos számukra a kényelmes elérhetőség.',
    mapTitle: 'House of Moments Maglód elhelyezkedése',
    programsLabel: 'Programok',
    programsTitle: 'Programlehetőségek a környéken',
    programsText: 'A környék többféle kikapcsolódási lehetőséget kínál, legyen szó nyugodt sétáról, gasztronómiai élményekről, családi programokról vagy rövidebb kirándulásokról.',
    moodTitle: 'Tökéletes választás pihenéshez és közös élményekhez',
    moodText: 'A vendégház elhelyezkedése egyszerre biztosít nyugodt környezetet és kényelmes kiindulópontot a környék felfedezéséhez.',
    transportTitle: 'Közlekedés Budapest felé',
    transportText: 'Maglódról rendszeres vonatjáratok közlekednek a Keleti pályaudvarra, az utazási idő körülbelül 25–30 perc. A vonatok megközelítőleg 30 percenként indulnak, a maglódi vasútállomásnál pedig ingyenes parkolás érhető el. A környékről autóbuszjáratokkal is elérhető Budapest és több közeli település.',
    photoUnavailable: 'Saját helyszínfotó feltöltésre vár',
    ctaBtn: 'Foglalás',
    bottomCtaTitle: 'Kérdésed van a környékkel kapcsolatban?',
    bottomCtaText: 'Írj nekünk, és szívesen segítünk ajánlani programokat, éttermeket vagy kikapcsolódási lehetőségeket az itt töltött időhöz.',
    bottomCtaBtn: 'Kapcsolatfelvétel',
    locationCards: [
      { icon: Car, title: 'Könnyű megközelítés', text: 'Autóval gyorsan elérhető, csendes környezetben.' },
      { icon: TreePine, title: 'Csendes környezet', text: 'Természetközeli, nyugodt pihenésre alkalmas elhelyezkedés.' },
      { icon: MapPin, title: 'Budapest közelében', text: 'Kb. 30 perc autóval a főváros központjától.' },
      { icon: Plane, title: 'Repülőtér elérhető távolságban', text: 'A Budapest Liszt Ferenc Nemzetközi Repülőtér kb. 13 perc autóval.' },
    ],
    programCards: [
      { image: gyomroiLakeImg, title: 'Gyömrői Tófürdő', description: 'Tófürdő és vízisport-lehetőség természetközeli környezetben.', distance: 'kb. 7 perc' },
      { image: '/assets/locations/aquarena-mogyorod.jpg', title: 'Aquaréna', description: 'Családi vízipark csúszdákkal és egész napos kikapcsolódással.', distance: 'kb. 25 perc' },
      { image: '/godolloi-kiralyi-kastely.jpg', title: 'Gödöllői Királyi Kastély', description: 'Történelmi kastélypark és kulturális program Gödöllőn.', distance: 'kb. 25 perc' },
      { image: '/assets/locations/hungaroring.jpg', title: 'Hungaroring', description: 'Nemzetközi motorsport-események és versenyhétvégék helyszíne.', distance: 'kb. 25 perc' },
      { image: '/assets/locations/liszt-ferenc-repuloter.jpg', title: 'Budapest Liszt Ferenc Nemzetközi Repülőtér', description: 'A főváros nemzetközi repülőtere könnyen elérhető Maglódról.', distance: 'kb. 13 perc' },
      { image: fishermanBastionImg, title: 'Halászbástya', description: 'Budapest egyik legismertebb panorámája a Budai Várnegyedben.', distance: 'kb. 35 perc' },
      { image: '/assets/locations/orszaghaz.jpg', title: 'Országház', description: 'A Duna-part ikonikus épülete Budapest történelmi városközpontjában.', distance: 'kb. 35 perc' },
      { image: '/assets/locations/budai-var.jpg', title: 'Budai Vár', description: 'Történelmi városrész múzeumokkal, sétákkal és panorámával.', distance: 'kb. 35 perc' },
      { image: margitszigetImg, title: 'Margitsziget', description: 'Zöld sziget a Duna közepén sétányokkal és pihenőhelyekkel.', distance: 'kb. 35 perc' },
    ],
  },
  en: {
    heroTitle: 'Location & Things to Do',
    heroSub: 'Discover the peaceful surroundings of Maglód, nearby leisure options and local experiences.',
    locationLabel: 'Location',
    locationTitle: 'Peaceful Relaxation in Maglód',
    locationText: 'House of Moments welcomes its guests in a quiet, easily accessible setting in Maglód. It is an ideal choice for those seeking peaceful relaxation while valuing convenient access.',
    mapTitle: 'House of Moments Maglód location',
    programsLabel: 'Things to Do',
    programsTitle: 'Activities in the Area',
    programsText: 'The area offers a variety of leisure options, whether it is a peaceful walk, gastronomic experiences, family programs or shorter excursions.',
    moodTitle: 'The Perfect Choice for Relaxation and Shared Experiences',
    moodText: 'The location of the guest house provides both a peaceful environment and a convenient starting point for exploring the area.',
    transportTitle: 'Getting to Budapest',
    transportText: 'Regular trains run from Maglód to Keleti Railway Station, with a journey time of approximately 25–30 minutes. Trains depart roughly every 30 minutes, and free parking is available at Maglód railway station. Budapest and several nearby towns can also be reached by local bus services.',
    photoUnavailable: 'A dedicated location photo is not yet available',
    ctaBtn: 'Booking',
    bottomCtaTitle: 'Have a Question About the Area?',
    bottomCtaText: 'Write to us and we will be happy to recommend programs, restaurants or leisure options for your stay.',
    bottomCtaBtn: 'Get in Touch',
    locationCards: [
      { icon: Car, title: 'Easy Access', text: 'Quickly accessible by car, in a quiet setting.' },
      { icon: TreePine, title: 'Peaceful Surroundings', text: 'A nature-close location perfect for tranquil relaxation.' },
      { icon: MapPin, title: 'Near Budapest', text: 'About 30 minutes by car from the city center.' },
      { icon: Plane, title: 'Airport Within Reach', text: 'Budapest Liszt Ferenc International Airport is about 13 minutes by car.' },
    ],
    programCards: [
      { image: gyomroiLakeImg, title: 'Gyömrő Lake Bath', description: 'A lakeside bathing and watersports destination in a nature-close setting.', distance: 'approx. 7 min' },
      { image: '/assets/locations/aquarena-mogyorod.jpg', title: 'Aquaréna', description: 'A family water park with slides and full-day entertainment.', distance: 'approx. 25 min' },
      { image: '/godolloi-kiralyi-kastely.jpg', title: 'Royal Palace of Gödöllő', description: 'A historic palace and palace grounds offering culture and sightseeing.', distance: 'approx. 25 min' },
      { image: '/assets/locations/hungaroring.jpg', title: 'Hungaroring', description: 'The venue for international motorsport events and race weekends.', distance: 'approx. 25 min' },
      { image: '/assets/locations/liszt-ferenc-repuloter.jpg', title: 'Budapest Liszt Ferenc International Airport', description: 'The capital’s international airport is easily accessible from Maglód.', distance: 'approx. 13 min' },
      { image: fishermanBastionImg, title: 'Fisherman’s Bastion', description: 'One of Budapest’s best-known viewpoints in the Castle District.', distance: 'approx. 35 min' },
      { image: '/assets/locations/orszaghaz.jpg', title: 'Hungarian Parliament Building', description: 'The iconic riverside landmark in Budapest’s historic city centre.', distance: 'approx. 35 min' },
      { image: '/assets/locations/budai-var.jpg', title: 'Buda Castle', description: 'A historic district with museums, walks and panoramic views.', distance: 'approx. 35 min' },
      { image: margitszigetImg, title: 'Margaret Island', description: 'A green island in the Danube with promenades and places to relax.', distance: 'approx. 35 min' },
    ],
  },
};

export default function LocationPage() {
  const { lang } = useLanguage();
  const t = pageData[lang];

  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-plum noise-texture relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
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
            className="mt-4 text-ink/60 text-base sm:text-lg max-w-2xl mx-auto"
          >
            {t.heroSub}
          </motion.p>
        </div>
      </section>

      {/* Location Block */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <p className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-3">{t.locationLabel}</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-plum mb-5">
                {t.locationTitle}
              </h2>
              <p className="text-plum/70 text-base sm:text-lg leading-relaxed">
                {t.locationText}
              </p>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="flex-1 w-full"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-gold/15 shadow-lg bg-plum/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1348.2!2d19.3488!3d47.4365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dd2a98a2f1e7%3A0x5e5e0f1b9e8c1a2b!2sMiksz%C3%A1th%20K%C3%A1lm%C3%A1n%20u.%206%2C%20Magl%C3%B3d%2C%202234!5e0!3m2!1shu!2shu!4v1716600000000!5m2!1shu!2shu"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t.mapTitle}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.locationCards.map((card, i) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-plum border border-gold/15 rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <card.icon size={22} className="text-gold" />
                </div>
                <h3 className="font-display text-base font-semibold text-ink mb-2">{card.title}</h3>
                <p className="text-ink/60 text-sm leading-relaxed">{card.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Block */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-3">{t.programsLabel}</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-plum mb-4">
              {t.programsTitle}
            </h2>
            <p className="text-plum/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {t.programsText}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {t.programCards.map((card, i) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-plum border border-gold/15 rounded-2xl overflow-hidden shadow-lg group"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  {card.image ? (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-plum/80 flex items-center justify-center px-6 text-center">
                      <span className="text-ink/45 text-xs uppercase tracking-[0.12em]">{t.photoUnavailable}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-plum/60 to-transparent pointer-events-none" />
                  {card.distance && (
                    <span className="absolute bottom-3 right-3 bg-plum/80 backdrop-blur-sm text-ink/80 text-xs px-3 py-1 rounded-full border border-gold/10">
                      {card.distance}
                    </span>
                  )}
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">{card.title}</h3>
                  <p className="text-ink/60 text-sm leading-relaxed">{card.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Budapest transport */}
      <section className="py-16 sm:py-20 bg-wine">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-plum border border-gold/20 rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col sm:flex-row gap-5 sm:gap-6 items-start"
          >
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
              <TrainFront size={22} className="text-gold" />
            </div>
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-3">{t.transportTitle}</h2>
              <p className="text-ink/70 text-base leading-relaxed">{t.transportText}</p>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Highlight / Mood Block */}
      <section className="py-16 sm:py-20 bg-plum noise-texture">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-ink mb-4">
              {t.moodTitle}
            </h2>
            <p className="text-ink/60 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              {t.moodText}
            </p>
            <Link
              to="/foglalas"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-rose text-white font-semibold text-base shadow-xl hover:shadow-gold/30 hover:scale-[1.02] transition-all duration-300"
            >
              {t.ctaBtn}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Compass size={32} className="text-gold mx-auto mb-4" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-plum mb-3">
              {t.bottomCtaTitle}
            </h2>
            <p className="text-plum/70 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              {t.bottomCtaText}
            </p>
            <Link
              to="/kapcsolat"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-plum text-ink font-semibold text-base border border-gold/20 shadow-lg hover:border-gold/40 hover:scale-[1.02] transition-all duration-300"
            >
              {t.bottomCtaBtn}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
