let sixLetters = [
  {
    word: "flight",
    concept:
      "an act or instance of passing through the air by the use of wings",
    example: "the flight of a bee",
  },
  {
    word: "follow",
    concept: "to go, proceed, or come after",
    example: "follow a path",
  },
  {
    word: "forbid",
    concept:
      "to proscribe from or as if from the position of one in authority : command against",
    example: "The law forbids stores to sell liquor to minors.",
  },
  {
    word: "forget",
    concept: "to lose the remembrance of : be unable to think of or recall",
    example: "I forget his name",
  },
  {
    word: "formal",
    concept: "following or according with established form, custom, or rule",
    example: "a formal dinner party",
  },
  {
    word: "former",
    concept: "of, relating to, or occurring in the past",
    example: "restoring the theater to its former glory",
  },
  {
    word: "fought",
    concept: "past tense and past participle of fight",
    example: "He fought against racial discrimination.",
  },
  {
    word: "freeze",
    concept: "to become congealed into ice by cold",
    example: "the bread freezes well",
  },
  {
    word: "funnel",
    concept:
      "a device that is wide at the top and narrow at the bottom, used for pouring liquids or powders into a small opening",
    example: "Her gaze lingered on the remaining half a funnel cake.",
  },
  {
    word: "galore",
    concept: "in large numbers or amounts",
    example: "There will be games and prizes galore",
  },
  {
    word: "gather",
    concept: "to bring together",
    example: "gather flowers",
  },
  {
    word: "geared",
    concept:
      "designed or organized to achieve a particular purpose, or to be suitable for a particular group of people",
    example: "The resort is geared towards children",
  },
  {
    word: "global",
    concept: "of, relating to, or involving the entire world",
    example: "a global system of communication",
  },
  {
    word: "growth",
    concept: "a stage in the process of growing",
    example: "the growth of the oil industry",
  },
  {
    word: "guilty",
    concept:
      "justly chargeable with or responsible for a usually grave breach of conduct or a crime",
    example: "Does the defendant plead guilty or not guilty?",
  },
  {
    word: "harbor",
    concept: "a place of security and comfort",
    example: "Loyalists found harbor in the same areas",
  },
  {
    word: "hardly",
    concept: "almost not",
    example: "I can hardly believe it!",
  },
  {
    word: "hatred",
    concept: " extreme dislike or disgust",
    example: "old racial prejudices and national hatreds",
  },
  {
    word: "horror",
    concept: "painful and intense fear, dread, or dismay",
    example: "contemplating the horror of their lives",
  },
  {
    word: "hybrid",
    concept: "something heterogeneous in origin or composition",
    example: "a hybrid of medieval and Renaissance styles",
  },
  {
    word: "ignore",
    concept: "to refuse to take notice of",
    example: "He ignored all the ‘No Smoking’ signs and lit up a cigarette",
  },
  {
    word: "inform",
    concept: "to communicate knowledge to",
    example: "inform a prisoner of his rights",
  },
  {
    word: "insist",
    concept:
      "to be emphatic, firm, or resolute about something intended, demanded, or required",
    example: "They insist on going.",
  },
  {
    word: "intend",
    concept:
      "to have a plan, result or purpose in your mind when you do something",
    example: "We finished later than we had intended.",
  },
  {
    word: "invest",
    concept: "to make use of for future benefits or advantages",
    example: "invested her time wisely",
  },
  {
    word: "island",
    concept: "a piece of land that is completely surrounded by water",
    example: "the islands in the Baltic Sea",
  },
  {
    word: "kindle",
    concept: "to start (a fire) burning",
    example: "using dry twigs to kindle a fire",
  },
  {
    word: "latter",
    concept: "belonging to a subsequent time or period : more recent",
    example: "the latter stages of growth",
  },
  {
    word: "letter",
    concept:
      "a written, typed or printed message that is put in an envelope or attached to an email and sent to somebody",
    example: "to mail a letter",
  },
  {
    word: "likely",
    concept:
      "having a high probability of occurring or being true : very probable",
    example: "rain is likely today",
  },
  {
    word: "liquid",
    concept: "flowing freely like water",
    example: "liquid detergent",
  },
  {
    word: "listen",
    concept: "to pay attention to sound",
    example: "listen to music",
  },
  {
    word: "little",
    concept: "small in size or extent",
    example: "a little group",
  },
  {
    word: "lonely",
    concept: "being without company",
    example: "too many lonely nights at home",
  },
  {
    word: "lounge",
    concept: "to act or move idly or lazily",
    example: "was lounging on the sofa",
  },
  {
    word: "luxury",
    concept:
      "an indulgence in something that provides pleasure, satisfaction, or ease",
    example: "had the luxury of rejecting a handful of job offers",
  },
  {
    word: "manage",
    concept: "to handle or direct with a degree of skill",
    example: "manage a business",
  },
  {
    word: "market",
    concept: "a retail establishment usually of a specified kind",
    example: "a fish market",
  },
  {
    word: "matter",
    concept: "a subject under consideration",
    example: "Several other matters will come before the committee",
  },
  {
    word: "Mature",
    concept: "having completed natural growth and development",
    example: "mature fruit",
  },
  {
    word: "mental",
    concept: "of or relating to the mind",
    example: "mental health",
  },
  {
    word: "middle",
    concept: "equally distant from the extremes",
    example: "the middle house in the row",
  },
  {
    word: "module",
    concept:
      "a unit that can form part of a course of study, especially at a college or university in the UK",
    example:
      "The course consists of ten core modules and five optional modules.",
  },
  {
    word: "monkey",
    concept:
      "an animal with a long tail, that climbs trees and lives in hot countries.",
    example: "Like humans, apes and monkeys live in complex social groupings.",
  },
  {
    word: "muscle",
    concept:
      "a piece of body tissue that you make tight and relax in order to move a particular part of the body",
    example: "This exercise will work the muscles of the lower back.",
  },
  {
    word: "myriad",
    concept: "a great number",
    example: "a myriad of ideas",
  },
  {
    word: "narrow",
    concept: "of slender width",
    example: "a long and narrow room",
  },
  {
    word: "native",
    concept: "belonging to a particular place by birth",
    example: "a native New Yorker",
  },
  {
    word: "nearby",
    concept: "not far away",
    example: "Her mother lived in a nearby town",
  },
  {
    word: "Nearly",
    concept: "in a close manner or relationship",
    example: "nearly related",
  },
  {
    word: "needle",
    concept:
      "a small thin piece of steel that you use for sewing, with a point at one end and a hole for the thread at the other",
    example: "a packet of small needles",
  },
  {
    word: "abrade",
    concept: "to scrape or wear away by friction",
    example: "the rough surface of the rock abraded my skin",
  },
  {
    word: "abroad",
    concept: "in or to a foreign country",
    example: "I'm going to study abroad in Spain next semester",
  },
  {
    word: "absord",
    concept: "to take in or soak up",
    example: "the sponge absorbed all the water on the counter",
  },
  {
    word: "accept",
    concept: "to receive or take willingly",
    example: " I accept you apology ",
  },
  {
    word: "access",
    concept: " the ability to enter or use",
    example: "I need access to the server to complete the task",
  },
  {
    word: "accuse",
    concept: "to charge with a wrongdoing",
    example: "the police accused him of stealing the car",
  },
  {
    word: "aching",
    concept: " a dull, persistent pain",
    example: " my tooth is aching, I need to see the dentist",
  },
  {
    word: "active",
    concept: " engaged in action or activity",
    example: "She is an active member of the soccer team",
  },
  {
    word: "acuity",
    concept: " sharpness of vision or perception",
    example:
      "His acuity allowed him to see the smallest details in the painting",
  },
  {
    word: "adhere",
    concept: "to stick or cling to something",
    example: "the tape adhered to the wall",
  },
  {
    word: "adjust",
    concept: "to change of modify",
    example: " I need to adjust the volume on the tv",
  },
  {
    word: "admire",
    concept: " to regard with admiration or respect",
    example: "I admire her dedication to her work",
  },
  {
    word: "advice",
    concept: " a recommendation for a course of action",
    example: " he gave me some great advice on how to handle the situation",
  },
  {
    word: "advise",
    concept: " to offer advice or counsel",
    example: "I advise you to take break and relax",
  },
  {
    word: "afford",
    concept: " to have the financial means to do something ",
    example: "I can't afford to buy a new card right now",
  },
  {
    word: "afraid",
    concept: " feeling fear or apprehension ",
    example: " I'm afraid of heights",
  },
  {
    word: "ageism",
    concept:
      " prejudice or discrimination against a certain age group, usually older people",
    example: " the company's hiring policy was critized for ageism",
  },
  {
    word: "amazes",
    concept: " to cause wonder or astonishment",
    example: " her talent for singing amazes me",
  },
  {
    word: "amount",
    concept: "a quantity or total",
    example: "the amount of suger needed for the recupe is one cup ",
  },
  {
    word: "annual",
    concept: " occuring once a year",
    example: " the annual festival is a popular event in the town",
  },
  {
    word: "appeal",
    concept: "a request for decision to be changed or reversed",
    example: "he filed an appeal after his conviction",
  },
  {
    word: "appear",
    concept: "to become visible or noticeable",
    example: "the sun appeared behint the clouds",
  },
  {
    word: "arabic",
    concept: "a semitic language spoken in the middle east and north africa",
    example: " he learned arabic to communicate with his arab clients",
  },
  {
    word: "arrive",
    concept: " to reach a destination",
    example: " we will arrive at airport at 6 pm",
  },
  {
    word: "ashore",
    concept: " on or the shore, as opposed to on water",
    example: "The boat finally reached ashore after a long journey",
  },
  {
    word: "asleep",
    concept: "in a state of sleep",
    example: "she fell asleep during the movie",
  },
  {
    word: "assume",
    concept: "to take on or adopt as a belief or fact",
    example: "I assume that he will at the meeting tomorrow",
  },
  {
    word: "attack",
    concept: "to act aggressively towards someone or something",
    example: "the dog attacked the mailman",
  },
  {
    word: "battle",
    concept: "a fight or conflict",
    example: "the battle between the two armies was intense",
  },
  {
    word: "become",
    concept: "to come into being or turn into",
    example: "she wants to become a doctor when she grows up",
  },
  {
    word: "behalf",
    concept: " in the interest or support of someone or something",
    example: "he spoke on behalf",
  },
  {
    word: "belief",
    concept:
      "an acceptance that something is true or real, often without proof",
    example:
      "his strong belief in hard work and dedication helped him achieve success",
  },
  {
    word: "belong",
    concept:
      "to be a member or part of a particular group, organization or place",
    example: "she feels like she belongs with her new group of friends",
  },
  {
    word: "better",
    concept: " improved or more favorable in quality, quantity or degree",
    example: "his health is better now after starting to exercise regularly",
  },
  {
    word: "bitter",
    concept:
      "having a sharp and unpleasant taste, or feeling angry and resentful",
    example: "the coffee tasted bitter because it was burnt",
  },
  {
    word: "blazed",
    concept: " burned of shone brightly, or traveled quickly and forcefully",
    example:
      "the fire blazed through the forest, destroying everything in its path",
  },
  {
    word: "blight",
    concept: "a disease or condition that causes harm or damage",
    example: "the popato crop was destroyed by a bright",
  },
  {
    word: "bonnet",
    concept: " a type of hat or head covering, often worn by women",
    example: "she wore a pretty bonnet to the wedding",
  },
  {
    word: "boring",
    concept: "uninteresting or dull",
    example: "the lecture was so boring that many people fell asleep",
  },
  {
    word: "borrow",
    concept:
      "to take and use something belonging to someone else with the intention of returning it",
    example: " he needed to borrow some money from his friend to pay for rent",
  },
  {
    word: "bounce",
    concept: "to rebound or spring back after being pressed down",
    example: "the ball bounced off the wall and hit me in the head",
  },
  {
    word: "bounty",
    concept:
      " a large quantity of something, or a reward or payment for something ",
    example: "the garden produced a bounty of fresh vegetables this year",
  },
  {
    word: "braced",
    concept:
      " positioned or supported with braces, or mentally prepared oneself for something difficult",
    example: "she braced herself for the challenging exam ahead",
  },
  {
    word: "breath",
    concept: "the air taken in and expelled during breathing",
    example: "she took a deep breath before jumping into the pool",
  },
  {
    word: "brewed",
    concept:
      "to make a drink by steeping or boiling ingredients, especially tea or coffee",
    example: "he brewed a pot of coffee to start his day",
  },
  {
    word: "budget",
    concept:
      "a financial plan for a period of time, usually one year, detailing income and expenses",
    example:
      "The film has a million-dollar budget. He's been trying to live on a budget of less than $1,500 a month.",
  },
  {
    word: "burden",
    concept: "a heavy load or responsability that is difficult to bear",
    example: "the loss of his job was a heavy burden form him to carry",
  },
  {
    word: "bureau",
    concept:
      "a goverment agency or office that provides services or information",
    example: "she went to the immigration bureau to renew her visa",
  },
  {
    word: "burrow",
    concept: "a tunnel of hole made by an animal",
    example: "the rabbid burrowed a hole in the ground to hide from predators",
  },
  {
    word: "butter",
    concept:
      " a spread make from cream, used as a cooking ingredient or for spreading on bread",
    example: "she spread some butter on her toast for breakfast",
  },
  {
    word: "bygone",
    concept:
      "belonging to an earlier time, no longer in existence or common use",
    example: "she loves learling about bygone eras, like the victorian age",
  },
  {
    word: "sorrow",
    concept:
      "Deep distress, sadness, or regret especially for the loss of someone or something loved",
    example: "To their great sorrow they could not marry",
  },
  {
    word: "soviet",
    concept: "An elected governmental council in a Communist country",
    example: "The plan was opposed by the Soviets",
  },
  {
    word: "sponge",
    concept:
      "An elastic porous mass of interlacing horny fibers and is able when wetted to absorb water",
    example: "She sponged up the spilt milk",
  },
  {
    word: "spread",
    concept: "To open or expand over a larger area",
    example: "Her notes were spread all over the desk",
  },
  {
    word: "spring",
    concept:
      "The season between winter and summer comprising in the northern hemisphere usually the months of March, April, and May or as reckoned astronomically extending from the March equinox to the June solstice",
    example: "We'll plant the seeds next spring",
  },
  {
    word: "square",
    concept: "A rectangle with all four sides equal",
    example: "Cut the brownies into squares",
  },
  {
    word: "stable",
    concept: "A building in which domestic animals are sheltered and fed",
    example: "She rode the horse back to the stable",
  },
  {
    word: "status",
    concept: "Position or rank in relation to others",
    example: "He wants to improve his status in the community",
  },
  {
    word: "steady",
    concept: "firm in position",
    example: "She used a tripod to keep the camera steady",
  },
  {
    word: "stream",
    concept:
      "A body of running water (such as a river or creek) flowing on the earth",
    example: "A stream flows through the field",
  },
  {
    word: "street",
    concept:
      "A thoroughfare especially in a city, town, or village that is wider than an alley or lane and that usually includes sidewalks",
    example: "You should look both ways before crossing the street",
  },
  {
    word: "strict",
    concept: "Rigorously conforming to principle or a norm or condition",
    example: "He insists on strict adherence to the rules",
  },
  {
    word: "strike",
    concept:
      "A work stoppage by a body of workers to enforce compliance with demands made on an employer",
    example: "The workers are on strike",
  },
  {
    word: "struck",
    concept: "To aim and usually deliver a blow, stroke, or thrust",
    example: "The tree was struck by lightning",
  },
  {
    word: "submit",
    concept: "To subject to a condition, treatment, or operation",
    example: "Submit your application no later than January 31st",
  },
  {
    word: "sudden",
    concept: "Happening or coming unexpectedly",
    example: "A sudden change in temperature",
  },
  {
    word: "suffer",
    concept: "To submit to or be forced to endure",
    example: "She suffered an injury during the game",
  },
  {
    word: "supply",
    concept: "The act or process of filling a want or need",
    example: "You'll have to supply your own food",
  },
  {
    word: "taught",
    concept: "Past tense and past participle of teach",
    example: "She taught him to read",
  },
  {
    word: "thread",
    concept:
      "A filament, a group of filaments twisted together, or a filamentous length formed by spinning and twisting short textile fibers into a continuous strand",
    example: "A thread was hanging from the hem of her coat",
  },
  {
    word: "thrive",
    concept: "To grow vigorously",
    example: "These plants thrive with relatively little sunlight",
  },
  {
    word: "throat",
    concept: "The part of the neck in front of the spinal column",
    example: "My throat was dry so I took a sip of water",
  },
  {
    word: "thrown",
    concept: "To propel through the air in any manner",
    example: "She was thrown from the horse",
  },
  {
    word: "ticket",
    concept:
      "A certificate or token showing that a fare or admission fee has been paid",
    example: "We bought tickets for the opera",
  },
  {
    word: "tiptoe",
    concept:
      "The position of being balanced on the balls of the feet and toes with the heels",
    example: "She had to stand tiptoe to reach the shelf",
  },
  {
    word: "tissue",
    concept:
      "A piece of soft absorbent tissue paper used especially as a handkerchief or for removing cosmetics",
    example: "She wiped her nose with a tissue",
  },
  {
    word: "tongue",
    concept:
      "A fleshy movable muscular process of the floor of the mouths of most vertebrates that bears sensory end organs and small glands and functions especially in taking and swallowing food and in humans as a speech organ",
    example: "The taste of the spice was still on her tongue",
  },
  {
    word: "treaty",
    concept: "An agreement or arrangement made by negotiation",
    example:
      "In accordance with a treaty between the United States and the tribes of the Pacific Northwest, commercial fishing of certain kinds of salmon is limited to Native Americans",
  },
  {
    word: "tuning",
    concept: "A pleasing succession of musical tones",
    example: "Hummed a little tune while I sorted the laundry",
  },
  {
    word: "tunnel",
    concept: "A covered passageway",
    example: "The train goes through a tunnel in the mountain",
  },
  {
    word: "unable",
    concept: "Not able",
    example: "He was unable to play tennis after the injury",
  },
  {
    word: "unfair",
    concept: "Not equitable",
    example: "It's unfair for them to be allowed to leave early if we can't",
  },
  {
    word: "united",
    concept: "Relating to or produced by joint action",
    example: "A united campaign against drug abuse",
  },
  {
    word: "useful",
    concept: "Capable of being put to use",
    example: "The Internet is useful for finding information quickly",
  },
  {
    word: "utmost",
    concept: "Situated at the farthest or most distant point",
    example: "Supreme power that extended to the utmost points of the empire",
  },
  {
    word: "vacuum",
    concept: "Emptiness of space",
    example: "A pump was used to create a vacuum inside the bottle",
  },
  {
    word: "virtue",
    concept: "A beneficial quality or power of a thing",
    example: "Humility is considered a virtue",
  },
  {
    word: "voyage",
    concept: "An act or instance of traveling",
    example: "He wrote about his many voyages into the South Seas",
  },
  {
    word: "wander",
    concept: "To move about without a fixed course, aim, or goal",
    example: "I was just wandering around the house",
  },
  {
    word: "warmth",
    concept: "The quality or state of being warm in temperature",
    example: "I could feel the warmth of the fireplace",
  },
  {
    word: "wealth",
    concept: "Abundance of valuable material possessions or resources",
    example: "Her personal wealth is estimated to be around $10 billion",
  },
  {
    word: "weekly",
    concept: "Occurring, appearing, or done every week",
    example: "I make weekly trips to the grocery store",
  },
  {
    word: "weight",
    concept: "The amount that a thing weighs",
    example: "The boat sank under the weight of the cargo",
  },
  {
    word: "wholly",
    concept: "To the full or entire extent",
    example: "An infant is wholly dependent on its mother",
  },
  {
    word: "widget",
    concept:
      "An unnamed article considered for purposes of hypothetical example",
    example: "Manufacturers of all kinds of widgets for the do-it-yourselfer",
  },
  {
    word: "window",
    concept:
      "An opening especially in the wall of a building for admission of light and air that is usually closed by casements or sashes containing transparent material (such as glass) and capable of being opened and shut",
    example: "She opened a window to let in some air",
  },
  {
    word: "winter",
    concept:
      "The season between autumn and spring comprising in the northern hemisphere usually the months of December, January, and February or as reckoned astronomically extending from the December solstice to the March equinox",
    example: "We're in for a cold winter this year, I hear",
  },
  {
    word: "wiring",
    concept: "The act of providing or using wire",
    example: "All the wiring in the house needs to be replaced",
  },
  {
    word: "wonder",
    concept: "A cause of astonishment or admiration",
    example: "This new computer is a technological wonder",
  },
  {
    word: "wooden",
    concept: "Lacking ease or flexibility",
    example: "The guest speaker was wooden and uninspiring",
  },
  {
    word: "wright",
    concept: "A worker skilled in the manufacture especially of wooden objects",
    example:
      "After the architect finished drawing his plans, it was time for the wright to follow through with the project",
  },
  {
    word: "notice",
    concept: "warning or intimation of something",
    example: "Please give us enough notice to prepare for your arrival",
  },
  {
    word: "obtain",
    concept: "to gain or attain usually by planned action or effort",
    example: "We obtained a copy of the original letter",
  },
  {
    word: "office",
    concept:
      "a special duty, charge, or position conferred by an exercise of governmental authority and for a public purpose",
    example: "She works at our Chicago office",
  },
  {
    word: "offset",
    concept:
      "Something that serves to counterbalance or to compensate for something else        ",
    example:
      "symptoms that were striking for their abrupt onset and their equally abrupt offset",
  },
  {
    word: "orange",
    concept:
      "a globose berry with a yellowish to reddish-orange rind and a sweet edible pulp",
    example: "He peeled an orange",
  },
  {
    word: "parcel",
    concept: "a tract or plot of land",
    example: "a parcel of real estate",
  },
  {
    word: "pencil",
    concept: "an artist's brush",
    example: "Use a pencil instead of a pen so you can erase your mistakes",
  },
  {
    word: "petrol",
    concept:
      "a volatile flammable liquid hydrocarbon mixture used as a fuel especially for internal combustion engines and usually blended from several products of natural gas and petroleum",
    example:
      "Pulling up at a gas station to fuel a conventional vehicle involves a simple exchange of cash for petrol or diesel",
  },
  {
    word: "picked",
    concept: "selected as being the best available",
    example: "a picked crew",
  },
  {
    word: "pledge",
    concept:
      "a bailment of a chattel as security for a debt or other obligation without involving transfer of title",
    example: "He has promised to fulfill a campaign pledge to cut taxes",
  },
  {
    word: "plough",
    concept:
      "an implement used to cut, lift, and turn over soil especially in preparing a seedbed",
    example: "He owned two ploughs, two harrows and a tractor",
  },
  {
    word: "pocket",
    concept: "a small bag carried by a person",
    example: "He keeps his gloves in his coat pocket",
  },
  {
    word: "potato",
    concept:
      "an erect South American herb (Solanum tuberosum) of the nightshade family widely cultivated for its edible starchy tuber",
    example: "She's growing carrot and potato in her garden this year",
  },
  {
    word: "prefer",
    concept: "to promote or advance to a rank or position",
    example: "Some people like vanilla ice cream, but I prefer chocolate",
  },
  {
    word: "prince",
    concept: "the ruler of a principality or state",
    example:
      "a neighborhood in which the city's merchant prince built palaces that shamelessly celebrated their wealth",
  },
  {
    word: "prison",
    concept: "a state of confinement or captivity",
    example: "If caught, they're all going to prison",
  },
  {
    word: "proper",
    concept: "strictly accurate",
    example: "It is not proper to speak that way",
  },
  {
    word: "proven",
    concept:
      "to establish the existence, truth, or validity of (as by evidence or logic)",
    example: "The government failed to prove its case",
  },
  {
    word: "pursue",
    concept: " to follow in order to overtake, capture, kill, or defeat",
    example: "pursue the criminal through narrow streets",
  },
  {
    word: "python",
    concept: "any of various large constricting snakes",
    example: "The lucky winner for the largest python will receive $10,000",
  },
  {
    word: "quirky",
    concept: " unusual in especially an interesting or appealing way",
    example: "you have a quirky sense of humor",
  },
  {
    word: "recall",
    concept: "a call to return",
    example: "They issued a recall of workers after a layoff",
  },
  {
    word: "recent",
    concept: "having lately come into existence",
    example: "Recent events have brought attention to the problem",
  },
  {
    word: "refuse",
    concept: "to express oneself as unwilling to accept",
    example: "He refuse a gift",
  },
  {
    word: "regime",
    concept:
      "a regular pattern of occurrence or action (as of seasonal rainfall)",
    example: "The new regime is sure to fall",
  },
  {
    word: "regret",
    concept:
      "sorrow aroused by circumstances beyond one's control or power to repair",
    example: "My greatest regret is not going to college",
  },
  {
    word: "relate",
    concept: "to show or establish logical or causal connection between",
    example:
      "You must be feeling awful. I went through something similar myself last year, so I can relate",
  },
  {
    word: "relief",
    concept:
      " removal or lightening of something oppressive, painful, or distressing",
    example: "I felt such a sense of relief after I finished my thesis",
  },
  {
    word: "remain",
    concept: "to be a part not destroyed, taken, or used up",
    example: "only a few ruins remain",
  },
  {
    word: "remote",
    concept: "separated by an interval or space greater than usual",
    example: "She enjoys reading about remote lands",
  },
  {
    word: "rescue",
    concept: "to free from confinement, danger, or evil",
    example: "an all-out effort to rescue a beached whale",
  },
  {
    word: "resent",
    concept: "to feel or express annoyance or ill will at",
    example: "He resented his boss for making him work late",
  },
  {
    word: "retain",
    concept: "to keep in possession or use",
    example:
      "A landlord may retain part of your deposit if you break the lease",
  },
  {
    word: "retire",
    concept: "to withdraw from action or danger",
    example: "I want to be healthy when I retire",
  },
  {
    word: "reveal",
    concept:
      " to make (something secret or hidden) publicly or generally known",
    example: "She would not reveal the secret",
  },
  {
    word: "rhythm",
    concept:
      "an ordered recurrent alternation of strong and weak elements in the flow of sound and silence in speech",
    example: "the composer's use of jazz rhythm",
  },
  {
    word: "rugged",
    concept: " having a rough uneven surface",
    example: "the rugged surface of the moon",
  },
  {
    word: "scanty",
    concept: "limited or less than sufficient in degree, quantity, or extent",
    example: "the camera's scanty instructions left me somewhat confused",
  },
  {
    word: "scared",
    concept: " thrown into or being in a state of fear, fright, or panic",
    example: "I am really scared about speaking in front of the class",
  },
  {
    word: "scenic",
    concept:
      " of or relating to the stage, a stage setting, or stage representation",
    example: "Our hotel had a scenic view of the lake",
  },
  {
    word: "scheme",
    concept: "a plan or program of action",
    example: "The company has a new scheme for insurance coverage",
  },
  {
    word: "school",
    concept: "an institution for the teaching of children",
    example: " I study hard at school",
  },
  {
    word: "settle",
    concept: "to place so as to stay",
    example: "He always thought he'd leave the city and settle in the country",
  },
  {
    word: "severe",
    concept: "strict in judgment, discipline, or government",
    example: "He faces severe penalties for his actions",
  },
  {
    word: "should",
    concept:
      "used in auxiliary function to express obligation, propriety, or expediency",
    example: "you should brush your teeth after each meal",
  },
  {
    word: "shrink",
    concept: "to contract or curl up the body or part of it",
    example: "The sweater shrank when it was washed",
  },
  {
    word: "signal",
    concept:
      " an act, event, or watchword that has been agreed on as the occasion of concerted action",
    example:
      "He likes her but he is sending the wrong signals with his constant teasing",
  },
  {
    word: "silver",
    concept:
      "a very malleable metallic chemical element with atomic number 47 that is capable of a high degree of polish",
    example: "We need to polish the silver",
  },
  {
    word: "simmer",
    concept: "to stew gently below or just at the boiling point",
    example: "The chicken was simmered in a cream sauce",
  },
  {
    word: "simple",
    concept: "of humble origin or modest position",
    example: "I'm a simple farmer just trying to make a living",
  },
  {
    word: "slight",
    concept: "having a slim or delicate build",
    example: "Her head is tilted at a slight angle in the picture",
  },
  {
    word: "smooth",
    concept: "having a continuous even surface",
    example: "They groomed the ski trail so it was smooth",
  },
  {
    word: "canvas",
    concept:
      "a firm closely woven cloth usually of linen, hemp, or cotton used for clothing and formerly much used for tents and sails",
    example: "The canvas covering was peeled back",
  },
  {
    word: "cashew",
    concept:
      "a tropical American tree (Anacardium occidentale of the family Anacardiaceae, the cashew family) grown for a phenolic oil and the edible kernel of its nut and for a gum from its stem",
    example: "Cashew nuts are rich in carbohydrate",
  },
  {
    word: "caucus",
    concept:
      "a closed meeting of a group of persons belonging to the same political party or faction usually to select candidates or to decide on policy",
    example: "The committee caucused to select the most promising candidates",
  },
  {
    word: "caught",
    concept: "past tense and past participle of catch",
    example: "The policeman caught him by the arm",
  },
  {
    word: "chance",
    concept:
      "something that happens unpredictably without discernible human intention or observable cause",
    example: "Which cards you are dealt is simply a matter of chance",
  },
  {
    word: "change",
    concept: "to make different in some particular",
    example: "Never bothered to change the will",
  },
  {
    word: "charge",
    concept: "to fix or ask as fee or payment",
    example: "He is in charge of the municipal housing project",
  },
  {
    word: "choose",
    concept: "to select freely and after consideration",
    example: "I had hoped he'd choose your sister",
  },
  {
    word: "circle",
    concept:
      "a closed plane curve every point of which is equidistant from a fixed point within the curve",
    example: "Traffic slowed down around the circle",
  },
  {
    word: "commit",
    concept: "to carry into action deliberately",
    example: "The massacre was committed by the rebel army",
  },
  {
    word: "common",
    concept:
      "belonging to or shared by two or more individuals or things or by all members of a group",
    example: "We have a lot in common",
  },
  {
    word: "comply",
    concept: "to conform, submit, or adapt as required or requested",
    example: "The devices comply with industry standards",
  },
  {
    word: "copper",
    concept:
      "a metallic chemical element that is easily formed into sheets and wires and is one of the best known conductors of heat and electricity",
    example: "The only monetary metal produced domestically was copper",
  },
  {
    word: "cotton",
    concept:
      "a soft usually white fibrous substance composed of the hairs surrounding the seeds of various erect freely branching tropical plants",
    example: "They are in the field picking cotton",
  },
  {
    word: "county",
    concept: " the domain of a count",
    example: "Count the plates on the table",
  },
  {
    word: "create",
    concept: "to bring into existence",
    example: "God created the heaven and the earth",
  },
  {
    word: "credit",
    concept: "reliance on the truth or reality of something",
    example: "Give no credit to idle rumors",
  },
  {
    word: "damage",
    concept:
      "loss or harm resulting from injury to person, property, or reputation",
    example: "Sustained severe damage to her knee",
  },
  {
    word: "danger",
    concept: "exposure or liability to injury, pain, harm, or loss",
    example: "A place where children could play without danger",
  },
  {
    word: "decent",
    concept: "marked by moral integrity, kindness, and goodwill",
    example: "It's very decent of them to help",
  },
  {
    word: "decide",
    concept: "to make a final choice or judgment about",
    example: "Couldn't decide whether to take the job or not",
  },
  {
    word: "deemed",
    concept: "to come to think or judge",
    example: "Those whom she deemed worthy",
  },
  {
    word: "defeat",
    concept: "to win victory over",
    example: "The bill was defeated in the Senate",
  },
  {
    word: "degree",
    concept: "a unit of measure for angles",
    example: "A fifteen degree angle",
  },
  {
    word: "demand",
    concept: "an act of demanding or asking especially with authority",
    example: "A demand for obedience",
  },
  {
    word: "depend",
    concept: "to be determined, based, or contingent ",
    example: "The value of Y depends on X",
  },
  {
    word: "deploy",
    concept: "to place in battle formation or appropriate positions",
    example: "Deploying troops to the region",
  },
  {
    word: "desert",
    concept: "a desolate or forbidding area",
    example: "Lost in a desert of doubt",
  },
  {
    word: "design",
    concept: "to create, fashion, execute, or construct according to plan",
    example: "Design a system for tracking inventory",
  },
  {
    word: "desire",
    concept: "to express a wish for",
    example: "They desire an immediate answer",
  },
  {
    word: "detail",
    concept: "extended treatment of or attention to particular items",
    example: "Giving careful attention to detail",
  },
  {
    word: "device",
    concept:
      "a piece of equipment or a mechanism designed to serve a special purpose or perform a special function",
    example: "Smartphones and other electronic devices",
  },
  {
    word: "differ",
    concept: "to be unlike or distinct in nature, form, or characteristics",
    example: "The law of one state differs from that of another",
  },
  {
    word: "double",
    concept: "consisting of two usually combined members or parts",
    example: "An egg with a double yolk",
  },
  {
    word: "dubbed",
    concept: "to call by a distinctive title, epithet, or nickname",
    example: "Critics have dubbed him the new king of rock 'n' roll",
  },
  {
    word: "effect",
    concept: "a distinctive impression",
    example: "The color gives the effect of being warm",
  },
  {
    word: "either",
    concept: "being the one and the other of two",
    example: "Flowers blooming on either side of the walk",
  },
  {
    word: "enable",
    concept: "to provide with the means or opportunity",
    example: "Training that enables people to earn a living",
  },
  {
    word: "engage",
    concept: "to offer as backing to a cause or aim",
    example: "Engaged his all in the king's cause",
  },
  {
    word: "enough",
    concept:
      " occurring in such quantity, quality, or scope as to fully meet demands, needs, or expectations",
    example: "Enough food for everyone",
  },
  {
    word: "ensure",
    concept: "to make sure, certain, or safe ",
    example: "The book ensured his success",
  },
  {
    word: "entail",
    concept:
      "to impose, involve, or imply as a necessary accompaniment or result",
    example: "The project will entail considerable expense",
  },
  {
    word: "entire",
    concept: "having no element or part left out",
    example: "Was alone the entire day",
  },
  {
    word: "equity",
    concept: "justice according to natural law or right",
    example: "We base this call on grounds of social justice and equity",
  },
  {
    word: "expand",
    concept: "to express at length or in greater detail",
    example: "Expand a function in a power series",
  },
  {
    word: "expect",
    concept: "to consider probable or certain",
    example: "Expect that things will improve",
  },
  {
    word: "expert",
    concept:
      "one with the special skill or knowledge representing mastery of a particular subject",
    example: "She was an acknowledged expert on child development",
  },
  {
    word: "extend",
    concept: "to spread or stretch forth",
    example: "Extended both her arms",
  },
  {
    word: "facing",
    concept: "located directly across from something",
    example: "An illustration on the facing page",
  },
  {
    word: "famous",
    concept: "widely known",
    example: "A restaurant famous for its French cuisine",
  },
  {
    word: "feared",
    concept: "producing fear in others",
    example: "The most feared teacher in school",
  },
  {
    word: "finish",
    concept: "to come to an end",
    example: "The meeting finished at noon",
  },
];

