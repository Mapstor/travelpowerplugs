import { CountryPlugData } from '@/types';

const unitedStates: CountryPlugData = {
  slug: 'united-states-electric-plug-type',
  name: 'United States',
  demonym: 'American',
  continent: 'North America',
  region: 'North America',
  voltage: 120,
  frequency: 60,
  plugTypes: ['A', 'B'],
  faqsData: [
    {
      question: "What type of plug is used in the United States?",
      answer: "The United States uses Type A and Type B plugs. Type A plugs have two flat parallel pins, while Type B plugs have two flat pins plus a grounding pin. Type B is the standard for grounded appliances."
    },
    {
      question: "Do I need a power adapter for the United States?",
      answer: "If you're coming from countries that use Type A or B plugs (like Canada, Mexico, Japan), you won't need an adapter. If you're from Europe, UK, Australia, or most other countries, you'll need a Type A/B adapter."
    },
    {
      question: "What voltage is used in the United States?",
      answer: "The United States uses 120V electricity at 60Hz frequency. This is lower than most countries which use 220-240V. Check if your devices are dual-voltage (100-240V) or you may need a voltage converter."
    },
    {
      question: "Can I use my European devices in the United States?",
      answer: "You'll need both a plug adapter (Type C/E/F to Type A/B) and possibly a voltage converter. Most modern electronics like phone chargers and laptops are dual-voltage and only need an adapter."
    },
    {
      question: "Are Type A and Type B plugs compatible in the US?",
      answer: "Yes, Type A plugs (2-pin) fit into Type B outlets (3-pin) without issues. However, Type B plugs won't fit into Type A outlets due to the grounding pin."
    }
  ],
  overview: "The United States uses a unique electrical system with 120V at 60Hz, different from most of the world. American outlets accept Type A (ungrounded) and Type B (grounded) plugs, characterized by flat parallel pins. The lower voltage means travelers from most countries will need voltage converters for certain appliances, not just plug adapters.",
  
  aboutPlugsInCountry: "American electrical outlets are designed for Type A and Type B plugs. Type A plugs have two flat pins and are used for devices that don't require grounding. Type B plugs add a round grounding pin for safety and are standard for appliances like computers, kitchen equipment, and power tools. The flat-pin design dates back to the early 20th century and remains unique to North America.",
  
  commonMistakesWhenUsing: [
    "Assuming a plug adapter is enough - voltage conversion is often needed",
    "Using non-polarized Type A adapters for polarized devices",
    "Forgetting that some older outlets may not fit modern plugs tightly",
    "Not checking if devices are dual-voltage before plugging in",
    "Buying cheap adapters that don't make good electrical contact"
  ],
  
  travelTips: [
    "Most hotels provide hair dryers - avoid bringing 220V models",
    "Airports sell adapters but they're expensive - buy before traveling",
    "Check device labels for '100-240V' before using adapters",
    "USB charging is widely available in hotels and public spaces",
    "Many coffee shops and airports have universal power outlets",
    "Consider a surge protector adapter for electronics protection"
  ],
  
  quickGuide: {
    onWhichSideOfTheRoadTheyDrive: "Right",
    currencyCode: "USD",
    emergencyTelephoneNumber: "911",
    isThreePhaseGenerallyAvailable: "Yes",
    safetyCompliance: "NEMA",
    voltageTolerances: "±5%",
    frequencyTolerances: "±0.02 Hz"
  },
  
  majorCitiesAndPlugTypes: {
    "New York": {
      description: "America's largest city uses standard US electrical system.",
      plugTypes: ["A", "B"],
      specialNotes: "Most hotels and business districts have modern outlets. Older buildings may have loose-fitting sockets."
    },
    "Los Angeles": {
      description: "California's electrical grid is well-maintained with consistent standards.",
      plugTypes: ["A", "B"],
      specialNotes: "Many newer buildings include USB charging outlets. Earthquake safety codes ensure secure electrical connections."
    },
    "Chicago": {
      description: "Midwestern hub with standard American electrical infrastructure.",
      plugTypes: ["A", "B"],
      specialNotes: "Cold weather can affect outdoor electrical equipment. Indoor systems are reliable year-round."
    },
    "Miami": {
      description: "Tropical climate with humidity-resistant electrical systems.",
      plugTypes: ["A", "B"],
      specialNotes: "Hurricane-prepared electrical systems with backup power common in hotels."
    }
  },
  
  additionalInfo: [
    {
      title: "Voltage Differences",
      content: "The US 120V system means European 220V appliances need voltage converters. Hair tools, some chargers, and small appliances are most affected. Always check device specifications first."
    },
    {
      title: "GFCI Outlets",
      content: "Bathrooms and kitchens have GFCI (Ground Fault Circuit Interrupter) outlets with 'Test' and 'Reset' buttons. These provide extra safety but may trip with sensitive electronics."
    },
    {
      title: "15A vs 20A Circuits",
      content: "Most household outlets are 15-amp, but some kitchen and garage outlets are 20-amp. The plug shapes are slightly different, but adapters handle both."
    }
  ],
  
  inTheBoxWhenYouBuyElectricalItem: [
    {
      item: "Smartphone",
      description: "Comes with USB cable and Type A/B wall adapter rated for 120V."
    },
    {
      item: "Laptop",
      description: "Usually includes universal power adapter (100-240V) with Type A/B plug."
    },
    {
      item: "Small Appliances",
      description: "Most include Type B (grounded) plugs for safety compliance."
    }
  ],

  generalElectricalSafety: [
    "All electrical work must meet National Electrical Code (NEC) standards",
    "GFCI protection required in wet locations (bathrooms, kitchens)",
    "Modern buildings use grounded (Type B) outlets for safety",
    "Circuit breakers protect against overloads and short circuits",
    "Electrical panels must be accessible and properly labeled"
  ],

  travelAdapterNeeded: "Visitors from most countries need Type A/B adapters and often voltage converters",
  
  compatibilityWithOtherPlugs: [
    "Type A plugs work in Type B outlets",
    "Compatible with Japanese plugs (same types but different voltage)",
    "Canadian plugs identical - no adaptation needed",
    "Mexican plugs similar - usually compatible"
  ],

  typeOfTravelAdapterNeeded: {
    "from_europe": "Type C/E/F to Type A/B adapter + voltage converter for some devices",
    "from_uk": "Type G to Type A/B adapter + voltage converter for some devices", 
    "from_australia": "Type I to Type A/B adapter + voltage converter for some devices",
    "from_asia": "Varies by country - usually Type A/B/C to Type A/B adapter + voltage converter"
  },

  practicalTipsForTravellers: [
    "Bring a universal adapter with multiple USB ports",
    "Download apps to find nearby charging stations",
    "Hotels usually provide hair dryers - check before packing yours",
    "Power banks are essential for long travel days",
    "Airport lounges have ample charging opportunities",
    "Many restaurants and cafes offer free charging"
  ],

  localElectricalStores: [
    "Home Depot - nationwide chain with wide adapter selection",
    "Lowe's - major home improvement retailer",
    "Best Buy - electronics retailer with travel adapters", 
    "Target - department store with basic travel accessories",
    "Walgreens/CVS - pharmacies with travel adapters in busy areas"
  ],

  countrySpecificIncompatibilities: [
    "European 220V hair tools won't work without voltage converter",
    "Some sensitive electronics may have issues with 60Hz vs 50Hz",
    "Three-phase industrial equipment uses different connectors",
    "RV and marine electrical systems use specialized outlets"
  ],

  hasDifferentPlugsForDifferentStatesOrRegions: false,
  hotelHairDryers: "standard"
};

export default unitedStates;