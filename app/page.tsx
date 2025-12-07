'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Mail, Phone, MapPin, Users, Home as HomeIcon, Bath, Wifi, Car, 
  X, ChevronLeft, ChevronRight, Utensils, Wind, Shield, Calendar, Check 
} from 'lucide-react'

/* ------------------------------
   GALLERY IMAGES
--------------------------------*/
const galleryImages = [
  {
    src: '/images/white-mountain-views.webp',
    alt: { en: 'Pool with White Mountains view', no: 'Basseng med utsikt til Hvitefjellene' },
    category: { en: 'Exterior', no: 'Utvendig' }
  },
  {
    src: '/images/hero-liv.webp',
    alt: { en: 'Villa exterior with pool', no: 'Villa eksteriør med basseng' },
    category: { en: 'Exterior', no: 'Utvendig' }
  },
  {
    src: '/images/main-bedroom.webp',
    alt: { en: 'Main bedroom', no: 'Hovedsoverom' },
    category: { en: 'Bedroom', no: 'Soverom' }
  },
  {
    src: '/images/twin-bedroom.webp',
    alt: { en: 'Twin bedroom', no: 'Tomannsrom' },
    category: { en: 'Bedroom', no: 'Soverom' }
  },
  {
    src: '/images/always-shade.webp',
    alt: { en: 'Shaded terrace', no: 'Skyggelagt terrasse' },
    category: { en: 'Outdoor', no: 'Utendørs' }
  },
  {
    src: '/images/Basseng_med_sjø.webp',
    alt: { en: 'Pool with sea view', no: 'Basseng med sjøutsikt' },
    category: { en: 'Pool', no: 'Basseng' }
  },
  {
    src: '/images/new-kitchen.webp',
    alt: { en: 'Modern kitchen', no: 'Moderne kjøkken' },
    category: { en: 'Kitchen', no: 'Kjøkken' }
  },
  {
    src: '/images/basic-bathroom.webp',
    alt: { en: 'Bathroom', no: 'Bad' },
    category: { en: 'Bathroom', no: 'Bad' }
  },
  {
    src: '/images/open-plan.webp',
    alt: { en: 'Open plan living', no: 'Åpen planløsning' },
    category: { en: 'Living', no: 'Stue' }
  },
  {
    src: '/images/mediterranean-garden.webp',
    alt: { en: 'Mediterranean garden', no: 'Middelhavshage' },
    category: { en: 'Garden', no: 'Hage' }
  },
]

