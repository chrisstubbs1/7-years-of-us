import type { Chapter, PromiseContent } from "@/lib/types";

/**
 * Relationship timeline mapped to seven chapters:
 * 2019 → 2020 → 2021 → 2022 → 2023 → 2024 → 2025–2026
 */

export const siteMeta = {
  title: "The Story of Us",
  subtitle: "Seven years. Seven chapters. One love that kept choosing us.",
  dedication:
    "For Grace — the deep thinker who changed my life the night we met, and every year after.",
};

export const chapters: Chapter[] = [
  {
    id: 1,
    slug: "year-1",
    yearLabel: "2019 · Year One",
    title: "The Night Everything Changed",
    poeticLine:
      "A random night. A mutual friend. Neither of us knew how much we were about to change each other's lives.",
    narrative:
      "Grace — this was the year we met, and it remains the greatest year of my life because of that. We had our first date. Our first fight. Our first I love yous. You are still the only woman I have ever said those words to. Little did we know that one unexpected meeting would become seven years of being basically inseparable — a love that started quietly and then reshaped everything.",
    regret:
      "I wish I had known then how rare this beginning was — and said out loud, sooner, that meeting you was the hinge my life turned on.",
    symbol: "lilac",
    symbolLabel: "Lilac",
    truthNote:
      "I love you was not a phrase I spent lightly. You were the first — and that still means everything to me.",
    memoryCards: [
      "A random night that refused to stay random.",
      "First date. First fight. First I love you.",
      "The start of seven years of almost inseparable us.",
    ],
    image: "/images/year-1.svg",
    accent: "#B794C0",
  },
  {
    id: 2,
    slug: "year-2",
    yearLabel: "2020 · Year Two",
    title: "Love That Kept Talking",
    poeticLine:
      "Roommates. Covid. Distance. And still — we kept our love alive through communication.",
    narrative:
      "The first half of the year we were inseparable, riding the fresh high of becoming a couple. When your roommate situations turned terrible, we spent days at my apartment so you could breathe — and I felt proud to protect that peace for you. Then Covid sent us home. We didn't see each other until the next semester, but our love did not fade. We communicated. We stayed. That thread of talking to each other is one of the truest things we built. Eventually we returned to college and didn't skip a beat — cooking at the Indy, me coming home from Neenah to you, smoking, eating dinner, bonding. A routine. A life.",
    regret:
      "I should have told you more often how much that communication meant — that distance never stood a chance when we kept choosing to reach for each other.",
    symbol: "diet-coke",
    symbolLabel: "Diet Coke",
    truthNote:
      "Communication saved us that year. Not grand gestures — the daily decision to keep the line open between your heart and mine.",
    memoryCards: [
      "Days at my place when home didn't feel safe.",
      "Covid distance — love held by words.",
      "The Indy. Neenah. Dinner. Us, settling into a rhythm.",
    ],
    image: "/images/year-2.svg",
    accent: "#C9A0DC",
  },
  {
    id: 3,
    slug: "year-3",
    yearLabel: "2021 · Year Three",
    title: "When You Felt Like Forever",
    poeticLine:
      "Powers Island. Buford Dam. Morgan Falls. Pricci on Valentine's. The year you felt like my wife more than my girlfriend.",
    narrative:
      "This was the year we felt like a real couple — growing into adults together as college neared its end. We became explorative: Powers Island, Buford Dam, Morgan Falls — all found in the same year. Our first fancy Valentine's dinner at Pricci; I'll never forget how beautiful you looked that night. You were there for my graduation. You became the first woman I introduced to my family. You became part of my family. So when you feel bad about not having a good relationship with them — please remember this: you will always be a part of mine. I knew you were for me, Grace.",
    regret:
      "I didn't say clearly enough, then or since: you belong in my family story. That never depended on how easy or hard the relationships around it felt.",
    symbol: "flowers",
    symbolLabel: "Flowers",
    truthNote:
      "Grace — you will always be a part of my family. That is not conditional. It is already true.",
    memoryCards: [
      "Trails and new places — discovering Georgia with you.",
      "Pricci. Valentine's. How beautiful you looked.",
      "Graduation. Meeting my family. Feeling like forever.",
    ],
    image: "/images/year-3.svg",
    accent: "#D4A5C9",
  },
  {
    id: 4,
    slug: "year-4",
    yearLabel: "2022 · Year Four",
    title: "The Quiet Year of Us",
    poeticLine:
      "Routine isn't empty when it's shared. You supported my leap — and I got to spend more of my days beside you.",
    narrative:
      "Honestly, this year was pretty routine for us — and that was its own kind of gift. Normal couple things. Soft consistency. I got a new job at Hotel Effectiveness and could work from home. You supported me through that career change, and because of you, I got to spend so much more time with the person I loved. Chester, your dog, and Franny, your cat, were woven into those ordinary days too — the quiet life we built without needing to announce it.",
    regret:
      "I took the ease of that year for granted. Routine felt so safe I forgot to keep saying thank you for the support that made it possible.",
    symbol: "chester",
    symbolLabel: "Chester — your dog",
    truthNote:
      "Your support during that career change wasn't small. It gave me more hours with you — and I never want to treat that lightly again.",
    memoryCards: [
      "A career leap you stood behind.",
      "Working from home — more days in the same air.",
      "Ordinary love. Chester. Franny. Us.",
    ],
    image: "/images/year-4.svg",
    accent: "#A88BC4",
  },
  {
    id: 5,
    slug: "year-5",
    yearLabel: "2023 · Year Five",
    title: "The Year I Had to Earn Us Back",
    poeticLine:
      "Kayaks and bright water — then a turning point. I broke your trust. And you still gave me the chance to earn it again.",
    narrative:
      "This year was filled with highs and lows. We had so many kayak adventures; our love showed no signs of slowing down. Then the latter half shifted. I betrayed your trust with decisions I made — and to this day I am ashamed of them. That was the turning point where I realized this thing was not invincible. If I wanted us to continue, I had to earn your trust back. And I did — because you are a woman who can offer that kind of grace. I am so thankful you gave me the opportunity.",
    regret:
      "I am ashamed of the choices that hurt you. Nothing about that chapter was small, and I will never pretend it was.",
    symbol: "franny",
    symbolLabel: "Franny — your cat",
    truthNote:
      "I know what I risked. Thank you for being someone who could look at the fracture and still believe repair was possible.",
    memoryCards: [
      "Kayak days when everything still felt endless.",
      "The moment I learned love isn't invincible.",
      "Shame, honesty, and the chance you gave me to return.",
    ],
    image: "/images/year-5.svg",
    accent: "#C4A1D8",
  },
  {
    id: 6,
    slug: "year-6",
    yearLabel: "2024 · Year Six",
    title: "Healing, Denver & the Leap",
    poeticLine:
      "Wounds still fresh — and still, we never veered. Then Auburn, Denver, Vanderbilt. Your dream. Our first sky together.",
    narrative:
      "This was a year of healing. We entered it with the wounds of broken trust still fresh — and even through those hard months, we never veered away from each other. That is a pattern in us: situations can happen, and still we don't abandon the love. We survived a real stress test and came out better. You started applying to grad school. We drove to Auburn for an interview and then hopped a flight to Denver — our first plane trip, our first travel as partners. You were my first ever travel partner. Then you got into Vanderbilt. Your dream school. I was so proud. It also marked a major change: you in Nashville, me in Atlanta. We made your last Atlanta days count. I helped you move. Distance looked surmountable — and maybe it also quietly introduced a stressor we didn't fully name yet. Still, we persevered through mutual love.",
    regret:
      "I should have spoken more carefully about the stress long distance might carry — not because I doubted us, but because communication has always been how we stay whole.",
    symbol: "stars",
    symbolLabel: "Stars over Denver",
    truthNote:
      "We can survive hard things. We already have. I need you to know that pattern is real — and it belongs to us.",
    memoryCards: [
      "Healing without walking away.",
      "Auburn to Denver — my first travel partner.",
      "Vanderbilt. Pride. Nashville & Atlanta learning a new shape.",
    ],
    image: "/images/year-6.svg",
    accent: "#9B7BB8",
  },
  {
    id: 7,
    slug: "year-7",
    yearLabel: "2025–2026 · Year Seven",
    title: "Distance, Drift & the Truth",
    poeticLine:
      "Visits. Blue Ridge Christmas. Then insecurity, silence, rising tension — and the honesty I owe you now.",
    narrative:
      "We settled into long distance: my regular visits, your trips through town, a bond that still felt consistent. Then life got hard for me — eviction, a job layoff, uncertainty. You stayed. You remained by my side. That consistency mattered more than I said. Quietly, I grew insecure as a man; the job loss and unknown future took a hidden toll. I persevered the best I could for us. We had our first camping trip in Blue Ridge. I'll never forget Christmas in a cabin with the love of my life. Into 2026 we started loving as normal — holidays near each other, you visiting my family in Macon, which I appreciate deeply. Then I drifted. Side-tracked by my own insecurity and complacency. I should have communicated those things to you. By May we could feel the tension rising, and we didn't take the chance to talk about it. This is the chapter of the drift — and of me finally naming it.",
    regret:
      "I got complacent. I let insecurity speak louder than honesty. I didn't communicate when tension rose. I'm sorry, Grace — for the silence, and for my part in the fading.",
    symbol: "cats",
    symbolLabel: "Blue Ridge quiet",
    truthNote:
      "I am not writing this to pressure you. I am writing it so you know: I see the drift, I own my part, and I still believe the love that never fully veered is worth the truth.",
    memoryCards: [
      "You stayed through eviction, layoff, uncertainty.",
      "Blue Ridge. A cabin Christmas with you.",
      "Macon. Rising tension. The words I should have said sooner.",
    ],
    image: "/images/year-7.svg",
    accent: "#8E6FA8",
  },
];