let sevenLetters = [
  {
    word: "account",
    concept:
      "an oral or written description of particular events or situations; narrative:",
    example: "an account of the meetings; an account of the trip.",
  },
  {
    word: "achieve",
    concept: "to bring to a successful end; carry through; accomplish:",
    example: "The police crackdown on speeders achieved its purpose.",
  },
  {
    word: "acquire",
    concept: "to come into possession or ownership of; get as one's own.",
    example: "to acquire property.",
  },
  {
    word: "airline",
    concept: "the airplanes, airports, etc., of such a system.",
    example: " A few airline flights went non-smoking",
  },
  {
    word: "amazing",
    concept: "causing great surprise or sudden wonder:",
    example: "He wowed the audience with amazing feats of magical illusion.",
  },
  {
    word: "analyst",
    concept: "a person who analyzes or who is skilled in analysis.",
    example: "Constance's husband is a financial analyst",
  },
  {
    word: "anguish",
    concept: "excruciating or acute distress, suffering, or pain:",
    example: "the anguish of grief.",
  },
  {
    word: "another",
    concept: "being one more or more of the same; further; additional:",
    example: "another piece of cake.",
  },
  {
    word: "anxious",
    concept:
      "full of mental distress or uneasiness because of fear of danger or misfortune; greatly worried; apprehensive:",
    example: "Her parents were anxious about her poor health.",
  },
  {
    word: "approve",
    concept:
      "to speak or think favorably of; pronounce or consider agreeable or good; judge favorably:",
    example: "to approve the policies of the administration.",
  },
  {
    word: "arrange",
    concept:
      "to place in proper, desired, or convenient order; adjust properly:",
    example: "to arrange books on a shelf.",
  },
  {
    word: "arrival",
    concept: "an act of arriving; a coming:",
    example: "His arrival was delayed by traffic.",
  },
  {
    word: "attempt",
    concept: "to make an effort at; try; undertake; seek:",
    example: "to attempt an impossible task; to attempt to walk six miles.",
  },
  {
    word: "attract",
    concept:
      "to draw by a physical force causing or tending to cause to approach, adhere, or unite; pull (opposed to repel):",
    example:
      "The gravitational force of the earth attracts smaller bodies to it.",
  },
  {
    word: "auction",
    concept:
      "An auction is a sales event wherein potential buyers place competitive bids on assets or services either in an open or closed format.",
    example: "He auctioned off his furniture.",
  },
  {
    word: "awkward",
    concept: "lacking grace or ease in movement:",
    example: "an awkward gesture;",
  },
  {
    word: "balance",
    concept:
      "a state of equilibrium or equipoise; equal distribution of weight, amount, etc.",
    example: "to balance a book on one's head.",
  },
  {
    word: "belief",
    concept: "something believed; an opinion or conviction:",
    example: "a belief that the earth is flat.",
  },
  {
    word: "believe",
    concept:
      "to have confidence in the truth, the existence, or the reliability of something, although without absolute proof that one is right in doing so:",
    example: "Only if one believes in something can one act purposefully.",
  },
  {
    word: "broad",
    concept: "measured from side to side:",
    example: "The desk was three feet broad.",
  },
  {
    word: "brought",
    concept: "simple past tense and past participle of bring.",
    example: "I brought you something to eat.",
  },
  {
    word: "capable",
    concept: "having power and ability; efficient; competent:",
    example: "a capable instructor.",
  },
  {
    word: "careful",
    concept: "cautious in one's actions:",
    example: "Be careful when you cross the street.",
  },
  {
    word: "certain",
    concept: "free from doubt or reservation; confident; sure:",
    example: "I am certain he will come.",
  },
  {
    word: "chattel",
    concept: "a human being considered to be property; an enslaved person.",
    example:
      "In most parts of the world, women are no longer legally regarded as chattel",
  },
  {
    word: "chronic",
    concept: "continuing a long time or recurring frequently:",
    example: "a chronic state of civil war.",
  },
  {
    word: "citizen",
    concept:
      "a native or naturalized member of a state or nation who owes allegiance to its government and is entitled to its protection",
    example: "The deer is a citizen of our woods.",
  },
  {
    word: "classic",
    concept: "of the first or highest quality, class, or rank:",
    example: "a classic piece of work.",
  },
  {
    word: "comfort",
    concept: "to soothe, console, or reassure; bring cheer to:",
    example: "They tried to comfort her after her loss.",
  },
  {
    word: "company",
    concept:
      "a number of individuals assembled or associated together; group of people.",
    example: "We're having company for dinner.",
  },
  {
    word: "compare",
    concept: "to examine in order to note similarities and differences:",
    example:
      "to compare two pieces of cloth; to compare the governments of two nations.",
  },
  {
    word: "compete",
    concept: "to do an activity with others and try to do better than they do",
    example: "She competed against students from around the country.",
  },
  {
    word: "complex",
    concept: "composed of many interconnected parts; compound; composite:",
    example: "a complex highway system.",
  },
  {
    word: "concern",
    concept:
      "to relate to; be connected with; be of interest or importance to; affect:",
    example: "The water shortage concerns us all.",
  },
  {
    word: "confirm",
    concept:
      "to establish the truth, accuracy, validity, or genuineness of; corroborate; verify:",
    example: "This report confirms my suspicions.",
  },
  {
    word: "connect",
    concept: "to join, link, or fasten together; unite or bind:",
    example:
      "to connect the two cities by a bridge; Communication satellites connect the local stations into a network.",
  },
  {
    word: "consent",
    concept:
      "to permit, approve, or agree; comply or yield (often followed by to or an infinitive):",
    example:
      "He consented to the proposal. We asked her permission, and she consented.",
  },
  {
    word: "contain",
    concept: "to hold or include within its volume or area:",
    example:
      "This glass contains water. This paddock contains our best horses.",
  },
  {
    word: "control",
    concept:
      "to order, limit, or rule something, or someone's actions or behavior",
    example: "If you can't control your dog, put it on a leash!",
  },
  {
    word: "correct",
    concept:
      "in agreement with the true facts or with what is generally accepted",
    example:
      "Is that the correct spelling? I don't know - look it up in a dictionary.",
  },
  {
    word: "country",
    concept: "an area of land that has its own government, army, etc.",
    example: "What is the largest country in Europe?",
  },
  {
    word: "courage",
    concept:
      "the ability to control your fear in a dangerous or difficult situation",
    example:
      "They showed great courage when they found out about their baby's disability",
  },
  {
    word: "curious",
    concept: "interested in learning about people or things around you",
    example: "I was curious to know what would happen next.",
  },
  {
    word: "current",
    concept: "of the present time or most recent",
    example: "The word is no longer in current use.",
  },
  {
    word: "curtain",
    concept:
      "a piece of material, especially cloth, that hangs across a window or opening to make a room or part of a room dark or private",
    example: "Heavy curtains blocked out the sunlight.",
  },
  {
    word: "cushion",
    concept:
      "a bag made of cloth, plastic, or leather that is filled with soft material, often has an attractive cover, and is used especially on chairs for sitting or leaning on",
    example: "She sank back against/into the cushions.",
  },
  {
    word: "decorum",
    concept: "behavior that is controlled, calm, and polite",
    example:
      "As young ladies we were expected to act/behave with proper decorum.",
  },
  {
    word: "deserve",
    concept:
      "to have earned or to be given something because of the way you have behaved or the qualities you have",
    example: "After all that hard work, you deserve a vacation.",
  },
  {
    word: "dessert",
    concept: "sweet food eaten at the end of a meal",
    example: "If you make the main course, I'll make a dessert.",
  },
  {
    word: "destroy",
    concept: "to damage something so badly that it cannot be used",
    example:
      "Most of the old part of the city was destroyed by bombs during the war.",
  },
  {
    word: "develop",
    concept:
      "to (cause something to) grow or change into a more advanced, larger, or stronger form",
    example:
      "It became clear that he wasn't developing like all the other little boys.",
  },
  {
    word: "discuss",
    concept:
      "to talk about a subject with someone and tell each other your ideas or opinions.",
    example: "The later chapters discuss the effects on the environment.",
  },
  {
    word: "disease",
    concept:
      "(an) illness of people, animals, plants, etc., caused by infection or a failure of health rather than by an accident",
    example: "a contagious/infectious disease",
  },
  {
    word: "disgust",
    concept:
      "a strong feeling of disapproval and dislike at a situation, person's behavior, etc.",
    example:
      "We are demonstrating to show our anger and disgust at the treatment of refugees.",
  },

  {
    word: "dislike",
    concept: "to not like someone or something",
    example: "Why do you dislike her so much?",
  },
  {
    word: "driving",
    concept:
      "the ability to drive a car, the activity of driving, or the way someone drives",
    example: "She has to do a lot of driving in her job.",
  },
  {
    word: "eastern",
    concept: "in or from the east part of an area",
    example: "The eastern part of the country is very mountainous.",
  },
  {
    word: "economy",
    concept:
      "the system of trade and industry by which the wealth of a country is made and used",
    example: "Tourism contributes millions of dollars to the local economy.",
  },
  {
    word: "embassy",
    concept:
      "the group of people who represent their country in a foreign country",
    example:
      "We used to be friendly with some people who worked at the Swedish Embassy.",
  },

  {
    word: "enhance",
    concept: "to improve the quality, amount, or strength of something",
    example: "These scandals will not enhance the organization's reputation.",
  },
  {
    word: "ensnare",
    concept: "to catch or get control of something or someone",
    example: "Spiders ensnare flies and other insects in their webs.",
  },
  {
    word: "enzyme",
    concept:
      "any of a group of chemical substances that are produced by living cells and cause particular chemical reactions to happen while not being changed themselves",
    example:
      "An enzyme in the saliva of the mouth starts the process of breaking down the food.",
  },
  {
    word: "evening",
    concept: "the part of the day between the end of the afternoon and night",
    example: "I work in a restaurant and only get one evening off a week.",
  },
  {
    word: "examine",
    concept:
      "to look at or consider a person or thing carefully and in detail in order to discover something about them",
    example:
      "Forensic scientists are examining the wreckage for clues about the cause of the explosion.",
  },
  {
    word: "excited",
    concept: "feeling very happy and enthusiastic",
    example: "An excited crowd waited for the singer to arrive.",
  },
  {
    word: "exhibit",
    concept: "to show something publicly",
    example: "He frequently exhibits at the art gallery.",
  },
  {
    word: "explain",
    concept:
      "to make something clear or easy to understand by describing or giving information about it",
    example:
      "If there's anything you don't understand, I'll be happy to explain.",
  },
  {
    word: "explore",
    concept: "to search a place and discover things about it",
    example: "The best way to explore the countryside is on foot.",
  },
  {
    word: "express",
    concept: "to show a feeling, opinion, or fact",
    example: "Her eyes expressed deep sadness.",
  },
  {
    word: "feather",
    concept:
      "one of the many soft, light things that cover a bird's body, consisting of a long, thin, central part with material like hairs along each side",
    example: "The bird ruffled its feathers.",
  },
  {
    word: "feature",
    concept: "a typical quality or an important part of something",
    example:
      "The town's main features are its beautiful mosque and ancient marketplace.",
  },

  {
    word: "feeling",
    concept: "the fact of feeling something physical",
    example: "I had a tingling feeling in my fingers.",
  },
  {
    word: "fellow",
    concept:
      "used to refer to someone who has the same job or interests as you, or is in the same situation as you",
    example: "She introduced me to some of her fellow students.",
  },
  {
    word: "fiction",
    concept:
      "the type of book or story that is written about imaginary characters and events and not based on real people and facts",
    example:
      "The book is a work of fiction and not intended as a historical account.",
  },
  {
    word: "foreign",
    concept: "belonging or connected to a country that is not your own",
    example: "Spain was the first foreign country she had visited.",
  },
  {
    word: "forgive",
    concept:
      "to grant pardon for or remission of (an offense, debt, etc.); absolve.",
    example: "to forgive one's enemies.",
  },
  {
    word: "forward",
    concept: "toward or at a place, point, or time in advance; onward; ahead.",
    example: "to move forward;",
  },
  {
    word: "improve",
    concept: "to bring into a more desirable or excellent condition: ",
    example: "He took vitamins to improve his health.",
  },
  {
    word: "impulse",
    concept: "the influence of a particular feeling, mental state, etc.",
    example:
      "to act under a generous impulse; to strike out at someone from an angry impulse.",
  },
  {
    word: "Freeman",
    concept: "One enjoying civil or political liberty",
    example:
      "After eight years of residency, you will be granted the status of freeman.",
  },
  {
    word: "Friable",
    concept: "Easily crumbled or pulverized",
    example:
      "The meteorite in question is not a hard, dense rock, but actually very soft and friable (crumbly).",
  },
  {
    word: "Genuine",
    concept: "Actually having the reputed or apparent qualities or character",
    example: "She showed a genuine interest in our work.",
  },
  {
    word: "Harmony",
    concept:
      "The structure of music with respect to the composition and progression of chords",
    example:
      "Up Here, March 24 Mae Whitman and Carlos Valdes are in perfect harmony in this musical rom-com.",
  },
  {
    word: "Healthy",
    concept: "Enjoying good health",
    example:
      "This delicious-looking salad is made up of fridge contents and is both healthy and bursting with color.",
  },
  {
    word: "Hearing",
    concept: "The process, function, or power of perceiving sound",
    example:
      "During the hearing, Santos can be heard in court audio falsely telling the judge that he was employed at the investment firm Goldman Sachs.",
  },
  {
    word: "Helpful",
    concept: "Giving or ready to give help",
    example: "A helpful neighbor shoveled our walkway.",
  },
  {
    word: "Highway",
    concept: "A main road, especially one connecting major towns or cities",
    example: "It took us 2 hours to get to the airport by highway.",
  },
  {
    word: "History",
    concept:
      "A chronological record of significant events (such as those affecting a nation or institution) often including an explanation of their causes",
    example: "I studied history in college.",
  },
  {
    word: "Holiday",
    concept: "A day on which one is exempt from work",
    example: "The stock market is closed tomorrow because it's a holiday.",
  },
  {
    word: "Illegal",
    concept: "Not according to or authorized by law",
    example:
      "In this state, it is illegal for anyone under the age of 21 to drink alcohol.",
  },
  {
    word: "Illness",
    concept: "An unhealthy condition of body or mind",
    example: "Her body was not able to defend itself against illness.",
  },
  {
    word: "Impress",
    concept: "Make (someone) feel admiration and respect",
    example: "They immediately impressed the judges.",
  },
  {
    word: "Include",
    concept: "To take in or comprise as a part of a whole or group",
    example: "The speakers will include several experts on the subject.",
  },
  {
    word: "Initial",
    concept: "Of or relating to the beginning",
    example: "Our initial impression was favorable.",
  },
  {
    word: "Install",
    concept: "To set up for use or service",
    example: "New locks were installed on all the doors.",
  },
  {
    word: "Involve",
    concept: "To engage as a participant",
    example: "Workers involved in building a house.",
  },
  {
    word: "Jointly",
    concept: "With another person or people; together",
    example: "A report prepared jointly by Harvard and Yale universities.",
  },
  {
    word: "Journey",
    concept: "Something suggesting travel or passage from one place to another",
    example: "The journey from youth to maturity.",
  },
  {
    word: "Justify",
    concept: "To prove or show to be just, right, or reasonable",
    example: "I shouldn't have to justify myself to them.",
  },
  {
    word: "Kingdom",
    concept: "A country, state, or territory ruled by a king or queen.",
    example: "The Kingdom of the Netherlands.",
  },
  {
    word: "Kitchen",
    concept: "A place (such as a room) with cooking facilities",
    example: "They want a house with a large kitchen.",
  },
  {
    word: "Leading",
    concept: "Coming or ranking first",
    example: "The leading role in a major Hollywood movie.",
  },
  {
    word: "Leather",
    concept:
      "A material made from the skin of an animal by tanning or a similar process",
    example: "A leather jacket.",
  },
  {
    word: "Leisure",
    concept: "Freedom provided by the cessation of activities",
    example:
      "Increase of leisure, diminution of hustle are the ends to be sought.",
  },
  {
    word: "Manager",
    concept: "A person who conducts business or household affairs",
    example: "He was promoted to manager last month.",
  },
  {
    word: "Massive",
    concept: "Large and heavy or solid",
    example: "A massive rampart of stone.",
  },
  {
    word: "Maximum",
    concept: "The greatest quantity or value attainable or attained",
    example: "The vehicle's maximum speed.",
  },
  {
    word: "Measure",
    concept:
      "Estimate or assess the extent, quality, value, or effect of (something)",
    example: "It is hard to measure teaching ability.",
  },
  {
    word: "Mention",
    concept:
      "The act or an instance of citing or calling attention to someone or something especially in a casual or incidental manner",
    example: "There was hardly a mention of the plan's possible dangers.",
  },
  {
    word: "Midwife",
    concept: "A person who assists women in childbirth",
    example: "A trained and certified midwife.",
  },
  {
    word: "Minimum",
    concept:
      "Estimate or assess the extent, quality, value, or effect of (something)",
    example: "It is hard to measure teaching ability.",
  },
  {
    word: "Mission",
    concept: "A specific task with which a person or a group is charged",
    example: "Their mission was to help victims of the disaster.",
  },
  {
    word: "Monthly",
    concept: "Done, produced, or occurring once a month",
    example: "The Council held monthly meetings.",
  },
  {
    word: "Neglect",
    concept: "To give little attention or respect",
    example: "The building has been neglected for years.",
  },
  {
    word: "Neither",
    concept:
      "used before the first of two (or occasionally more) alternatives (the others being introduced by ‘nor’) to indicate that they are each untrue or each does not happen",
    example: "Unlike her friends, she is neither a snob nor a gossip.",
  },
  {
    word: "Nervous",
    concept: "Having or showing feelings of worry, fear, or anxiety",
    example: "A sensitive, nervous person.",
  },
  {
    word: "Network",
    concept:
      "A fabric or structure of cords or wires that cross at regular intervals and are knotted or secured at the crossings",
    example:
      "Ribbons, lace and embroidery wrought together in a most curious piece of network .",
  },
  {
    word: "nowhere",
    concept: "the state of nonexistence or seeming nonexistence:",
    example: "A gang of thieves appeared from nowhere.",
  },
  {
    word: "observe",
    concept: "to see, watch, perceive, or notice:",
    example: "He observed the passersby in the street.",
  },
  {
    word: "obvious",
    concept:
      "easily seen, recognized, or understood; open to view or knowledge.",
    example: "an obvious advantage.",
  },
  {
    word: "operate",
    concept: "to work or use a machine, apparatus, or the like.",
    example: "This engine does not operate properly.",
  },
  {
    word: "outside",
    concept: "the outer side, surface, or part; exterior.",
    example: "The outside of the house needs painting.",
  },
  {
    word: "overall",
    concept: "from one extreme limit of a thing to the other.",
    example: "the overall length of the bridge.",
  },
  {
    word: "parking",
    concept:
      "space in which to park vehicles, as at a place of business or a public event.",
    example: "There's plenty of free parking at the stadium.",
  },
  {
    word: "passage",
    concept:
      "an act or instance of passing from one place, condition, etc., to another; transit.",
    example: "passages of sensitive brushwork.",
  },
  {
    word: "patient",
    concept: "a person who is under medical care or treatment.",
    example: "a patient worker.",
  },
  {
    word: "paucity",
    concept: "smallness or insufficiency of number; fewness.",
    example: "a country with a paucity of resources.",
  },
  {
    word: "payment",
    concept:
      "something that is paid; an amount paid; compensation; recompense.",
    example: "We make monthly payments on the loan.",
  },
  {
    word: "perfect",
    concept:
      "conforming absolutely to the description or definition of an ideal type.",
    example: "a perfect gentleman.",
  },
  {
    word: "perform",
    concept: "to carry out, execute; do.",
    example: "to perform miracles.",
  },
  {
    word: "phoneme",
    concept:
      "any of a small set of units, usually about 20 to 60 in number, and different for each language, considered to be the basic distinctive units of speech sound by which morphemes",
    example: "A new phoneme, the velar nasal, was born",
  },
  {
    word: "possess",
    concept: "to have as belonging to one; have as property; own.",
    example: "to possess a house and a car.",
  },
  {
    word: "powdery",
    concept: "easily reduced to powder.",
    example: "powdery plaster.",
  },
  {
    word: "prepare",
    concept: "to put in proper condition or readiness.",
    example: "to prepare a patient for surgery.",
  },
  {
    word: "pretend",
    concept: "to cause or attempt to cause (what is not so) to seem so.",
    example: "to pretend illness; to pretend that nothing is wrong.",
  },
  {
    word: "prevent",
    concept: "to keep from occurring; avert; hinder.",
    example: "He intervened to prevent bloodshed.",
  },
  {
    word: "proceed",
    concept: "to move or go forward or onward, especially after stopping.",
    example: "The proceeds from the deal were divided equally among us.",
  },
  {
    word: "process",
    concept: "a systematic series of actions directed to some end.",
    example: "to devise a process for homogenizing milk.",
  },
  {
    word: "produce",
    concept: "to bring into existence; give rise to; cause.",
    example: "to produce steam.",
  },
  {
    word: "promise",
    concept: "an express assurance on which expectation is to be based.",
    example: "promises that an enemy will not win.",
  },
  {
    word: "propose",
    concept: "to offer or suggest for consideration, acceptance, or action",
    example: "to propose a new method.",
  },
  {
    word: "qualify",
    concept:
      "to provide with proper or necessary skills, knowledge, credentials, etc.; make competent.",
    example: "to qualify oneself for a job.",
  },
  {
    word: "quality",
    concept:
      "an essential or distinctive characteristic, property, or attribute.",
    example: "the chemical qualities of alcohol.",
  },
  {
    word: "quarter",
    concept:
      "one of the four equal or equivalent parts into which anything is or may be divided.",
    example: "a quarter of an apple; a quarter of a book.",
  },
  {
    word: "railway",
    concept:
      "a rail line with lighter-weight equipment and roadbed than a main-line railroad.",
    example: "The railway is still under construction.",
  },
  {
    word: "reading",
    concept: "the action or practice of a person who reads.",
    example: "an interesting reading of Beethoven's 5th Symphony.",
  },
  {
    word: "realize",
    concept: "to grasp or understand clearly.",
    example: "to realize securities.",
  },
  {
    word: "receipt",
    concept:
      "a written acknowledgment of having received, or taken into one's possession, a specified amount of money, goods, etc.",
    example: "Economic austerity diminished the government’s tax receipts.",
  },
  {
    word: "receive",
    concept: "to take into one's possession (something offered or delivered):",
    example: "to receive many gifts.",
  },
  {
    word: "reflect",
    concept: "to cast back (light, heat, sound, etc.) from a surface.",
    example: "The mirror reflected the light onto the wall.",
  },
  {
    word: "relieve",
    concept: "to free from anxiety, fear, pain, etc.",
    example: "She was given a shot of morphine to relieve the pain",
  },
  {
    word: "replace",
    concept:
      "to assume the former role, position, or function of; substitute for (a person or thing).",
    example: "Electricity has replaced gas in lighting.",
  },
  {
    word: "request",
    concept:
      "the act of asking for something to be given or done, especially as a favor or courtesy; solicitation or petition.",
    example: "At his request, they left.",
  },
  {
    word: "require",
    concept: "to have need of.",
    example: "He requires medical care.",
  },
  {
    word: "revenge",
    concept: "to take vengeance for; inflict punishment for; avenge.",
    example: "He revenged his brother's murder.",
  },
  {
    word: "Routine",
    concept: "A customary or regular course of procedure",
    example: "The routine of an office",
  },
  {
    word: "Satisfy",
    concept:
      "To fulfill the desires, expectations, needs, or demands of (a person, the mind, etc.)",
    example: "The hearty meal satisfied him",
  },
  {
    word: "Savings",
    concept: "Tending or serving to save; rescuing; preserving",
    example: "A saving sense of humor",
  },
  {
    word: "Science",
    concept:
      "A branch of knowledge or study dealing with a body of facts or truths systematically arranged and showing the operation of general laws",
    example: "The mathematical sciences",
  },
  {
    word: "Seaweed",
    concept: "Any plant or plants growing in the ocean",
    example: "My foot got stuck in the seaweed",
  },
  {
    word: "Serious",
    concept: "Of, showing, or characterized by deep thought",
    example: "A serious occasion",
  },
  {
    word: "Servant",
    concept:
      "A person employed by another, especially to perform domestic duties",
    example: "A public servant",
  },
  {
    word: "Society",
    concept:
      "An organized group of persons associated together for religious, benevolent, cultural, scientific, political, patriotic, or other purposes",
    example: "The evolution of human society",
  },
  {
    word: "Somehow",
    concept: "In some way not specified, apparent, or known",
    example: "Somehow we are animals",
  },
  {
    word: "Specify",
    concept: "To mention or name specifically or definitely; state in detail: ",
    example: "He did not specify the amount needed",
  },
  {
    word: "Station",
    concept:
      "A place or position in which a person or thing is normally located",
    example: "The police station; fire station; postal station",
  },
  {
    word: "Stomach",
    concept:
      "A saclike enlargement of the alimentary canal, as in humans and certain animals, forming an organ for storing, diluting, and digesting food",
    example: "My stomach hurts",
  },
  {
    word: "Strange",
    concept: "Unusual, extraordinary, or curious",
    example: "A strange remark to make",
  },
  {
    word: "Stretch",
    concept: "To draw out or extend to the full length or extent ",
    example: "To stretch oneself out on the ground",
  },
  {
    word: "Subject",
    concept:
      "That which forms a basic matter of thought, discussion, investigation, etc",
    example: "A subject of conversation",
  },
  {
    word: "Succeed",
    concept:
      "To happen or terminate according to desire; turn out successfully; have the desired result",
    example: "Our efforts succeeded",
  },
  {
    word: "Suggest",
    concept:
      "To mention or introduce (an idea, proposition, plan, etc.) for consideration or possible action",
    example: "The architect suggested that the building be restored",
  },
  {
    word: "Support",
    concept: "To bear or hold up, serve as a foundation for",
    example: "You're my support",
  },
  {
    word: "Suppose",
    concept:
      "To assume (something), as for the sake of argument or as part of a proposition or theory",
    example: "Suppose the distance to be one mile",
  },
  {
    word: "Survive",
    concept:
      "To remain alive after the death of someone, the cessation of something, or the occurrence of some event",
    example: "Few survived after the holocaust",
  },
  {
    word: "Thought",
    concept: "The product of mental activity",
    example: "A body of thought",
  },
  {
    word: "Thunder",
    concept:
      "A loud, explosive, resounding noise produced by the explosive expansion of air heated by a lightning discharge",
    example: "The thunder scared me",
  },
  {
    word: "Triumph",
    concept: "The act, fact, or condition of being victorious or triumphant",
    example: "I triumph in the game",
  },
  {
    word: "Trouble",
    concept:
      "To disturb the mental calm and contentment of; worry; distress; agitate",
    example: "We are in trouble",
  },
  {
    word: "Typical",
    concept: "Of the nature of or serving as a type or representative specimen",
    example: "It is a typical behavior",
  },
  {
    word: "Unusual",
    concept:
      "Not usual, common, or ordinary; uncommon in amount or degree; exceptional",
    example: "An unusual sound; an unusual hobby; an unusual response",
  },
  {
    word: "Various",
    concept: "An unusual sound; an unusual hobby; an unusual response",
    example: "Various experiments have not proved his theory",
  },
  {
    word: "Venture",
    concept:
      "An undertaking involving uncertainty as to the outcome, especially a risky or dangerous one",
    example: "A mountain-climbing venture",
  },
  {
    word: "Violent",
    concept:
      "Acting with or characterized by uncontrolled, strong, rough force",
    example: "A violent earthquake",
  },
  {
    word: "Visible",
    concept: "That can be seen; perceptible to the eye",
    example: "Mountains visible in the distance",
  },
  {
    word: "Weather",
    concept:
      "The state of the atmosphere with respect to wind, temperature, cloudiness, moisture, pressure, etc",
    example: "The weather of today is sunny",
  },
  {
    word: "Western",
    concept: "Lying toward or situated in the west: ",
    example: "Our company's western office",
  },
  {
    word: "Whistle",
    concept:
      "To make a high sound by forcing air through a small hole or passage, especially through the lips",
    example: "He whistled as he worked",
  },
  {
    word: "Willing",
    concept: "To be happy to do something if it is needed",
    example:
      "If you're willing to fly at night, you can get a much cheaper ticket",
  },
  {
    word: "Writing",
    concept:
      "A person's style of writing with a pen on paper that can be recognized as their own",
    example: "Do you recognize the writing on the envelope?",
  },
];

