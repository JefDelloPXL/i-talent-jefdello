// Edit this file to update site content. No code knowledge needed —
// just replace the text strings and image imports.

import heroImg from "@/assets/hero-1.jpg";
import htfFoto from "@/assets/HTF_foto.jpg";
import htfPng from "@/assets/HTF.png";
import busitGriet from "@/assets/BUSIT_griet.jpg";
import busitEat from "@/assets/BUSIT_eat.jpg";
import dddNotes from "@/assets/DDD_notes.jpg";
import ddddPhoto from "@/assets/DDDD.jpg";
import portrait from "@/assets/portrait.jpg";

export const site = {
  name: "Jef Dello",
  tagline: "student toegepaste informatica met focus op AI en Data",
  intro:
    "Dit portfolio bundelt mijn I-Talent traject: van seminaries en projectweken tot internationale samenwerking, hackathons en reflecties over mijn groei in communicatie, teamwork en technische vaardigheden.",
  hero: heroImg,
};

export const about = {
  portrait,
  bio: [
    "Ik ben Jef Dello, student Toegepaste Informatica met een grote interesse in data, technologie en alles wat daarbij komt kijken. Wat mij typeert, is mijn nieuwsgierigheid: ik leer graag nieuwe dingen, denk mee na over oplossingen en haal veel voldoening uit het werken aan projecten die echt iets kunnen betekenen.",
    "Binnen mijn traject staat voor mij vooral de X-factor centraal: met (em)passie bezig zijn, openstaan voor innovatie, samenwerken met anderen en blijven groeien als professional. Net daarom werk ik graag in teamverband, waar ik energie krijg van ideeën uitwisselen, samen naar een doel toewerken en elkaar sterker maken.",
    "Data en technologie zijn voor mij meer dan een studiegebied. Ik werk graag met informatie, analyses en systemen, en ik vind het boeiend om te zoeken naar hoe technologie slimmer en beter ingezet kan worden. Tegelijk heb ik doorheen mijn opleiding ook sterk gewerkt aan mijn communicatie en presentatievaardigheden, waardoor ik vandaag met meer vertrouwen mijn ideeën naar voren breng.",
    "De komende jaren wil ik mij verder ontwikkelen tot een professional die niet alleen technisch sterk is, maar ook initiatief neemt, duidelijk communiceert en samen met anderen impactvolle oplossingen bouwt. Voor mij draait dat uiteindelijk om blijven bijleren, kansen grijpen en met enthousiasme meewerken aan innovatieve projecten.",
  ],
  interests: ["data engineering", "AI-toepassingen", "sport en zwemmen", "gamen", "stage bij datasense"],
};

export type EssayBlock =
  | { type: "p"; text: string }
  | { type: "img"; src: string; alt: string; caption?: string; width?: "full" | "wide" | "inline" };

export type Highlight = {
  slug: string;
  title: string;
  teaser: string;
  context: string;
  hero: string;
  body: EssayBlock[];
};