export const promiseContent: PromiseContent = {
  title: "A Promise Kept in Memory",
  greeting: "Grace — if you ever wonder whether you were truly seen —",
  body: [
    "You were. You are.",
    "I see the deep thinker. The woman I met on a random night who became the only person I've ever said I love you to. The one who cooked with me at the Indy, stood at my graduation, sat at Pricci looking impossibly beautiful, kayaked through bright seasons, flew with me to Denver, got into Vanderbilt, stayed through eviction and layoff, and spent Christmas with me in a Blue Ridge cabin.",
    "I see Chester, your dog, and Franny, your cat. Flowers. Purple. A cold Diet Coke. Communication that kept us alive across Covid and campuses and state lines. And this, especially: you will always be a part of my family. That does not expire with distance or difficulty.",
    "I also see the pattern that defines us — we can face real stress, real hurt, real silence, and still the love has a way of not fully letting go. In 2023 I broke your trust and you gave me the chance to earn it back. In 2024 we healed and leaped anyway. That resilience is ours.",
    "And I see what I failed to give you when it mattered most: clearer communication about my insecurity, less complacency, sooner honesty when tension rose in 2026. This is not a demand. It is a remembrance — and a hope held gently, without pressure.",
  ],
  closing:
    "May this lilac book find you on a quiet day and remind you: you were appreciated — deeply, imperfectly, and for real. Across seven years, you changed my life. That is still true.",
  signature: "With tenderness,\nChris",
};

export function getChapterBySlug(slug: string): Chapter | undefined {
  return chapters.find((c) => c.slug === slug);
}

export function getAdjacentChapters(id: number) {
  const prev = chapters.find((c) => c.id === id - 1) ?? null;
  const next = chapters.find((c) => c.id === id + 1) ?? null;
  return { prev, next };
}