let eightLetters = [
  {
    word: "accuracy",
    concept: "freedom from mistake or error",
    example: "Each experiment is performed twice to ensure accuracy.",
  },
  {
    word: "distinct",
    concept:
      "distinct, separate, discrete mean not being each and every one the same. distinct indicates that something is distinguished by the mind or eye as being apart or different from others.",
    example: "a distinct cultural group",
  },
  {
    word: "accurate",
    concept: "Free from error especially as the result of care",
    example: "The model is accurate down to the tiniest details.",
  },
  {
    word: "aeration",
    concept:
      "The process of making it possible for air to become mixed with soil, water, etc.",
    example:
      "The primary effect of soil flooding is to reduce aeration of the soil.",
  },
  {
    word: "alliance",
    concept:
      "A bond or connection between families, states, parties, or individuals",
    example:
      "We need to form a closer alliance between government and industry.",
  },
  {
    word: "almighty",
    concept: "having complete power",
    example: "Almighty God, have mercy on us.",
  },
  {
    word: "announce",
    concept:
      "to tell people something officially, especially about a decision, plans, etc. announce something",
    example: "They haven`t formally announced their engagement yet.",
  },
  {
    word: "anointed",
    concept: "to smear or rub with oil or an oily substance",
    example: "The magazine anointed her the most popular actress of the year.",
  },
  {
    word: "antihero",
    concept:
      "a protagonist or notable figure who is conspicuously lacking in heroic qualities",
    example:
      "Anthony Perkins is the evil anti-hero of the Hitchcock thriller Psycho.",
  },
  {
    word: "appendix",
    concept:
      "enlarge imagea small bag of tissue that is attached to the large intestine.",
    example: "He had to have his appendix out.",
  },
  {
    word: "approach",
    concept: "a way of dealing with somebody/something;",
    example: "She took the wrong approach in her dealings with them.",
  },
  {
    word: "approval",
    concept: "the feeling that somebody/something is good or acceptable; ",
    example: "Do the plans meet with your approval?",
  },
  {
    word: "argument",
    concept:
      "a coherent series of reasons, statements, or facts intended to support or establish a point of view",
    example: "a defense attorney`s closing argument",
  },
  {
    word: "astonish",
    concept: "to strike with sudden and usually great wonder or surprise",
    example: "He was too astonished to speak",
  },
  {
    word: "baritone",
    concept: "a male singing voice of medium compass between bass and tenor",
    example: "a baritone voice",
  },
  {
    word: "behavior",
    concept: "the way that somebody behaves, especially towards other people",
    example: "His behaviour towards her was becoming more and more aggressive.",
  },
  {
    word: "boundary",
    concept:
      "a real or imagined line that marks the limits or edges of something and separates it from other things or places",
    example: "After the war the national boundaries were redrawn.",
  },
  {
    word: "breeding",
    concept: "the keeping of animals in order to breed from them",
    example: "the breeding of horses",
  },
  {
    word: "building",
    concept: "a structure such as a house or school that has a roof and walls",
    example:
      "The architects have presented the design of a new office building.",
  },
  {
    word: "business",
    concept:
      "the activity of making, buying, selling or supplying goods or services for money",
    example: "It`s been a pleasure to do business with you.",
  },
  {
    word: "campaign",
    concept:
      "a series of planned activities that are intended to achieve a particular social, commercial or political aim",
    example: "the recent presidential campaign",
  },
  {
    word: "carriage",
    concept: "a separate section of a train for carrying passengers",
    example: "a railway carriage",
  },
  {
    word: "cautious",
    concept:
      "being careful about what you say or do, especially to avoid danger or mistakes",
    example: "They`ve taken a very cautious approach.",
  },
  {
    word: "chemical",
    concept:
      "produced by or using processes that involve changes to atoms or molecules",
    example: "chemical processes",
  },
  {
    word: "churlish",
    concept: "rude or very unpleasant",
    example: "It would be churlish to refuse such a generous offer.",
  },
  {
    word: "complain",
    concept:
      "to say that you are annoyed, unhappy or not satisfied about somebody/something",
    example: "She never complains, but she`s obviously exhausted.",
  },
  {
    word: "coverage",
    concept: "the reporting of news and sport in the media",
    example: "tonight`s live coverage of the hockey game",
  },
  {
    word: "creative",
    concept:
      "involving the use of skill and the imagination to produce something new or a work of art",
    example: "a course on creative writing",
  },
  {
    word: "cultural",
    concept:
      "connected with the culture of a particular society or group, its customs, beliefs, etc.",
    example: "Teachers need to be aware of cultural differences.",
  },
  {
    word: "daughter",
    concept: "a person`s female child",
    example: "We have two sons and a daughter.",
  },
  {
    word: "decision",
    concept:
      "a choice or judgement that you make after thinking and talking about what is the best thing to do",
    example: "I think I`ve made the right decision.",
  },
  {
    word: "Deletion",
    concept: "The act of deleting",
    example:
      "one of the deletions from the final cut of the movie turned out to be my one line of dialogue",
  },
  {
    word: "designer",
    concept:
      "one that creates and manufactures a new product style or design especially one who designs and manufactures high-fashion clothing",
    example: "She is one of the leading designers in the fashion world.",
  },
  {
    word: "Disagree",
    concept: "to differ in opinion",
    example: "I think that I should sell my car, but he disagrees.",
  },
  {
    word: "disclose",
    concept: "to make known or public",
    example: "He refused to disclose the source of his information.",
  },
  {
    word: "dizzying",
    concept: "to make dizzy or giddy",
    example:
      "The store went through a dizzying succession of owners, nameplates and locations within the mall..",
  },
  {
    word: "doubtful",
    concept: "lacking a definite opinion, conviction, or determination",
    example: "I tried to reassure them, but they remained doubtful..",
  },
  {
    word: "downtown",
    concept:
      " of, relating to, or located in the lower part or business center of a city or town",
    example:
      "the downtown clientele of this bistro come to be seen, and the food is only an afterthought.",
  },
  {
    word: "dynamics",
    concept: "a pattern or process of change, growth, or activity",
    example:
      "But inquiring into the specifics of familial dynamics is impudent and prying -- and a line of questioning that most people would be happy to avoid answering themselves..",
  },
  {
    word: "emphasis",
    concept:
      "force or intensity of expression that gives impressiveness or importance to something",
    example: "a prep school with a long-established emphasis on sports.",
  },
  {
    word: "eligible",
    concept: "qualified to participate or be chosen",
    example: "I'd like to join but I'm not eligible yet.",
  },
  {
    word: "enormous",
    concept:
      "marked by extraordinarily great size, number, or degree especially : exceeding usual bounds or accepted notions",
    example: "They live in an enormous house.",
  },
  {
    word: "evacuees",
    concept: "an evacuated person",
    example:
      "One hundred evacuees spent the night at a school during the storm.",
  },
  {
    word: "exchange",
    concept:
      "the act of giving or taking one thing in return for another : TRADE",
    example: "a useful exchange of information.",
  },
  {
    word: "exciting",
    concept: "producing excitement",
    example: "an exciting trip to Africa.",
  },
  {
    word: "external",
    concept: "capable of being perceived outwardly",
    example: "the external features of the building.",
  },
  {
    word: "familiar",
    concept: "a member of the household of a high official",
    example:
      "a longtime familiar of the bar, she would most likely have been there on the night in question.",
  },
  {
    word: "featured",
    concept: " displayed, advertised, or presented as a special attraction",
    example:
      "The featured performer list has not been finalized, but the schedule and ticket sales should be ready to go by early March.",
  },
  {
    word: "firewall",
    concept:
      "usually firewall : computer hardware or software that prevents unauthorized access to private data (as on a company's local area network or intranet) by outside computer users (as of the Internet)",
    example: "New technology should provide a secure firewall against hackers.",
  },
  {
    word: "foothill",
    concept: "a hill at the foot of higher hills",
    example:
      "At first the ground rose in a series of low foothills, then it climbed steeply. ....",
  },
  {
    word: "foremost",
    concept: "first in a series or progression",
    example: "Safety is their foremost concern.",
  },
  {
    word: "formerly",
    concept: "at an earlier time : PREVIOUSLY",
    example: "He was formerly a congressman.",
  },
  {
    word: "frazzled",
    concept: "in a state of extreme physical or nervous fatigue and agitation",
    example: "Right now, he was too frazzled to know what else to do...",
  },
  {
    word: "frequent",
    concept: "COMMON, USUAL",
    example: "We made frequent trips to town.",
  },
  {
    word: "friendly",
    concept: "showing kindly interest and goodwill",
    example: "The local people are very friendly to visitors.",
  },
  {
    word: "gelation",
    concept: "the action or process of freezing",
    example:
      "Finally, formula of instant coagulator and gelation condition were obtained.",
  },
  {
    word: "generate",
    concept: "to bring into existence: such as",
    example: "windmills used to generate electricity.",
  },
  {
    word: "genomics",
    concept:
      "the branch of molecular biology concerned with the structure, function, evolution, and mapping of genomes.",
    example:
      "The ESRC has supported the Forum to provide a truly interdisciplinary context for the study of genomics.",
  },
  {
    word: "gentleman",
    concept:
      "a man whose conduct conforms to a high standard of propriety or correct behavior",
    example: "A true gentleman would never engage in such behavior.",
  },

  {
    word: "governor",
    concept: "one that exercises authority especially over an area or group",
    example: "the governor of the state of Florida ",
  },
  {
    word: "guidance",
    concept: "the act or process of guiding",
    example: "We need more guidance on how to handle these unusual cases. ",
  },
  {
    word: "hawthorn",
    concept:
      "any of a genus (Crataegus) of spring-flowering spiny shrubs or small trees of the rose family with glossy and often lobed leaves, white or pink fragrant flowers, and small red fruits",
    example:
      "Most Indian hawthorn leaf spots are commonly caused by the entomosporium fungus.",
  },
  {
    word: "heraldry",
    concept:
      " the practice of devising, blazoning, and granting armorial insignia and of tracing and recording genealogies",
    example:
      "King Charles chose the design from several created by the palace's heraldry experts, the College of Arms.",
  },
  {
    word: "hesitate",
    concept: "to hold back in doubt or indecision",
    example: "She hesitated and waited for her friend to say something.",
  },
  {
    word: "homeless",
    concept: "having no home or permanent place of residence",
    example:
      "Having communication issues with a homeless person isn't uncommon.",
  },
  {
    word: "ideation",
    concept: "the capacity for or the act of forming or entertaining ideas",
    example: "a product designer who went from ideation to creation quickly",
  },
  {
    word: "identify",
    concept: "to perceive or state the identity of (someone or something)",
    example:
      "It's the young man! I thought, feeling my heart shoot as I identified him.",
  },
  {
    word: "imperial",
    concept:
      "of, relating to, befitting, or suggestive of an empire or an emperor",
    example:
      "envisioned an imperial city that would rival the capitals of Europe for beauty and magnificence ",
  },
  {
    word: "increase",
    concept:
      "to become progressively greater (as in size, amount, number, or intensity)",
    example: "The house increased in value. ",
  },
  {
    word: "indebted",
    concept: "owing gratitude or recognition to another",
    example:
      "thereafter forever felt indebted to the producer for giving her her lucky break ",
  },
  {
    word: "indicate",
    concept: "to state or express briefly",
    example: "Our records indicate a depth of 3,000 feet here. ",
  },
  {
    word: "industry",
    concept: "manufacturing activity as a whole",
    example: "She invested in several large industries. ",
  },
  {
    word: "inherent",
    concept:
      "involved in the constitution or essential character of something : ",
    example:
      "There were those who trusted the innate goodness of humanity, and those who believed in its inherent crookedness.",
  },
  {
    word: "initiate",
    concept: "a person who is undergoing or has undergone an initiation",
    example:
      "Doctors have initiated a series of tests to determine the cause of the problem. ",
  },
  {
    word: "iodinate",
    concept: "to treat or cause to combine with iodine or a compound of iodine",
    example: "Beef liver.",
  },
  {
    word: "judgement",
    concept: "an opinion or estimate so formed",
    example: "We have to make a judgment about the value of their services.",
  },
  {
    word: "judicial",
    concept: "ordered or enforced by a court",
    example: "the judicial branch of government",
  },
  {
    word: "language",
    concept:
      "the words, their pronunciation, and the methods of combining them used and understood by a community",
    example: "How many languages do you speak?",
  },
  {
    word: "legation",
    concept: "a body of deputies sent on a mission",
    example:
      "The Harrison administration in turn removed the US legation from Rome.",
  },

  {
    word: "literary",
    concept:
      "relating to, or having the characteristics of humane learning or literature",
    example: "Do his books have any literary merit?",
  },

  {
    word: "maintain",
    concept: "keep in an existing state",
    example: "He has found it difficult to maintain a healthy weight.",
  },

  {
    word: "marriage",
    concept:
      "the state of being united as spouses in a consensual and contractual relationship recognized by law",
    example: "It was his second marriage.",
  },

  {
    word: "material",
    concept: "relating to, derived from, or consisting of matter",
    example: "He is concerned only with his own material comforts.",
  },

  {
    word: "maximize",
    concept: "to increase to a maximum",
    example:
      "I rearranged the furniture to maximize the space in my small apartment.",
  },

  {
    word: "minstrel",
    concept: "a singer of verses to the accompaniment of a harp",
    example: "Edna St. Vincent Millay was unofficially the minstrel of Maine.",
  },

  {
    word: "mortgage",
    concept: "a conveyance of or lien against property",
    example: "He will have to take out a mortgage in order to buy the house.",
  },

  {
    word: "mountain",
    concept:
      "a landmass that projects conspicuously above its surroundings and is higher than a hill",
    example: "She watched the sun set behind the mountains.",
  },
  // se repiten
  {
    word: "nauseous",
    concept: "causing nausea or disgust",
    example:
      "She looked slightly nauseous, as though she had just watched someone being sick.",
  },

  {
    word: "negative",
    concept: "marked by denial, prohibition, or refusal",
    example: "Car exhaust has a negative effect on the environment.",
  },

  {
    word: "northern",
    concept: "coming from the north",
    example: "The northern part of the state",
  },

  {
    word: "numerous",
    concept: "consisting of great numbers of units or individuals",
    example: "She decided to leave for numerous reasons.",
  },

  {
    word: "nuzzling",
    concept: "to work with or as if with the nose",
    example: "The dog nuzzled my leg.",
  },

  {
    word: "official",
    concept: "one who holds or is invested",
    example: "A company official responded to our request.",
  },

  {
    word: "opposite",
    concept:
      "set over against something that is at the other end or side of an intervening",
    example: "The two boys lived on opposite sides of the street.",
  },

  {
    word: "organize",
    concept: "to form into a coherent unity or functioning whole ",
    example: "They hired a professional to help organize their wedding.",
  },

  {
    word: "original",
    concept: "relating to, or constituting an origin or beginning",
    example:
      "Their original idea was to fix their old car, but they decided to buy a new one instead.",
  },

  {
    word: "ornament",
    concept:
      "an object that is used as decoration in a room, garden, etc. rather than for a particular purpose",
    example:
      "There were a few china ornaments on the shelf above the fireplace.",
  },
  {
    word: "overcome",
    concept:
      "to succeed in dealing with or controlling a problem that has been preventing you from achieving something",
    example: "She overcame injury to win the Olympic gold medal.",
  },
  {
    word: "overhead",
    concept: "above your head",
    example: "Thunder boomed in the sky overhead.",
  },
  {
    word: "overtake",
    concept: "Planes flew overhead constantly.",
    example: "It`s dangerous to overtake on a bend.",
  },
  {
    word: "parallel",
    concept:
      "two or more lines that are parallel to each other are the same distance apart at every point",
    example: "The road and the canal are parallel to each other.",
  },
  {
    word: "patented",
    concept: "to obtain a patent for an invention or a process",
    example: "The company settled a patent dispute last year.",
  },
  {
    word: "peaceful",
    concept: "not involving a war, violence or argument",
    example: "They hope for a peaceful settlement of the dispute.",
  },
  {
    word: "persuade",
    concept:
      "to make somebody do something by giving them good reasons for doing it",
    example: "I`m sure he`ll come with a bit of persuading.",
  },
  {
    word: "physical",
    concept: "connected with a person`s body rather than their mind",
    example: "All subjects undergo a physical examination.",
  },
  {
    word: "pleasant",
    concept: "fun, attractive, or giving pleasure",
    example: "My visit to the dentist`s wasn`t a very pleasant experience.",
  },
  {
    word: "pleasure",
    concept: "a state of feeling or being happy or satisfied",
    example: "His eyes lit up with pleasure.",
  },
  {
    word: "portable",
    concept: "that is easy to carry or to move",
    example: "The equipment is lightweight, portable and easy to store.",
  },
  {
    word: "postpone",
    concept:
      "to arrange for an event, etc. to take place at a later time or date than originally planned",
    example: "The game has already been postponed three times.",
  },
  {
    word: "powerful",
    concept: "being able to control and influence people and events",
    example: "an incredibly powerful organization",
  },
  {
    word: "previous",
    concept:
      "happening or existing before the event or object that you are talking about",
    example: "No previous experience is necessary for this job.",
  },
  {
    word: "profound",
    concept: "felt or experienced very strongly",
    example: "profound changes in the earth’s climate",
  },
  {
    word: "property",
    concept: "a thing or things that are owned by somebody",
    example: "This building is government property.",
  },
  {
    word: "protocol",
    concept:
      "a system of fixed rules and formal behaviour used at official meetings",
    example: "the protocol of diplomatic visits",
  },
  {
    word: "publicly",
    concept: "by the government",
    example: "a publicly owned company",
  },
  {
    word: "purchase",
    concept: "to buy something",
    example: "We recently purchased a home just outside Las Vegas.",
  },
  {
    word: "reaction",
    concept:
      "what you do, say or think as a result of something that has happened",
    example: "My immediate reaction was one of shock.",
  },
  {
    word: "relation",
    concept:
      "the way in which two people, groups or countries behave towards each other or deal with each other",
    example: "We seek to improve relations between our two countries.",
  },
  {
    word: "reliable",
    concept: "that can be trusted to do something well",
    example: "We are looking for someone who is reliable and hard-working.",
  },

  {
    word: "suitable",
    concept: "adapted to a use or purpose",
    example: "The dress was a suitable choice.",
  },

  {
    word: "surpise",
    concept: "something that surprises",
    example: "What a pleasant surprise to see you!",
  },

  {
    word: "swimming",
    concept: "adapted to or used in or for swimming",
    example: "I am going swimming later today.",
  },

  {
    word: "syllable",
    concept: "one or more letters",
    example: "We children called her Oma, accenting both syllables.",
  },

  {
    word: "symphaty",
    concept: "understanding and care for someone else's suffering",
    example: "The president has sent a message of sympathy",
  },

  {
    word: "taxation",
    concept: "the action of taxing",
    example: "the federal right of taxation",
  },

  {
    word: "thorough",
    concept: "carried through to completion",
    example: "He was calm and thorough.",
  },

  {
    word: "threaten",
    concept: "to utter threats against",
    example: "The mugger threatened him with a gun.",
  },

  {
    word: "triptych",
    concept: "a picture or carving in three panels side by side",
    example: "A medieval triptych hung above the altar.",
  },

  {
    word: "trousers",
    concept: "of, relating to, or designed for trousers",
    example: "I need a new pair of trousers to go with this jacket.",
  },

  {
    word: "umbrella",
    concept:
      " something which covers or embraces a broad range of elements or factors",
    example:
      "The store sells Indian, Asian, and Middle Eastern foods under the umbrella of international cuisine.",
  },

  {
    word: "unlawful",
    concept: "not morally right or conventional",
    example: "The sale of alcohol to minors is unlawful.",
  },

  {
    word: "unlikely",
    concept: "not likely",
    example: "He was an unlikely candidate for the position.",
  },

  {
    word: "upstairs",
    concept: "to or at a high altitude or higher position",
    example: "I tiptoed upstairs",
  },

  {
    word: "valuable",
    concept: "having desirable or esteemed characteristics or qualities",
    example: "I have valuable friendships",
  },

  {
    word: "volatile",
    concept: "characterized by or subject to rapid or unexpected change",
    example: "I'm in a volatile market",
  },

  {
    word: "wardrobe",
    concept: "a collection of wearing appare",
    example: "a summer wardrobe",
  },

  {
    word: "weakness",
    concept: "an instance or period of being weak",
    example: "The weakness of her voice surprised me.",
  },

  {
    word: "wildlife",
    concept: "the native fauna of a region",
    example: "an area with abundant wildlife",
  },

  {
    word: "withdraw",
    concept: "to take back or away",
    example: "She withdrew $200 from her checking account.",
  },

  {
    word: "woodland",
    concept: "land covered with woody vegetation",
    example: "Some very rare and special plants grow in these woodlands",
  },

  {
    word: "reliance",
    concept: "the act of relying : the state of being reliant",
    example: "a baby's reliance on her parents",
  },
  {
    word: "reigion",
    concept:
      "a personal set or institutionalized system of religious attitudes, beliefs, and practices",
    example: "Many people turn to religion for comfort in a time of crisis.",
  },
  {
    word: "remember",
    concept: "to bring to mind or think of again",
    example: "I remember my first day of school like it was yesterday.",
  },
  {
    word: "research",
    concept: "studious inquiry or examination",
    example: "She conducts research into the causes of Alzheimer's disease.",
  },
  {
    word: "rigorous",
    concept: "manifesting, exercising, or favoring rigor : very strict",
    example: "rigorous enforcement of the rules",
  },
  {
    word: "roadside",
    concept: "the strip of land along a road : the side of a road",
    example: "a hamburger stand on the roadside",
  },
  {
    word: "scenario",
    concept: "an account or synopsis of a possible course of action or events",
    example: "A possible scenario would be that we move to the city.",
  },
  {
    word: "scissors",
    concept:
      "a cutting instrument having two blades whose cutting edges slide past each other",
    example: "I need some scissors to cut this package.",
  },
  {
    word: "scornful",
    concept: "full of scorn : CONTEMPTUOUS",
    example:
      "He's scornful of anyone who disagrees with his political beliefs.",
  },
  {
    word: "scrutiny",
    concept: "a searching study, inquiry, or inspection : EXAMINATION",
    example: "the close scrutiny of data",
  },
  {
    word: "sergeant",
    concept:
      "an officer who enforces the judgments of a court or the commands of one in authority",
    example:
      "The man observed the sergeant of the soldiers who was preparing to go home.",
  },
  {
    word: "sherbert",
    concept: "a cold drink of sweetened and diluted fruit juice",
    example:
      "We couldn't afford to eat there, usually, but we took advantage of the free lime sherbet.",
  },
  {
    word: "shortage",
    concept: "LACK, DEFICIT",
    example:
      "there was a troubling shortage of supplies for the troops overseas this year",
  },
  {
    word: "skillful",
    concept: "possessed of or displaying skill : EXPERT",
    example: "an artist skillful in the use of color",
  },
  {
    word: "southern",
    concept:
      "of, relating to, or characteristic of a region conventionally designated South",
    example: "the southern part of the state",
  },
  {
    word: "specific",
    concept: "constituting or falling into a specifiable category",
    example: "Is there anything specific you want for dinner?",
  },
  {
    word: "spectrum",
    concept:
      "a continuum of color formed when a beam of white light is dispersed (as by passage through a prism) so that its component wavelengths are arranged in order",
    example: "beautiful scarves in all the colors of the spectrum",
  },
  {
    word: "spotless",
    concept: "having no spot",
    example: "She keeps her room spotless.",
  },
  {
    word: "standard",
    concept:
      "a conspicuous object (such as a banner) formerly carried at the top of a pole and used to mark a rallying point especially in battle or to serve as an emblem",
    example: "a window of standard width",
  },
  {
    word: "stocking",
    concept: "a usually knit close-fitting covering for the foot and leg",
    example: "a pair of wool stockings",
  },
  {
    word: "straight",
    concept: "free from curves, bends, angles, or irregularities",
    example: "She has long, straight hair.",
  },
  {
    word: "strength",
    concept: "power to resist force : SOLIDITY, TOUGHNESS",
    example: "I was impressed by his strength.",
  },
  {
    word: "struggle",
    concept:
      "to make strenuous or violent efforts in the face of difficulties or opposition",
    example:
      "He has been struggling with the problem of how to keep good workers from leaving.",
  },
  {
    word: "reliace",
    concept: "something or someone relied on",
    example:
      "he's been the family's foremost reliance in times of trouble many times",
  },

  {
    word: "religion",
    concept:
      "a personal set or institutionalized system of religious attitudes, beliefs, and practices",
    example: "Many people turn to religion for comfort in a time of crisis.",
  },
];