export const highlights: Highlight[] = [
  {
    slug: "busit-week-ucll",
    title: "BusIT Week UCLL",
    teaser: "Internationale projectweek rond data-gedreven scouting voor OHL.",
    context: "Jaar 2 · Internationalisering · Maart 2024",
    hero: busitGriet,
    body: [
      { type: "p", text: "Tijdens de BusIT-week werkte ik in een internationaal team van acht studenten aan een echte business case van voetbalclub OHL. Het doel was een proof-of-concept bouwen waarmee scouts spelers met gelijkaardige profielen konden vinden op basis van data." },
      { type: "p", text: "We begonnen met het analyseren van de dataset en breidden de clustering uit om betekenisvolle spelersgroepen te vormen. Daarna bouwden we een eenvoudig platform waarop je een speler kon opzoeken en vergelijkbare spelers kon laten voorstellen door het model." },
      { type: "p", text: "Onze samenwerking was vanaf dag een heel internationaal: studenten uit Vlaanderen, Wallonie en Roemenie werkten samen in een strak schema. Dat maakte de afstemming soms uitdagend, maar net daardoor leerden we snel en concreet communiceren over prioriteiten en taken." },
      { type: "img", src: busitEat, alt: "Teamwerk tijdens BusIT Week", caption: "gratis eten is ook altijd welkom", width: "inline" },
      { type: "p", text: "De grootste uitdagingen waren tijdsdruk, communicatie in een internationaal team en het finetunen van het model om consistente resultaten te krijgen. Met iteratief testen en duidelijke taakverdeling kregen we alles toch werkend." },
      { type: "p", text: "Op het einde van de week pitchten we ons project voor een grote zaal. Ons team werd uiteindelijk als winnaar gekozen. Deze ervaring versterkte mijn vertrouwen in teamwork, presenteren en pragmatisch werken onder druk." },
      { type: "p", text: "Voor mij persoonlijk was dit een kantelpunt in hoe ik naar projectwerk kijk: niet alleen de technische oplossing telt, maar ook hoe goed je als team beslissingen neemt onder druk. Die combinatie van analyse, samenwerking en presentatie neem ik sindsdien mee in andere projecten." },
      { type: "p", text: "Wat me het meest is bijgebleven, is hoe belangrijk het was om technisch correcte keuzes ook begrijpelijk te maken voor een niet-technisch publiek. Tijdens de pitch moesten we niet alleen tonen dat het werkte, maar ook waarom het nuttig was voor scouts in de praktijk." },
      { type: "p", text: "Die vertaalslag van data naar bruikbare inzichten maakte dit project voor mij extra relevant. Het gaf me het gevoel dat ik niet enkel code schrijf, maar echt kan bijdragen aan beslissingen in een concrete context." },
    ],
  },
  {
    slug: "hackathon-aquatopia",
    title: "Hackathon Aquatopia",
    teaser: "Een eendaagse challenge om walvisvaarderslogboeken met AI te verwerken.",
    context: "Jaar 3 · Hackathon · November 2025",
    hero: htfFoto,
    body: [
      { type: "p", text: "Bij de Cronos Aquatopia Hackathon werkte ik met een PXL-team aan de challenge Leviathan's Ledger. De opdracht: historische logboeken van walvisvaarders uit de 19e eeuw verwerken en visualiseren op een interactieve kaart." },
      { type: "p", text: "We gebruikten een OpenAI API voor extractie, FastAPI voor de backend en Vue voor de frontend. Mijn focus lag op data-extractie en het betrouwbaarder maken van de output, zodat we hallucinaties zoveel mogelijk konden vermijden." },
      { type: "p", text: "De opdracht vroeg niet alleen technische uitvoering, maar ook keuzes maken in kwaliteit tegenover snelheid. Omdat we maar een dag hadden, moesten we heel bewust bepalen welke onderdelen absoluut betrouwbaar moesten zijn en welke delen eerder proof-of-concept mochten blijven." },
      { type: "img", src: htfPng, alt: "HTF afbeelding tijdens hackathon", caption: "de interactieve map van onze data", width: "inline" },
      { type: "p", text: "De grootste uitdaging was de ongestructureerde brondata: elk logboek had een andere structuur en formaat. Met meerdere iteraties en validatie bouwden we een pipeline die de gegevens in een uniformer formaat kon omzetten." },
      { type: "p", text: "Hoewel we niet wonnen, was het resultaat technisch sterk en leerde ik veel over AI-beperkingen, prioriteiten stellen en samenwerken onder strakke deadlines." },
      { type: "p", text: "Achteraf bekeken was dit een zeer waardevolle reality check over AI in de praktijk: modellen kunnen veel versnellen, maar zonder controle op consistentie en outputkwaliteit krijg je snel misleidende resultaten. Die les gebruik ik nu bewust in elk project met generatieve AI." },
      { type: "p", text: "Daarnaast merkte ik hoe belangrijk communicatie in kleine teams is wanneer iedereen parallel aan verschillende onderdelen werkt. Door snel resultaten met elkaar te delen konden we problemen vroeger opsporen en keuzes beter onderbouwen." },
      { type: "p", text: "De hackathon bevestigde voor mij dat ik graag werk op het kruispunt van data, AI en productdenken. Zelfs binnen een korte tijdspanne haal ik veel motivatie uit het bouwen van iets tastbaars dat meteen getest en getoond kan worden." },
    ],
  },
  {
    slug: "innovatieroute-ddd",
    title: "Innovatieroute Domain Driven Design",
    teaser: "Van event storming en bounded contexts naar .NET-implementatie.",
    context: "Jaar 3 · Innovatie · 2025",
    hero: dddNotes,
    body: [
      { type: "p", text: "In deze innovatieroute maakte ik kennis met Domain Driven Design (DDD): een manier van softwareontwikkeling waarin je eerst het domein en de processen goed begrijpt voor je gaat implementeren." },
      { type: "p", text: "Tijdens de theoretische sessies werkten we met concepten zoals event storming, bounded contexts en domeinmodellering. Daarna vertaalden we die inzichten naar een praktische .NET-implementatie." },
      { type: "p", text: "De grootste meerwaarde voor mij was dat DDD me dwong om trager en gerichter na te denken over het probleem zelf, in plaats van meteen code te schrijven. Door eerst het domein te modelleren werd duidelijker welke verantwoordelijkheden waar thuishoren." },
      { type: "img", src: ddddPhoto, alt: "DDD workshop en modellering", caption: "sticky notes zijn nog altijd nuttig", width: "inline" },
      { type: "p", text: "Wat ik hier vooral uit meenam, is dat goede softwarearchitectuur niet alleen technisch is, maar ook sterk draait om communicatie, gedeelde taal en iteratief verfijnen van je model in team." },
      { type: "p", text: "Deze activiteit gaf me extra inzicht in hoe grotere projecten in de praktijk gestructureerd worden en waarom DDD relevant is in professionele omgevingen." },
      { type: "p", text: "Daarnaast heeft deze workshop mijn blik op teamwerk verbreed: sterke architectuur ontstaat niet door een individueel idee, maar door voortdurend afstemmen met domeinkennis, feedback en iteratie. Dat maakt DDD voor mij niet alleen een techniek, maar ook een manier van samenwerken." },
      { type: "p", text: "Een belangrijke les voor mij was dat goede voorbereiding veel implementatietijd kan besparen. Door meer aandacht te geven aan contexten en terminologie in het begin, werden latere ontwerpkeuzes logischer en minder foutgevoelig." },
      { type: "p", text: "Ik neem uit deze innovatieroute vooral mee dat softwarekwaliteit vaak begint voor de eerste regel code. Het denkwerk rond domein, afbakening en verantwoordelijkheden bepaalt uiteindelijk hoe schaalbaar en onderhoudbaar een oplossing wordt." },
    ],
  },
];

