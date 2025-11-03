import { createContext, useContext, useState, ReactNode } from "react";
import tourHoian from "@/assets/tour-hoian.jpg";
import tourSapa from "@/assets/tour-sapa.jpg";
import tourPhuket from "@/assets/tour-phuket.jpg";

export interface Tour {
  id: string;
  image: string;
  title: string;
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
    image: tourHoian,
    title: "Hoi An Ancient Town & Lantern Festival Experience",
    rating: 4.8,
    reviews: 342,
    price: 89,
    type: "cultural",
    departure: "danang",
    destination: "vietnam",
    transportation: "bus",
    description: "Explore the charming ancient town and magical lantern festival",
  },
  {
    id: "2",
    image: tourSapa,
    title: "Sapa Rice Terraces & Ethnic Villages Trek",
    rating: 4.9,
    reviews: 267,
    price: 125,
    type: "adventure",
    departure: "hanoi",
    destination: "vietnam",
    transportation: "bus",
    description: "Trek through stunning rice terraces and visit local villages",
  },
  {
    id: "3",
    image: tourPhuket,
    title: "Phuket Island Hopping & Beach Paradise",
    rating: 4.7,
    reviews: 521,
    price: 95,
    type: "beach",
    departure: "phuket",
    destination: "thailand",
    transportation: "boat",
    description: "Discover pristine beaches and crystal clear waters",
  },
  {
    id: "4",
    image: tourHoian,
    title: "Da Nang City Tour & Marble Mountains",
    rating: 4.6,
    reviews: 198,
    price: 75,
    type: "cultural",
    departure: "danang",
    destination: "vietnam",
    transportation: "bus",
    description: "Explore modern city and ancient marble caves",
  },
  {
    id: "5",
    image: tourSapa,
    title: "Ha Giang Loop Mountain Adventure",
    rating: 4.9,
    reviews: 156,
    price: 145,
    type: "adventure",
    departure: "hanoi",
    destination: "vietnam",
    transportation: "motorbike",
    description: "Epic mountain roads and breathtaking scenery",
  },
  {
    id: "6",
    image: tourPhuket,
    title: "Bangkok Grand Palace & Floating Markets",
    rating: 4.5,
    reviews: 423,
    price: 65,
    type: "cultural",
    departure: "bangkok",
    destination: "thailand",
    transportation: "bus",
    description: "Historic temples and vibrant floating markets",
  },
  {
    id: "7",
    image: tourHoian,
    title: "Angkor Wat Temple Complex Discovery",
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
    image: tourPhuket,
    title: "Krabi Phi Phi Islands Adventure",
    rating: 4.8,
    reviews: 392,
    price: 105,
    type: "beach",
    departure: "krabi",
    destination: "thailand",
    transportation: "boat",
    description: "Paradise islands and stunning limestone cliffs",
  },
  {
    id: "9",
    image: tourSapa,
    title: "Bagan Temples Hot Air Balloon Sunrise",
    rating: 4.9,
    reviews: 234,
    price: 180,
    type: "adventure",
    departure: "yangon",
    destination: "myanmar",
    transportation: "flight",
    description: "Magical sunrise over thousands of ancient temples",
  },
];

export const TourProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currency, setCurrency] = useState<"USD" | "VND">("USD");
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