let nineLetters = [
  {
    word: "Abandoner",
    concept:
      "To give up with the intent of never again claiming a right or interest in",
    example: "Soldiers forced to abandon their position",
  },
  {
    word: "According",
    concept: "to grant or give especially as appropriate, due, or earned",
    example: "The competitors should all be accorded equal respect",
  },
  {
    word: "Afternoon",
    concept: "the part of day between noon and sunset",
    example: "in the afternoon of the 19th century",
  },
  {
    word: "agreement",
    concept: "the act or fact of agreeing",
    example: "reached an agreement as to how to achieve their goal",
  },
  {
    word: "alongside",
    concept: "at the side : close by",
    example: "a guard with a prisoner alongside",
  },
  {
    word: "amazingly",
    concept: "to an amazing degree",
    example: "amazingly low prices",
  },
  {
    word: "amusement",
    concept: "a means of amusing or entertaining",
    example: "plays the piano for amusement",
  },
  {
    word: "apologize",
    concept:
      "to express regret for something done or said : to make an apology",
    example: "He apologized for his mistake",
  },
  {
    word: "apparatus",
    concept: "a set of materials or equipment designed for a particular use",
    example: "an apparatus for measuring vision",
  },
  {
    word: "attention",
    concept: "the act or state of applying the mind to something",
    example: "You should pay attention to what she says",
  },
  {
    word: "authority",
    concept: " power to influence or command thought, opinion, or behavior",
    example: "the president's authority",
  },
  {
    word: "automatic",
    concept: "acting or done spontaneously or unconsciously",
    example: "the automatic applause of the audience",
  },
  {
    word: "beautiful",
    concept: "having qualities of beauty",
    example: "beautiful mountain scenery",
  },
  {
    word: "beginning",
    concept: "the point at which something begins ",
    example: "It was clear from the beginning that she would win",
  },
  {
    word: "brilliant",
    concept: "distinguished by unusual mental keenness or alertness",
    example: "a brilliant example",
  },
  {
    word: "bulldozer",
    concept:
      "a tractor-driven machine usually having a broad horizontal blade for moving dirt",
    example: "Please park the bulldozer next to the mountain of dirt",
  },
  {
    word: "calculate",
    concept: "to determine by mathematical processes",
    example: "calculate the rate of acceleration",
  },
  {
    word: "carpenter",
    concept:
      "a worker who builds or repairs wooden structures or their structural parts",
    example: "Lets get this wooden chair fixed with a good carpenter",
  },
  {
    word: "chapstick",
    concept: "used for a lip balm in stick form",
    example: "pass me my chapstick please, my lips are dry",
  },
  {
    word: "character",
    concept:
      "the complex of mental and ethical traits marking and often individualizing a person, group, or nation",
    example: "the character of the Mexican people",
  },
  {
    word: "colleague",
    concept:
      "an associate or coworker typically in a profession or in a civil or ecclesiastical office and often of similar rank or status",
    example: "Robert is my colleague from school",
  },
  {
    word: "committee",
    concept: "a group of persons directed to perform some duty",
    example: "He's been appointed to the committee on finance",
  },
  {
    word: "condition",
    concept: "a mode of being or form of existence of a person or thing",
    example: "The building's roof is in good condition",
  },
  {
    word: "conscious",
    concept:
      "perceiving, apprehending, or noticing with a degree of controlled thought or observation",
    example: "She was fully conscious when we found her",
  },
  {
    word: "criticize",
    concept: "to consider the merits and demerits of and judge accordingly",
    example: "Some people criticize him for his involvement in politics",
  },
  {
    word: "dangerous",
    concept: "involving possible injury, harm, or death",
    example: "The situation is very dangerous",
  },
  {
    word: "desperate",
    concept: "having lost hope",
    example: "He felt desperate when he couldn't find his keys",
  },
  {
    word: "determine",
    concept:
      "to find out or come to a decision about by investigation, reasoning, or calculation",
    example: "We need to determine the cause of the problem",
  },
  {
    word: "digestion",
    concept:
      "the process of breaking down food in the alimentary canal into substances that can be absorbed and used by the body",
    example: "The food is broken down during digestion",
  },
  {
    word: "discovery",
    concept: "the act or process of discovering",
    example: "The discovery of penicillin was a major breakthrough",
  },
  {
    word: "eagerness",
    concept: "marked by enthusiastic or impatient desire or interest",
    example: "The children showed great eagerness to see the new toy",
  },
  {
    word: "effective",
    concept: "producing a decided, decisive, or desired effect",
    example: "The treatment was very effective",
  },
  {
    word: "emphasize",
    concept: "to place emphasis on",
    example: "The teacher emphasized the importance of studying",
  },
  {
    word: "excellent",
    concept: "very good of its kind",
    example: "The food was excellent",
  },
  {
    word: "existence",
    concept: "the fact or state of living or being",
    example: "He's questioning his own existence",
  },
  {
    word: "exquisite",
    concept:
      "marked by flawless craftsmanship or by beautiful, ingenious, delicate, or elaborate execution",
    example: "She wore an exquisite dress to the party",
  },
  {
    word: "fabricate",
    concept: "to make up for the purpose of deception",
    example: "He fabricated the story to cover up his mistake",
  },
  {
    word: "flashback",
    concept:
      "a scene in a movie, novel, etc., set in a time earlier than the main story",
    example:
      "The film includes several flashbacks to the character's childhood",
  },
  {
    word: "fortunate",
    concept: "having good luck",
    example:
      "We were fortunate to find a parking space right in front of the building",
  },
  {
    word: "glamorous",
    concept: "having glamour",
    example: "She looked glamorous in her evening gown",
  },
  {
    word: "greatness",
    concept: "the quality or state of being great",
    example:
      "The three-time World Cup winner’s legacy of greatness is indisputable",
  },
  {
    word: "highlight",
    concept: "an outstanding part of an event or period of time",
    example: "I missed the game, but I saw the highlights on the evening news",
  },
  {
    word: "hypnotize",
    concept: "to dazzle or overcome by or as if by suggestion",
    example: "He can hypnotize people with his stare",
  },
  {
    word: "hypocrisy",
    concept: "a feigning to be what one is not or to believe what one does not",
    example:
      "When his private letters were made public, they revealed his hypocrisy",
  },
  {
    word: "hypocrite",
    concept: "a person who puts on a false appearance of virtue or religion",
    example:
      "We can learn a good deal about the manners and morals of the times from Lautrec, for he was neither a hypocrite nor a sentimentalist, and there is a matter-of-fact-ness about his vision … that precludes both nostalgia and prurience",
  },
  {
    word: "insurance",
    concept:
      "coverage by contract whereby one party undertakes to indemnify or guarantee another against loss by a specified contingency or peril",
    example:
      "Visit site Both offers work as a bet insurance in the event of an unsuccessful wager and give new users their stake back in bonus bets",
  },
  {
    word: "invention",
    concept: "something invented: such as",
    example:
      "The speculative office building is not a typology that is known for architectural invention, but a striking new structure just off Northwest Highway is an unlikely and welcome exception",
  },
  {
    word: "jellybean",
    concept: "a sugar-glazed bean-shaped candy",
    example:
      "The beauty of the online marketplace is that retailers offer premade Easter baskets for kids, teenagers, chocolate-lovers, chocolate-haters, snackers, jump-ropers, and jelly bean enthusiasts alike",
  },
  {
    word: "jellyfish",
    concept:
      "the typically free-swimming, bell-shaped, usually sexually-reproducing solitary or colonial form of a cnidarian in which the whorls of tentacles lined with nematocysts arise and hang down from the margin of the nearly transparent, gelatinous bell",
    example:
      "In nature, transparency is largely reserved for fully aquatic creatures such as eel larvae and gelatinous jellyfish",
  },
  {
    word: "judgement",
    concept:
      " the process of forming an opinion or evaluation by discerning and comparing",
    example: "We have to make a judgment about the value of their services",
  },
  {
    word: "juridical",
    concept:
      "of or relating to the administration of justice or the office of a judge",
    example:
      "The implication that Brazil is living under a kind of juridical dictatorship today is dangerous",
  },
  {
    word: "knowledge",
    concept:
      "the fact or condition of knowing something with familiarity gained through experience or association",
    example:
      "At that time the word science had not been narrowed down to one kind of knowledge; it meant whatever was known, and men of learning were still able to possess most of it",
  },
  {
    word: "laborious",
    concept:
      " involving, requiring, or characterized by hard and sustained effort",
    example: "a slow and laborious process",
  },
  {
    word: "necessary",
    concept: "absolutely needed",
    example:
      "Some say that Hvorostovsky's Don Giovanni lacks the necessary menace; others find that he tosses his mane about too flamboyantly",
  },
  {
    word: "negotiate",
    concept:
      "to confer with another so as to arrive at the settlement of some matter",
    example: "The customer wanted to negotiate over the price",
  },
  {
    word: "obedience",
    concept: "an act or instance of obeying",
    example:
      "the drill sergeant demanded complete and unquestioning obedience from the recruits",
  },
  {
    word: "objective",
    concept:
      "expressing or dealing with facts or conditions as perceived without distortion by personal feelings, prejudices, or interpretations",
    example:
      "For no matter how objective Server tries to appear in detailing the highs and lows of her 67 years—the three marriages, the numerous affairs, the binges, the nightlong cruising of low-life byways and bordellos, the mainly poor movies she was in—he cannot really hide his essential fondness for her",
  },
  {
    word: "occupancy",
    concept:
      "the fact or condition of holding, possessing, or residing in or on something",
    example:
      "The sign above the auditorium door says, “Maximum occupancy: 500 persons.”",
  },
  {
    word: "otherwise",
    concept: "something or anything else : something to the contrary",
    example: "All of the books had been burned or otherwise destroyed",
  },
  {
    word: "patronage",
    concept: "the support or influence of a patron",
    example:
      "The college relied on the patronage of its wealthy graduates to expand its funds",
  },
  {
    word: "plurality",
    concept: "the state of being plural",
    example:
      "Candidates must receive a plurality of votes, which means the candidate with the most votes wins without a runoff",
  },
  {
    word: "potential",
    concept: "something that can develop or become actual",
    example: "He is a potential candidate for president",
  },
  {
    word: "practical",
    concept: "capable of being put to use or account",
    example: "He thinks wind can be a practical source of renewable energy",
  },
  {
    word: "quickness",
    concept: "a high rate of movement or performance",
    example:
      "his agility and overall quickness made him the football coach's top choice for receiver",
  },
  {
    word: "razorback",
    concept: "a steep-sided narrow ridge of land",
    example:
      "Skyline Drive, a narrow road along a razorback ridge that offers sweeping views",
  },
  {
    word: "recognize",
    concept: "to acknowledge or take notice of in some definite way",
    example: "The U.S. government has now recognized the newly formed country",
  },
  {
    word: "recollect",
    concept: "to remind (oneself) of something temporarily forgotten",
    example: "From what I recollect, they said four of them were coming",
  },
  {
    word: "recommend",
    concept: "to suggest an act or course of action",
    example:
      "My classmates always recommend UTTN because of its educational offer",
  },
  {
    word: "spearmint",
    concept:
      "a common mint (Mentha spicata) grown for flavoring and especially for its aromatic oil",
    example:
      "The formula has an herby and earthy fragrance, thanks to the addition of spearmint and lavender",
  },
  {
    word: "spiritual",
    concept: "of, relating to, consisting of, or affecting the spirit",
    example: "France will always be the spiritual home of wine lovers",
  },
  {
    word: "spotlight",
    concept:
      "a light designed to direct a narrow intense beam of light on a small area",
    example: "A spotlight moved across the stage",
  },
  {
    word: "statement",
    concept: "an act, process, or means of putting something into words",
    example: "a careful statement of the legal case before the court",
  },
  {
    word: "structure",
    concept: "something (such as a building) that is constructed",
    example: "The structure was damaged by fire",
  },
  {
    word: "substance",
    concept: "the basic elements from which something can be developed",
    example:
      "The floor was covered with a white, powdery substance that turned out to be flour",
  },
  {
    word: "symbolize",
    concept: "to represent, express, or identify by a symbol",
    example: "the flag symbolizes our country",
  },
  {
    word: "temporary",
    concept: "lasting for a limited time",
    example: "The settlers built temporary shelters",
  },
  {
    word: "translate",
    concept: "to turn into one's own or another language",
    example: "We need someone who can translate Japanese into English",
  },
  {
    word: "treatment",
    concept:
      "the act or manner or an instance of treating someone or something",
    example: "We want to ensure equal treatment for everyone",
  },
  {
    word: "vaccinate",
    concept: "to administer a vaccine to usually by injection",
    example: "We vaccinate all the animals that come to our shelter",
  },
  {
    word: "victimize",
    concept: "to make a victim of especially by cheating",
    example: "You shouldn't victimize, it's your fault",
  },
  {
    word: "visualize",
    concept: "to see or form a mental image of",
    example: "She tried to visualize the scene he was describing",
  },
  {
    word: "wonderful",
    concept: "exciting wonder or something that os unusually good",
    example: "You did a wonderful job",
  },
  {
    word: "worthless",
    concept: "to have no usefulness or lack worth",
    example:
      "The boots may be nice, but they're worthless if they don't fit you",
  },
];

