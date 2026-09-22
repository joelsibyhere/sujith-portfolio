import { clientPosters } from "./client-posters";
const nayattu = clientPosters["nayattu"] || "/images/nayattu.jpg";
const thallumaala = clientPosters["thallumaala"] || "/images/thallumaala.jpg";
const tagaru = clientPosters["tagaru"] || "/images/tagaru.jpg";
const salaga = clientPosters["salaga"] || "/images/salaga.jpg";
const popcornMonkeyTigerImg = "/images/popcorn-monkey-tiger.jpg";
const mysoreDiariesImg = "/images/mysore-diaries.jpg";
const aeDilHaiMushkil = clientPosters["ae-dil-hai-mushkil"] || "/images/ae-dil-hai-mushkil.jpg";
const vikramVedha = clientPosters["vikram-vedha"] || "/images/vikram-vedha.jpg";
import { contactEmail } from "@/lib/contact";

/**
 * PHASE 5 — DATA ARCHITECTURE
 * -----------------------
 * Reusable data structures designed to be easily replaced
 * by the client's real CMS or database data.
 * No fabricated data is used. Placeholders are clear.
 */

// --- SOCIAL ---
export const social = {
  instagram: "https://www.instagram.com/sujithsreedhar?igsh=MXY4azE2NXZnbWNsYg%3D%3D&utm_source=qr",
  studio_instagram: "https://www.instagram.com/2bqstudios?igsh=YjVoaWpuNHk3MTNh",
  youtube: "https://www.youtube.com/shorts/qI5OJRYC-Qc",
  studio_youtube: "https://www.youtube.com/@2barqstudios930",
  spotify:
    "https://open.spotify.com/playlist/4G9wC9KC30GurP2Ndn9jyS?si=1sPz8-lNQT2Es58lPSBUAw&utm_source=copy-link",
  email: contactEmail,
};

// --- BIO ---
export type Bio = {
  shortBio: string;
  fullBio: string;
  portrait: string;
  philosophy: string;
};

export const bio: Bio = {
  shortBio:
    "Sujith Sreedhar is a highly sought-after Music Engineer specializing in Mixing and Mastering.",
  fullBio:
    "With a career spanning over 600 feature films across multiple languages, Sujith Sreedhar has established himself as a defining force in modern cinematic sound design. From the high-octane energy of Vikram Vedha and Thallumaala to the nuanced emotional depth of Ae Dil Hai Mushkil and Nayattu, his sonic signature is characterized by pristine clarity, immersive depth, and massive cinematic scale. Operating at the intersection of technical precision and artistic intuition, Sujith approaches every project not just as an audio engineer, but as a storyteller.",
  portrait: "",
  philosophy:
    "Sound is the invisible architecture of emotion. Every frame has a pulse; my role is to find that heartbeat and amplify it, transforming raw audio into an unforgettable cinematic experience.",
};

// --- PROJECT ---
export type Project = {
  slug: string;
  title: string;
  year: number;
  role: string;
  artwork: string;
  description?: string;
  audioUrl?: string;
  videoUrl?: string;
  externalUrl?: string;
};

export const selectedWork: Project[] = [
  {
    slug: "ae-dil-hai-mushkil",
    title: "Ae Dil Hai Mushkil",
    year: 2016,
    role: "Recording Engineer",
    artwork: aeDilHaiMushkil,
    externalUrl: "https://www.imdb.com/title/tt4902146/",
  },
  {
    slug: "vikram-vedha",
    title: "Vikram Vedha",
    year: 2017,
    role: "Mixing / Mastering",
    artwork: vikramVedha,
    externalUrl: "https://www.imdb.com/title/tt6148156/",
  },
  {
    slug: "nayattu",
    title: "Nayattu",
    year: 2021,
    role: "Song mixing / Mastering",
    artwork: nayattu,
    description:
      "Mixing and mastering credit for Appalaale, as listed by 123Musix in the official song credits.",
    videoUrl: "https://www.youtube.com/watch?v=F8cQ0KK9QZw",
    externalUrl: "https://www.imdb.com/title/tt11604676/",
  },
  {
    slug: "thallumaala",
    title: "Thallumaala",
    year: 2022,
    role: "Mixing / Mastering",
    artwork: thallumaala,
    externalUrl: "https://www.imdb.com/title/tt11075264/",
  },
  {
    slug: "tagaru",
    title: "Tagaru",
    year: 2018,
    role: "Mixing / Mastering",
    artwork: tagaru,
    externalUrl: "https://www.imdb.com/title/tt7938336/",
  },
  {
    slug: "salaga",
    title: "Salaga",
    year: 2021,
    role: "Mixing / Mastering",
    artwork: salaga,
  },
  {
    slug: "popcorn-monkey-tiger",
    title: "Popcorn Monkey Tiger",
    year: 2019,
    role: "Mixing / Mastering",
    artwork: popcornMonkeyTigerImg,
  },
  {
    slug: "mysore-diaries",
    title: "Mysore Diaries",
    year: 2022,
    role: "Mixing / Mastering",
    artwork: mysoreDiariesImg,
  },
  {
    slug: "premalu",
    title: "Premalu",
    year: 2024,
    role: "Song mixing / Mastering",
    artwork: "/images/client-posters/premalu.webp",
    description:
      "Mixing and mastering for songs including Welcome to Hyderabad and Mini Maharani, credited in the official Bhavana Studios jukebox.",
    videoUrl: "https://www.youtube.com/watch?v=ZJTNymJ5g1A",
  },
];