/* ------------------------------
   TRANSLATIONS (content)
--------------------------------*/
const content = {
  en: {
    nav: { gallery: 'Gallery', location: 'Location', availability: 'Availability', inquire: 'Inquire' },
    hero: {
      location: 'Apokoronas, Crete',
      title: 'Where olive groves\nmeet the Aegean',
      subtitle: 'A serene retreat in the heart of Crete\'s countryside',
      exploreGallery: 'Explore Gallery',
      checkAvailability: 'Check Availability'
    },
    intro: {
      label: 'The Experience',
      title: 'Your private sanctuary in Apokoronas',
      text1: 'Discover the essence of Cretan hospitality in Liv\'s Hus, a thoughtfully designed 2-bedroom villa that captures the soul of the Mediterranean.',
      text2: 'Wake to the gentle rustling of olive trees and return to your private haven where every detail has been considered for your comfort.'
    },
    property: {
      label: 'The Villa',
      title: 'Designed for authentic living',
      description: 'Our villa seamlessly blends traditional Cretan architecture with contemporary comfort.',
      features: {
        sleeps: { title: 'Sleeps 4', subtitle: '2 Bedrooms' },
        bathrooms: { title: '2 Bathrooms', subtitle: 'Modern amenities' },
        size: { title: '120 m²', subtitle: 'Living space' },
        parking: { title: 'Parking', subtitle: 'Private drive' }
      },
      amenitiesTitle: 'Amenities & Services',
      amenities: {
        wifi: { title: 'High-speed WiFi', desc: 'Stay connected' },
        kitchen: { title: 'Fully equipped kitchen', desc: 'For home-cooked meals' },
        ac: { title: 'Air conditioning', desc: 'Climate control' },
        parking: { title: 'Secure parking', desc: 'Private driveway' },
        terrace: { title: 'Outdoor terrace', desc: 'Al fresco dining' },
        concierge: { title: 'Concierge service', desc: 'Reservations & activities' }
      }
    },
    gallery: { label: 'Gallery', title: 'A glimpse into your retreat' },
    location: {
      label: 'Location',
      title: 'The heart of authentic Crete',
      description: 'Apokoronas is a region of rare beauty, where traditional villages meet olive groves.',
      nearby: [
        '5 minutes to traditional tavernas',
        '15 minutes to pristine beaches',
        '30 minutes to Chania\'s harbor',
        '45 minutes to Chania Airport'
      ],
      attractionsTitle: 'Nearby Attractions',
      attractions: [
        'Lake Kournas',
        'Ancient Aptera',
        'Vamos Village',
        'Almyrida Beach'
      ]
    },
    calendar: {
      title: 'Check Availability',
      placeholder: 'Calendar integration',
      note: 'Connects to booking system',
      availableTitle: 'Available Periods',
      periods: ['Jan 15-31, 2025', 'Feb 10-Mar 5, 2025', 'Apr 1-20, 2025', 'May 15-Jun 10, 2025'],
      requestBooking: 'Request Booking'
    },
    contact: {
      label: 'Inquire',
      title: 'Begin your Cretan escape',
      description: 'We\'d love to hear about your plans.',
      form: {
        firstName: 'First name',
        lastName: 'Last name',
        email: 'Email address',
        phone: 'Phone (optional)',
        checkIn: 'Check-in',
        checkOut: 'Check-out',
        message: 'Your travel plans',
        submit: 'Send Inquiry'
      }
    },
    footer: { rights: 'All rights reserved.' }
  },
  no: {
    nav: { gallery: 'Galleri', location: 'Beliggenhet', availability: 'Tilgjengelighet', inquire: 'Forespørsel' },
    hero: {
      location: 'Apokoronas, Kreta',
      title: 'Der olivenlundene\nmøter Egeerhavet',
      subtitle: 'Et fredfylt tilfluktssted i hjertet av Kretas landsbygd',
      exploreGallery: 'Utforsk Galleri',
      checkAvailability: 'Sjekk Tilgjengelighet'
    },
    intro: {
      label: 'Opplevelsen',
      title: 'Ditt private fristed i Apokoronas',
      text1: 'Oppdag essensen av kretisk gjestfrihet på Liv\'s Hus, en gjennomtenkt utformet villa med 2 soverom.',
      text2: 'Våkn til raslingen fra oliventrærne og vend tilbake til ditt private fristed.'
    },
    property: {
      label: 'Villaen',
      title: 'Designet for autentisk bolig',
      description: 'Vår villa blander tradisjonell kretisk arkitektur med moderne komfort.',
      features: {
        sleeps: { title: 'Sover 4', subtitle: '2 Soverom' },
        bathrooms: { title: '2 Bad', subtitle: 'Moderne fasiliteter' },
        size: { title: '120 m²', subtitle: 'Boligareal' },
        parking: { title: 'Parkering', subtitle: 'Privat oppkjørsel' }
      },
      amenitiesTitle: 'Fasiliteter & Tjenester',
      amenities: {
        wifi: { title: 'Høyhastighets WiFi', desc: 'Hold deg tilkoblet' },
        kitchen: { title: 'Fullt utstyrt kjøkken', desc: 'For hjemmelagde måltider' },
        ac: { title: 'Klimaanlegg', desc: 'Klimakontroll' },
        parking: { title: 'Sikker parkering', desc: 'Privat oppkjørsel' },
        terrace: { title: 'Uteterrasse', desc: 'Utendørs servering' },
        concierge: { title: 'Concierge-tjeneste', desc: 'Reservasjoner & aktiviteter' }
      }
    },
    gallery: { label: 'Galleri', title: 'Et glimt inn i ditt tilfluktssted' },
    location: {
      label: 'Beliggenhet',
      title: 'Hjertet av autentisk Kreta',
      description: 'Apokoronas er en region av sjelden skjønnhet med tradisjonelle landsbyer.',
      nearby: [
        '5 minutter til tradisjonelle tavernaer',
        '15 minutter til strender',
        '30 minutter til Chanias havn',
        '45 minutter til Chania lufthavn'
      ],
      attractionsTitle: 'Attraksjoner',
      attractions: [
        'Kournas-sjøen',
        'Antikke Aptera',
        'Vamos landsby',
        'Almyrida strand'
      ]
    },
    calendar: {
      title: 'Sjekk Tilgjengelighet',
      placeholder: 'Kalenderintegrasjon',
      note: 'Kobles til bookingsystem',
      availableTitle: 'Tilgjengelige Perioder',
      periods: ['15.-31. jan 2025', '10. feb - 5. mar 2025', '1.-20. apr 2025', '15. mai - 10. jun 2025'],
      requestBooking: 'Forespør Booking'
    },
    contact: {
      label: 'Forespørsel',
      title: 'Begynn din kretiske flukt',
      description: 'Vi vil gjerne høre om planene dine.',
      form: {
        firstName: 'Fornavn',
        lastName: 'Etternavn',
        email: 'E-postadresse',
        phone: 'Telefon (valgfritt)',
        checkIn: 'Innsjekking',
        checkOut: 'Utsjekking',
        message: 'Reiseplanene dine',
        submit: 'Send Forespørsel'
      }
    },
    footer: { rights: 'Alle rettigheter reservert.' }
  }
}