let tenLetters = [
  {
    word: "abhorrence",
    concept: "the act or state of abhorring or despising something or someone",
    example: "a crime regarded with abhorrence",
  },
  {
    word: "abnegation",
    concept: "a restraint or limitation of ones own desires or interests",
    example:
      "monks practice abnegation of the material aspects of human life. ",
  },
  {
    word: "abominable",
    concept: "worthy of or causing disgust or hatred",
    example: "the abominable treatment of the poor",
  },
  {
    word: "aborigine",
    concept:
      "a member of the original people to inhabit an area especially as contrasted with an invading or colonizing people",
    example:
      "a national sport whose origins can be traced to an ancient game first played by the aborigines",
  },
  {
    word: "abridgment",
    concept: "the action of abridging something : the state of being abridged",
    example: "a book shortened by careful abridgment",
  },
  {
    word: "abrogate",
    concept: "to abolish by authoritative action ",
    example: "abrogate a treaty",
  },
  {
    word: "absolutist",
    concept:
      "a political theory that absolute power should be vested in one or more rulers",
    example:
      "concerning absolutism Lord Acton famously observed that “absolute power corrupts absolutely",
  },
  {
    word: "absorbency",
    concept: "the quality or state of being absorbent",
    example:
      "the soft-focus formula earned perfect scores for absorbency and finished look in our lab tests",
  },
  {
    word: "acceptable",
    concept: "capable or worthy of being accepted",
    example: "an acceptable noise level",
  },
  {
    word: "additional",
    concept: "more than is usual or expected : ADDED",
    example: "additional information",
  },
  {
    word: "adjudicate",
    concept:
      "to make an official decision about who is right in (a dispute) : to settle judicially",
    example: "the school board will adjudicate claims made against teachers",
  },
  {
    word: "adjustment",
    concept: "a correction or modification to reflect actual conditions",
    example: "she made some slight adjustments to the recipe",
  },
  {
    word: "afterwards",
    concept: "at a later or succeeding time",
    example: "found out about it long afterward",
  },
  {
    word: "aggressive",
    concept: "marked by combative readiness",
    example: "an aggressive fighter",
  },
  {
    word: "anticipate",
    concept: "to give advance thought, discussion, or treatment to",
    example: "the cost turned out to be higher than anticipated",
  },
  {
    word: "appreciate",
    concept: "recognize the full worth of",
    example: "she feels that he does not appreciate her",
  },
  {
    word: "authorship",
    concept: "the profession of writing",
    example:
      "the single authorship of the book gives it a uniformity of style and a proper balance between chapters",
  },
  {
    word: "background",
    concept: "the scenery or ground behind something",
    example: "a picture of her son with mountains in the background",
  },
  {
    word: "chimpanzee",
    concept:
      "an anthropoid ape (Pan troglodytes) of equatorial Africa that is smaller and more arboreal than the gorilla",
    example:
      "years ago, locals would hunt gorillas and chimpanzees to feed their family",
  },
  {
    word: "commercial",
    concept:
      "occupied with or engaged in commerce or work intended for commerce",
    example: "bad bunny its a commercial product",
  },
  {
    word: "comprehend",
    concept: "to grasp the nature, significance, or meaning of",
    example: "unable to comprehend what has happened",
  },
  {
    word: "conscience",
    concept:
      "the sense or consciousness of the moral goodness or blameworthiness of ones own conduct, intentions, or character together with a feeling of obligation to do right or be good",
    example: "she had a guilty conscience",
  },
  {
    word: "depression",
    concept:
      "a mood disorder that is marked by varying degrees of sadness, despair, and loneliness and that is typically accompanied by inactivity, guilt, loss of concentration, social withdrawal, sleep disturbances, and sometimes suicidal tendencies ",
    example: "a depression in trade",
  },
  {
    word: "discussion",
    concept: "consideration of a question in open and usually informal debate",
    example: "a heated political discussion",
  },
  {
    word: "distribute",
    concept: "to divide among several or many : apportion",
    example: "distribute expenses",
  },
  {
    word: "equivalent",
    concept: "equal in force, amount, or value",
    example: "a square equivalent to a triangle ",
  },
  {
    word: "experience",
    concept:
      "direct observation of or participation in events as a basis of knowledge",
    example: "has 10 years experience in the job",
  },
  {
    word: "goverment",
    concept:
      "the body of persons that constitutes the governing authority of a political unit or organization",
    example: "the government was slow to react to the crisis",
  },
  {
    word: "hypnotized",
    concept: "to dazzle or overcome by or as if by suggestion",
    example: "a voice that hypnotizes its hearers",
  },
  {
    word: "illustrate",
    concept: "to provide with visual features intended to explain or decorate",
    example: "illustrate a book",
  },
  {
    word: "immaculate",
    concept: "having or containing no flaw or error",
    example:
      "I was expecting some giant to emerge, but in came a tiny, immaculate, white-haired man",
  },
  {
    word: "impossible",
    concept: "incapable of being or of occurring",
    example: "It's impossible to predict the future",
  },
  {
    word: "impressive",
    concept: "having the power to excite attention awe, or admiration",
    example: "he has an impressive vocabulary for a 10-year-old",
  },
  {
    word: "juxtaposed",
    concept: "placed side by side",
    example:
      "the juxtaposed photographs of the country's richest and poorest areas are telling commentaary on inequality",
  },
  {
    word: "kickboxing",
    concept:
      "boxing in which boxers are permitted to kick with bare feet as in karate",
    example:
      "the classes will feature roinds of kickboxing moves that are then combined into a final one-minute, all-out intensity interval",
  },
  {
    word: "literature",
    concept:
      "witings having excellence of form or expression and expressing ideas of permanent or universal interest",
    example: "she took courses in history and literature",
  },
  {
    word: "maleficent",
    concept: "working or productive of harm or evil",
    example:
      "under certain conditions, then, Ponzi principles are efficient not maleficent",
  },
  {
    word: "manipulate",
    concept:
      "to treat or operate with or as if with the hands or by mechanical means especially in a skillful manner",
    example: "the baby is learning to manipulate blocks",
  },
  {
    word: "motivation",
    concept: "a motivationg force, stimuls, or influece",
    example: "some students need motivation to help them through school",
  },
  {
    word: "mozzarella",
    concept:
      "a moist white insalted unripened cheese of mild flavor and a smooth rubbery texture",
    example:
      "The patty is then topped with burrata - fresh buffalo mozzarella wrapped around a filling of soft curd",
  },
  {
    word: "plantation",
    concept:
      "a usually large group of plants and especially trees under cultivation",
    example: "the struggling plantation almost failed during the first winter",
  },
  {
    word: "proscenium",
    concept:
      "the wall that separates the stage from the auditorium and provides the arch that frames it",
    example: "the host walked onto the proscenium",
  },
  {
    word: "punishment",
    concept: "severe, rough, or disastrous treatment",
    example: "the punishment for murder is life imprisonment",
  },
  {
    word: "reasonable",
    concept: "being in accordance with reason",
    example: "We have reasonable cause not to believe him",
  },
  {
    word: "regardless",
    concept: "despite everything",
    example:
      "the weather looked bad, but they were resolved to go on with their picnic regardless",
  },
  {
    word: "remarkable",
    concept:
      "worthy of being or likely to be noticed especially as being uncommon or extraordinary",
    example: "The girl has a remarkable talent",
  },
  {
    word: "seamstress",
    concept: "a woman whose occupation is sewing",
    example: "her dad was an aeronautical engineer and her mom a seamstress",
  },
  {
    word: "specialist",
    concept:
      "one who specializes in a particular occupation, practice, or field of study",
    example: "he saw a specialist for his foot problem",
  },
  {
    word: "squeezable",
    concept: "to exert pressure especially on opposite sides of : COMPRESS",
    example: "he lightly squeezed her hand and smiled",
  },
  {
    word: "successful",
    concept: "resulting or terminating in success",
    example: "a successful attempt",
  },
  {
    word: "sufficient",
    concept: "enough to meet the needs of a situation or a proposed end",
    example: "sufficient provisions for a month",
  },
  {
    word: "suggestion",
    concept:
      "the process by which a physical or mental state is influenced by a thought or idea",
    example: "the power of suggestion",
  },
  {
    word: "suspicious",
    concept: "tending to arouse suspicion : QUESTIONABLE",
    example: "suspicious characters",
  },
  {
    word: "texturized",
    concept:
      "impart a particular texture to a product, in order to make it more attractive",
    example:
      "But not all formulas are the same — some texturize while adding shine; others are intended for a matte effect",
  },
  {
    word: "understand",
    concept: "to grasp the meaning of",
    example: "understand Russian",
  },
  {
    word: "unfriendly",
    concept: "HOSTILE, UNSYMPATHETIC",
    example: "an unfriendly nation",
  },
  {
    word: "volleyball",
    concept: "a game played by volleying an inflated ball over a net",
    example: "there's also a celebrity volleyball game in the pool",
  },
  {
    word: "wanderlust",
    concept: "strong longing for or impulse toward wandering",
    example: "wanderlust has led him to many different parts of the world",
  },
  {
    word: "widespread",
    concept: "widely diffused or prevalent",
    example: "widespread public interest",
  },
];

