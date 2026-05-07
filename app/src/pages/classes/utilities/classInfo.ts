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
  cost: number | ClassPassOption[]
}

const inPerson: ClassInfoInterface[] = [
  {
    title: "Belly Dance for the Soul",
    image: "bellyDanceForTheSoul",
    skillLevel: "All",
    body: [
      "This is a 9 week series.",
      "Find joy and healing through belly dance and other therapeutic movements within a space that strongly emphasizes community connection.",
      "ALL ages, body types, and skills levels are welcome.",
    ],
    prereqs: [],
    time: 'Mondays at 5:30 PM\nJune 1st - July 27th (9 Weeks)',
    location: '\nEccles Community Art Center\n2580 Jefferson Ave, Ogden, UT 84401\nDance Studio located near the parking lot in the back',
    cost: 100
  }
];

const online: ClassInfoInterface[] = [
  {
    title: "Morning Movement",
    image: "morningMovement",
    skillLevel: "All",
    body: [
      "Start your day with breathing techniques and flowing movements that gently wake up your system and focus awareness to cultivate and balance the body’s vital energy. Rooted in the centuries-old practice of Qigong, this class helps with stress relief and relaxation, improves flexibility and circulation, and supports mental clarity and focus. However other therapeutic movements outside of Qigong are included based upon student needs.",
      "Due to the gentle nature of this practice, this class is accessible to all age ranges and most health conditions."
    ],
    prereqs: [],
    time: 'Mondays, 9 am MST',
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
    ]
  },
];

export default {
  inPerson,
  online,
};

export function createID(title: string) {
  return title.replace(/\s+/g, "-").toLowerCase();
}
