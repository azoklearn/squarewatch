export type Watch = {
  id: string;
  brand: string;
  model: string;
  reference: string;
  year: string;
  status: "Available" | "On Hold" | "Sold" | "On Request";
  caliber: string;
  case: string;
  notes: string;
  image: string;
  gallery: string[];
};

export const watches: Watch[] = [
  {
    id: "rolex-16234-salmon",
    brand: "Rolex",
    model: "Datejust — Salmon Roman",
    reference: "Ref. 16234",
    year: "1995",
    status: "Available",
    caliber: "Cal. 3135",
    case: "36 mm — steel & white gold",
    notes:
      "An honest example of the reference, dressed in the most desirable late-period configuration — salmon dial with Roman numerals, fluted white gold bezel, jubilee bracelet retaining excellent geometry.",
    image: "/watches/salmon/01.jpg",
    gallery: [
      "/watches/salmon/01.jpg",
      "/watches/salmon/02.jpg",
      "/watches/salmon/03.jpg"
    ]
  },
  {
    id: "rolex-16234-blue-diamond",
    brand: "Rolex",
    model: "Datejust — Deep Blue & Diamonds",
    reference: "Ref. 16234",
    year: "1991",
    status: "On Hold",
    caliber: "Cal. 3135",
    case: "36 mm — steel & white gold",
    notes:
      "Original factory blue sunburst dial set with ten brilliant-cut diamond hour markers. Crisp printing throughout, fluted white gold bezel, Oyster bracelet showing only honest wear.",
    image: "/watches/blue/01.jpg",
    gallery: [
      "/watches/blue/01.jpg",
      "/watches/blue/02.jpg",
      "/watches/blue/03.jpg"
    ]
  },
  {
    id: "rolex-16234-black",
    brand: "Rolex",
    model: "Datejust — Black Dial",
    reference: "Ref. 16234",
    year: "1989",
    status: "Sold",
    caliber: "Cal. 3135",
    case: "36 mm — steel & white gold",
    notes:
      "Quietly iconic since the late eighties. Glossy black dial with applied indices, jubilee bracelet, a piece whose understatement is precisely its argument. Placed with a long-standing client of the house.",
    image: "/watches/datejust/02.jpg",
    gallery: [
      "/watches/datejust/02.jpg",
      "/watches/datejust/01.jpg",
      "/watches/datejust/03.jpg",
      "/watches/datejust/04.jpg",
      "/watches/datejust/05.jpg",
      "/watches/datejust/06.jpg",
      "/watches/datejust/07.jpg"
    ]
  }
];

export const archiveStats = [
  { value: "412", label: "Pieces documented" },
  { value: "37", label: "Maisons represented" },
  { value: "11", label: "Years of records" }
];
