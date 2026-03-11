import sigiriyaImg from './assets/sigiriya.jpg'
import aukanaImg from './assets/img/Aukana Buddha Statue.jpg'
import dambullaImg from './assets/img/Dambulla Golden Cave Temple.jpg'
import isurumuniyaImg from './assets/img/Isurumuniya Temple.jpg'
import mihintaleImg from './assets/img/Mihintale.jpg'
import sripadaImg from './assets/img/Sri Pada (Adam\'s Peak).jpg'
import yapahuwaImg from './assets/img/Yapahuwa Rock Fortress.jpg'
import ruwanwelisayaImg from './assets/img/Ruwanwelisaya Stupa.jpg'
import polonnaruwaImg from './assets/img/Polonnaruwa Vatadage.jpg'
import toothRelicImg from './assets/img/Temple of the Tooth Relic.webp'
import galleFortImg from './assets/img/Galle Fort.jpg'
import nineArchImg from './assets/img/Nine Arch Bridge.jpg'

export interface HistoricalSite {
  id: number;
  name: string;
  city: string;
  district: string;
  description: string;
  howToVisit: string;
  whySpecial: string;
  latestNews: string;
  imageUrl: string;
}

export const districts = [
  "Ampara", "Anuradhapura", "Badulla", "Batticaloa", "Colombo", "Galle", "Gampaha", 
  "Hambantota", "Jaffna", "Kalutara", "Kandy", "Kegalle", "Kilinochchi", "Kurunegala", 
  "Mannar", "Matale", "Matara", "Moneragala", "Mullaitivu", "Nuwara Eliya", "Polonnaruwa", 
  "Puttalam", "Ratnapura", "Trincomalee", "Vavuniya"
];

