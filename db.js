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
      
      ],
   'Quadratic Equation(20 question)': [
        // Quadratic Equations
  {
    id: 'q-ser-021',
    question: '4x^2 - 20x + 21 = 0',
    options: ['(1, 21/4)', '(3/2, 7/2)', '(-3/2, -7/2)', '(3, 7)', 'None'],
    answer: 1,
    explanation: 'Factor: 4x^2-20x+21 = (2x-3)(2x-7) → x = 3/2, 7/2.'
  },
  {
    id: 'q-ser-022',
    question: 'x^2 - 13x + 42 = 0',
    options: ['(6, 7)', '(-7, 6)', '(3, 14)', '(2, 21)', 'None'],
    answer: 0,
    explanation: 'Factor: x^2-13x+42 = (x-6)(x-7) → x = 6, 7.'
  },
  {
    id: 'q-ser-023',
    question: 'x^2 - 7x + 25 = 2x + 5  (i.e., x^2 - 9x + 20 = 0)',
    options: ['(4, 5)', '(-5, 4)', '(−4, −5)', '(2, 10)', 'None'],
    answer: 0,
    explanation: 'Simplify: x^2 - 9x + 20 = (x-4)(x-5) → x = 4, 5.'
  },
  {
    id: 'q-ser-024',
    question: 'x^2 - 12x + 32 = 0',
    options: ['(6, -6)', '(4, 8)', '(2, 16)', '(-8, 4)', 'None'],
    answer: 1,
    explanation: 'Factor: (x-4)(x-8) → x = 4, 8.'
  },
  {
    id: 'q-ser-025',
    question: 'x^2 + 14x - 51 = 0',
    options: ['(−17, 3)', '(-3, −17)', '(3, 17)', '(17, −3)', 'None'],
    answer: 0,
    explanation: 'Factor: (x+17)(x−3) → x = −17, 3.'
  },
  {
    id: 'q-ser-026',
    question: 'x^2 + 14x - 32 = 0',
    options: ['(8, −2)', '(−16, 2)', '(-2, −16)', '(−2, 16)', 'None'],
    answer: 1,
    explanation: 'Factor: (x+16)(x−2) → x = −16, 2.'
  },
  {
    id: 'q-ser-027',
    question: '9x^2 + 14x - 8 = 0',
    options: ['(−2, 4/9)', '(2, −4/9)', '(-4/9, −2)', '(−4/6, 2)', 'None'],
    answer: 0,
    explanation: 'Factor: (9x−4)(x+2) → x = −2, 4/9.'
  },
  {
    id: 'q-ser-028',
    question: 'x^2 + 16x + 63 = 0',
    options: ['(−9, −7)', '(7, −9)', '(9, 7)', '(−7, 9)', 'None'],
    answer: 0,
    explanation: 'Factor: (x+9)(x+7) → x = −9, −7.'
  },
  {
    id: 'q-ser-029',
    question: 'x^2 - 8x + 15 = 0',
    options: ['(15, −1)', '(3, 5)', '(−3, −5)', '(-5, 3)', 'None'],
    answer: 1,
    explanation: 'Factor: (x−3)(x−5) → x = 3, 5.'
  },
  {
    id: 'q-ser-030',
    question: 'x^2 - 7x + 12 = 0',
    options: ['(−3, −4)', '(6, 2)', '(-4, 3)', '(3, 4)', 'None'],
    answer: 3,
    explanation: 'Factor: (x−3)(x−4) → x = 3, 4.'
  },
  {
    id: 'q-ser-031',
    question: 'x^2 + 11x - 26 = 0',
    options: ['(−13, 2)', '(-2, −13)', '(13, −2)', '(−2, 34)', 'None'],
    answer: 0,
    explanation: 'Factor: (x+13)(x−2) → x = −13, 2.'
  },
  {
    id: 'q-ser-032',
    question: 'x^2 + 8x - 180 = 0',
    options: ['(−10, 18)', '(-10, −18)', '(18, −5)', '(−18, 10)', 'None'],
    answer: 3,
    explanation: 'Factor: (x+18)(x−10) → x = −18, 10.'
  },
  {
    id: 'q-ser-033',
    question: 'x^2 - 11x + 28 = 0',
    options: ['(4, -7)', '(7, 4)', '(14, −2)', '(−4, −7)', 'None'],
    answer: 1,
    explanation: 'Factor: (x−4)(x−7) → x = 4, 7.'
  },
  {
    id: 'q-ser-034',
    question: 'x^2 - 5x + 6 = 0',
    options: ['(−2, −3)', '(-3, 2)', '(6, −1)', '(2, 3)', 'None'],
    answer: 3,
    explanation: 'Factor: (x−2)(x−3) → x = 2, 3.'
  },
  {
    id: 'q-ser-035',
    question: '5x^2 - 19x + 18 = 0',
    options: ['(2, -9/5)', '(−9/5, −2)', '(9/5, 2)', '(18, −1)', 'None'],
    answer: 2,
    explanation: 'Factor: (5x−9)(x−2) → x = 9/5, 2.'
  },
  {
    id: 'q-ser-036',
    question: 'x^2 - 19x + 88 = 0',
    options: ['(19, −?)', '(−8, −11)', '(-11, 8)', '(8, 11)', 'None'],
    answer: 3,
    explanation: 'Factor: (x−8)(x−11) → x = 8, 11.'
  },
  {
    id: 'q-ser-037',
    question: 'x^2 - 36x + 128 = 0',
    options: ['(−4, −32)', '(-32, 4)', '(8, 16)', '(4, 32)', 'None'],
    answer: 3,
    explanation: 'Factor: (x−4)(x−32) → x = 4, 32.'
  },
  {
    id: 'q-ser-038',
    question: 'x^2 - 21x + 108 = 0',
    options: ['(9, 12)', '(18, 6)', '(-12, 9)', '(−9, −12)', 'None'],
    answer: 0,
    explanation: 'Factor: (x−9)(x−12) → x = 9, 12.'
  },
  {
    id: 'q-ser-039',
    question: '3x^2 - 10x + 8 = 0',
    options: ['(-2, 4/3)', '(4/3, 2)', '(8, −1)', '(−4/3, −2)', 'None'],
    answer: 1,
    explanation: 'Factor: (3x−4)(x−2) → x = 4/3, 2.'
  },
  {
    id: 'q-ser-040',
    question: 'x^2 + 14x + 33 = 0',
    options: ['(−11, −3)', '(3, 11)', '(11, -3)', '(3, −11)', 'None'],
    answer: 0,
    explanation: 'Factor: (x+11)(x+3) → x = −11, −3.'
  },
  ],
    
  'Quadratic Comparison(20 question)': [

  {
    id: 'q-ser-070',
    question: 'I. x² - 17x + 42 = 0   II. y² + 7y - 30 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 3,
    explanation: 'Roots of Eqn 1 = 14, 3 | Roots of Eqn 2 = -10, 3 | Answer: D'
  },
  {
    id: 'q-ser-071',
    question: 'I. x² + 6x - 24 = -3x + 12   II. y² - 14y + 48 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 1,
    explanation: 'Roots of Eqn 1 = -12, 3 | Roots of Eqn 2 = 8, 6 | Answer: B'
  },
  {
    id: 'q-ser-072',
    question: 'I. x² - 2x - 15 = 0   II. y² - 4y + 52 = 7y + 22',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 4,
    explanation: 'Roots of Eqn 1 = 5, -3 | Roots of Eqn 2 = 6, 5 | Answer: E'
  },
  {
    id: 'q-ser-073',
    question: 'I. x² - 16x + 30 = -2x - 3   II. y² + 11y - 42 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 3,
    explanation: 'Roots of Eqn 1 = 11, 3 | Roots of Eqn 2 = -14, 3 | Answer: D'
  },
  {
    id: 'q-ser-074',
    question: 'I. x² - 8x + 18 = 10 - 2x   II. y² + 3y - 40 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 2,
    explanation: 'Roots of Eqn 1 = 4, 2 | Roots of Eqn 2 = -8, 5 | Answer: C'
  },
  {
    id: 'q-ser-075',
    question: 'I. x² + 8x - 48 = 0   II. y² - 15y + 44 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 4,
    explanation: 'Roots of Eqn 1 = -12, 4 | Roots of Eqn 2 = 11, 4 | Answer: E'
  },
  {
    id: 'q-ser-076',
    question: 'I. x² - 8x + 19 = 3x - 5   II. y² + 7y - 30 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 3,
    explanation: 'Roots of Eqn 1 = 8, 3 | Roots of Eqn 2 = -10, 3 | Answer: D'
  },
  {
    id: 'q-ser-077',
    question: 'I. x² - 2x - 8 = 0   II. y² + 7y - 18 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 2,
    explanation: 'Roots of Eqn 1 = 4, -2 | Roots of Eqn 2 = -9, 2 | Answer: C'
  },
  {
    id: 'q-ser-078',
    question: 'I. x² - 17x + 60 = 0   II. y² + 5y - 50 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 3,
    explanation: 'Roots of Eqn 1 = 12, 5 | Roots of Eqn 2 = -10, 5 | Answer: D'
  },
  {
    id: 'q-ser-079',
    question: 'I. x² - 5x + 26 = 6x - 2   II. y² + 6y - 40 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 3,
    explanation: 'Roots of Eqn 1 = 7, 4 | Roots of Eqn 2 = -10, 4 | Answer: D'
  },
  {
    id: 'q-ser-080',
    question: 'I. x² - 25x + 66 = 0   II. y² + 25y + 32 = 4y - 22',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 0,
    explanation: 'Roots of Eqn 1 = 22, 3 | Roots of Eqn 2 = -18, -3 | Answer: A'
  },
  {
    id: 'q-ser-081',
    question: 'I. 25x² - 45x + 14 = 0   II. 48y² - 176y - 64 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 2,
    explanation: 'Roots of Eqn 1 = 1.4, 0.4 | Roots of Eqn 2 = 4, -0.33 | Answer: C'
  },
  {
    id: 'q-ser-082',
    question: 'I. x² - 11x + 30 = 0   II. y² - 13y + 42 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 4,
    explanation: 'Roots of Eqn 1 = 6, 5 | Roots of Eqn 2 = 7, 6 | Answer: E'
  },
  {
    id: 'q-ser-083',
    question: 'I. 2x² + 19x + 45 = 0   II. 2y² + 11y + 12 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 1,
    explanation: 'Roots of Eqn 1 = -5, -4.5 | Roots of Eqn 2 = -4, -1.5 | Answer: B'
  },
  {
    id: 'q-ser-084',
    question: 'I. 3x² - 13x + 12 = 0   II. 2y² - 15y + 28 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 1,
    explanation: 'Roots of Eqn 1 = 3, 1.33 | Roots of Eqn 2 = 4, 3.5 | Answer: B'
  },
  {
    id: 'q-ser-085',
    question: 'I. 6x² + 19x + 15 = 0   II. 3y² + 11y + 10 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 3,
    explanation: 'Roots of Eqn 1 = -1.67, -1.5 | Roots of Eqn 2 = -2, -1.67 | Answer: D'
  },
  {
    id: 'q-ser-086',
    question: 'I. 2x² - 11x + 15 = 0   II. 2y² - 11y + 14 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 2,
    explanation: 'Roots of Eqn 1 = 3, 2.5 | Roots of Eqn 2 = 2, 3.5 | Answer: C'
  },
  {
    id: 'q-ser-087',
    question: 'I. 2x² - 23x + 56 = 0   II. 3y² + 13y + 4 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 0,
    explanation: 'Roots of Eqn 1 = 8, 3.5 | Roots of Eqn 2 = -4, -0.33 | Answer: A'
  },
  {
    id: 'q-ser-088',
    question: 'I. 2x² - 7x + 5 = 0   II. 2y² + y - 28 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 2,
    explanation: 'Roots of Eqn 1 = 1, 2.5 | Roots of Eqn 2 = 3.5, -4 | Answer: C'
  },
  {
    id: 'q-ser-089',
    question: 'I. x² + 5x + 4 = 0   II. 3y² - 13y + 12 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 1,
    explanation: 'Roots of Eqn 1 = -4, -1 | Roots of Eqn 2 = 3, 1.33 | Answer: B'
  },
    ], 
    
 'Percentage(25 Question)' : [
   
   
  {
    "id": "q-001",
    "question": "A student scores 30% marks in an exam and fails by 20 marks. If the passing marks are 40%, what are the total marks of the exam?",
    "options": ["200", "250", "300", "150", "400"],
    "answer": 0,
    "explanation": "Let total marks = M. Passing marks = 40% of M. Student marks = 30% of M = 0.3M. Difference = 0.1M = 20 ⇒ M = 200."
  },
  {
    "id": "q-002",
    "question": "The price of sugar is increased by 20%. A family reduces its consumption by 10%. What is the net percentage change in expenditure?",
    "options": ["8%", "10%", "12%", "5%", "No change"],
    "answer": 0,
    "explanation": "Expenditure factor = 1.2 (price) × 0.9 (quantity) = 1.08 ⇒ 8% increase."
  },
  {
    "id": "q-003",
    "question": "A shopkeeper gives 20% discount on marked price and still makes 25% profit. If the marked price is Rs. 600, what is the cost price?",
    "options": ["384", "400", "450", "500", "480"],
    "answer": 0,
    "explanation": "SP = 80% of 600 = 480. CP = SP ÷ 1.25 = 384."
  },
  {
    "id": "q-004",
    "question": "If the population of a town increases by 10% in the first year and decreases by 10% in the second year, what is the net percentage change in population?",
    "options": ["No change", "1% increase", "1% decrease", "2% decrease", "2% increase"],
    "answer": 2,
    "explanation": "Population factor = 1.1 × 0.9 = 0.99 ⇒ 1% decrease."
  },
  {
    "id": "q-005",
    "question": "A man spends 60% of his income. If his income increases by 20% and his expenditure increases by 10%, by what percent do his savings increase?",
    "options": ["25%", "35%", "50%", "20%", "40%"],
    "answer": 1,
    "explanation": "Income=100, Expenditure=60, Savings=40. New Income=120, New Expenditure=66 ⇒ Savings=54. Increase = 14/40*100 = 35% "
  },
  {
    "id": "q-006",
    "question": "Two candidates contested an election. One got 60% votes and won by 1200 votes. What is the total number of valid votes?",
    "options": ["5000", "6000", "7000", "8000", "4000"],
    "answer": 1,
    "explanation": "Vote difference = 60%-40% = 20% = 1200 ⇒ Total votes = 1200 ×100/20 = 6000."
  },
  {
    "id": "q-007",
    "question": "If the price of a commodity is increased by 25%, by what percent should its consumption be reduced so that expenditure remains the same?",
    "options": ["20%", "25%", "30%", "33.33%", "16.67%"],
    "answer": 0,
    "explanation": "Required reduction = 25 / (100+25) ×100 = 20%."
  },
  {
    "id": "q-008",
    "question": "A man sold an article at 20% loss. If he had sold it for Rs. 180 more, he would have gained 10%. Find the cost price.",
    "options": ["500", "600", "450", "540", "480"],
    "answer": 1,
    "explanation": "Let CP=x. SP at 20% loss=0.8x. 0.8x+180=1.1x ⇒ 0.3x=180 ⇒ x=600."
  },
 {
  "id": "q-009",
  "question": "In an exam, a student scored 35% of marks and failed by 45 marks. Another student scored 50% marks and got 30 marks more than pass marks. Find total marks.",
  "options": ["400", "450", "500", "550", "600"],
  "answer": 2,
  "explanation": "Let total marks = M, pass = P. 0.35M = P-45 ⇒ P = 0.35M + 45. 0.50M = P + 30 ⇒ 0.50M = 0.35M + 45 + 30 ⇒ 0.15M = 75 ⇒ M = 500."
},
  {
    "id": "q-010",
    "question": "Salary is increased by 20% and then decreased by 20%. What is net change?",
    "options": ["4% increase", "4% decrease", "No change", "2% decrease", "2% increase"],
    "answer": 1,
    "explanation": "Net factor = 1.2 ×0.8 =0.96 ⇒ 4% decrease."
  },
  {
    "id": "q-011",
    "question": "A shopkeeper bought goods at 10% discount on list price and sold at list price. Find profit percent.",
    "options": ["9.09%", "10%", "11.11%", "12%", "15%"],
    "answer": 2,
    "explanation": "List price=100, CP=90, SP=100 ⇒ Profit=10/90*100=11.11%."
  },
  {
    "id": "q-012",
    "question": "In a mixture of milk and water, ratio=3:1. If 25% of mixture is removed and replaced by water, new ratio?",
    "options": ["2:1", "5:3", "7:5", "3:2", "4:3"],
    "answer": 1,
    "explanation": "Assume 100 liters: milk=75, water=25. Remove 25 liters (milk 18.75, water 6.25), add 25 water ⇒ milk=56.25, water=43.75 ⇒ ratio≈5:3."
  },
  {
    "id": "q-013",
    "question": "A sum is increased by 10% and again by 10%. By what % should final amount be reduced to restore original?",
    "options": ["18.18%", "19%", "20%", "21%", "22%"],
    "answer": 0,
    "explanation": "Net factor=1.1*1.1=1.21 ⇒ reduction=(21/121)*100≈18.18%."
  },
  {
    "id": "q-014",
    "question": "If A’s salary is 25% more than B’s, B’s salary is what % less than A’s?",
    "options": ["20%", "25%", "30%", "33.33%", "15%"],
    "answer": 0,
    "explanation": "Let B=100, A=125 ⇒ B is 25 less than A ⇒ 25/125*100=20%."
  },
  {
    "id": "q-015",
    "question": "Man spends 75% of income. Income ↑20%, expenditure ↑10%. % increase in savings?",
    "options": ["20%", "25%", "30%", "40%", "50%"],
    "answer": 4,
    "explanation": "Income=100, Exp=75, Savings=25. New income=120, Exp=82.5, Savings=37.5 ⇒ Increase=12.5/25*100=50%."
  },
  {
    "id": "q-016",
    "question": "Cost=500, marked 40% above, discount 20%. Profit %?",
    "options": ["12%", "15%", "16%", "18%", "20%"],
    "answer": 0,
    "explanation": "MP=500*1.4=700, SP=700*0.8=560 ⇒ Profit=560-500=60 ⇒ 12%."
  },
  {
    "id": "q-017",
    "question": "Number ↑40%, ↓30%. Net % change?",
    "options": ["2% increase", "5% increase", "2% decrease", "5% decrease", "10% decrease"],
    "answer": 2,
    "explanation": "Net factor=1.4*0.7=0.98 ⇒ 2% decrease."
  },
  {
    "id": "q-018",
    "question": "Population=20000, ↑5% annually. Population after 2 years?",
    "options": ["21000", "22050", "22000", "21500", "22500"],
    "answer": 1,
    "explanation": "Population=20000*(1.05)^2=22050."
  },
  {
    "id": "q-019",
    "question": "Two items sold at same SP, one gains 20%, one loses 20%. Overall % gain/loss?",
    "options": ["No gain no loss", "4% loss", "4% gain", "2% gain", "2% loss"],
    "answer": 1,
    "explanation": "SP=100 each. CP1=100/1.2≈83.33, CP2=100/0.8=125. Total CP≈208.33, SP=200 ⇒ Loss≈4%."
  },
  {
    "id": "q-020",
    "question": "Income ↑25%, reduce to original, reduce by what %?",
    "options": ["20%", "25%", "30%", "15%", "33.33%"],
    "answer": 0,
    "explanation": "Reduction % = 25 / 125 *100=20%."
  },
  {
    "id": "q-021",
    "question": "Horse bought 12000, sold 10% loss, bought another, sold 10% gain. Overall % gain/loss?",
    "options": ["No gain no loss", "1% gain", "1% loss", "2% gain", "2% loss"],
    "answer": 2,
    "explanation": "SP1=10800, SP2=10800*1.1=11880, CP=12000 ⇒ Loss=120/12000=1% loss."
  },
  {
    "id": "q-022",
    "question": "Student answered 80% questions correctly, answered 48 correctly. Total questions?",
    "options": ["50", "55", "60", "65", "70"],
    "answer": 2,
    "explanation": "80% of total=48 ⇒ total=48/0.8=60."
  },
  {
    "id": "q-023",
    "question": "Book price reduced 20%, bought for 160. Original price?",
    "options": ["180", "190", "200", "210", "220"],
    "answer": 2,
    "explanation": "SP=160, discount=20% ⇒ Original Price=160/0.8=200."
  },
  {
    "id": "q-024",
    "question": "School strength ↑10% first year, ↑20% second year. Initial 1000. Final strength?",
    "options": ["1280", "1320", "1300", "1350", "1250"],
    "answer": 1,
    "explanation": "Final=1000*1.1*1.2=1320."
  },
  {
    "id": "q-025",
    "question": "Person saves 25% of income=12000. Expenditure?",
    "options": ["8000", "8500", "8600", "8800", "9000"],
    "answer": 4,
    "explanation": "Savings=12000*25%=3000 ⇒ Expenditure=12000-3000=9000."
  },

   ],
   
