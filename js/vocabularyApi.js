
/**
 * catagory list
 * communication
 * food
 * short_sentance
 */

const vocabularyApi = [
  {
    catagory: "communication",
    word: "Nevertheless",
    meaning: {
      english: "despite what has just been said or referred to",
      bangla: "তবুও | যা বলা হয়েছে বা উল্লেখ করা হয়েছে তা সত্ত্বেও ",
    },
    example: [
      {
        dirExm: "Ok, Nevertheless. Thank you very much",
        bangla: "ঠিক আছে, তবুও আপনাকে অনেক ধন্যবাদ",
      },
      {
        onlExm:
          "Their team hadn't lost a game the entire season. Nevertheless, we beat them by a huge margin last night.",
        bangla:
          "পুরো মৌসুমে তাদের দল একটি ম্যাচও হারেনি। তা সত্ত্বেও, গত রাতে আমরা তাদের বিশাল ব্যবধানে পরাজিত করেছি।",
      },
    ],
  },
  {
    catagory: "food",
    word: "Steam Rice",
    meaning: {
      english: "White rice",
      bangla: "সাদা ভাত",
    },
    example: [
      {
        dirExm: "youtube story | I eat steam rice",
        bangla: "আমি সাদা ভাত খাই ",
      },
      {
        onlExm: "Pakistan people not eat steam rice",
        bangla: "পাকিস্তানের লোকজন সাদা ভাত খায় না",
      },
    ],
  },
  {
    catagory: "communication",
    word: "Incredible",
    meaning: {
      english: "extremely good",
      bangla: "অবিশ্বাস্য | অত্যন্ত ভাল",
    },
    example: [
      {
        dirExm: "our incredible 'Special Partner' sponsor",
        bangla: "আমাদের অবিশ্বাস্য 'বিশেষ অংশীদার' স্পনসর",
      },
      {
        onlExm: "Yeah, it was an incredible performance.| What an incredible motorbike!",
        bangla: "হ্যাঁ, এটি একটি অবিশ্বাস্য পারফরম্যান্স ছিল। কি একটি অবিশ্বাস্য মোটরবাইক!",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "What's bothering you?",
    meaning: {
      english: "--",
      bangla: "তোমার কি মন খারাপ?",
    },
    example: [
      {
        dirExm: "--",
        bangla: "--",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "So, what of me?",
    meaning: {
      english: "--",
      bangla: "তো আমার কি ?",
    },
    example: [
      {
        dirExm: "Your are so smart, so what of me?",
        bangla: "তুমি খুবই চৌকস, তাতে আমার কি?",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "is it?",
    meaning: {
      english: "--",
      bangla: "তাই নাকি?",
    },
    example: [
      {
        dirExm: "I will go to Finland. Oh is it?",
        bangla: "আমি ফিনল্যান্ড যাবো।  তাই নাকি? ",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "লাইনে দাঁড়াও",
    meaning: {
      english: "Stand in queue!",
      bangla: "--",
    },
    example: [
      {
        dirExm: "--",
        bangla: "--",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "যাক বাঁচা গেলো",
    meaning: {
      english: "Good Riddance!"
    },
    example: [
      {
        dirExm: "--",
        bangla: "--",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "কি বাজে বকছো",
    meaning: {
      english: "How absurd",
      bangla: "--",
    },
    example: [
      {
        dirExm: "--",
        bangla: "--",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "কি অদভুদ",
    meaning: {
      english: "How strange!",
      bangla: "--",
    },
    example: [
      {
        dirExm: "--",
        bangla: "--",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "এক্ষুনি কর",
    meaning: {
      english: "Do it at once",
      bangla: "--",
    },
    example: [
      {
        dirExm: "--",
        bangla: "--",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "ফোন লাইনে থাকুন",
    meaning: {
      english: "Hold on",
      bangla: "--",
    },
    example: [
      {
        dirExm: "--",
        bangla: "--",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "দুঃখজনক",
    meaning: {
      english: "What a pity",
      bangla: "--",
    },
    example: [
      {
        dirExm: "--",
        bangla: "--",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "চিন্তা করে কথা বল",
    meaning: {
      english: "Talk sense",
      bangla: "--",
    },
    example: [
      {
        dirExm: "--",
        bangla: "--",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "তুমি যা বল",
    meaning: {
      english: "What you say",
      bangla: "--",
    },
    example: [
      {
        dirExm: "--",
        bangla: "--",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "তুমি যা কর",
    meaning: {
      english: "What you do",
      bangla: "--",
    },
    example: [
      {
        dirExm: "--",
        bangla: "--",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "তুমি যা চাও",
    meaning: {
      english: "What you want",
      bangla: "--",
    },
    example: [
      {
        dirExm: "--",
        bangla: "--",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "তোমার কথা রাখ",
    meaning: {
      english: "Keep your word",
      bangla: "--",
    },
    example: [
      {
        dirExm: "--",
        bangla: "--",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "আমার কেনো জানি মনে হয়",
    meaning: {
      english: "I tend to think so",
      bangla: "--",
    },
    example: [
      {
        dirExm: "I tend to think so, she like me",
        bangla: "আমার কেনো জানি মনে হয়, সে আমাকে পছন্দ করে",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "চল কোথায় বসি",
    meaning: {
      english: "Let's sit somewhere",
      bangla: "--",
    },
    example: [
      {
        dirExm: "--",
        bangla: "--",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "অল্প অল্প করে",
    meaning: {
      english: "little by little",
      bangla: "--",
    },
    example: [
      {
        dirExm: "--",
        bangla: "--",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "আর কিভাবে",
    meaning: {
      english: "How else",
      bangla: "--",
    },
    example: [
      {
        dirExm: "--",
        bangla: "--",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "শান্ত হও",
    meaning: {
      english: "Calm down",
      bangla: "--",
    },
    example: [
      {
        dirExm: "--",
        bangla: "--",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "আর কোনো কিন্তু নয়",
    meaning: {
      english: "No more buts",
      bangla: "--",
    },
    example: [
      {
        dirExm: "--",
        bangla: "--",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "বাজে কথা",
    meaning: {
      english: "Bullshit",
      bangla: "--",
    },
    example: [
      {
        dirExm: "--",
        bangla: "--",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "কি শান্ত",
    meaning: {
      english: "How peachfull",
      bangla: "--",
    },
    example: [
      {
        dirExm: "--",
        bangla: "--",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "বলতে গেলে কিছুই না",
    meaning: {
      english: "Next to nothing",
      bangla: "--",
    },
    example: [
      {
        dirExm: "--",
        bangla: "--",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "একটু ও না",
    meaning: {
      english: "Not a bit",
      bangla: "--",
    },
    example: [
      {
        dirExm: "--",
        bangla: "--",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
  {
    catagory: "short_sentance",
    word: "মোটামোটি",
    meaning: {
      english: "So So",
      bangla: "--",
    },
    example: [
      {
        dirExm: "--",
        bangla: "--",
      },
      {
        onlExm: "--",
        bangla: "--",
      },
    ],
  },
];

// make vocabulary schema

// {
//   catagory: "",
//   word: "",
//   meaning: {
//     english: "",
//     bangla: "",
//   },
//   example: [
//     {
//       dirExm: "",
//       bangla: "",
//     },
//     {
//       onlExm: "",
//       bangla: "",
//     },
//   ],
// },