export const historicalSites: HistoricalSite[] = [
  {
    id: 1,
    name: "Sigiriya Rock Fortress",
    city: "Dambulla",
    district: "Matale",
    description: "An ancient rock fortress and palace ruins, surrounded by gardens and reservoirs.",
    howToVisit: "175km from Colombo. Take a bus or train to Habarana/Dambulla, then a tuk-tuk. Best to climb at 7:00 AM.",
    whySpecial: "UNESCO World Heritage site. Home to the famous 'Lion's Paw' entrance and 5th-century frescoes (the Sigiriya Maidens).",
    latestNews: "Drone photography is now strictly regulated to protect the site's atmosphere and nesting wasps.",
    imageUrl: sigiriyaImg
  },

  {
    id: 2,
    name: "Temple of the Sacred Tooth Relic",
    city: "Kandy",
    district: "Kandy",
    description: "The royal palace complex of the former Kingdom of Kandy, which houses the relic of the tooth of the Buddha.",
    howToVisit: "3-hour scenic train ride from Colombo. The temple is located in Kandy town, adjacent to the Kandy Lake.",
    whySpecial: "The most sacred Buddhist temple in Sri Lanka. It represents the last capital of the Sri Lankan kings.",
    latestNews: "Preparations for the annual Esala Perahera festival are underway, expected to draw record crowds this year.",
    imageUrl: toothRelicImg
  },
  {
    id: 3,
    name: "Galle Fort",
    city: "Galle",
    district: "Galle",
    description: "A coastal fortress built by the Portuguese and extensively fortified by the Dutch in the 17th century.",
    howToVisit: "2 hours from Colombo via Southern Expressway. Scenic coastal trains also run daily from Colombo Fort.",
    whySpecial: "The best-preserved colonial sea fortress in Asia. A unique blend of European architecture and South Asian traditions.",
    latestNews: "Several boutique hotels within the fort have received international heritage conservation awards.",
    imageUrl: galleFortImg
  },
  {
    id: 4,
    name: "Ruwanwelisaya Stupa",
    city: "Anuradhapura",
    district: "Anuradhapura",
    description: "A hemispherical structure containing relics, built by King Dutugemunu c. 140 B.C.",
    howToVisit: "5-6 hours by bus/train from Colombo. Located in the Sacred City, best explored by bicycle or tuk-tuk.",
    whySpecial: "One of the world's tallest ancient monuments (over 300ft). It is a masterpiece of ancient engineering and devotion.",
    latestNews: "The surrounding Elephant Wall has been restored using traditional methods to preserve its 2,000-year-old look.",
    imageUrl: ruwanwelisayaImg
  },
  {
    id: 5,
    name: "Polonnaruwa Vatadage",
    city: "Polonnaruwa",
    district: "Polonnaruwa",
    description: "A circular relic house that is one of the most beautiful and well-preserved structures of ancient Sri Lanka.",
    howToVisit: "4-5 hours from Colombo. Part of the Polonnaruwa Ancient City ruins. Renting a bike at the entrance is recommended.",
    whySpecial: "Features four Buddha statues facing the four cardinal directions and some of the finest stone carvings in the country.",
    latestNews: "A new archaeological museum nearby now displays 3D models of the Vatadage in its original 12th-century glory.",
    imageUrl: polonnaruwaImg
  },
  {
    id: 6,
    name: "Nine Arch Bridge",
    city: "Ella",
    district: "Badulla",
    description: "A colonial-era viaduct bridge that is a testament to early 20th-century engineering.",
    howToVisit: "Take the 'Main Line' train to Ella. Walk 30 minutes through the jungle or take a tuk-tuk from Ella town.",
    whySpecial: "Built entirely of bricks and cement without a single piece of steel. It offers one of the most iconic views in Sri Lanka.",
    latestNews: "The 'Ella Odyssey' luxury train now makes a special 10-minute stop on the bridge for passengers to take photos.",
    imageUrl: nineArchImg
  },
  {
    id: 7,
    name: "Dambulla Golden Cave Temple",
    city: "Dambulla",
    district: "Matale",
    description: "The largest and best-preserved cave temple complex in Sri Lanka, dating back to the 1st century B.C.",
    howToVisit: "Located in Dambulla town. A moderate climb up a rock hill leads to the five main cave temples.",
    whySpecial: "Contains over 150 Buddha statues and vivid ceiling murals covering 2,100 square meters.",
    latestNews: "Conservationists are working on a new lighting system to protect the ancient frescoes from UV damage.",
    imageUrl: dambullaImg
  },
  {
    id: 8,
    name: "Yapahuwa Rock Fortress",
    city: "Yapahuwa",
    district: "Kurunegala",
    description: "An ancient citadel and capital of Sri Lanka in the late 13th century, built on a huge granite rock.",
    howToVisit: "3 hours from Colombo. Located midway between Kurunegala and Anuradhapura. Best reached by private car or bus.",
    whySpecial: "Famous for its magnificent ornamental stone staircase, which is considered one of the finest in the country.",
    latestNews: "Excavations at the base of the rock have recently uncovered ruins of what is believed to be an ancient royal kitchen.",
    imageUrl: yapahuwaImg
  },
  {
    id: 9,
    name: "Mihintale",
    city: "Mihintale",
    district: "Anuradhapura",
    description: "A mountain peak which is believed to be the site of a meeting between the monk Mahinda and King Devanampiyatissa.",
    howToVisit: "12km from Anuradhapura. Easily accessible by bus or tuk-tuk. Be prepared to climb 1,840 stone steps.",
    whySpecial: "The cradle of Buddhism in Sri Lanka. It features the Ambasthala Dagaba and the stunning Kantaka Cetiya.",
    latestNews: "Illumination of the entire mountain range during Poson Poya has been upgraded with eco-friendly lighting.",
    imageUrl: mihintaleImg
  },
  {
    id: 10,
    name: "Aukana Buddha Statue",
    city: "Kekirawa",
    district: "Anuradhapura",
    description: "A standing statue of the Buddha, carved out of a large granite rock face during the 5th century.",
    howToVisit: "Located near Kekirawa. Best reached by private vehicle or tuk-tuk from Anuradhapura or Dambulla.",
    whySpecial: "A masterpiece of ancient stone carving. The statue stands over 40 feet tall and is perfectly proportioned.",
    latestNews: "Archaeologists have recently completed a detailed 3D scan of the statue to monitor for any structural fatigue.",
    imageUrl: aukanaImg
  },
  {
    id: 11,
    name: "Sri Pada (Adam's Peak)",
    city: "Nallathanniya",
    district: "Ratnapura",
    description: "A sacred mountain peak known for the 'Sri Pada' (sacred footprint) at its summit.",
    howToVisit: "The main trail starts from Nallathanniya (Maskeliya). The climb usually begins at midnight to reach the peak for sunrise.",
    whySpecial: "A site of pilgrimage for four major religions. It offers one of the most spectacular sunrise views in the world.",
    latestNews: "A 'Zero Plastic' policy is being strictly enforced this pilgrimage season to protect the mountain's fragile ecosystem.",
    imageUrl: sripadaImg
  },
  {
    id: 12,
    name: "Isurumuniya Temple",
    city: "Anuradhapura",
    district: "Anuradhapura",
    description: "A 3rd-century B.C. Buddhist temple famous for its stone carvings, particularly the 'Isurumuniya Lovers'.",
    howToVisit: "Located within the Anuradhapura Sacred City, near the Tissa Wewa reservoir. Accessible by bike or tuk-tuk.",
    whySpecial: "Famous for its rock carvings that blend religious and secular themes, unlike most other ancient Sri Lankan temples.",
    latestNews: "A renovated museum at the temple site now provides more context on the secular lifestyle of the ancient royalty.",
    imageUrl: isurumuniyaImg
  }
];
