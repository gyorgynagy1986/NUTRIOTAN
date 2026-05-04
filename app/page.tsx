"use client";

import { useState, useEffect, useRef } from "react";
import {
  Globe,
  ChevronDown,
  Menu,
  X,
  Zap,
  Shield,
  Activity,
  Target,
  Mail,
  Phone,
  MapPin,
  Beaker,
  Brain,
  Dumbbell,
  Users,
  Package,
} from "lucide-react";
import Image from "next/image";
import p1 from "../public/p1.webp";
import logo from "../public/logo.svg";
import photo6 from "../public/p6.webp";
import photo2 from "../public/p5.webp";
import photo3 from "../public/p2.webp";
import photo7 from "../public/p3.webp";
import photo4 from "../public/p4.webp";

const translations = {
  hu: {
    brand: "NUTRIOTAN",
    tagline: "Nutrition Systems",
    nav: {
      strategia: "Stratégia",
      rendszerek: "Táplálkozási rendszerek",
      teljesitmeny: "Teljesítmény",
      termekek: "Termékek",
      rolunk: "Rólunk",
      kapcsolat: "Kapcsolat",
    },
    hero: {
      title: "Metabolikus stratégia",
      lead1:
        "Precíziós táplálkozás rendszerek katonáknak és sportolóknak tervezve.",
      lead2:
        "A NUTRIOTAN Nutrition Systems tudományos alapokon fejlesztett táplálékkiegészítőket kínál azok számára, akik számára kiemelten fontos a fizikai és mentális teljesítmény, a megfelelő pihenés és regeneráció, továbbá a mentális és fizikai sérülésekből történő felépülés.",
      quote: "A teljesítmény nem véletlen, a teljesítmény biokémiai stratégia.",
    },
    cards: {
      military: "Katonai és sportteljesítmény támogatás",
      mito: "Mitokondriális fókusz | precíziós táplálkozás",
    },
    strategy: {
      title: "Metabolikus megközelítés",
      p1: "Stratégiánk középpontjában a mitokondriális energiatermelés fokozása áll, mellyel egy időben támogatjuk a mentális és pszichés folyamatokat kizárólag a természetes metabolikán keresztül.",
      highlight:
        "A teljesítmény nem véletlen, a teljesítmény biokémiai stratégia.",
      p2: "A termékeink elsősorban a katonai igénybevételhez mérten tervezettek, amit kiválóan alkalmazhatnak sportolók.",
      focusTitle: "Fókusz",
      focusDesc:
        "Tudományos alapokon fejlesztett rendszerek a fizikai és mentális teljesítmény, a regeneráció és a felépülés támogatására.",
      focus1: "Mitokondriális energiatermelés támogatása",
      focus2:
        "Mentális folyamatok támogatása természetes metabolikán keresztül",
      focus3: "Katonai és sportolói alkalmazhatóság",
    },
    systems: {
      title: "Táplálkozási rendszerek",
      desc: "Cél: A mitokondriális energia és a citromsav-ciklus támogatás meghatározott minőségű és mennyiségű makro-, mikronutrienseken keresztül. Meglátásunk szerint az emberi szervezetre egy rendkívül összetett rendszer ezért nem elég egy-két elemét támogatni, hanem figyelembe kell venni a komplexitását. Megfelelően támogatni csak komplex rendszerrel lehet. Katonai szolgálatok során az emberi szervezet fokozott fizikai és mentális igénybevételnek van kitéve. Műveleti körülmények közt ennek stratégiai jelentősége van. Ugyan ez igaz a sportolókra is. Az általunk fejlesztett termék ott segít, ahol arra szükség van.",
      quote:
        "A teljesítmény nem csupán kalóriabevitel kérdése. A teljesítmény a sejtszintű energiahatékonyság stratégiai eredménye.",
      card1Title: "Citromsav-ciklus kapcsolat",
      card1Desc:
        "közvetlenül vagy rövid metabolikus lépéssorozaton keresztül kapcsolódnak a citromsav-ciklushoz",
      card2Title: "Energiafolyamatok",
      card2Desc1:
        "támogatják az ATP-termelést és az oxidatív energia-folyamatokat",
      card2Desc2:
        "elősegítik az izomanyagcsere és a regeneráció optimalizálását",
      card3Title: "Prekurzor háttér",
      card3Desc1: "a fiziológiás szükséges prekurzor háttér biztosítása",
      card3Desc2:
        "Megelőzhetik a kialakulását, illetve segíthetnek a gyógyulásban a szorongás, depresszió és a PTSD kezelés során",
    },
    performance: {
      title: "Sporttáplálkozás és katonai teljesítmény támogatás",
      desc: "A NUTRIOTAN koncepciója nem a biológiai értelemben kész végtermékek pótlására, hanem olyan prekurzorok biztosítására épül, amelyekből a szervezet saját szabályozott folyamatai révén állítja elő a szükséges bioaktív molekulákat és lehetővé teszik a szervezet számára a saját, szabályozott biokémiai működés fenntartását.",
      militaryTitle: "Katonai és fokozott terhelésnek kitett személyeknek",
      military1: "mentális és fizikai teljesítmény fokozása és fenntartása",
      military2: "stabil energiaellátás",
      military3: "gyors reagálóképesség",
      military4: "gyors regeneráció",
      military5: "mentális pihenés fokozása",
      military6: "fokozott reagálóképesség",
      military7: "fokozott seb- és sérülés gyógyulás",
      military8:
        "poszt traumás stressz szindróma enyhítése, mentális gyógyulás elősegítése",
      sportsTitle: "Versenysportolók és magas teljesítményűeknek",
      sports1: "energiaoptimalizálás",
      sports2: "izomregeneráció",
      sports3: "teljesítménytámogatás",
      sports4: "oxidatív egyensúly fenntartása",
      sports5: "természetes tápanyagokkal nem doppinglistás szerekkel",
      sports6: "edzések, versenyek után a pihenés, alvás elősegítése",
      photoLabel: "Stratégiai teljesítmény | metabolikus támogatás",
    },
    endogenous: {
      title: "Endogén szintézis és célzott biokémiai támogatás",
      p1: "A NUTRIOTAN Nutrition Systems filozófiája az endogén működés tiszteletére épül. Nem helyettesítjük a szervezetet, támogatjuk annak természetes működését és szintézisútvonalait.",
      p2: ' \„Téglákat" adunk, amelyből ő tovább építkezik igényeinek megfelelően. Nem kényszerítjük a szervezetet a biokémiai szintézisre azonban, ha szükséges egy előanyag akkor az álljon rendelkezésre megfelelő mennyiségben, minőségben és arányban. Ezzel vagyunk többek. A Termékeink összetett tápanyag rendszerek.',
      p3: "Ahol a lehetőségek megengedik nagy hangsúlyt fektetünk, a természetes forrásból származó alapanyagok felhasználására.",
      highlight:
        "A metabolikus stabilitás stratégiai előnyt jelent, legyen szó katonai műveleti környezetről vagy élsport terhelésről.",
      systemTitle: "Rendszerszintű szemlélet",
      systemDesc:
        "Nem egy-két elem támogatása, hanem komplex rendszerben történő gondolkodás az emberi szervezet összetettségéhez igazítva.",
      system1: "Élelmiszertudomány",
      system2: "Molekuláris biológia",
      system3: "Élettan",
      system4: "Rendszerbiológia",
    },
    products: {
      title: "Termékek",
      placeholder: "Feltöltés alatt",
      devTitle: "Fejlesztési irány",
      devDesc1:
        "A NUTRIOTAN Nutrition Systems tudományos alapokon fejlesztett táplálékkiegészítőket kínál azok számára, akik számára kiemelten fontos a fizikai és mentális teljesítmény, a megfelelő pihenés és regeneráció, továbbá a mentális és fizikai sérülésekből történő felépülés.",
      devDesc2:
        "A metabolikus stabilitás stratégiai előnyt jelent, legyen szó katonai műveleti környezetről vagy élsport terhelésről.",
    },
    about: {
      title: "Rólunk",
      p1: "Mi egy katonai tapasztalattal és kutatói háttérrel rendelkező európai vállalkozás vagyunk. Célunk a stratégiai előny megteremtése a tápanyagokon keresztül katonák és sportolók számára.",
      p2: "Fejlesztéseink az élelmiszertudomány, molekuláris biológia, élettan és rendszerbiológia integrációján alapulnak.",
    },
    contact: {
      title: "Kapcsolat",
      address: "Cím:",
      addressValue: "6726 Szeged, Alsó kikötő sor 11. D. ép.",
      phone: "Telefon:",
      phoneValue: "+36 70 363 77 33",
      email: "E-mail:",
      emailValue: "contact@nutriotan.com",
    },
    footer: "NUTRIOTAN Nutrition Systems",
  },
  en: {
    brand: "NUTRIOTAN",
    tagline: "Metabolic Strategy | Precision Nutrition",
    nav: {
      strategia: "Strategy",
      rendszerek: "Nutrition Systems",
      teljesitmeny: "Performance",
      termekek: "Products",
      rolunk: "About Us",
      kapcsolat: "Contact",
    },
    hero: {
      title: "Metabolic strategy",
      lead1: "Precision nutrition systems designed for soldiers and athletes.",
      lead2:
        "NUTRIOTAN Nutrition Systems offers scientifically developed nutritional supplements for those who prioritize physical and mental performance, proper rest and recovery, and healing from mental and physical injuries.",
      quote:
        "Performance is not accidental, performance is a biochemical strategy.",
    },
    cards: {
      military: "Military and sports performance support",
      mito: "Mitochondrial focus | precision nutrition",
    },
    strategy: {
      title: "Metabolic Approach",
      p1: "At the core of our strategy is enhancing mitochondrial energy production, while simultaneously supporting mental and psychological processes exclusively through natural metabolism.",
      highlight:
        "Performance is not accidental, performance is a biochemical strategy.",
      p2: "Our products are primarily designed for military demands, which can be excellently applied by athletes.",
      focusTitle: "Focus",
      focusDesc:
        "Scientifically developed systems to support physical and mental performance, recovery, and healing.",
      focus1: "Support of mitochondrial energy production",
      focus2: "Support of mental processes through natural metabolism",
      focus3: "Military and athletic applicability",
    },
    systems: {
      title: "Nutrition Systems",
      desc: "Goal: Support mitochondrial energy and the citric acid cycle through precisely defined quality and quantity of macro and micronutrients. In our view, the human body is an extremely complex system, so it's not enough to support just one or two elements - we must consider its complexity. Proper support is only possible with a complex system. During military service, the human body is exposed to increased physical and mental demands. Under operational conditions, this has strategic significance. The same applies to athletes. Our developed products help where needed.",
      quote:
        "Performance is not just about calorie intake. Performance is the strategic outcome of cellular energy efficiency.",
      card1Title: "Citric Acid Cycle Connection",
      card1Desc:
        "directly or through short metabolic pathways connected to the citric acid cycle",
      card2Title: "Energy Processes",
      card2Desc1: "support ATP production and oxidative energy processes",
      card2Desc2: "promote optimization of muscle metabolism and recovery",
      card3Title: "Precursor Background",
      card3Desc1: "ensuring the physiologically necessary precursor background",
      card3Desc2:
        "Can help prevent or aid in recovery from anxiety, depression, and PTSD treatment",
    },
    performance: {
      title: "Sports Nutrition and Military Performance Support",
      desc: "The NUTRIOTAN concept is not based on supplementing biologically finished end products, but on providing precursors from which the body produces the necessary bioactive molecules through its own regulated processes, enabling the body to maintain its own regulated biochemical functioning.",
      militaryTitle: "Military and High-Stress Personnel",
      military1:
        "enhancement and maintenance of mental and physical performance",
      military2: "stable energy supply",
      military3: "quick reaction capability",
      military4: "rapid recovery",
      military5: "enhanced mental rest",
      military6: "enhanced reaction capability",
      military7: "accelerated wound and injury healing",
      military8:
        "alleviation of post-traumatic stress disorder, support of mental healing",
      sportsTitle: "Competitive Athletes and High-Performance Individuals",
      sports1: "energy optimization",
      sports2: "muscle recovery",
      sports3: "performance support",
      sports4: "maintaining oxidative balance",
      sports5: "with natural nutrients, not doping-listed substances",
      sports6: "promotion of rest and sleep after training and competitions",
      photoLabel: "Strategic performance | metabolic support",
    },
    endogenous: {
      title: "Endogenous Synthesis and Targeted Biochemical Support",
      p1: "The philosophy of NUTRIOTAN Nutrition Systems is built on respect for endogenous function. We don't replace the body; we support its natural functioning and synthesis pathways.",
      p2: 'We provide "building blocks" from which it continues to build according to its needs. We don\'t force the body into biochemical synthesis, but if a precursor is needed, it should be available in appropriate quantity, quality, and ratio. This is what makes us different. Our products are complex nutrient systems.',
      p3: "Where possibilities allow, we place great emphasis on using ingredients from natural sources.",
      highlight:
        "Metabolic stability represents a strategic advantage, whether in military operational environments or elite sports stress.",
      systemTitle: "Systems-Level Approach",
      systemDesc:
        "Not supporting one or two elements, but thinking in complex systems adapted to the complexity of the human body.",
      system1: "Food Science",
      system2: "Molecular Biology",
      system3: "Physiology",
      system4: "Systems Biology",
    },
    products: {
      title: "Products",
      placeholder: "Coming Soon",
      devTitle: "Development Direction",
      devDesc1:
        "NUTRIOTAN Nutrition Systems offers scientifically developed nutritional supplements for those who prioritize physical and mental performance, proper rest and recovery, and healing from mental and physical injuries.",
      devDesc2:
        "Metabolic stability represents a strategic advantage, whether in military operational environments or elite sports stress.",
    },
    about: {
      title: "About Us",
      p1: "We are a European company with military experience and research background. Our goal is to create strategic advantage through nutrients for soldiers and athletes.",
      p2: "Our developments are based on the integration of food science, molecular biology, physiology, and systems biology.",
    },
    contact: {
      title: "Contact",
      address: "Address:",
      addressValue: "6726 Szeged, Alsó kikötő sor 11. D. ép., Hungary",
      phone: "Phone:",
      phoneValue: "+36 70 363 77 33",
      email: "E-mail:",
      emailValue: "contact@nutriotan.com",
    },
    footer: "NUTRIOTAN Nutrition Systems",
  },
};