/* ---------------------------------
   FRAMER MOTION VARIANTS
----------------------------------*/
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

/* ---------------------------------
   MAIN COMPONENT
----------------------------------*/
export default function Home() {
  const [lang, setLang] = useState<'en' | 'no'>('en')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [showCalendar, setShowCalendar] = useState(false)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  const t = content[lang]

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
  }

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % galleryImages.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)

  return (
    <div className="min-h-screen bg-white">

      {/* NAVIGATION */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-sand-200"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <h1 className="font-serif text-2xl tracking-tight">Liv's Hus</h1>
          <div className="flex items-center gap-8">
            <button
              onClick={() => setLang(lang === 'en' ? 'no' : 'en')}
              className="flex items-center gap-2 text-2xl hover:scale-110 transition-transform"
              aria-label={lang === 'en' ? 'Switch to Norwegian' : 'Switch to English'}
              title={lang === 'en' ? 'Norsk' : 'English'}
            >
              {lang === 'en' ? '🇬🇧' : '🇳🇴'}
            </button>
            <a href="#gallery" className="text-sm hover:text-ocean-500 transition-colors hidden md:block">
              {t.nav.gallery}
            </a>
            <a href="#location" className="text-sm hover:text-ocean-500 transition-colors hidden md:block">
              {t.nav.location}
            </a>
            <button 
              onClick={() => setShowCalendar(true)}
              className="text-sm hover:text-ocean-500 transition-colors hidden md:block"
            >
              {t.nav.availability}
            </button>
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-ocean-500 text-white text-sm font-medium tracking-wide hover:bg-ocean-600 transition-colors"
            >
              {t.nav.inquire}
            </a>
          </div>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden">
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 z-10" 
        />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="/images/white-mountain-views.webp"
          alt="Liv's Hus pool with White Mountains"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-sand-100 text-sm tracking-[0.3em] uppercase mb-6 font-light"
            >
              {t.hero.location}
            </motion.p>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight whitespace-pre-line"
            >
              {t.hero.title}
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-sand-100 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <button 
                onClick={() => openLightbox(0)}
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20 transition-all"
              >
                {t.hero.exploreGallery}
              </button>

              <button 
                onClick={() => setShowCalendar(true)}
                className="px-8 py-3 bg-white text-gray-900 hover:bg-sand-100 transition-all"
              >
                {t.hero.checkAvailability}
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 px-6 lg:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.p variants={itemVariants} className="text-ocean-500 text-sm tracking-[0.2em] uppercase mb-6 font-medium">
            {t.intro.label}
          </motion.p>

          <motion.h3 variants={itemVariants} className="font-serif text-4xl md:text-5xl mb-8 leading-tight text-balance">
            {t.intro.title}
          </motion.h3>

          <motion.div variants={itemVariants} className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed text-lg mb-6">{t.intro.text1}</p>
            <p className="text-gray-600 leading-relaxed text-lg">{t.intro.text2}</p>
          </motion.div>
        </motion.div>
      </section>

      {/* PROPERTY SECTION */}
      <section className="py-24 px-6 lg:px-12 bg-sand-50">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <img src="/images/open-plan.webp" alt="Open plan" className="w-full h-[500px] object-cover" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p className="text-ocean-500 text-sm tracking-[0.2em] uppercase mb-4 font-medium">{t.property.label}</p>
              
              <h4 className="font-serif text-3xl md:text-4xl mb-6">{t.property.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-8">{t.property.description}</p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Users, data: t.property.features.sleeps },
                  { icon: Bath, data: t.property.features.bathrooms },
                  { icon: HomeIcon, data: t.property.features.size },
                  { icon: Car, data: t.property.features.parking },
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <item.icon className="w-5 h-5 text-ocean-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">{item.data.title}</p>
                      <p className="text-sm text-gray-500">{item.data.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* AMENITIES */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={containerVariants} 
            className="border-t border-sand-200 pt-16"
          >
            <motion.h5 variants={itemVariants} className="font-serif text-2xl mb-8">
              {t.property.amenitiesTitle}
            </motion.h5>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Wifi, data: t.property.amenities.wifi },
                { icon: Utensils, data: t.property.amenities.kitchen },
                { icon: Wind, data: t.property.amenities.ac },
                { icon: Shield, data: t.property.amenities.parking },
                { icon: null, data: t.property.amenities.terrace },
                { icon: null, data: t.property.amenities.concierge },
              ].map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  {item.icon 
                    ? <item.icon className="w-6 h-6 text-ocean-500 mb-3" /> 
                    : <svg className="w-6 h-6 text-ocean-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m0-4v10l-8 4V7m8 4l-8-4" />
                      </svg>}
                  
                  <h6 className="font-medium mb-2">{item.data.title}</h6>
                  <p className="text-sm text-gray-600">{item.data.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-center mb-12"
          >
            <p className="text-ocean-500 text-sm tracking-[0.2em] uppercase mb-4 font-medium">
              {t.gallery.label}
            </p>

            <h4 className="font-serif text-3xl md:text-4xl">
              {t.gallery.title}
            </h4>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={containerVariants} 
            className="grid md:grid-cols-4 gap-4"
          >
            {galleryImages.map((image, index) => (
              <motion.button 
                key={index} 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(index)}
                className="relative overflow-hidden group cursor-pointer aspect-square"
              >
                <img src={image.src} alt={image.alt[lang]} className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-4">
                  <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.category[lang]}
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
        >
          <button 
            onClick={() => setLightboxOpen(false)} 
            className="absolute top-6 right-6 text-white hover:text-sand-200 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <button 
            onClick={prevImage} 
            className="absolute left-6 text-white hover:text-sand-200 transition-colors"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <motion.div 
            key={currentImage} 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.3 }} 
            className="max-w-6xl max-h-[90vh] px-20"
          >
            <img 
              src={galleryImages[currentImage].src} 
              alt={galleryImages[currentImage].alt[lang]} 
              className="w-full h-full object-contain" 
            />

            <p className="text-white text-center mt-4 text-sm">
              {galleryImages[currentImage].category[lang]} • {currentImage + 1} / {galleryImages.length}
            </p>
          </motion.div>

          <button 
            onClick={nextImage} 
            className="absolute right-6 text-white hover:text-sand-200 transition-colors"
          >
            <ChevronRight className="w-12 h-12" />
          </button>
        </motion.div>
      )}

      {/* CALENDAR MODAL */}
      {showCalendar && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6"
          onClick={() => setShowCalendar(false)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            onClick={(e) => e.stopPropagation()} 
            className="bg-white max-w-4xl w-full p-8 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-3xl">{t.calendar.title}</h3>

              <button onClick={() => setShowCalendar(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="border border-sand-200 p-8 text-center mb-8">
              <Calendar className="w-16 h-16 mx-auto mb-4 text-ocean-500" />
              <p className="text-gray-600 mb-4">{t.calendar.placeholder}</p>
              <p className="text-sm text-gray-500">{t.calendar.note}</p>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium mb-4">{t.calendar.availableTitle}</h4>

              {t.calendar.periods.map((period, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 border border-sand-200 hover:border-ocean-500 transition-colors"
                >
                  <span>{period}</span>
                  <Check className="w-5 h-5 text-green-500" />
                </div>
              ))}
            </div>

            <button 
              onClick={() => setShowCalendar(false)} 
              className="w-full mt-8 px-8 py-4 bg-ocean-500 text-white font-medium hover:bg-ocean-600 transition-colors"
            >
              {t.calendar.requestBooking}
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* LOCATION */}
      <section id="location" className="py-24 px-6 lg:px-12 bg-sand-50">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <p className="text-ocean-500 text-sm tracking-[0.2em] uppercase mb-4 font-medium">
                {t.location.label}
              </p>

              <h4 className="font-serif text-3xl md:text-4xl mb-6">{t.location.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-6">{t.location.description}</p>

              <ul className="space-y-4 mb-8">
                {t.location.nearby.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-ocean-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-sand-200 pt-6">
                <h5 className="font-medium mb-4">{t.location.attractionsTitle}</h5>

                <div className="space-y-2 text-sm text-gray-600">
                  {t.location.attractions.map((attraction, index) => (
                    <p key={index}>• {attraction}</p>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }} 
              className="order-1 md:order-2"
            >
              <img src="/images/Basseng_med_sjø.webp" alt="Pool with sea view" className="w-full h-[600px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 lg:px-12">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={containerVariants} 
          className="max-w-2xl mx-auto text-center"
        >
          <motion.p variants={itemVariants} className="text-ocean-500 text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            {t.contact.label}
          </motion.p>

          <motion.h4 variants={itemVariants} className="font-serif text-3xl md:text-4xl mb-6">
            {t.contact.title}
          </motion.h4>

          <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed mb-12">
            {t.contact.description}
          </motion.p>

          {/* CONTACT DETAILS */}
          <motion.div variants={itemVariants} className="space-y-6 mb-12">
            <a href="mailto:hello@harikacreative.com" className="flex items-center justify-center gap-3 text-gray-700 hover:text-ocean-500 transition-colors">
              <Mail className="w-5 h-5" />
              <span>hello@harikacreative.com</span>
            </a>

            <a href="tel:+306912345678" className="flex items-center justify-center gap-3 text-gray-700 hover:text-ocean-500 transition-colors">
              <Phone className="w-5 h-5" />
              <span>+30 691 234 5678</span>
            </a>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.form variants={itemVariants} className="space-y-6 max-w-lg mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder={t.contact.form.firstName} className="w-full px-6 py-4 border border-sand-300 focus:outline-none focus:border-ocean-500 transition-colors" />
              <input type="text" placeholder={t.contact.form.lastName} className="w-full px-6 py-4 border border-sand-300 focus:outline-none focus:border-ocean-500 transition-colors" />
            </div>

            <input type="email" placeholder={t.contact.form.email} className="w-full px-6 py-4 border border-sand-300 focus:outline-none focus:border-ocean-500 transition-colors" />

            <input type="tel" placeholder={t.contact.form.phone} className="w-full px-6 py-4 border border-sand-300 focus:outline-none focus:border-ocean-500 transition-colors" />

            <div className="grid md:grid-cols-2 gap-6">
              <input type="date" placeholder={t.contact.form.checkIn} className="w-full px-6 py-4 border border-sand-300 focus:outline-none focus:border-ocean-500 transition-colors" />
              <input type="date" placeholder={t.contact.form.checkOut} className="w-full px-6 py-4 border border-sand-300 focus:outline-none focus:border-ocean-500 transition-colors" />
            </div>

            <textarea placeholder={t.contact.form.message} rows={5} className="w-full px-6 py-4 border border-sand-300 focus:outline-none focus:border-ocean-500 transition-colors resize-none" />

            <button type="submit" className="w-full px-8 py-4 bg-ocean-500 text-white font-medium tracking-wide hover:bg-ocean-600 transition-colors">
              {t.contact.form.submit}
            </button>
          </motion.form>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 lg:px-12 border-t border-sand-200">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p className="font-serif text-xl mb-4">Liv's Hus</p>
          <p>© 2025 Hárika Creative. {t.footer.rights}</p>
        </div>
      </footer>

    </div>
  )
}