export type Activity = {
  date: string; // YYYY-MM
  year: number; // college year (1, 2, 3, ...)
  title: string;
  type: "Seminar" | "Hackathon" | "Workshop" | "Project" | "Innovatieroute";
  description: string;
};

export const activities: Activity[] = [
  { date: "2026-02", year: 3, title: "Smart ICT PXL: maak een filter en/of hulptool", type: "Hackathon", description: "Tweedelige hackathon rond een filter/hulptool om irrelevante of zwakke websiteberichten te beperken." },
  { date: "2025-11", year: 3, title: "Hack The Future Aquatopia", type: "Hackathon", description: "Eendaagse hackathon rond Leviathan's Ledger met focus op AI-gedreven extractie en visualisatie van historische walvislogboeken." },
  { date: "2025-10", year: 3, title: "Innovatieroute: Domain Driven Design", type: "Innovatieroute", description: "Korte innovatieroute waarin we DDD-concepten zoals event storming en bounded contexts toepasten in .NET." },
  { date: "2025-12", year: 3, title: "Open Source", type: "Seminar", description: "Talk over open source tools en praktijken aangeboden door Cegeka." },
  { date: "2025-12", year: 3, title: "De wereld van UX", type: "Seminar", description: "Interactieve sessie over het belang van UX voor gebruiksvriendelijke digitale producten." },
  { date: "2025-11", year: 3, title: "Postman AI", type: "Seminar", description: "Interactieve sessie over de nieuwe AI-mogelijkheden binnen Postman." },
  { date: "2025-11", year: 3, title: "Quantum Machine Learning, from Zero to Hero", type: "Seminar", description: "Uitleg over de huidige en toekomstige rol van quantum machine learning bij IBM." },
  { date: "2025-10", year: 3, title: "Boekvoorstelling van Jackie Janssen", type: "Seminar", description: "Extra seminarie over AI en de bijdrage van AI aan de samenleving." },
  { date: "2025-10", year: 3, title: "POP-sessie 3TIN: My Team and I", type: "Workshop", description: "Sessie rond optimaal samenwerken en de kernvoorwaarden voor sterke teams." },
  { date: "2024-05", year: 2, title: "Gebruik van AI in softwareontwikkeling", type: "Seminar", description: "Talk over AI in softwareontwikkeling, best practices en prompt engineering." },
  { date: "2024-04", year: 2, title: "AI Wizards", type: "Seminar", description: "Sessie over het toekomstige interactieve gebruik van AI-agents in softwareprojecten." },
  { date: "2024-03", year: 2, title: "Code Katas", type: "Seminar", description: "Talk en interactieve sessie over test driven design in softwareontwikkeling." },
  { date: "2024-03", year: 2, title: "GenAI en Stable Diffusion", type: "Seminar", description: "Seminarie over het gebruik van generatieve AI en Stable Diffusion voor beeldcreatie." },
  { date: "2024-02", year: 2, title: "POP-sessie 2TIN: Brein aan het werk! Niet storen!", type: "Workshop", description: "Sessie over focus, aandacht en werken in een intens online omgeving." },
  { date: "2024-02", year: 2, title: "POP-sessie 2TIN: POPping", type: "Workshop", description: "Groepssessie rond zelfkennis, vaardigheden en feedback binnen het team." },
  { date: "2024-02", year: 2, title: "Projectweek 2TIN", type: "Project", description: "Projectweek rond persoonlijke ontwikkeling, teamwerking en opstart van het research project." },
];