type Language = keyof typeof translations;

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function ScrollSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(60px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function NutriotanPage() {
  const [lang, setLang] = useState<Language>("hu");
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages = [
    { code: "hu" as Language, label: "Magyar", flag: "HU" },
    { code: "en" as Language, label: "English", flag: "EN" },
  ];

  const navItems = [
    { key: "strategia", href: "#strategia", icon: Zap },
    { key: "rendszerek", href: "#rendszerek", icon: Activity },
    { key: "teljesitmeny", href: "#teljesitmeny", icon: Shield },
    { key: "termekek", href: "#termekek", icon: Package },
    { key: "rolunk", href: "#rolunk", icon: Users },
    { key: "kapcsolat", href: "#kapcsolat", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-[#0b1420] text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2a384c]/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#0e2a72]/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-xl bg-[#071019]/90 shadow-2xl" : "backdrop-blur-xl bg-[#071019]/70"} border-b border-white/10`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Brand */}
            <div className="flex flex-col">
              <Image
                className="max-w-56"
                priority
                src={logo}
                alt="logo nutrition"
              ></Image>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    onMouseEnter={() => setActiveNav(item.key)}
                    onMouseLeave={() => setActiveNav(null)}
                    className={`
                      relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                      flex items-center gap-2 group
                      ${
                        activeNav === item.key
                          ? "bg-white/10 text-white"
                          : "text-gray-400 hover:text-white"
                      }
                    `}
                  >
                    {Icon && (
                      <Icon
                        className={`w-4 h-4 transition-all duration-300 ${
                          activeNav === item.key
                            ? "text-cyan-400"
                            : "text-gray-500 group-hover:text-cyan-400"
                        }`}
                      />
                    )}
                    <span>{t.nav[item.key as keyof typeof t.nav]}</span>

                    {/* Animated underline */}
                    <span
                      className={`
                        absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500
                        transition-all duration-300 rounded-full
                        ${activeNav === item.key ? "w-3/4 opacity-100" : "w-0 opacity-0"}
                      `}
                    />
                  </a>
                );
              })}
            </div>

            {/* Right side: Language + Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 
                    hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <Globe className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-sm font-bold">
                    {languages.find((l) => l.code === lang)?.flag}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      langMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Language Dropdown */}
                {langMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-[#162131] border border-white/10 shadow-2xl overflow-hidden">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          setLang(language.code);
                          setLangMenuOpen(false);
                        }}
                        className={`
                          w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200
                          ${
                            lang === language.code
                              ? "bg-cyan-500/20 text-cyan-400"
                              : "hover:bg-white/5 text-gray-300 hover:text-white"
                          }
                        `}
                      >
                        <span className="text-sm font-bold bg-white/10 px-2 py-1 rounded">
                          {language.flag}
                        </span>
                        <span className="font-medium">{language.label}</span>
                        {lang === language.code && (
                          <span className="ml-auto w-2 h-2 rounded-full bg-cyan-400" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-6">
              <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.key}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                    >
                      {Icon && <Icon className="w-5 h-5 text-cyan-400" />}
                      <span>{t.nav[item.key as keyof typeof t.nav]}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-7">
            {/* Main Hero Card */}
            <ScrollSection>
              <div className="relative overflow-hidden rounded-[32px] h-full border border-white/10 shadow-2xl group min-h-[620px]">
                {/* 1. Háttérkép - Kitölti a divet, nem torzul */}
                <Image
                  src={photo2}
                  alt="Hero background"
                  fill
                  className="object-cover z-0 transition-transform duration-1000 group-hover:scale-105"
                  priority
                />

                {/* 2. Eredeti Gradiens Overlay - Ez adja meg a sötétítést és a hangulatot */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background: `
        linear-gradient(135deg, rgba(6,12,20,0.84), rgba(10,18,28,0.38)),
        linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.62))
      `,
                  }}
                />

                {/* 3. Hover effekt (a cián villanás) */}
                <div className="absolute inset-0 z-15 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* 4. Tartalom - Relative z-20-al, hogy minden felett legyen */}
                <div className="relative z-20 p-8 sm:p-14 min-h-[620px] flex flex-col justify-end">
                  {/* Címsor */}
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-4 text-balance text-white">
                    {t.hero.title}
                  </h1>

                  {/* Leírások */}
                  <p className="text-lg text-gray-200 max-w-2xl mb-2 leading-relaxed">
                    {t.hero.lead1}
                  </p>
                  <p className="text-base text-gray-300 max-w-2xl mb-6 leading-relaxed">
                    {t.hero.lead2}
                  </p>

                  {/* Idézet */}
                  <p className="text-xl font-semibold text-white">
                    {t.hero.quote}
                  </p>
                </div>
              </div>
            </ScrollSection>

            {/* Side Cards */}
            <div className="grid gap-7">
              <ScrollSection delay={200}>
                <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-xl min-h-[295px] group">
                  <Image
                    alt="photo"
                    src={p1}
                    className="w-full h-full object-cover"
                  />

                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(5,10,16,0.22), rgba(8,15,24,0.78))",
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute left-5 bottom-5 px-4 py-2 rounded-full bg-[#0a1018]/80 border border-white/15 backdrop-blur-xl">
                    <span className="text-sm text-gray-100">
                      {t.cards.military}
                    </span>
                  </div>
                </div>
              </ScrollSection>

              <ScrollSection delay={400}>
                <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-xl min-h-[295px] group">
                  {/* 1. Kép - fill és object-cover a teljes kitöltéshez */}
                  <Image
                    src={photo6}
                    alt="Mito card background"
                    fill
                    className="object-cover z-0 transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* 2. Eredeti Gradiens Overlay (Sötétítés alulról felfelé) */}
                  <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                      background: `linear-gradient(180deg, rgba(5,10,16,0.22), rgba(8,15,24,0.78))`,
                    }}
                  />

                  {/* 3. Cián Hover Effekt */}
                  <div className="absolute inset-0 z-15 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* 4. Tartalom (Badge) - z-20-on, hogy felül legyen */}
                  <div className="absolute left-5 bottom-5 z-20 px-4 py-2 rounded-full bg-[#0a1018]/80 border border-white/15 backdrop-blur-xl">
                    <span className="text-sm text-gray-100">
                      {t.cards.mito}
                    </span>
                  </div>
                </div>
              </ScrollSection>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Strategy Section */}
        <section id="strategia" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-7">
              <ScrollSection>
                <article className="p-8 rounded-3xl h-full border border-white/10 bg-white/5 backdrop-blur-sm">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                    {t.strategy.title}
                  </h2>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    {t.strategy.p1}
                  </p>
                  <p className="text-lg font-bold text-white mb-4">
                    {t.strategy.highlight}
                  </p>
                  <p className="text-gray-200 leading-relaxed">
                    {t.strategy.p2}
                  </p>
                </article>
              </ScrollSection>

              <ScrollSection delay={200}>
                <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                    {t.strategy.focusTitle}
                  </h2>
                  <p className="text-gray-400 mb-6">{t.strategy.focusDesc}</p>
                  <div className="space-y-3">
                    {[
                      t.strategy.focus1,
                      t.strategy.focus2,
                      t.strategy.focus3,
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-all duration-300"
                      >
                        <Target className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </ScrollSection>
            </div>
          </div>
        </section>

        {/* Nutrition Systems Section */}
        <section id="rendszerek" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <ScrollSection>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                {t.systems.title}
              </h2>
              <p className="text-gray-400 max-w-4xl mb-8 leading-relaxed">
                {t.systems.desc}
              </p>
            </ScrollSection>

            <ScrollSection delay={200}>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-xl min-h-[520px] mb-8 group">
                {/* 1. RÉTEG: A KÉP (Legalul - z-0) */}
                <Image
                  alt="nutrition photo"
                  src={photo3}
                  fill
                  className="object-cover z-0"
                  priority
                />

                {/* 2. RÉTEG: AZ ÁLLANDÓ GRADIENS (A kép felett - z-10) */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background: `linear-gradient(120deg, rgba(6,11,18,0.78), rgba(15,24,36,0.22))`,
                  }}
                />

                {/* 3. RÉTEG: HOVER EFFEKT (Csak egér rátartáskor - z-20) */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none" />

                {/* 4. RÉTEG: SZÖVEGES TARTALOM (Legfelül - z-30) */}
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#090f16]/80 backdrop-blur-xl border border-white/10 z-30">
                  <p className="text-gray-100 text-lg">{t.systems.quote}</p>
                </div>
              </div>
            </ScrollSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Beaker,
                  title: t.systems.card1Title,
                  items: [t.systems.card1Desc],
                },
                {
                  icon: Activity,
                  title: t.systems.card2Title,
                  items: [t.systems.card2Desc1, t.systems.card2Desc2],
                },
                {
                  icon: Brain,
                  title: t.systems.card3Title,
                  items: [t.systems.card3Desc1, t.systems.card3Desc2],
                },
              ].map((card, i) => (
                <ScrollSection key={i} delay={i * 150}>
                  <article className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent group hover:border-cyan-500/30 transition-all duration-500 h-full">
                    <card.icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-bold text-white mb-4">
                      {card.title}
                    </h3>
                    <ul className="space-y-2 text-gray-400">
                      {card.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </ScrollSection>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Section */}
        <section id="teljesitmeny" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-7">
              <ScrollSection>
                <div className="relative overflow-hidden h-full rounded-3xl border border-white/10 shadow-xl min-h-[460px] group">
                  {/* 1. RÉTEG: A Kép (z-0) */}
                  <Image
                    src={photo7}
                    alt="Performance background"
                    fill
                    className="object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* 2. RÉTEG: Az állandó sötétítő gradiens (z-10) */}
                  <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                      background: `linear-gradient(180deg, rgba(6,12,20,0.18), rgba(8,15,24,0.72))`,
                    }}
                  />

                  {/* 3. RÉTEG: Hover effekt (cián sötétítés - z-20) */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* 4. RÉTEG: Felirat (Badge - z-30) */}
                  <div className="absolute left-5 bottom-5 z-30 px-4 py-2 rounded-full bg-[#0a1018]/80 border border-white/15 backdrop-blur-xl">
                    <span className="text-sm text-gray-100">
                      {t.performance.photoLabel}
                    </span>
                  </div>
                </div>
              </ScrollSection>

              <ScrollSection delay={200}>
                <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white">
                    {t.performance.title}
                  </h2>
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    {t.performance.desc}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                        <Shield className="w-5 h-5 text-cyan-400" />
                        {t.performance.militaryTitle}
                      </h3>
                      <ul className="space-y-2 pl-7">
                        {[
                          t.performance.military1,
                          t.performance.military2,
                          t.performance.military3,
                          t.performance.military4,
                          t.performance.military5,
                          t.performance.military6,
                          t.performance.military7,
                          t.performance.military8,
                        ].map((item, i) => (
                          <li
                            key={i}
                            className="text-gray-300 flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                        <Dumbbell className="w-5 h-5 text-cyan-400" />
                        {t.performance.sportsTitle}
                      </h3>
                      <ul className="space-y-2 pl-7">
                        {[
                          t.performance.sports1,
                          t.performance.sports2,
                          t.performance.sports3,
                          t.performance.sports4,
                          t.performance.sports5,
                          t.performance.sports6,
                        ].map((item, i) => (
                          <li
                            key={i}
                            className="text-gray-300 flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </ScrollSection>
            </div>
          </div>
        </section>

        {/* Endogenous Synthesis Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-7">
              <ScrollSection>
                <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm h-full">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white">
                    {t.endogenous.title}
                  </h2>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    {t.endogenous.p1}
                  </p>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    {t.endogenous.p2}
                  </p>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    {t.endogenous.p3}
                  </p>
                  <p className="text-lg font-bold text-white">
                    {t.endogenous.highlight}
                  </p>
                </article>
              </ScrollSection>

              <ScrollSection delay={200}>
                <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm h-full">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white">
                    {t.endogenous.systemTitle}
                  </h2>
                  <p className="text-gray-400 mb-6">
                    {t.endogenous.systemDesc}
                  </p>
                  <div className="space-y-3">
                    {[
                      t.endogenous.system1,
                      t.endogenous.system2,
                      t.endogenous.system3,
                      t.endogenous.system4,
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-white/5 border border-white/10 text-gray-200 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 cursor-default"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </article>
              </ScrollSection>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="termekek" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-7">
              <ScrollSection>
                <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm h-full">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                    {t.products.title}
                  </h2>
                  <div className="relative min-h-[230px] rounded-2xl border border-dashed border-white/20 overflow-hidden flex items-center justify-center group">
                    {/* 1. RÉTEG: A Kép (z-0) */}
                    <Image
                      src={photo4}
                      alt="Product placeholder"
                      fill
                      className="object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* 2. RÉTEG: Gradiens overlay (z-10) */}
                    <div
                      className="absolute inset-0 z-10 pointer-events-none"
                      style={{
                        background: `linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)`,
                      }}
                    />

                    {/* 3. RÉTEG: Sötétítő réteg, hogy a felirat mindig olvasható legyen (opcionális) */}
                    <div className="absolute inset-0 bg-black/20 z-15 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>
                </article>
              </ScrollSection>

              <ScrollSection delay={200}>
                <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm h-full">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                    {t.products.devTitle}
                  </h2>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    {t.products.devDesc1}
                  </p>
                  <p className="text-gray-200 leading-relaxed">
                    {t.products.devDesc2}
                  </p>
                </article>
              </ScrollSection>
            </div>
          </div>
        </section>

        {/* About & Contact Section */}
        <section id="rolunk" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-7">
              <ScrollSection>
                <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm h-full">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                    {t.about.title}
                  </h2>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    {t.about.p1}
                  </p>
                  <p className="text-gray-200 leading-relaxed">{t.about.p2}</p>
                </article>
              </ScrollSection>

              <ScrollSection delay={200}>
                <article
                  id="kapcsolat"
                  className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm h-full"
                >
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                    {t.contact.title}
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                      <MapPin className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform mt-0.5 flex-shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-gray-400 text-sm">
                          {t.contact.address}
                        </span>
                        <span className="text-gray-100 font-medium">
                          {t.contact.addressValue}
                        </span>
                      </div>
                    </div>
                    <a
                      href={`tel:${t.contact.phoneValue.replace(/\s/g, "")}`}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                    >
                      <Phone className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform mt-0.5 flex-shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-gray-400 text-sm">
                          {t.contact.phone}
                        </span>
                        <span className="text-gray-100 font-medium">
                          {t.contact.phoneValue}
                        </span>
                      </div>
                    </a>
                    <a
                      href={`mailto:${t.contact.emailValue}`}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                    >
                      <Mail className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform mt-0.5 flex-shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-gray-400 text-sm">
                          {t.contact.email}
                        </span>
                        <span className="text-gray-100 font-medium">
                          {t.contact.emailValue}
                        </span>
                      </div>
                    </a>
                  </div>
                </article>
              </ScrollSection>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-gray-400">{t.footer}</span>
        </div>
      </footer>
    </div>
  );
}
