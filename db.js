/* =========================================
   DMK - Daily Mock Quiz App
   Question Database: db.js
   -----------------------------------------
   Structure:
   const questionsDB = {
     subject: [
       { question, options[], answer }
     ]
   }
   ========================================= */

const questionsDB = {
  reasoning: [
    {
      question: "Which number should come next in the series: 2, 4, 8, 16, ?",
      options: ["18", "24", "30", "32"],
      answer: 3
    },
    {
      question: "Book : Reading :: Knife : ?",
      options: ["Cutting", "Writing", "Playing", "Painting"],
      answer: 0
    },
    {
      question: "If CAT = 24 and DOG = 26, then BAT = ?",
      options: ["23", "25", "27", "29"],
      answer: 1
    }
  ],

  generalKnowledge: [
    {
      question: "Who is known as the father of computers?",
      options: ["Charles Babbage", "Alan Turing", "Tim Berners-Lee", "Steve Jobs"],
      answer: 0
    },
    {
      question: "The capital of Australia is?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      answer: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: 1
    }
  ],

  science: [
    {
      question: "What is the chemical symbol for water?",
      options: ["O2", "H2O", "CO2", "NaCl"],
      answer: 1
    },
    {
      question: "Which organ is responsible for pumping blood in the human body?",
      options: ["Lungs", "Heart", "Kidneys", "Liver"],
      answer: 1
    },
    {
      question: "Photosynthesis mainly takes place in which part of the plant?",
      options: ["Stem", "Leaves", "Roots", "Flowers"],
      answer: 1
    }
  ],

  math: [
    {
      question: "What is 15 × 12?",
      options: ["120", "180", "150", "200"],
      answer: 1
    },
    {
      question: "Simplify: (8 + 2) × (6 − 4)",
      options: ["20", "18", "24", "16"],
      answer: 2
    },
    {
      question: "The square root of 144 is?",
      options: ["10", "11", "12", "13"],
      answer: 2
    }
  ],

  history: [
    {
      question: "Who was the first President of the United States?",
      options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
      answer: 2
    },
    {
      question: "The Great Wall of China was built to protect against which group?",
      options: ["Romans", "Mongols", "Vikings", "Persians"],
      answer: 1
    },
    {
      question: "Who discovered America in 1492?",
      options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Marco Polo"],
      answer: 1
    }
  ]
};

/* 
   Export for script.js
   (In browser environment, just global `questionsDB` is enough)
*/
