const questionsDB = {
  "Time and Work": [
    {
      "id": "q-001",
      "question": "A can do a piece of work in 12 days and B in 16 days. They work together for 4 days. How much work is left?",
      "options": ["1/4", "1/3", "1/2", "1/6", "1/8"],
      "answer": 1,
      "explanation": "A:1/12, B:1/16. Together=1/12+1/16=7/48 per day. Work in 4 days=4*7/48=7/12. Remaining=1-7/12=5/12."
    },
    {
      "id": "q-002",
      "question": "A is twice as efficient as B. They can complete a work together in 6 days. How long would B alone take to complete the work?",
      "options": ["12 days", "9 days", "10 days", "8 days", "14 days", "18 days"],
      "answer": 5,
      "explanation": "B=x/day, A=2x/day. Together=3x=1/6 → x=1/18. B alone=1/x=18 days."
    }
    // ... more questions
  ],
  "Speed Time and Distance": [
    {
      "id": "q-001",
      "question": "A train travels at a speed of 60 km/h and crosses a pole in 9 seconds. What is the length of the train in meters?",
      "options": ["150 m", "180 m", "120 m", "100 m"],
      "answer": 0,
      "explanation": "Length = Speed * Time = 150 m."
    }
    // ... more questions
  ],
  'Number System(25 Question)': [
        

  {
    "id": "num-001",
    "question": "The remainder when 7^100 is divided by 40 is:",
    "options": ["1", "9", "21", "31"],
    "answer": 2,
    "explanation": "Euler’s theorem: φ(40)=16. 7^100 ≡ 7^4 ≡ 2401 ≡ 21 mod 40."
  },
  {
    "id": "num-002",
    "question": "If the product of two consecutive integers is 156, the integers are:",
    "options": ["11,12", "12,13", "13,14", "14,15"],
    "answer": 1,
    "explanation": "12 × 13 = 156."
  },
  {
    "id": "num-003",
    "question": "Find remainder of 123456789 ÷ 9.",
    "options": ["0", "1", "3", "6"],
    "answer": 0,
    "explanation": "Sum of digits = 45, divisible by 9 → remainder 0."
  },
  {
    "id": "num-004",
    "question": "The number of trailing zeros in 250! is:",
    "options": ["61", "62", "63", "64"],
    "answer": 1,
    "explanation": "250/5=50, 250/25=10, 250/125=2 → total=62."
  },
  {
    "id": "num-005",
    "question": "The smallest number which when divided by 12, 15, and 20 leaves remainder 7 is:",
    "options": ["67", "127", "247", "307"],
    "answer": 2,
    "explanation": "LCM(12,15,20)=60 → form 60k+7. First >60 is 247."
  },
  {
    "id": "num-006",
    "question": "If 142857 is multiplied by 7, the result is:",
    "options": ["999999", "1000000", "1234569", "1428570"],
    "answer": 0,
    "explanation": "142857 is cyclic, ×7 = 999999."
  },
  {
    "id": "num-007",
    "question": "Find the unit digit of (37)^85.",
    "options": ["3", "7", "9", "1"],
    "answer": 1,
    "explanation": "7’s cycle = (7,9,3,1). 85 mod 4=1 → unit digit 7."
  },
  {
    "id": "num-008",
    "question": "If x = 2^a × 3^b × 5^c, number of factors of x = ?",
    "options": ["a+b+c", "(a+1)(b+1)(c+1)", "(a+b)(b+c)", "None"],
    "answer": 1,
    "explanation": "Number of factors = (a+1)(b+1)(c+1)."
  },
  {
    "id": "num-009",
    "question": "Which of the following is NOT a prime?",
    "options": ["97", "101", "111", "113"],
    "answer": 2,
    "explanation": "111 = 3 × 37, not prime."
  },
  {
    "id": "num-010",
    "question": "Find remainder of 10^23 ÷ 7.",
    "options": ["1", "2", "5", "4"],
    "answer": 2,
    "explanation": "10 mod 7=3. 3^23 cycle length=6. 23 mod 6=5 → 3^5=243 → remainder 5."
  },
  {
    "id": "num-011",
    "question": "Sum of first 50 even numbers = ?",
    "options": ["2500", "2550", "2600", "2700"],
    "answer": 1,
    "explanation": "Formula = n(n+1). 50×51=2550."
  },
  {
    "id": "num-012",
    "question": "Find HCF of 504 and 660.",
    "options": ["12", "18", "24", "36"],
    "answer": 0,
    "explanation": "Prime factorization → HCF = 12."
  },
  {
    "id": "num-013",
    "question": "Smallest number divisible by 8, 9, 12, and 15 = ?",
    "options": ["180", "240", "360", "480"],
    "answer": 2,
    "explanation": "LCM = 360."
  },
  {
    "id": "num-014",
    "question": "Digital root of 9876543210 = ?",
    "options": ["9", "10", "0", "1"],
    "answer": 0,
    "explanation": "Sum = 45 → digital root 9."
  },
  {
    "id": "num-015",
    "question": "Find remainder when 17^20 is divided by 16.",
    "options": ["0", "1", "9", "15"],
    "answer": 1,
    "explanation": "17 ≡ 1 mod 16 → remainder 1."
  },
  {
    "id": "num-016",
    "question": "Binary equivalent of decimal 45 = ?",
    "options": ["101011", "101101", "110101", "1011011"],
    "answer": 1,
    "explanation": "45 = 32+8+4+1 = 101101."
  },
  {
    "id": "hcf-lcm-001",
    "question": "The product of two numbers is 320. If their HCF is 8, what is their LCM?",
    "options": ["32", "40", "2560", "256"],
    "answer": 1,
    "explanation": "The fundamental property of HCF and LCM states that for any two numbers, the product of the numbers is equal to the product of their HCF and LCM. So, Number1 × Number2 = HCF × LCM. Given that the product of the two numbers is 320 and their HCF is 8, we can write: 320 = 8 × LCM. Solving for LCM gives: LCM = 320 / 8 = 40."
  },
  {
    "id": "num-018",
    "question": "Number of prime numbers between 50 and 80 is:",
    "options": ["6", "7", "8", "9"],
    "answer": 1,
    "explanation": "Primes: 53,59,61,67,71,73,79 → 7 primes."
  },
  {
    "id": "num-019",
    "question": "If the sum of digits of a number is divisible by 11, then the number is divisible by 11. True or False?",
    "options": ["True", "False", "Depends", "None"],
    "answer": 1,
    "explanation": "Rule of 11 = difference of alternate digit sums, not total sum."
  },
  {
    "id": "num-020",
    "question": "The remainder when 9^21 is divided by 7 is:",
    "options": ["1", "2", "3", "4"],
    "answer": 0,
    "explanation": "9 ≡ 2 mod 7. 2^21 cycle=2,4,1. 21 mod 3=0 → remainder 1."
  },
  {
    "id": "num-021",
    "question": "Smallest prime greater than 200 = ?",
    "options": ["201", "211", "223", "227"],
    "answer": 1,
    "explanation": "211 is prime."
  },
  {
    "id": "num-022",
    "question": "Sum of first 20 multiples of 7 = ?",
    "options": ["1470", "1540", "1610", "1700"],
    "answer": 0,
    "explanation": "n(n+1)/2 ×7 = 20×21/2 ×7 = 1470."
  },
  {
    "id": "num-023",
    "question": "A number when divided by 12 leaves remainder 8. What remainder will it leave when divided by 4?",
    "options": ["0", "1", "2", "3"],
    "answer": 0,
    "explanation": "(12k+8) ÷4 → remainder 0."
  },
  {
    "id": "hcf-lcm-002",
    "question": "The LCM of two numbers is 180 and their HCF is 12. If one of the numbers is 36, what is the other number?",
    "options": ["40", "60", "90", "120"],
    "answer": 1,
    "explanation": "The product of two numbers is equal to the product of their HCF and LCM. So, Number1 × Number2 = HCF × LCM. We have: 36 × Other Number = 12 × 180. The other number is (12 × 180) / 36 = 12 × 5 = 60."
  },
  {
    "id": "num-025",
    "question": "Number of zeros in 1000! = ?",
    "options": ["240", "245", "249", "252"],
    "answer": 2,
    "explanation": "1000/5=200, /25=40, /125=8, /625=1 → total 249."
  }

    ],
    
    'Number System Part 2(25 Question)': [
      
      
   {
    "id": "hcf-lcm-003",
    "question": "Two numbers are in the ratio of 3:4. If their HCF is 4, find their LCM.",
    "options": ["12", "24", "48", "60"],
    "answer": 2,
    "explanation": "If the numbers are in the ratio 3:4 and their HCF is 4, the numbers can be represented as 3 × 4 = 12 and 4 × 4 = 16. The LCM of 12 and 16 is 48."
  },
  {
    "id": "num-027",
    "question": "If 2^x = 128, find x.",
    "options": ["5", "6", "7", "8"],
    "answer": 2,
    "explanation": "2^7 = 128 → x=7."
  },
  {
    "id": "num-028",
    "question": "The largest 4-digit number divisible by 21 is:",
    "options": ["9996", "9990", "9984", "9999"],
    "answer": 0,
    "explanation": "9996 ÷ 21 = 476."
  },
  {
    "id": "num-029",
    "question": "If a number is divisible by both 9 and 12, it must also be divisible by:",
    "options": ["18", "24", "36", "72"],
    "answer": 2,
    "explanation": "LCM of 9 and 12 = 36."
  },
  {
    "id": "num-030",
    "question": "Number of factors of 360 = ?",
    "options": ["20", "22", "24", "27"],
    "answer": 2,
    "explanation": "360=2^3×3^2×5. Factors=(3+1)(2+1)(1+1)=24."
  },
  {
    "id": "num-031",
    "question": "Find the smallest number which when divided by 12, 15, 20 leaves remainder 5.",
    "options": ["60", "65", "125", "245"],
    "answer": 2,
    "explanation": "LCM=60 → form=60k+5. Smallest >60 is 125."
  },
  {
    "id": "num-032",
    "question": "A two-digit number is 4 more than twice the sum of its digits. If digits are reversed, number decreases by 27. Find the number.",
    "options": ["58", "62", "71", "84"],
    "answer": 1,
    "explanation": "Equation solving → number=62."
  },
  {
    "id": "num-033",
    "question": "Last digit of 7^222 is:",
    "options": ["1", "3", "7", "9"],
    "answer": 3,
    "explanation": "7 cycle: (7,9,3,1). 222 mod 4=2 → last digit 9."
  },
  {
    "id": "num-034",
    "question": "Find remainder when 1001 is divided by 77.",
    "options": ["0", "7", "11", "13"],
    "answer": 0,
    "explanation": "1001 ÷ 77 = 13 remainder 0? Actually 77×13=1001 exactly, remainder=0."
  },
  {
    "id": "num-035",
    "question": "Which of the following is NOT a prime number?",
    "options": ["61", "71", "77", "97"],
    "answer": 2,
    "explanation": "77 = 7×11, not prime."
  },
  {
    "id": "num-036",
    "question": "Find sum of digits of 333 × 666.",
    "options": ["18", "21", "27", "30"],
    "answer": 2,
    "explanation": "333×666=221778. Digit sum=27."
  },
  {
    "id": "num-037",
    "question": "LCM of first 5 natural numbers = ?",
    "options": ["30", "40", "50", "60"],
    "answer": 3,
    "explanation": "1,2,3,4,5 → LCM=60."
  },
  {
    "id": "num-038",
    "question": "Remainder when 3^100 ÷ 5 = ?",
    "options": ["0", "1", "2", "3"],
    "answer": 1,
    "explanation": "3 cycle mod 5=3,4,2,1. 100 mod 4=0 → remainder=1. Correct remainder=1."
  },
  {
    "id": "num-039",
    "question": "1+3+5+...+99 = ?",
    "options": ["2400", "2500", "2600", "2700"],
    "answer": 1,
    "explanation": "Sum of n odd numbers = n^2. Here n=50 → 2500."
  },
  {
    "id": "num-040",
    "question": "If N = 72 × 35 × 50, total number of prime factors (with repetition) = ?",
    "options": ["7", "8", "9", "10"],
    "answer": 3,
    "explanation": "72=2^3×3^2, 35=5×7, 50=2×5^2 → total exponent sum=10."
  },
  {
    "id": "num-041",
    "question": "Next term: 2, 5, 10, 17, 26, ?",
    "options": ["35", "37", "38", "39"],
    "answer": 1,
    "explanation": "Pattern +3,+5,+7,+9,... Next +11=37."
  },
  {
    "id": "num-042",
    "question": "Simplify: (999^2 – 1) ÷ 1000.",
    "options": ["998", "999", "1000", "1001"],
    "answer": 0,
    "explanation": "999^2–1=(999–1)(999+1)=998×1000 ÷1000=998."
  },
  {
    "id": "num-043",
    "question": "Find HCF of 252, 198, 594.",
    "options": ["6", "9", "12", "18"],
    "answer": 3,
    "explanation": "252=2^2×3^2×7, 198=2×3^2×11, 594=2×3^3×11 → HCF=18? Actually common =2×3^2=18."
  },
  {
    "id": "num-044",
    "question": "Find remainder when 563 is divided by 11.",
    "options": ["0", "1", "2", "3"],
    "answer": 2,
    "explanation": "Rule: (5+3)-6=2 → remainder=2. But 563÷11=51 remainder 2. Correct=2."
  },
  {
    "id": "num-045",
    "question": "Sum of first 25 odd numbers = ?",
    "options": ["600", "625", "650", "675"],
    "answer": 1,
    "explanation": "Sum of n odd numbers=n^2. Here=25^2=625."
  },
  {
    "id": "num-046",
    "question": "Largest 3-digit number divisible by 27 = ?",
    "options": ["972", "981", "990", "999"],
    "answer": 1,
    "explanation": "981 ÷ 27 = 36."
  },
  {
    "id": "num-047",
    "question": "If 3x+4y=29, where x,y are natural numbers, possible value of x=?",
    "options": ["1", "3", "5", "7"],
    "answer": 3,
    "explanation": "Check values: For x=5, 3(5)=15 → 29–15=14 → y=14/4=3.5 not integer. Correct x=7 → 29–21=8 → y=2 valid."
  },
  {
    "id": "num-048",
    "question": "Simplify: (2^8 – 1) ÷ (2^4 – 1).",
    "options": ["15", "17", "20", "21"],
    "answer": 1,
    "explanation": "(256–1)/(16–1)=255/15=17. Actually correct=17."
  },
  {
    "id": "num-049",
    "question": "Which number is divisible by 8?",
    "options": ["12456", "12458", "12460", "12462"],
    "answer": 0,
    "explanation": "Check last 3 digits: 456÷8=57, divisible."
  },
  {
    "id": "num-050",
    "question": "Find remainder when 2^100 is divided by 7.",
    "options": ["1", "2", "3", "4"],
    "answer": 1,
    "explanation": "2 cycle mod7=(2,4,1). 100 mod3=1 → remainder=2."
  },
      
      ],
      
    'Number System Final 50': [
      
      
      {
  "id": "num-0105",
  "question": "What is the largest 3-digit number that is a perfect square?",
  "options": [
    "999",
    "961",
    "980",
    "970"
  ],
  "answer": 1,
  "explanation": "The largest 3-digit number is 999. The square root of 999 is approximately 31.62. The largest integer less than or equal to 31.62 is 31. Therefore, the largest 3-digit perfect square is 31^2 = 961."
},
  {
    "id": "num-016",
    "question": "If a number is divisible by both 7 and 11, which of the following statements must be true?",
    "options": [
      "It must be a prime number.",
      "It must be divisible by 18.",
      "It must be divisible by 77.",
      "It must be an odd number."
    ],
    "answer": 2,
    "explanation": "If a number is divisible by two co-prime numbers (7 and 11 are both prime, so they are co-prime), it must be divisible by their product. The product of 7 and 11 is 77. Therefore, the number must be divisible by 77."
  },
  {
    "id": "num-017",
    "question": "A number is expressed as $N = 2^a \\times 3^b \\times 5^c$. If it has exactly 12 factors, what is a possible set of values for a, b, and c?",
    "options": [
      "a=1, b=2, c=3",
      "a=2, b=1, c=1",
      "a=1, b=1, c=4",
      "a=2, b=2, c=1"
    ],
    "answer": 3,
    "explanation": "The number of factors is calculated as $(a+1)(b+1)(c+1)$. We need to find values for a, b, and c such that this product equals 12. Since a, b, and c must be non-negative integers, we look for factors of 12. $12 = 3 \\times 2 \\times 2$. This corresponds to exponents of $(3-1)$, $(2-1)$, and $(2-1)$, which are 2, 1, and 1. So, a possible set of exponents is a=2, b=1, and c=1."
  },
      
      
  {
    "id": "ns-tough-001",
    "question": "Find remainder when 6^131 is divided by 5.",
    "options": ["1", "0", "3", "4"],
    "answer": 0,
    "explanation": "By logic 6^131 ≡ (5+1)^131 = 5 divided by 5 and remaining 1^131 is divided by 5 = 1/5 remainder is = 1 "
  },
  {
    "id": "ns-tough-002",
    "question": "Unit digit of (137)^59?",
    "options": ["7", "9", "3", "1"],
    "answer": 2,
    "explanation": "Unit cycle of 7 is (7,9,3,1). 59 mod 4 = 3 → unit digit = 3."
  },
  {
    "id": "ns-tough-003",
    "question": "What is the largest 3-digit number that leaves a remainder of 3 when divided by 4, 5, and 6?",
    "options": [
      "957",
      "963",
      "983",
      "993"
    ],
    "answer": 2,
    "explanation": "First, find the LCM of 4, 5, and 6, which is 60. Then, find the largest 3-digit multiple of 60, which is 960 (60 × 16). The number that leaves a remainder of 3 when divided by 4, 5, and 6 will be the multiple of 60 plus 3. So, the number is 960 + 3 = 963."
  },
  {
    "id": "ns-tough-004",
    "question": "Remainder when 9^142445 is divided by 8?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 0,
    "explanation": "Using modular arithmetic, we first simplify the base. Since 9 is 1 more than 8, we can say that 9 is congruent to 1 modulo 8 (9 ≡ 1 mod 8). Therefore, any power of 9 will be congruent to that same power of 1. So, 9^142445 ≡ 1^142445 (mod 8). Since 1 raised to any power is 1, the remainder is 1."
  },
 {
  "id": "lcmhcf-003",
  "question": "Three bells ring at intervals of 18 minutes, 24 minutes, and 32 minutes. If they start ringing together at 8:00 AM, at what time will they next ring together?",
  "options": [
    "12:48 PM",
    "1:36 PM",
    "2:24 PM",
    "3:12 PM"
  ],
  "answer": 0,
  "explanation": "The time when the bells ring together again is the LCM of their intervals (18, 24, and 32). Prime factorization: 18 = 2 × 3², 24 = 2³ × 3, 32 = 2⁵. So LCM = 2⁵ × 3² = 288 minutes. 288 minutes = 4 hours 48 minutes. Adding 4 hours 48 minutes to 8:00 AM gives 12:48 PM."
},
  {
    "id": "hcf-lcm-004",
    "question": "The LCM of two co-prime numbers is 72. If one of the numbers is 8, find the other number.",
    "options": ["9", "12", "18", "24"],
    "answer": 0,
    "explanation": "For any two co-prime numbers, their HCF is always 1. The product of two numbers is equal to the product of their HCF and LCM. So, $Number1 \\times Number2 = HCF \\times LCM$. We have: $8 \\times Number2 = 1 \\times 72$. Solving for the other number gives: $Number2 = 72 \\div 8 = 9$."
  },
   {
    "id": "ns-tough-007",
    "question": "Find the sum of all prime numbers between 1 and 20.",
    "options": ["77", "78", "80", "81"],
    "answer": 0,
    "explanation": "The prime numbers between 1 and 20 are 2, 3, 5, 7, 11, 13, 17, and 19. Their sum is 2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 = 77."
  },
  {
    "id": "ns-tough-008",
    "question": "(2^51 + 3^51) ÷ 5 remainder?",
    "options": ["0", "1", "2", "3"],
    "answer": 0,
    "explanation": "2^51 ≡ 3, 3^51 ≡ 2 (mod 5). Sum=5 ≡ 0."
  },
 {
  id: "rem-004",
  question: "What is the remainder when 10^10 + 10^100 + 10^1000 is divided by 7?",
  options: ["1", "3", "5", "6"],
  answer: 2,
  explanation: "Use modular arithmetic. 10 ≡ 3 (mod 7) and 10^3 ≡ 27 ≡ -1 (mod 7). \n\n10^10 = 10^(3×3 + 1) = (10^3)^3 × 10 ≡ (-1)^3 × 3 = -3 ≡ 4 (mod 7).\n10^100 = 10^(3×33 + 1) ≡ (-1)^33 × 3 = -3 ≡ 4 (mod 7).\n10^1000 = 10^(3×333 + 1) ≡ (-1)^333 × 3 = -3 ≡ 4 (mod 7).\n\nSum = 4 + 4 + 4 = 12. 12 divided by 7 leaves remainder 5. Therefore the correct option is '5' (index 2)."
},
  {
    "id": "ns-tough-010",
    "question": "Remainder of 9^21 ÷ 7?",
    "options": ["1", "2", "3", "4"],
    "answer": 0,
    "explanation": "9≡2 mod7. 2^3=8≡1. 21 multiple of 3 → remainder=1."
  },
  {
    "id": "num-019",
    "question": "A six-digit number is formed by repeating a three-digit number (e.g., 456456). This number is always divisible by which of the following?",
    "options": [
      "7 only",
      "11 only",
      "13 only",
      "All of the above (7, 11, and 13)"
    ],
    "answer": 3,
    "explanation": "A number of the form abcabc can be expressed as 1000 × abc + abc = 1001 × abc. The prime factorization of 1001 is 7 × 11 × 13. Therefore, any number formed in this way is a multiple of 7, 11, and 13, making it divisible by all three."
  },
 {
    "id": "ns-tough-012",
    "question": "What is the unit digit of (2137)^754?",
    "options": ["1", "3", "7", "9"],
    "answer": 3,
    "explanation": "To find the unit digit, we only need to look at the unit digit of the base, which is 7. The cyclicity of the powers of 7 is 4 (7, 9, 3, 1). We divide the exponent (754) by 4: 754 ÷ 4 = 188 with a remainder of 2. The second digit in the cycle of 7 is 9. Therefore, the unit digit is 9."
  },
  {
  "id": "ns-tough-digit-013",
  "question": "What is the remainder when the greatest 3-digit number is divided by the sum of the greatest and smallest 2-digit numbers?",
  "options": ["3", "9", "18", "27"],
  "answer": 2,
  "explanation": "Greatest 3-digit number = 999. Greatest 2-digit = 99; smallest 2-digit = 10. Their sum = 109. Remainder when 999 is divided by 109: 999 ÷ 109 = 9, remainder = 18."
},
  {
    "id": "ns-tough-014",
    "question": "Remainder when 16^151 ÷ 15?",
    "options": ["1", "9", "7", "13"],
    "answer": 0,
    "explanation": "16≡1 mod15 → 1^151=1."
  },
  {
    "id": "ns-tough-015",
    "question": "Digital sum of 987654321?",
    "options": ["9", "8", "7", "6"],
    "answer": 0,
    "explanation": "Sum=45 → digital root=9."
  },
  {
  "id": "ns-tough-016",
  "question": "Find the sum of the digits of the smallest 4-digit number divisible by 37.",
  "options": ["10", "19", "22", "28"],
  "answer": 1,
  "explanation": "The smallest 4-digit number is 1000. Divide 1000 ÷ 37 = 27.02. The next multiple is 37 × 28 = 1036. The sum of digits of 1036 is 1 + 0 + 3 + 6 = 10. Correct option is 10."
},
  {
    "id": "ns-tough-017",
    "question": "If the number 876x4 is divisible by 9, find the value of x.",
    "options": ["1", "2", "3", "4"],
    "answer": 2,
    "explanation": "A number is divisible by 9 if the sum of its digits is divisible by 9. The sum of the given digits is 8+7+6+x+4 = 25+x. For this sum to be divisible by 9, x must be a digit such that 25+x is a multiple of 9. The nearest multiple of 9 to 25 is 27. So, 25+x = 27, which gives x = 2."
  },
 {
    "id": "ns-tough-018",
    "question": "How many prime numbers are there between 50 and 100?",
    "options": ["8", "9", "10", "11"],
    "answer": 2,
    "explanation": "The prime numbers between 50 and 100 are: 53, 59, 61, 67, 71, 73, 79, 83, 89, and 97. Counting these numbers, we find there are 10 prime numbers in this range."
  },
   {
    "id": "ns-tough-019",
    "question": "What is the HCF of two prime numbers?",
    "options": ["0", "1", "The smaller prime", "The larger prime"],
    "answer": 1,
    "explanation": "A prime number is only divisible by 1 and itself. Since two prime numbers have no common factors other than 1, their HCF (Highest Common Factor) is always 1."
  },
   {
    "id": "ns-tough-020",
    "question": "Which of the following numbers is divisible by 6?",
    "options": ["1234", "3456", "5678", "7891"],
    "answer": 1,
    "explanation": "A number is divisible by 6 if it is divisible by both 2 and 3. The number 3456 is an even number, so it is divisible by 2. The sum of its digits (3+4+5+6 = 18) is divisible by 3, so the number is divisible by 3. Since it is divisible by both 2 and 3, it is divisible by 6."
  },
  {
    "id": "ns-tough-021",
    "question": "A number leaves a remainder of 3 when divided by 5. What will be the remainder when the square of that number is divided by 5?",
    "options": ["0", "1", "2", "4"],
    "answer": 3,
    "explanation": "Let the number be N. We know N ≡ 3 (mod 5). The square of the number is N^2. Therefore, N^2 ≡ 3^2 ≡ 9 (mod 5). When 9 is divided by 5, the remainder is 4."
  },
  {
    "id": "ns-tough-022",
    "question": "Largest 3-digit number divisible by 3?",
    "options": ["972", "981", "990", "999"],
    "answer": 3,
    "explanation": "999÷3=333 exactly."
  },
  {
    "id": "ns-tough-023",
    "question": "1/7 as recurring decimal?",
    "options": ["0.142", "0.142857", "0.143", "0.14285"],
    "answer": 1,
    "explanation": "1/7=0.142857… repeating."
  },
  {
    "id": "ns-tough-024",
    "question": "A number divisible by 3 and 4 must also be divisible by?",
    "options": ["6", "8", "12", "24"],
    "answer": 2,
    "explanation": "LCM(3,4)=12."
  },
  {
    "id": "ns-tough-025",
    "question": "Smallest 5-digit number divisible by 9?",
    "options": ["10008", "10017", "10026", "10035"],
    "answer": 1,
    "explanation": "10017 ÷ 9=1113 exact."
  },
  {
    "id": "q01",
    "question": "Find remainder when 5^123 is divided by 13.",
    "options": [
      "1",
      "5",
      "8",
      "12"
    ],
    "answer": 2,
    "explanation": "This is a modular arithmetic problem using Fermat's Little Theorem. As 13 is a prime, 5^(13-1) = 5^12 ≡ 1 (mod 13). We can write 123 as 12*10 + 3. So, 5^123 = (5^12)^10 * 5^3. This simplifies to 1^10 * 125 ≡ 125 (mod 13). The remainder of 125 divided by 13 is 8."
  },
  {
    "id": "q02",
    "question": "Number with 9 factors must be:",
    "options": [
      "Square of a cube",
      "Cube of a square",
      "Perfect square",
      "Prime number"
    ],
    "answer": 2,
    "explanation": "Numbers with 9 divisors: p^8 or p1^2*p2^2. Both are perfect squares. Correct=Perfect square."
  },
  {
    "id": "q04",
    "question": "If p, q are co-primes, HCF = ?",
    "options": [
      "1",
      "0",
      "p",
      "q"
    ],
    "answer": 0,
    "explanation": "By definition, two numbers are co-prime (or relatively prime) if their greatest common divisor (HCF) is 1. This is a fundamental concept in number theory."
  },
  {
    "id": "q05",
    "question": "No. of trailing zeros in 100! = ?",
    "options": [
      "22",
      "23",
      "24",
      "25"
    ],
    "answer": 2,
    "explanation": "The number of trailing zeros in a factorial is determined by the number of factors of 5. We calculate this by summing the quotients of successive divisions by 5: ⌊100/5⌋ + ⌊100/25⌋ = 20 + 4 = 24."
  },
  {
    "id": "q06",
    "question": "Number of trailing zeros in 200! = ?",
    "options": [
      "45",
      "47",
      "49",
      "50"
    ],
    "answer": 2,
    "explanation": "We calculate this by summing the quotients of successive divisions by 5: ⌊200/5⌋ + ⌊200/25⌋ + ⌊200/125⌋ = 40 + 8 + 1 = 49."
  },
  {
  "id": "q07",
  "question": "Find the smallest number which when divided by 12, 15, and 20 leaves remainder 0 each time.",
  "options": [
    "60",
    "65",
    "120",
    "180"
  ],
  "answer": 0,
  "explanation": "The smallest number divisible by 12, 15, and 20 is their Least Common Multiple (LCM). LCM of 12, 15, and 20 is 60. So, the answer is 60."
},
  {
  "id": "q08",
  "question": "If N = 72 × 50, find the total number of prime factors (with repetition).",
  "options": [
    "5",
    "6",
    "7",
    "8"
  ],
  "answer": 3,
  "explanation": "First, factorize each number: 72 = 2^3 × 3^2; 50 = 2 × 5^2. Multiply: N = (2^3 × 3^2) × (2 × 5^2) = 2^4 × 3^2 × 5^2. Total prime factors (with repetition) is the sum of exponents: 4 + 2 + 2 = 8."
},
  {
    "id": "q09",
    "question": "Simplify: (1001 – 1) ÷ 1000 + 997.",
    "options": [
      "997",
      "998",
      "1000",
      "1001"
    ],
    "answer": 1,
    "explanation": "1000/1000 = 1 + 997= 998"
  },
  {
    "id": "q11",
    "question": "If divisible by 72, must also be divisible by:",
    "options": [
      "8",
      "9",
      "12",
      "ALL"
    ],
    "answer": 3,
    "explanation": "A number divisible by 72 must also be divisible by all of its factors. The factors of 72 include 8, 9, 12, and 18. This is an ambiguous question, but since 12 is a factor of 72, the number must also be divisible by 12. All options are correct."
  },
  {
    "id": "q12",
    "question": "LCM of 2/3, 3/4, 4/5, 5/6 = ?",
    "options": [
      "60",
      "120",
      "180",
      "240"
    ],
    "answer": 0,
    "explanation": "The formula for the LCM of fractions is LCM of numerators / HCF of denominators. LCM(2, 3, 4, 5) = 60. HCF(3, 4, 5, 6) = 1. So, LCM = 60/1 = 60."
  },
  {
  "id": "q13",
  "question": "What is the sum of the first 99 natural numbers?",
  "options": [
    "2400",
    "2500",
    "4950",
    "5050"
  ],
  "answer": 2,
  "explanation": "The sum of the first n natural numbers is given by n(n+1)/2. Here, n = 99. So, 99 × 100 / 2 = 4950."
},
  {
    "id": "q14",
    "question": "Simplify: (9999 × 9999) – (9998 × 10000).",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 0,
    "explanation": "Let x = 9999. The expression becomes x^2 - (x-1)(x+1). Using the identity (a-b)(a+b) = a^2 - b^2, this simplifies to x^2 - (x^2 - 1) = x^2 - x^2 + 1 = 1."
  },
  {
    "id": "q15",
    "question": "Find remainder when 17^23 ÷ 16 = ?",
    "options": [
      "1",
      "9",
      "7",
      "15"
    ],
    "answer": 0,
    "explanation": "This is a simple modular arithmetic problem. 17 ≡ 1 (mod 16). Therefore, 17^23 ≡ 1^23 ≡ 1 (mod 16)."
  },
  {
    "id": "q16",
    "question": "A number divided by 8 leaves remainder 5. What will be remainder when the same number is divided by 4?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": 1,
    "explanation": "Let the number be N. N = 8k + 5 for some integer k. Since we are dividing by 4, we can rewrite the expression as N = 4(2k) + 4 + 1 = 4(2k+1) + 1. The remainder is 1."
  },
 {
  "id": "q17",
  "question": "Find the missing number: 1, 4, 9, ?, 25, 36",
  "options": [
    "12",
    "15",
    "16",
    "20"
  ],
  "answer": 2,
  "explanation": "This is the sequence of square numbers: 1^2=1, 2^2=4, 3^2=9, 4^2=16, 5^2=25, 6^2=36. The missing number is 16."
},
  {
    "id": "q18",
    "question": "25^3 ÷ 5^4 = ?",
    "options": [
      "5",
      "25",
      "125",
      "625"
    ],
    "answer": 1,
    "explanation": "Convert to a common base of 5. 25^3 = (5^2)^3 = 5^6. The expression becomes 5^6 / 5^4 = 5^(6-4) = 5^2 = 25."
  },
  {
    "id": "q20",
    "question": "972 ÷ 9 leaves remainder?",
    "options": [
      "0",
      "3",
      "6",
      "9"
    ],
    "answer": 0,
    "explanation": "A number is divisible by 9 if the sum of its digits is divisible by 9. The sum of the digits of 972 is 9+7+2 = 18. Since 18 is divisible by 9, the remainder is 0."
  },
  {
    "id": "q21",
    "question": " 7x + 5 is divisible by 6. Then remainder when x = 11?",
    "options": [
      "0",
      "1",
      "4",
      "5"
    ],
    "answer": 2,
    "explanation": "The question is ambiguous. Assuming it asks for the remainder of the expression 7x+5 when x=11: 7(11)+5 = 77+5 = 82. The remainder of 82 divided by 6 is 4. "
  },
  {
    "id": "q22",
    "question": "If last digit is 0, number divisible by:",
    "options": [
      "2 only",
      "5 only",
      "10 only",
      "All 2,5,10"
    ],
    "answer": 3,
    "explanation": "A number ending in 0 is an even number, so it is divisible by 2. It also ends in 0, so it is divisible by 5. Because it is divisible by both 2 and 5, it is also divisible by their product, 10. Thus, it is divisible by all three."
  },
  {
    "id": "q23",
    "question": "Sum of first 20 even numbers = ?",
    "options": [
      "400",
      "410",
      "420",
      "440"
    ],
    "answer": 2,
    "explanation": "The sum of the first n even numbers is given by the formula n(n+1). For n=20, the sum is 20(20+1) = 20*21 = 420."
  },
  {
    "id": "q24",
    "question": "If p = 2^5 × 3^2 × 5, find number of divisors of p.",
    "options": [
      "24",
      "30",
      "36",
      "42"
    ],
    "answer": 2,
    "explanation": "To find the number of divisors, add 1 to each exponent in the prime factorization and multiply the results. For p = 2^5 × 3^2 × 5^1, the number of divisors is (5+1)(2+1)(1+1) = 6 × 3 × 2 = 36."
  },
  {
    "id": "q25",
    "question": "Find sum of digits of 333 × 666.",
    "options": [
      "18",
      "21",
      "27",
      "30"
    ],
    "answer": 2,
    "explanation": "The product is 333 * 666 = 221778. The sum of the digits is 2+2+1+7+7+8 = 27."
  }
      
      ]
  // ... more topics
};