let elevenLetters = [
  {
    word: "advertising",
    concept:
      "the action of calling something to the attention of the public especially by paid announcements",
    example:
      "Engaging an e-commerce audience is critical, which is why digital advertising is so important.",
  },
  {
    word: "anachronism",
    concept: "an error in chronology",
    example: "found several anachronisms in the movie ",
  },
  {
    word: "anniversary",
    concept: "the annual recurrence of a date marking a notable event",
    example: "a wedding anniversary",
  },
  {
    word: "appropriate",
    concept: "especially suitable or compatible",
    example: "an appropriate response",
  },
  {
    word: "backpacking",
    concept:
      "Backpacking is the outdoor recreation of carrying gear on one's back, while hiking for more than a day.",
    example:
      "He took time out from his job as a production assistant to go backpacking around the world.",
  },
  {
    word: "blasphemous",
    concept: "impiously irreverent",
    example: "a blasphemous writer",
  },
  {
    word: "celebration",
    concept:
      "the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity.",
    example: "the birth of his son was a cause for celebration",
  },
  {
    word: "coincidence",
    concept: "the act or condition of coinciding ",
    example: "a perfect coincidence between truth and goodness…",
  },
  {
    word: "concordance",
    concept:
      "an alphabetical index of the principal words in a book or the works of an author with their immediate contexts",
    example: "There is little concordance between the two studies. ",
  },
  {
    word: "connotation",
    concept: " something suggested by a word or thing",
    example: "the connotations of comfort that surrounded that old chair",
  },
  {
    word: "descriptive",
    concept:
      "presenting observations about the characteristics of someone or something ",
    example: "a descriptive account",
  },
  {
    word: "electricity",
    concept:
      "a fundamental form of energy observable in positive and negative forms that occurs naturally (as in lightning) or is produced (as in a generator) and that is expressed in terms of the movement and interaction of electrons",
    example: "The electricity went off during the storm. ",
  },
  {
    word: "Environment",
    concept:
      "the circumstances, objects, or conditions by which one is surrounded",
    example: "He grew up in a loving environment. ",
  },
  {
    word: "fabrication",
    concept: "the act or process of fabricating",
    example:
      "the notion that the Colossus of Rhodes could straddle the harbor was a fabrication of medieval writers ",
  },
  {
    word: "forgettable",
    concept: "fit or likely to be forgotten",
    example: "It was an extremely forgettable performance. ",
  },
  {
    word: "forgiveness",
    concept: "the act of forgiving",
    example: "She treats us with kindness and forgiveness. ",
  },
  {
    word: "imagination",
    concept:
      "the act or power of forming a mental image of something not present to the senses or never before wholly perceived in reality",
    example: "You can find a solution if you use a little imagination. ",
  },
  {
    word: "inspiration",
    concept: "an inspiring agent or influence",
    example: "His paintings take their inspiration from nature. ",
  },
  {
    word: "intelligent",
    concept:
      "having or indicating a high or satisfactory degree of intelligence and mental capacity",
    example: "She asked some intelligent questions.",
  },
  {
    word: "marshmallow",
    concept: "a soft, chewy confection made with sugar and gelatin.",
    example: "We toasted marshmallows over the fire. ",
  },
  {
    word: "personality",
    concept:
      "the complex of characteristics that distinguishes an individual or a nation or group",
    example: "We all have different personalities. ",
  },
  {
    word: "predominate",
    concept: "to hold advantage in numbers or quantity",
    example: "the predominate color in the painting ",
  },
  {
    word: "preposition",
    concept:
      "a function word that typically combines with a noun phrase to form a phrase which usually expresses a modification or predication",
    example:
      "The preposition “on” in “The keys are on the table” shows location.",
  },
  {
    word: "requirement",
    concept: "something wanted or needed : necessity",
    example: "He has met the basic requirements for graduation.",
  },
  {
    word: "selfishness",
    concept:
      "the quality or state of being selfish : a concern for one's own welfare or advantage at the expense of or in disregard of others : excessive interest in oneself",
    example:
      "Lines between selfishness and self-preservation get blurred based on who benefits or loses.",
  },
  {
    word: "serviceable",
    concept: "fit for use",
    example: "I bought an old but still serviceable bicycle.",
  },
  {
    word: "shortcoming",
    concept:
      "an imperfection or lack that detracts from the whole also : the quality or state of being flawed or lacking",
    example: "Her lack of attention to detail is her biggest shortcoming.",
  },
  {
    word: "standardize",
    concept:
      "to bring into conformity with a standard especially in order to assure consistency and regularity",
    example: "He standardized procedures for the industry.",
  },
  {
    word: "subordinate",
    concept: "placed in or occupying a lower class, rank, or position",
    example:
      "his contention is that environment plays a subordinate role to heredity in determining what we become",
  },
  {
    word: "sufficiency",
    concept: "the quality or state of being sufficient",
    example:
      "the sufficiency of the portions is such that you will leave the restaurant with a full stomach but without doggie bags",
  },
  {
    word: "supposition",
    concept: "something that is supposed",
    example: "a supposition that proved correct",
  },
  {
    word: "treacherous",
    concept: " providing insecure footing or support",
    example: "They were not prepared to hike over such treacherous terrain.",
  },
  {
    word: "unfortunate",
    concept: "not favored by fortune",
    example: "She was unfortunate enough to have been chosen as an example.",
  },
  {
    word: "unstoppable",
    concept: "incapable of being stopped",
    example: "At this point in the campaign, he appears to be unstoppable.",
  },
  {
    word: "vaccination",
    concept: "the act of vaccinating",
    example:
      "That led to more than 150 vaccination clinics across the country, serving 4,134 nursing homes residents, according to the agency.",
  },
  {
    word: "windsurfing",
    concept: "the sport or activity of riding a sailboard",
    example:
      "There is kite surfing, windsurfing and sand yachting, which is a wheeled vehicle with a sail that's powered across the sand by the wind.",
  },
];

