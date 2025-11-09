import { createContext, useContext, useState, ReactNode } from "react";
import onepillarPagoda from "@/assets/one-pillar-pagoda.jpg";
import hoangThanhThangLong from "@/assets/hoang-thanh-thang-long.jpg";
import chuaThay from "@/assets/chua-thay.jpg";
import chuaTranQuoc from "@/assets/chua-tran-quoc.jpg";
import hoHoanKiem from "@/assets/ho-hoan-kiem.jpg";
import nhaSanBacHo from "@/assets/nha-san-bac-ho.jpg";
import thanhCoLoa from "@/assets/thanh-co-loa.jpg";
import nhaTuHoaLo from "@/assets/nha-tu-hoa-lo.jpg";
import vanMieu from "@/assets/van-mieu.jpg";
import cotCoHanoi from "@/assets/cot-co-hanoi.jpg";
import langBac from "@/assets/lang-bac.jpg";
import nhaHatLon from "@/assets/nha-hat-lon.jpg";
import thapNuocHangDau from "@/assets/thap-nuoc-hang-dau.jpg";
import choDongXuan from "@/assets/cho-dong-xuan.jpg";
import hoChiMinhMuseum from "@/assets/hochiminh-museum.jpeg";

export interface Tour {
  id: string;
  image: string;
  images?: string[]; // Optional array of images for gallery
  title: string; // Keep for backward compatibility
  titleKey?: string; // Key for i18n translation
  rating: number;
  reviews: number;
  price: number;
  type: string;
  departure: string;
  destination: string;
  transportation: string;
  description: string;
}