export function getProject(slug: string) {
  return selectedWork.find((p) => p.slug === slug);
}

// --- FILMOGRAPHY ---
export type FilmCredit = {
  title: string;
  year: number;
  language: string;
  role: string;
  type: string;
  artwork?: string;
};

export const filmography: FilmCredit[] = [
  {
    title: "Premalu",
    year: 2024,
    language: "Malayalam",
    role: "Song mixing / Mastering",
    type: "Feature Film",
  },
  {
    title: "Bethlehem Kudumba Unit",
    year: 2026,
    language: "Malayalam",
    role: "Mixing / Mastering",
    type: "Feature Film",
  },
  {
    title: "Hi",
    year: 2026,
    language: "Malayalam",
    role: "Mixing / Mastering",
    type: "Feature Film",
  },
  {
    title: "Citylights",
    year: 2026,
    language: "Malayalam",
    role: "Music Programming / Production",
    type: "Feature Film",
  },
  {
    title: "Thallumaala",
    year: 2022,
    language: "Malayalam",
    role: "Mixing / Mastering",
    type: "Feature Film",
  },
  {
    title: "Mysore Diaries",
    year: 2022,
    language: "Kannada",
    role: "Mixing / Mastering",
    type: "Feature Film",
  },
  {
    title: "Nayattu",
    year: 2021,
    language: "Malayalam",
    role: "Mixing / Mastering",
    type: "Feature Film",
  },
  {
    title: "Salaga",
    year: 2021,
    language: "Kannada",
    role: "Mixing / Mastering",
    type: "Feature Film",
  },
  { title: "Kotigobba 3", year: 2021, language: "Kannada", role: "Mixing", type: "Feature Film" },
  {
    title: "Vaazhl",
    year: 2021,
    language: "Tamil",
    role: "Soundtrack Production",
    type: "Feature Film",
  },
  {
    title: "Popcorn Monkey Tiger",
    year: 2019,
    language: "Kannada",
    role: "Mixing / Mastering",
    type: "Feature Film",
  },
  {
    title: "Avane Srimannarayana",
    year: 2019,
    language: "Kannada",
    role: "Mixing / Mastering",
    type: "Feature Film",
  },
  {
    title: "Kavaludaari",
    year: 2019,
    language: "Kannada",
    role: "Mastering",
    type: "Feature Film",
  },
  {
    title: "Shibu",
    year: 2019,
    language: "Malayalam",
    role: "Mixing / Mastering",
    type: "Feature Film",
  },
  {
    title: "Tagaru",
    year: 2018,
    language: "Kannada",
    role: "Mixing / Mastering",
    type: "Feature Film",
  },
  {
    title: "Idi Naa Love Story",
    year: 2018,
    language: "Telugu",
    role: "Mixing / Mastering",
    type: "Feature Film",
  },
  {
    title: "Vikram Vedha",
    year: 2017,
    language: "Tamil",
    role: "Mixing / Mastering",
    type: "Feature Film",
  },
  {
    title: "Velaiilla Pattadhari 2",
    year: 2017,
    language: "Tamil",
    role: "Recording Engineer",
    type: "Feature Film",
  },
  {
    title: "Bairavaa",
    year: 2017,
    language: "Tamil",
    role: "Recording Engineer",
    type: "Feature Film",
  },
  {
    title: "Power Paandi",
    year: 2017,
    language: "Tamil",
    role: "Mastering Engineer",
    type: "Feature Film",
  },
  { title: "Maanagaram", year: 2017, language: "Tamil", role: "Mixing", type: "Feature Film" },
  {
    title: "Ae Dil Hai Mushkil",
    year: 2016,
    language: "Hindi",
    role: "Recording Engineer",
    type: "Feature Film",
  },
  {
    title: "Godhi Banna Sadharana Mykattu",
    year: 2016,
    language: "Kannada",
    role: "Mixing / Mastering",
    type: "Feature Film",
  },
  {
    title: "Kabali",
    year: 2016,
    language: "Tamil",
    role: "Recording Engineer",
    type: "Feature Film",
  },
  {
    title: "Kodi",
    year: 2016,
    language: "Tamil",
    role: "Recording Engineer",
    type: "Feature Film",
  },
];