let twelveLetters = [
  {
    word: "Abolitionist",
    concept: "A person who wants to stop or abolish slavery.",
    example: "The abolitionist movement",
  },
  {
    word: "Absoluteness",
    concept: "Free from imperfection.",
    example: "You can't predict the future with absolute certainty",
  },
  {
    word: "Absorptivity",
    concept:
      "The property of a body that determines the fraction of incident radiation absorbed by the body.",
    example: "The materials have little difference in X-ray absorptivity",
  },
  {
    word: "Academically",
    concept:
      "In an academic way: such as with regard to formal studies or academics.",
    example: "Academically advanced students",
  },
  {
    word: "Aerodynamics",
    concept:
      "A branch of dynamics that deals with the motion of air and other gaseous fluids and with the forces acting on bodies in motion relative to such fluids.",
    example: "So, there are fewer dead bugs regardless of aerodynamics",
  },
  {
    word: "Alliteration",
    concept: "Round the rugged rocks the ragged rascal ran.",
    example:
      "As far as sound repetition goes, I don't have any principles. I try to stay away from heavy alliteration and other pyrotechnics because I think they detract from the sense of the poem and blur the imagery.",
  },
  {
    word: "Amphitheater",
    concept:
      "An oval or circular building with rows of seats surrounding a central space, used as a theatre/theater or arena.",
    example: "The ancient Roman amphitheatre/amphitheater",
  },
  {
    word: "Appreciation",
    concept:
      "The act of recognizing or understanding that something is valuable, important, or as described.",
    example: "Max has no appreciation of the finer things in life",
  },
  {
    word: "Architecture",
    concept: "The art and practice of designing and making buildings",
    example: "To study architecture",
  },
  {
    word: "Bachelorette",
    concept: "A young unmarried woman",
    example: "It's a great bachelorette pad.",
  },
  {
    word: "Behaviorally",
    concept:
      "Of or relating to behavior : pertaining to reactions made in response to social stimuli",
    example:
      "Half of all potential guide dogs don't get final clearance because of medical or behavioral issues.",
  },
  {
    word: "Biodiversity",
    concept:
      "The number and types of plants and animals that exist in a particular area or in the world generally, or the problem of protecting this",
    example:
      "A new National Biological Survey to protect species habitat and biodiversity",
  },
  {
    word: "Biomagnestim",
    concept: "The generation of magnetic fields by living organisms",
    example:
      "It is introduced the relation between modern biomagnetism and medical science and technology.",
  },
  {
    word: "Bodybuilding",
    concept:
      "Special exercises that you do regularly to make your muscles bigger",
    example: "She's been doing competitive bodybuilding for a few years now.",
  },
  {
    word: "Brinkmanship",
    concept:
      "The activity, especially in politics, of trying to get what you want by saying that if you do not get it, you will do something dangerous",
    example:
      "The talks have collapsed and both sides have resorted to brinkmanship.",
  },
  {
    word: "Butterscotch",
    concept: "A kind of hard toffee made with butter.",
    example:
      "The aroma of boozy butterscotch wafts seductively around the room",
  },
  {
    word: "Calligrapher",
    concept:
      "A person who is skilled at the art of calligraphy (= producing beautiful writing, often with a special pen or brush)",
    example: "Chinese calligraphers",
  },
  {
    word: "Capriciously",
    concept: "Given to sudden and unaccountable changes of mood or behaviour",
    example:
      "Sally capriciously decided that she suddenly wanted to go to Florida",
  },
  {
    word: "Childshness",
    concept: "Of, relating to, or befitting a child or childhood",
    example: "She has a childish face.",
  },
  {
    word: "Collaterally",
    concept:
      "In a way that is connected to something else, but less important or central",
    example:
      "Such a judgement may be attacked at any time, either directly or collateral",
  },
  {
    word: "Commissioner",
    concept:
      "An important official who has responsibility in a government department or another organization",
    example: "The commissioner in charge of the police force",
  },
  {
    word: "Cytogenetics",
    concept:
      "The scientific study of chromosomes and their effect on the behaviour of cells in the body, often used in medical tests for particular genetic conditions:",
    example:
      "Cytogenetics is routinely used for prenatal diagnosis of chromosomal abnormalities.",
  },
  {
    word: "Decipherable",
    concept:
      "Succeed in understanding, interpreting, or identifying (something)",
    example: "Visual signals help us decipher what is being communicated",
  },
  {
    word: "Decommission",
    concept: "To take equipment or weapons out of use",
    example: "The government has decided to decommission two battleships.",
  },
  {
    word: "Eclectically",
    concept: "Composed of elements drawn from various sources",
    example:
      "It is recommended that teachers use these learning materials eclectically.",
  },
  {
    word: "etymological",
    concept:
      "relating to the study of the origin and history of words, or of one particular word",
    example:
      'In "door lock" and "lock of hair", the word "lock" has different etymological origins.',
  },
  {
    word: "heartrending",
    concept: "causing great sympathy or sadness",
    example: "a heartrending story",
  },
  {
    word: "hypocritical",
    concept:
      "saying that you have particular moral beliefs but behaving in a way that shows these are not sincere",
    example:
      "It is rather hypocritical of you, telling me not to shout. I have seen you lose your temper with the children many times!",
  },
  {
    word: "impenetrable",
    concept: "impossible to see through or go through",
    example: "Outside, the fog was thick and impenetrable.",
  },
  {
    word: "independence",
    concept: "freedom from being governed or ruled by another country",
    example: "Mexico gained its independence from Spain in 1821.",
  },
  {
    word: "inflammation",
    concept:
      "a red, painful, and often swollen area in or on a part of your body",
    example: "Aspirin reduces pain and inflammation.",
  },
  {
    word: "infringement",
    concept: "an action that breaks a rule, law, etc.",
    example: "Even minor infringements of the law will be severely punished.",
  },
  {
    word: "intellectual",
    concept:
      "relating to your ability to think and understand things, especially complicated ideas",
    example:
      "Looking after a baby at home all day is nice but it does not provide much intellectual stimulation.",
  },
  {
    word: "intelligence",
    concept:
      "The ability to quickly understand and respond to fast moving situations.",
    example: "It's the intelligence of her writing that impresses me.",
  },
  {
    word: "intimidating",
    concept: "making you feel frightened or nervous",
    example: "an intimidating array of weapons",
  },
  {
    word: "jurisdiction",
    concept:
      "the authority of a court or official organization to make decisions and judgments",
    example: "The court has no jurisdiction in/over cases of this kind.",
  },
  {
    word: "manufacture",
    concept:
      "to produce goods in large numbers, usually in a factory using machines",
    example: "He works for a company that manufactures car parts.",
  },
  {
    word: "organization",
    concept:
      "a group of people who work together in an organized way for a shared purpose",
    example: "the World Health Organization",
  },
  {
    word: "Pennsylvania",
    concept:
      "a state in the northeastern US, whose capital is Harrisburg and whose largest city is Philadelphia",
    example: "I live near the University of Pennsylvania.",
  },
  {
    word: "presumptuous",
    concept:
      "A person who is presumptuous shows little respect for others by doing things they have no right to do",
    example: "It would be presumptuous of me to comment on the matter.",
  },
  {
    word: "professional",
    concept: "relating to work that needs special training or education",
    example:
      "Chris, you are a nurse, so can I ask your professional opinion on bandaging ankles?",
  },
  {
    word: "recalcitrant",
    concept:
      "unwilling to do what you are asked or ordered to do, even if it is reasonable",
    example:
      "Tenants petitioned their recalcitrant landlord to finish repairs to their building.",
  },
  {
    word: "relationship",
    concept:
      "The way in which two or more concepts are connected, or the state of being connected.",
    example: "The relationship between the two countries has improved.",
  },
  {
    word: "resurrection",
    concept:
      "the act or fact of bringing someone back to life, or bringing something back into use or existence",
    example: "the resurrection of his political career",
  },
  {
    word: "significance",
    concept: "importance",
    example:
      "The discovery of the new drug is of great significance for/to people suffering from heart problems.",
  },
  {
    word: "sporadically",
    concept: "sometimes, but not regularly or continuously",
    example:
      "Fighting continued throughout the afternoon and sporadically into Friday night.",
  },
  {
    word: "thanksgiving",
    concept:
      "the act of saying or showing that you are grateful, especially to God",
    example:
      "The Prince s unexpected recovery was celebrated with a thanksgiving service in St Paul s. ",
  },
  {
    word: "unattractive",
    concept: "unpleasant to look at",
    example: "This is modern architecture at its most unattractive.",
  },
  {
    word: "unsteadiness",
    concept: "not securely fixed",
    example: "In addition, the unsteadiness can lead to falls and injury.",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const anchorEls = document.querySelectorAll("a[href='#top']");

  sixLetters = randomizeArray(sixLetters);
  sevenLetters = randomizeArray(sevenLetters);
  eightLetters = randomizeArray(eightLetters);
  nineLetters = randomizeArray(nineLetters);
  tenLetters = randomizeArray(tenLetters);
  elevenLetters = randomizeArray(elevenLetters);
  twelveLetters = randomizeArray(twelveLetters);

  anchorEls.forEach((anchorEl) => {
    //Check the categories
    anchorEl.addEventListener("click", (evt) => {
      const selected = evt.target.textContent;
      switch (selected) {
        case "6 Letters":
          changeCategory("Category: 6 Letters");
          changeChoose(sixLetters)
          fillGrid(sixLetters, "sixLetters");
          break;
        case "7 Letters":
          changeCategory("Category: 7 Letters");
          changeChoose(sevenLetters)
          fillGrid(sevenLetters, "sevenLetters");
          break;
        case "8 Letters":
          changeCategory("Category: 8 Letters");
          changeChoose(eightLetters)
          fillGrid(eightLetters, "eightLetters");
          break;
        case "9 Letters":
          changeCategory("Category: 9 Letters");
          changeChoose(nineLetters)
          fillGrid(nineLetters, "nineLetters");
          break;
        case "10 Letters":
          changeCategory("Category: 10 Letters");
          changeChoose(tenLetters)
          fillGrid(tenLetters, "tenLetters");
          break;
        case "11 Letters":
          changeCategory("Category: 11 Letters");
          changeChoose(elevenLetters)
          fillGrid(elevenLetters, "elevenLetters");
          break;
        case "12 Letters":
          changeCategory("Category: 12 Letters");
          changeChoose(twelveLetters)
          fillGrid(twelveLetters, "twelveLetters");
          break;
      }
    });
  });

  document.addEventListener("keyup", (evt) => {
    if (evt.key == "s") {
      addGif();
    }
  });
});