interface TourContextType {
  tours: Tour[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  currency: "USD" | "VND";
  setCurrency: (currency: "USD" | "VND") => void;
  language: "EN" | "VI";
  setLanguage: (language: "EN" | "VI") => void;
  filters: {
    tourType: string;
    departure: string;
    destination: string;
    transportation: string;
  };
  setFilters: (filters: any) => void;
  filteredTours: Tour[];
}

const TourContext = createContext<TourContextType | undefined>(undefined);

const allTours: Tour[] = [
  {
    id: "1",
    image: hoangThanhThangLong,
    images: [
      hoangThanhThangLong,
      cotCoHanoi,
      langBac,
      nhaHatLon,
      thapNuocHangDau,
      choDongXuan,
    ],
    title: "Hoang Thanh Thang Long experience",
    titleKey: "tour_title_1",
    rating: 4.8,
    reviews: 342,
    price: 89,
    type: "cultural",
    departure: "hanoi",
    destination: "vietnam",
    transportation: "bus",
    description: "Explore the charming ancient town and history",
  },
  {
    id: "2",
    image: onepillarPagoda,
    images: [
      onepillarPagoda,
      hoHoanKiem,
      vanMieu,
      chuaTranQuoc,
      cotCoHanoi,
      nhaHatLon,
    ],
    title: "One Pillar Pagoda experience",
    titleKey: "tour_title_2",
    rating: 4.9,
    reviews: 267,
    price: 125,
    type: "cultural",
    departure: "hanoi",
    destination: "vietnam",
    transportation: "bus",
    description: "Explore the charming ancient temple and history",
  },
  {
    id: "3",
    image: chuaThay,
    images: [
      chuaThay,
      chuaTranQuoc,
      onepillarPagoda,
      vanMieu,
      hoHoanKiem,
      thanhCoLoa,
    ],
    title: "Chua Thay experience",
    titleKey: "tour_title_3",
    rating: 4.7,
    reviews: 521,
    price: 95,
    type: "cultural",
    departure: "hanoi",
    destination: "vietnam",
    transportation: "bus",
    description: "Explore the charming ancient temple and history",
  },
  {
    id: "4",
    image: chuaTranQuoc,
    images: [
      chuaTranQuoc,
      hoHoanKiem,
      onepillarPagoda,
      chuaThay,
      vanMieu,
      nhaHatLon,
    ],
    title: "Chua Tran Quoc experience",
    titleKey: "tour_title_4",
    rating: 4.6,
    reviews: 198,
    price: 75,
    type: "cultural",
    departure: "hanoi",
    destination: "vietnam",
    transportation: "bus",
    description: "Explore the charming ancient temple and history",
  },
  {
    id: "5",
    image: hoHoanKiem,
    images: [
      hoHoanKiem,
      thapNuocHangDau,
      nhaHatLon,
      cotCoHanoi,
      choDongXuan,
      vanMieu,
    ],
    title: "Ho Hoan Kiem experience",
    titleKey: "tour_title_5",
    rating: 4.9,
    reviews: 156,
    price: 145,
    type: "cultural",
    departure: "hanoi",
    destination: "vietnam",
    transportation: "motorbike",
    description: "Explore the charming ancient temple and history",
  },
  {
    id: "6",
    image: thanhCoLoa,
    images: [
      thanhCoLoa,
      hoangThanhThangLong,
      cotCoHanoi,
      chuaThay,
      nhaTuHoaLo,
      langBac,
    ],
    title: "Thanh Co Loa experience",
    titleKey: "tour_title_6",
    rating: 4.5,
    reviews: 423,
    price: 65,
    type: "cultural",
    departure: "hanoi",
    destination: "vietnam",
    transportation: "bus",
    description: "Explore the charming ancient temple and history",
  },
  {
    id: "7",
    image: nhaTuHoaLo,
    images: [
      nhaTuHoaLo,
      hoChiMinhMuseum,
      langBac,
      nhaSanBacHo,
      cotCoHanoi,
      hoangThanhThangLong,
    ],
    title: "Angkor Wat Temple Complex Discovery",
    titleKey: "tour_title_7",
    rating: 5.0,
    reviews: 678,
    price: 110,
    type: "cultural",
    departure: "siemreap",
    destination: "cambodia",
    transportation: "tuk-tuk",
    description: "Explore the magnificent ancient temples of Angkor",
  },
  {
    id: "8",
    image: vanMieu,
    images: [
      vanMieu,
      onepillarPagoda,
      chuaTranQuoc,
      hoHoanKiem,
      chuaThay,
      nhaHatLon,
    ],
    title: "Van Mieu - Quoc Tu Giam experience",
    titleKey: "tour_title_8",
    rating: 4.8,
    reviews: 392,
    price: 105,
    type: "cultural",
    departure: "hanoi",
    destination: "vietnam",
    transportation: "bus",
    description: "Explore the charming ancient temple and history",
  },
  {
    id: "9",
    image: nhaSanBacHo,
    images: [
      nhaSanBacHo,
      langBac,
      hoChiMinhMuseum,
      nhaTuHoaLo,
      hoangThanhThangLong,
      cotCoHanoi,
    ],
    title: "Nha San Bac Ho experience",
    titleKey: "tour_title_9",
    rating: 4.9,
    reviews: 234,
    price: 180,
    type: "cultural",
    departure: "hanoi",
    destination: "vietnam",
    transportation: "bus",
    description: "Explore the charming ancient temple and history",
  },
];

export const TourProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currency, setCurrency] = useState<"USD" | "VND">("USD");
  const [language, setLanguage] = useState<"EN" | "VI">("EN");
  const [filters, setFilters] = useState({
    tourType: "all",
    departure: "all",
    destination: "all",
    transportation: "all",
  });

  const filteredTours = allTours.filter((tour) => {
    const matchesSearch =
      searchQuery === "" ||
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.destination.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType =
      filters.tourType === "all" || tour.type === filters.tourType;
    const matchesDeparture =
      filters.departure === "all" || tour.departure === filters.departure;
    const matchesDestination =
      filters.destination === "all" || tour.destination === filters.destination;
    const matchesTransportation =
      filters.transportation === "all" ||
      tour.transportation === filters.transportation;

    return (
      matchesSearch &&
      matchesType &&
      matchesDeparture &&
      matchesDestination &&
      matchesTransportation
    );
  });

  return (
    <TourContext.Provider
      value={{
        tours: allTours,
        searchQuery,
        setSearchQuery,
        currency,
        setCurrency,
        language,
        setLanguage,
        filters,
        setFilters,
        filteredTours,
      }}
    >
      {children}
    </TourContext.Provider>
  );
};

export const useTours = () => {
  const context = useContext(TourContext);
  if (context === undefined) {
    throw new Error("useTours must be used within a TourProvider");
  }
  return context;
};