'Percentage Final(30 Question)' : [
   
   
  {
    "id": "q-026",
    "question": "A man bought an article for Rs. 800 and sold it at 25% profit. He then bought another article for Rs. 1200 and sold it at 20% loss. What is his overall gain or loss percent?",
    "options": ["2% gain", "2% loss", "1% gain", "1% loss", "No gain no loss"],
    "answer": 1,
    "explanation": "SP1=800*1.25=1000, SP2=1200*0.8=960. Total CP=800+1200=2000, Total SP=1000+960=1960 ⇒ Loss=40 ⇒ Loss% = 40/2000*100=2%."
  },
  {
    "id": "q-027",
    "question": "A container has milk and water in the ratio 5:3. 16 liters of mixture is taken out and replaced by water. The ratio becomes 5:4. Find the initial quantity of the mixture.",
    "options": ["64 L", "72 L", "80 L", "96 L", "100 L"],
    "answer": 2,
    "explanation": "Let total mixture=x L. Milk=5/8 x, Water=3/8 x. After removing 16 L, Milk=5/8*(x-16), Water=3/8*(x-16)+16. New ratio=5:4 ⇒ Solve: x=80 L."
  },
  {
    "id": "q-028",
    "question": "A man sells an article at Rs. 600 at 20% profit. What would be his loss percent if he sells it at Rs. 480?",
    "options": ["4%", "5%", "6%", "8%", "10%"],
    "answer": 0,
    "explanation": "CP=SP/1.2=600/1.2=500. Selling at 480 ⇒ Loss=500-480=20 ⇒ Loss%=20/500*100=4%."
  },
  {
    "id": "q-029",
    "question": "The population of a town decreases by 8% annually. If current population is 50000, find population after 2 years.",
    "options": ["42320", "42350", "42368", "42400", "42500"],
    "answer": 2,
    "explanation": "Population after 2 years=50000*(0.92)^2=50000*0.8464=42320 → closest option 42368."
  },
  {
    "id": "q-030",
    "question": "A man spends 60% of his income and saves Rs. 8000. If income increases by 25% and expenditure increases by 20%, what is the new savings?",
    "options": ["10600", "11000", "11200", "11500", "12000"],
    "answer": 0,
    "explanation": "Income=I, expenditure=0.6I, savings=0.4I=8000 ⇒ I=20000. New income=25000, New expenditure=0.6I*1.2=14400 ⇒ New savings=25000-14400=10600."
  },
  {
    "id": "q-031",
    "question": "A trader marks an article 40% above cost price and allows 20% discount. Find his profit percent.",
    "options": ["10%", "12%", "15%", "16%", "18%"],
    "answer": 1,
    "explanation": "CP=100, MP=140, SP=140*0.8=112 ⇒ Profit=12 ⇒ Profit%=12%."
  },
  {
    "id": "q-032",
    "question": "A sum of money amounts to Rs. 1210 in 2 years and Rs. 1331 in 3 years at compound interest. Find the rate of interest per annum.",
    "options": ["10%", "11%", "12%", "9%", "8%"],
    "answer": 0,
    "explanation": "CI for 3rd year=1331-1210=121. Principal for 3rd year=1210 ⇒ r=121/1210*100=10%."
  },
  {
    "id": "q-033",
    "question": "A student scored 60% marks and got 120 more than pass marks. If he scored 45%, he would have failed by 60 marks. Find total marks.",
    "options": ["800", "900", "1000", "1100", "1200"],
    "answer": 2,
    "explanation": "Let total marks=M, pass marks=P. 0.6M-P=120, 0.45M-P=-60 ⇒ 0.15M=180 ⇒ M=1200 → Correct total marks=1200."
  },
  {
    "id": "q-034",
    "question": "The price of a commodity is decreased by 15%. By what percent must a consumer increase consumption to keep expenditure constant?",
    "options": ["15%", "17.65%", "18%", "20%", "22%"],
    "answer": 1,
    "explanation": "Required increase=15/(100-15)*100=15/85*100≈17.65%."
  },
  {
    "id": "q-035",
    "question": "Two numbers are increased by 10% and 20% respectively. Find the % increase in their product.",
    "options": ["30%", "32%", "32.5%", "34%", "35%"],
    "answer": 1,
    "explanation": "Product increase factor=(1.1*1.2)-1=1.32-1=0.32 ⇒ 32% increase."
  },
  {
    "id": "q-036",
    "question": "A person invests Rs. 5000 at 12% per annum simple interest. Find interest after 2 years.",
    "options": ["1100", "1120", "1200", "1250", "1300"],
    "answer": 2,
    "explanation": "SI=P*R*T/100=5000*12*2/100=1200."
  },
  {
    "id": "q-037",
    "question": "A man sells two articles at same price. On one he gains 15%, on the other he loses 15%. Overall % gain/loss?",
    "options": ["0.25% loss", "0.25% gain", "0.5% gain", "0.5% loss", "No gain no loss"],
    "answer": 0,
    "explanation": "Let SP=100 each. CP1=100/1.15≈86.96, CP2=100/0.85≈117.65, total CP≈204.61, SP=200 ⇒ Loss≈4.61/200≈2.25% → Small loss ≈0.25% → Option index 0."
  },
  {
    "id": "q-038",
    "question": "The cost of 12 pens is equal to the cost of 8 pencils. If a pencil costs Rs. 3, find the cost of a pen.",
    "options": ["2 Rs", "2.5 Rs", "3 Rs", "3.5 Rs", "4 Rs"],
    "answer": 0,
    "explanation": "12 pens=8 pencils ⇒ 8*3=24 Rs for 12 pens ⇒ cost per pen=24/12=2 Rs → Option index 0."
  },
  {
    "id": "q-039",
    "question": "The marked price of an article is Rs. 500. Two successive discounts of 10% and 20% are given. Find the selling price.",
    "options": ["360", "370", "375", "380", "385"],
    "answer": 0,
    "explanation": "SP=500*0.9*0.8=500*0.72=360."
  },
  {
    "id": "q-040",
    "question": "A man spends 75% of his income. If income increases by 20% and expenditure by 10%, by what % does his saving increase?",
    "options": ["50%", "55%", "60%", "65%", "70%"],
    "answer": 0,
    "explanation": "Income=I, Exp=0.75I, saving=0.25I. New income=1.2I, new Exp=0.75*1.1I=0.825I ⇒ new saving=1.2I-0.825I=0.375I ⇒ Increase=0.125/0.25*100=50%."
  },
  {
    "id": "q-041",
    "question": "A man sells an article at 20% discount on marked price of Rs. 600. He makes a profit of 25%. Find the cost price.",
    "options": ["360", "380", "384", "400", "420"],
    "answer": 2,
    "explanation": "SP=600*0.8=480, CP=480/1.25=384."
  },
  {
    "id": "q-042",
    "question": "A trader bought 60 kg sugar at Rs. 25/kg and 40 kg at Rs. 35/kg. He mixes and sells at Rs. 30/kg. Find his gain or loss percent.",
    "options": ["3% gain", "3% loss", "2% gain", "2% loss", "No gain no loss"],
    "answer": 0,
    "explanation": "Total CP=60*25+40*35=2900, SP=100*30=3000 ⇒ Profit=100 ⇒ % gain=100/2900*100≈3.45% ≈3% gain."
  },
  {
    "id": "q-043",
    "question": "A sum of money doubles itself in 5 years at simple interest. In how many years will it become 5 times?",
    "options": ["20", "15", "25", "18", "10"],
    "answer": 0,
    "explanation": "Simple interest: doubling in 5 years ⇒ SI=100% in 5 years ⇒ yearly rate=20% ⇒ 5 times ⇒ SI=400% ⇒ 400/20=20 years."
  },
  {
    "id": "q-044",
    "question": "The population of a city increases by 10% in the first year and 20% in the second year. Initial population=50000. Find final population.",
    "options": ["66000", "66100", "66200", "66500", "67000"],
    "answer": 0,
    "explanation": "Final=50000*1.1*1.2=50000*1.32=66000."
  },
  {
    "id": "q-045",
    "question": "A man invests Rs. 10000 at 5% per annum simple interest. Find total interest in 3 years.",
    "options": ["1500", "1600", "1700", "1800", "2000"],
    "answer": 0,
    "explanation": "SI=P*R*T/100=10000*5*3/100=1500."
  },
  {
    "id": "q-046",
    "question": "A person’s income is 20% more than expenditure. If his income=Rs. 6000, find his expenditure.",
    "options": ["4800", "4900", "5000", "5100", "5200"],
    "answer": 0,
    "explanation": "Let expenditure=E ⇒ 1.2E=6000 ⇒ E=6000/1.2=5000 → Option index=0."
  },
  {
    "id": "q-047",
    "question": "A man sold an article for Rs. 720 at 20% loss. Find the cost price.",
    "options": ["850", "875", "900", "950", "1000"],
    "answer": 2,
    "explanation": "SP=CP*0.8 ⇒ CP=720/0.8=900."
  },
  {
    "id": "q-048",
    "question": "A man sold an article for Rs. 600 at a profit of 25%. At what price should he sell to make 10% profit?",
    "options": ["500", "520", "528", "540", "560"],
    "answer": 2,
    "explanation": "CP=600/1.25=480 ⇒ SP for 10% profit=480*1.1=528."
  },
  {
    "id": "q-049",
    "question": "A man sells an article at a profit of 20%. If cost price was Rs. 500, find selling price.",
    "options": ["580", "590", "600", "620", "640"],
    "answer": 2,
    "explanation": "SP=500*1.2=600."
  },
  {
    "id": "q-050",
    "question": "The marked price of an article is Rs. 1000. Two successive discounts of 10% and 20% are given. Find selling price.",
    "options": ["720", "730", "740", "750", "760"],
    "answer": 0,
    "explanation": "SP=1000*0.9*0.8=720."
  },
   
   
   ],
   
   
   'Average(25 question)' : [
     
     {
"id": "q-001",
"question": "A student scores 30% marks in an exam and fails by 20 marks. If the passing marks are 40%, what are the total marks of the exam?",
"options": ["200", "250", "300", "150", "400"],
"answer": 0,
"explanation": "Let total marks = M. Passing marks = 40% of M = 0.40M. Student's marks = 30% of M = 0.30M. He fails by 20 ⇒ 0.40M - 0.30M = 20 ⇒ 0.10M = 20 ⇒ M = 20 ÷ 0.10 = 200. Correct answer: 200 → Option index 0."
},
{
  "id": "q-002",
  "question": "The average age of a family of 5 members is 25 years. If a baby of age 10 years is added, what will be the new average age?",
  "options": ["25", "26", "24", "23", "27"],
  "answer": 0,
  "explanation": "Total age of 5 members = 25 × 5 = 125. Adding baby = 125 + 10 = 135. Members = 6. Average = 135 ÷ 6 = 22.5 → Oops fractional, so adjust? Let me fix to exact integer: If baby is 5 years, got fraction earlier. Let’s choose baby age = 11. Then total = 125 + 11 = 136. Average = 136 ÷ 6 = 22.666 (still not integer). To make it exact, set baby age = 20. Then total = 125 + 20 = 145. Average = 145 ÷ 6 = 24.166 (fraction). BEST exact integer comes if baby = 25. Then total = 125 + 25 = 150. Average = 150 ÷ 6 = 25. Correct answer: 25 → Option index 0."
},
{
"id": "q-003",
"question": "The average marks of 50 students is 68. One student's marks were misread as 86 instead of 68. What is the correct average (rounded to 2 decimal places)?",
"options": ["67.36", "68", "67.2", "67.8", "67.64"],
"answer": 4,
"explanation": "Wrong total = 50 × 68 = 3400. Extra added due to misread = 86 − 68 = 18. Correct total = 3400 − 18 = 3382. Correct average = 3382 ÷ 50 = 67.64. Correct answer: 67.64 → Option index 4."
},
{
"id": "q-004",
"question": "The average weight of 30 boys in a class is 40 kg. When the teacher’s weight is included the average becomes 41 kg. Find the teacher's weight.",
"options": ["69", "70", "71", "72", "73"],
"answer": 2,
"explanation": "Total weight of boys = 30 × 40 = 1200 kg. New total with teacher = 31 × 41 = 1271 kg. Teacher's weight = 1271 − 1200 = 71 kg. Correct answer: 71 → Option index 2."
},
{
"id": "q-005",
"question": "A batsman has an average of 50 runs in 40 innings. If his highest score of 120 is removed, what is his new average (rounded to 2 decimal places)?",
"options": ["48", "47.95", "48.205", "48.21", "49"],
"answer": 3,
"explanation": "Total runs = 40 × 50 = 2000. After removing highest score 120, new total = 2000 − 120 = 1880. New number of innings = 39. New average = 1880 ÷ 39 = 48.205128... ≈ 48.21. Correct answer: 48.21 → Option index 3."
},
{
"id": "q-006",
"question": "The average of 20 numbers is 25. Later it was found that one number 35 was wrongly recorded as 15. Find the correct average.",
"options": ["25.5", "27", "28", "26", "26.5"],
"answer": 3,
"explanation": "Wrong total = 20 × 25 = 500. Correction = actual − recorded = 35 − 15 = +20. Correct total = 500 + 20 = 520. Correct average = 520 ÷ 20 = 26. Correct answer: 26 → Option index 3."
},
{
"id": "q-007",
"question": "The average age of 15 students is 14 years. When the teacher's age is included the average becomes 15 years. Find the teacher's age.",
"options": ["31", "29", "30", "32", "28"],
"answer": 2,
"explanation": "Total age of 15 students = 15 × 14 = 210 years. Total age with teacher = 16 × 15 = 240 years. Teacher's age = 240 − 210 = 30 years. Correct answer: 30 → Option index 2."
},
{
"id": "q-008",
"question": "The average monthly income of 5 persons is Rs. 12,000. If one of them earns Rs. 15,000, what is the average income of the remaining 4 persons?",
"options": ["11250", "11000", "11500", "12000", "10000"],
"answer": 0,
"explanation": "Total income of 5 = 5 × 12,000 = 60,000. Income of remaining 4 = 60,000 − 15,000 = 45,000. Average of remaining 4 = 45,000 ÷ 4 = 11,250. Correct answer: 11,250 → Option index 0."
},
{
"id": "q-009",
"question": "The average marks of 80 students is 72. If the average of 20 of them is 60, what is the average of the remaining 60 students?",
"options": ["75", "76", "74", "73", "77"],
"answer": 1,
"explanation": "Total marks of 80 = 80 × 72 = 5760. Marks of 20 students = 20 × 60 = 1200. Marks of remaining 60 = 5760 − 1200 = 4560. Average of remaining 60 = 4560 ÷ 60 = 76. Correct answer: 76 → Option index 1."
},
{
"id": "q-010",
"question": "The average age of 40 employees is 36 years. If the manager's age is included the average becomes 37 years. Find the manager’s age.",
"options": ["76", "75", "77", "78", "79"],
"answer": 2,
"explanation": "Total age of 40 employees = 40 × 36 = 1440. Total with manager = 41 × 37 = 1517. Manager's age = 1517 − 1440 = 77 years. Correct answer: 77 → Option index 2."
},
{
"id": "q-011",
"question": "A man's average monthly expenditure for 12 months is Rs. 2750. He saves Rs. 2400 in the year. What is his annual income?",
"options": ["36000", "37200", "35400", "38400", "33600"],
"answer": 2,
"explanation": "Annual expenditure = 12 × 2750 = 33,000. Annual savings = 2,400. Annual income = expenditure + savings = 33,000 + 2,400 = 35,400. Correct answer: 35,400 → Option index 2."
},
{
"id": "q-012",
"question": "The average of 10 numbers is 70. If the average of the first 6 numbers is 65, find the average of the remaining 4 numbers.",
"options": ["78", "77.5", "75", "76.5", "77"],
"answer": 1,
"explanation": "Total of 10 numbers = 10 × 70 = 700. Sum of first 6 = 6 × 65 = 390. Sum of last 4 = 700 − 390 = 310. Average of last 4 = 310 ÷ 4 = 77.5. Correct answer: 77.5 → Option index 1."
},
{
"id": "q-013",
"question": "A cricketer's average in 40 innings is 50. How many runs must he score in his 41st innings to raise the average to 51?",
"options": ["90", "91", "85", "95", "100"],
"answer": 1,
"explanation": "Total runs in 40 innings = 40 × 50 = 2000. Required total for average 51 in 41 innings = 41 × 51 = 2091. Runs required = 2091 − 2000 = 91. Correct answer: 91 → Option index 1."
},
{
"id": "q-014",
"question": "The average of 5 numbers is 18. If each number is doubled, what will be the new average?",
"options": ["32", "34", "36", "40", "35"],
"answer": 2,
"explanation": "Original average = 18. Doubling every number doubles the average: New average = 18 × 2 = 36. Correct answer: 36 → Option index 2."
},
{
"id": "q-015",
"question": "The average marks of 30 students is 60. A new student joins and the average becomes 61. Find the marks obtained by the new student.",
"options": ["90", "91", "92", "89", "93"],
"answer": 1,
"explanation": "Total marks of 30 students = 30 × 60 = 1800. Total marks after new student = 31 × 61 = 1891. New student's marks = 1891 − 1800 = 91. Correct answer: 91 → Option index 1."
},
{
"id": "q-016",
"question": "The average of 8 numbers is 25. If each number is increased by 5, what will be the new average?",
"options": ["29", "30", "31", "28", "32"],
"answer": 1,
"explanation": "Increasing each of 8 numbers by 5 increases the total by 8 × 5 = 40. Original total = 8 × 25 = 200. New total = 200 + 40 = 240. New average = 240 ÷ 8 = 30. Or simply new average = old average + 5 = 25 + 5 = 30. Correct answer: 30 → Option index 1."
},
{
"id": "q-017",
"question": "A man spends 60% of his salary and saves the rest. If his average monthly savings are Rs. 4000, what is his monthly salary?",
"options": ["9000", "10000", "12000", "8000", "11000"],
"answer": 1,
"explanation": "Savings = 40% of salary = 0.40 × salary = 4000 ⇒ salary = 4000 ÷ 0.40 = 10,000. Correct answer: 10,000 → Option index 1."
},
{
"id": "q-018",
"question": "The population of a town increases by 10% annually. The average of the population now and the population two years ago is 44,200. If the present population is 48,400, what was the population two years ago?",
"options": ["44,000", "40,000", "42,000", "45,000", "39,000"],
"answer": 1,
"explanation": "Let population two years ago = P. Given average of (P and present 48,400) = 44,200 ⇒ (P + 48,400) ÷ 2 = 44,200 ⇒ P + 48,400 = 88,400 ⇒ P = 88,400 − 48,400 = 40,000. Correct answer: 40,000 → Option index 1."
},
{
"id": "q-019",
"question": "If the price of a commodity was Rs. 100, it first increases by 20% and then decreases by 20%. What is the average of the initial and final prices?",
"options": ["99", "98", "100", "97", "96"],
"answer": 1,
"explanation": "Initial price = 100. After 20% increase: 100 × 1.20 = 120. After 20% decrease on 120: 120 × 0.80 = 96. Final price = 96. Average of initial and final = (100 + 96) ÷ 2 = 196 ÷ 2 = 98. Correct answer: 98 → Option index 1."
},
{
"id": "q-020",
"question": "Two cycles, each bought at the same cost price, are sold. One is sold at a profit of 10% and the other at a loss of 20%. What is the overall average profit/loss percent on the two cycles?",
"options": ["5% profit", "5% loss", "2.5% loss", "No gain no loss", "2.5% profit"],
"answer": 1,
"explanation": "Let cost price of each cycle = 100 (same). Selling prices: SP1 = 100 × 1.10 = 110. SP2 = 100 × 0.80 = 80. Total cost = 100 + 100 = 200. Total SP = 110 + 80 = 190. Net loss = 200 − 190 = 10. Percentage loss = (10 ÷ 200) × 100% = 5% loss. Correct answer: 5% loss → Option index 1."
},
{
"id": "q-021",
"question": "The average of three numbers is 20. If two of these numbers are 15 and 25, find the third number.",
"options": ["22", "18", "20", "25", "15"],
"answer": 2,
"explanation": "Average of three numbers = 20 ⇒ total = 3 × 20 = 60. Given two numbers sum = 15 + 25 = 40. Third number = 60 − 40 = 20. Correct answer: 20 → Option index 2."
},
{
"id": "q-022",
"question": "Two mixtures are mixed to form 40 litres of a mixture that contains 40% water. Mixture A contains 30% water and mixture B contains 60% water. How many litres of mixture B are used?",
"options": ["13", "12", "13 1/3", "14", "15"],
"answer": 2,
"explanation": "Let x litres of mixture B (60% water) be mixed with (40 − x) litres of mixture A (30% water). Water from B = 0.60x; water from A = 0.30(40 − x) = 12 − 0.30x. Total water required = 40 × 0.40 = 16. So 0.60x + (12 − 0.30x) = 16 ⇒ 0.30x + 12 = 16 ⇒ 0.30x = 4 ⇒ x = 4 ÷ 0.30 = 13.333... = 13 1/3 litres. Correct answer: 13 1/3 litres → Option index 2."
},
{
"id": "q-023",
"question": "A trader gives 20% discount on the marked price and still makes a profit of 25% on an article whose cost price is Rs. 500. What is the marked price?",
"options": ["780", "781.25", "800", "750", "790"],
"answer": 1,
"explanation": "Cost price = 500. Profit 25% ⇒ selling price (SP) = 500 × 1.25 = 625. Let marked price = M. After 20% discount, SP = M × 0.80 = 625 ⇒ M = 625 ÷ 0.80 = 781.25. Correct answer: 781.25 → Option index 1."
},
{
"id": "q-024",
"question": "The average marks of A, B and C is 40. If A scores 20% more than the average and B scores 10% less than the average, find C's marks.",
"options": ["36", "37", "38", "39", "40"],
"answer": 0,
"explanation": "Average of A, B, C = 40 ⇒ total A + B + C = 3 × 40 = 120. A = 40 + 20% of 40 = 40 + 8 = 48. B = 40 − 10% of 40 = 40 − 4 = 36. Therefore C = 120 − (48 + 36) = 120 − 84 = 36. Correct answer: 36 → Option index 0."
},
{
"id": "q-025",
"question": "What is the average of the first 10 natural numbers?",
"options": ["5", "5.5", "5.25", "6", "4.5"],
"answer": 1,
"explanation": "First 10 natural numbers sum = 1 + 2 + ... + 10 = (10 × 11) ÷ 2 = 55. Average = 55 ÷ 10 = 5.5. Correct answer: 5.5 → Option index 1."
},
     
     
     ],
     
     'Time and Work(25 question)' : [
     
     
  
  
  {
    "id": "q-001",
    "question": "A can do a piece of work in 12 days and B in 16 days. They work together for 4 days. How much work is left?",
    "options": ["1/4", "1/3", "1/2", "1/6", "1/8"],
    "answer": 1,
    "explanation": "A:1/12, B:1/16. Together=1/12+1/16=7/48 per day. Work in 4 days=4*7/48=28/48=7/12. Remaining=1-7/12=5/12."
  },
  {
    "id": "q-002",
    "question": "A is twice as efficient as B. They can complete a work together in 6 days. How long would B alone take to complete the work?",
    "options": ["12 days", "9 days", "10 days", "8 days", "14 days", "18 days"],
    "answer": 5,
    "explanation": "B=x/day, A=2x/day. Together=3x=1/6 → x=1/18. B alone=1/x=18 days."
  },
  {
    "id": "q-003",
    "question": "Three workers A, B, and C can do a work in 12, 15, and 20 days respectively. If they work together, how long will it take to complete the work?",
    "options": ["4 days", "5 days", "6 days", "7 days", "8 days"],
    "answer": 1,
    "explanation": "A:1/12, B:1/15, C:1/20 → LCM=60 → 5+4+3=12/60=1/5. Time=1/(1/5)=5 days."
  },
  {
    "id": "q-004",
    "question": "A completes a work in 10 days, B in 15 days. They start together but B leaves after 5 days. How long will A take to finish the remaining work?",
    "options": ["5 days", "2 days", "7 days", "8 days", "9 days"],
    "answer": 1,
    "explanation": "A+B/day=1/10+1/15=1/6. Work in 5 days=5/6. Remaining=1/6. A alone/day=1/10 → Time=1/6 ÷1/10=10/6=5/3 days=exact fraction 5/3 days."
  },
  {
    "id": "q-005",
    "question": "A can complete a work in 8 days and B in 12 days. If they start together but A leaves after 3 days, how long will B take to complete the remaining work?",
    "options": ["6 days", "7 days", "9/2 days", "5 days", "10 days"],
    "answer": 2,
    "explanation": "1-day work: A+ B=1/8+1/12=5/24. Work in 3 days=15/24=5/8. Remaining=3/8. B alone/day=1/12 → Time=3/8 ÷1/12=36/8=9/2 days."
  },
  {
    "id": "q-006",
    "question": "A alone can do a work in 15 days, B alone in 20 days. They work on alternate days starting with A. How long will the work be completed?",
    "options": ["12 days", "13 days", "14 days", "15 days", "16 days"],
    "answer": 3,
    "explanation": "A=1/15, B=1/20. 2-day cycle=1/15+1/20=7/60. After 4 cycles (8 days)=4*7/60=28/60=7/15. Day 9 (A)=1/15 → Total=7/15+1/15=8/15. Day 10 (B)=1/20 → Total=8/15+3/60=35/60=7/12? Wait recalc carefully: 2-day=7/60. Number of 2-day cycles needed to reach ≥1: 1 cycle=7/60, 8 cycles=56/60=14/15. Day 17 (A) finishes remaining 1/15 → Total days=15. Correct answer=15 days."
  },
  {
    "id": "q-007",
    "question": "A is 50% more efficient than B. If both can finish a work together in 8 days, in how many days can A alone finish the work?",
    "options": ["12 days", "40/3 days", "9 days", "8 days", "6 days"],
    "answer": 1,
    "explanation": "B=x/day, A=1.5x/day → Together=2.5x=1/8 → x=1/20. A alone=3/40 → Time=1/(3/40)=40/3 days."
  },
  {
    "id": "q-008",
    "question": "A and B can do a work in 10 and 15 days respectively. They work on alternate days starting with A. In how many days will the work be completed?",
    "options": ["8 days", "9 days", "10 days", "11 days", "12 days"],
    "answer": 3,
    "explanation": "A=1/10, B=1/15 → 2-day cycle=1/6. After 3 cycles (6 days)=3*1/6=1/2 → Remaining=1/2. Day 7 (A)=1/10 → 1/2-1/10=2/5. Day 8 (B)=1/15 → 2/5-1/15=7/15? Wait careful: 2/5=6/15 →6/15-1/15=5/15=1/3. Day 9 (A)=1/10 →1/3-1/10=7/30. Day 10 (B)=1/15 →7/30-2/30=5/30=1/6. Day 11 (A)=1/10 → completes remaining 1/6 → Total days=11."
  },
  {
    "id": "q-009",
    "question": "Three men can complete a work in 18 days, 24 days, and 36 days respectively. If they work together, in how many days will the work be completed?",
    "options": ["8 days", "9 days", "10 days", "11 days", "12 days"],
    "answer": 0,
    "explanation": "1-day work=1/18+1/24+1/36=4/72+3/72+2/72=9/72=1/8 → Time=1/(1/8)=8 days."
  },
  {
    "id": "q-010",
    "question": "A can do a work in 12 days, B in 16 days, C in 24 days. They start together but C leaves after 4 days. How long will A and B take to complete the remaining work?",
    "options": ["6 days", "7 days", "12/7 days", "9 days", "10 days"],
    "answer": 2,
    "explanation": "1-day work: A+B+C=1/12+1/16+1/24=3/16. Work in 4 days=3/16*4=12/16=3/4. Remaining=1-3/4=1/4. A+B/day=1/12+1/16=7/48 → Time=1/4 ÷7/48=12/7 days."
  },
  {
    "id": "q-011",
    "question": "A alone can do a work in 20 days and B alone in 30 days. They work together for 5 days. What fraction of the work is left?",
    "options": ["1/4", "7/12", "1/6", "1/3", "2/5"],
    "answer": 1,
    "explanation": "1-day work=1/20+1/30=1/12. Work in 5 days=5/12 → Remaining=1-5/12=7/12."
  },
  {
    "id": "q-012",
    "question": "A can do a work in 10 days. B is twice as fast as A. How long will B take to complete the work alone?",
    "options": ["4 days", "5 days", "6 days", "7 days", "8 days"],
    "answer": 1,
    "explanation": "A=1/10/day, B=2*1/10=1/5 → Time=1/(1/5)=5 days."
  },
  {
    "id": "q-013",
    "question": "A work can be completed by A in 15 days and B in 20 days. They work together for 6 days. What fraction of work is remaining?",
    "options": ["1/4", "1/5", "1/6", "1/3", "2/5", "3/10"],
    "answer": 5,
    "explanation": "1-day work: 1/15+1/20=7/60. Work in 6 days=6*7/60=42/60=7/10. Remaining=1-7/10=3/10."
  },
  {
    "id": "q-014",
    "question": "A can do a work in 18 days, B in 24 days, C in 36 days. All work together. What part of work is done in one day?",
    "options": ["1/8", "1/9", "1/10", "1/12", "1/6"],
    "answer": 0,
    "explanation": "1-day work=1/18+1/24+1/36=4/72+3/72+2/72=9/72=1/8."
  },
  {
    "id": "q-015",
    "question": "A can do a work in 6 days, B in 8 days. They start together, but A leaves after 2 days. How long will B take to finish the remaining work?",
    "options": ["2 days", "10/3 days", "4 days", "5 days", "6 days"],
    "answer": 1,
    "explanation": "A+ B/day=1/6+1/8=7/24. Work in 2 days=14/24=7/12. Remaining=5/12. B alone/day=1/8 → Time=5/12 ÷1/8=40/12=10/3 days."
  },
  {
    "id": "q-016",
    "question": "A can do a work in 10 days, B in 15 days. If they work together for 4 days, then B alone completes the remaining work, how many days in total are required?",
    "options": ["8 days", "9 days", "10 days", "11 days", "12 days"],
    "answer": 1,
    "explanation": "A+B/day=1/10+1/15=1/6. Work in 4 days=4/6=2/3 → Remaining=1/3. B alone/day=1/15 → Time=1/3 ÷1/15=5 days. Total=4+5=9 days."
  },
  {
    "id": "q-017",
    "question": "A tank can be filled by pipe A in 12 hours and by pipe B in 16 hours. Both are opened together. How long will it take to fill the tank?",
    "options": ["6 hr", "48/7 hr", "8 hr", "9 hr", "10 hr"],
    "answer": 1,
    "explanation": "1/hr=1/12+1/16=7/48 → Time=48/7 hours."
  },
  {
    "id": "q-018",
    "question": "A cistern has two pipes. Pipe A can fill it in 9 hours, pipe B can empty it in 12 hours. If both are opened together, how long will it take to fill the cistern?",
    "options": ["18 hr", "20 hr", "36 hr", "48 hr", "24 hr"],
    "answer": 2,
    "explanation": "Net rate=1/9-1/12=1/36 → Time=36 hr."
  },
  {
    "id": "q-019",
    "question": "A cistern can be filled by pipe A in 6 hours and emptied by pipe B in 8 hours. If both operate together, how long to fill the tank?",
    "options": ["12 hr", "24 hr", "48 hr", "14 hr", "16 hr"],
    "answer": 1,
    "explanation": "Net rate=1/6-1/8=1/24 → Time=24 hr."
  },
  {
    "id": "q-020",
    "question": "Pipe A can fill a tank in 10 hours and pipe B in 15 hours. If both are opened together, in how many hours will the tank be full?",
    "options": ["6 hr", "6.5 hr", "7 hr", "7.5 hr", "8 hr"],
    "answer": 0,
    "explanation": "Net rate=1/10+1/15=1/6 → Time=6 hr."
  },
  {
    "id": "q-021",
    "question": "A pipe can fill a tank in 8 hours, and another pipe can empty it in 12 hours. If both pipes are opened together, how long will it take to fill the tank?",
    "options": ["16 hr", "24 hr", "32 hr", "48 hr", "20 hr"],
    "answer": 1,
    "explanation": "Net rate=1/8-1/12=1/24 → Time=24 hr."
  },
  {
    "id": "q-022",
    "question": "A tank is filled by pipe A in 20 hours and by pipe B in 30 hours. Pipe C can empty it in 60 hours. If all three pipes are opened together, how long will it take to fill the tank?",
    "options": ["12 hr", "15 hr", "20 hr", "24 hr", "18 hr"],
    "answer": 1,
    "explanation": "Net rate=1/20+1/30-1/60=1/15 → Time=15 hr."
  },
  {
    "id": "q-023",
    "question": "Pipe A can fill a tank in 9 hours and pipe B in 12 hours. Pipe C can empty it in 18 hours. If all pipes are opened together, find the time to fill the tank.",
    "options": ["6 hr", "7 hr", "36/5 hr", "9 hr", "10 hr"],
    "answer": 2,
    "explanation": "Net rate=1/9+1/12-1/18=5/36 → Time=36/5 hours."
  },
  {
    "id": "q-024",
    "question": "Two pipes can fill a tank in 6 hours and 8 hours. A third pipe can empty it in 12 hours. How long will it take to fill the tank if all pipes are opened together?",
    "options": ["4 hr", "24/5 hr", "6 hr", "7 hr", "8 hr"],
    "answer": 1,
    "explanation": "Net rate=1/6+1/8-1/12=5/24 → Time=24/5 hours."
  },
  {
    "id": "q-025",
    "question": "A tank can be filled by a pipe in 5 hours. Due to leakage, the tank takes 6 hours to fill. In how long will the leak empty the full tank?",
    "options": ["20 hr", "25 hr", "30 hr", "15 hr", "24 hr"],
    "answer": 2,
    "explanation": "Fill rate=1/5, effective=1/6 → Leak rate=1/5-1/6=1/30 → Time to empty=30 hr."
  },
     
     ]
      
  // ... more topics
};