function addGif() {
  document.querySelector("#dancing").classList.toggle("dancing");
}

function fillGrid(array, className) {
  const grid = cleanGrid(className);
  if (grid) {
    grid.classList.add(className);

    let cont = 1;
    array.forEach((word) => {
      const div = document.createElement("div");

      div.classList.add("cell-grid");
      div.textContent = cont;

      div.addEventListener("click", () => {
        createPopup(word);
        div.classList.add("cross");
      });

      grid.append(div);
      cont++;
    });
  }
}

function cleanGrid(className) {
  const existsGrid = document.querySelector(`.${className}`);

  if (existsGrid) {
    hideGrids(existsGrid);
    return false;
  } else {
    const div = document.querySelector(".container div");
    const el = document.createElement("div");
    el.classList.add("grid");
    div.appendChild(el);
    hideGrids(el);
    return el;
  }
}

function hideGrids(selectedGrid) {
  document.querySelectorAll(".grid").forEach((el) => {
    if (el != selectedGrid) {
      el.style.display = "none";
    } else {
      el.style.display = "flex";
    }
  });
}

function changeCategory(text) {
  document.querySelector("#heading").textContent = text;
}

function changeChoose(array) {
  const choose = document.querySelector("#choose");
  choose.textContent = `Numbers between:  1 - ${array.length}`;
}

function createPopup(word) {
  const modal = document.getElementById("modal");
  const modalInfo = document.querySelector(".modal__info");

  modal.classList.add("modal__show");
  modalInfo.textContent = word.word;
  modalInfo.style.fontSize = "10rem";
  modalInfo.style.textTransform = "lowercase";
  modalInfo.style.marginTop = "4.5rem";

  //To hide the modal
  const btnClose = document.getElementById("btnClose");
  const btnMeaning = document.getElementById("btnMeaning");
  const btnExample = document.getElementById("btnExample");
  const btnWord = document.getElementById("btnWord");

  btnClose.addEventListener("click", (evt) => {
    evt.preventDefault();
    modal.classList.remove("modal__show");
  });

  btnMeaning.addEventListener("click", (evt) => {
    evt.preventDefault();
    modalInfo.textContent = word.concept + ".";
    modalInfo.style.fontSize = "4.5rem";
    modalInfo.style.textTransform = "capitalize";
    modalInfo.style.marginTop = "1.5rem";
  });

  btnExample.addEventListener("click", (evt) => {
    evt.preventDefault();
    modalInfo.textContent = word.example + ".";
    modalInfo.style.fontSize = "4.5rem";
    modalInfo.style.textTransform = "capitalize";
    modalInfo.style.marginTop = "1.5rem";
  });

  btnWord.addEventListener("click", (evt) => {
    evt.preventDefault();
    modalInfo.textContent = word.word;
    modalInfo.style.fontSize = "10rem";
    modalInfo.style.textTransform = "lowercase";
    modalInfo.style.marginTop = "4.5rem";
  });
}

function randomizeArray(array) {
  return array.sort((a, b) => 0.5 - Math.random());
}

function checkDuplicated(array) {
  const newArray = [];
  array.forEach((el) => {
    newArray.push(el.word.toLowerCase());
    console.log(el.example);
  });
  const x = new Set([...newArray]);
  const aux = [];
  console.log(x);
  x.forEach((el) => {
    const i = newArray.indexOf(el);
    newArray.splice(i, 1);
    aux.push(i);
  });
  console.log(newArray);
  console.log("");
  console.log(aux.length);
}
