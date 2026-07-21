import { ClassOptions } from "../../../components/ImageShell/ImageShell";

export interface ClassPassOption {
  number: number,
  cost: number
}

export interface ClassInfoInterface {
  title: string,
  image: ClassOptions,
  skillLevel: string,
  body: string[],
  prereqs: string[],
  time: string,
  location: string,
  cost: number | ClassPassOption[],
  additionalInfo?: string,
  canceled?: boolean
}

const inPerson: ClassInfoInterface[] = [
  {
    title: "Belly Dance for the Soul",
    image: "bellyDanceForTheSoul",
    skillLevel: "All",
    body: [
      "This is an 8 week series.",
      "Discover joy, healing, and self-expression through belly dance and therapeutic movement in a welcoming, community-centered space. Through dance, we deepen our connection to ourselves, to one another, and to the world around us. We celebrate all ages, body types, and experience levels — come exactly as you are.",
      "We age when we stop moving. Our pain grows when we stop connecting."
    ],
    prereqs: [],
    time: 'Mondays at 5:30 - 7:00 PM (Please note this is a 1.5 hour class)\nSeptember 14th - November 2nd (Please note the later start date due to Labor Day)',
    location: '\nEccles Community Art Center\n2580 Jefferson Ave, Ogden, UT 84401\nDance Studio located near the parking lot in the back',
    cost: 125,
    additionalInfo: "To enter the building, use the code 208"
  }
];

const online: ClassInfoInterface[] = [
  {
    canceled: true,
    title: "Morning Movement",
    image: "morningMovement",
    skillLevel: "All",
    body: [
      "Start your day with breathing techniques and flowing movements that gently wake up your system and focus awareness to cultivate and balance the body’s vital energy. Rooted in the centuries-old practice of Qigong, this class helps with stress relief and relaxation, improves flexibility and circulation, and supports mental clarity and focus. However other therapeutic movements outside of Qigong are included based upon student needs.",
      "Due to the gentle nature of this practice, this class is accessible to all age ranges and most health conditions."
    ],
    prereqs: [],
    time: 'Mondays, 9 - 9:30 AM MST',
    location: 'Via Google Meet Link',
    cost: [
      {
        number: 5,
        cost: 35
      },
      {
        number: 10,
        cost: 50
      }
    ],
    additionalInfo: "A Google Meet link will be sent to you via email about 10 minutes before class starts."
  },
];

export default {
  inPerson,
  online,
};

export function createID(title: string) {
  return title.replace(/\s+/g, "-").toLowerCase();
}
