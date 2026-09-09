// Similarity bank — questions grouped by "similarity" (s1, s2, s3 …) shown when
// the "Similarity" button is tapped on the chapter questions page.
// Keyed by `${chapterName}:${mark}` (both "&"/"and" spellings registered).
// Each group: { sim, items: [{ question, difficulty, marks, repetitions, total, answer }] }.

const ECF_NUMERIC = [
  {
    sim: "S1",
    items: [
      {
        question:
          "A positively charged spherical conductor of radius 0.1 m produces an electric field of 1.8 × 10³ N C⁻¹ at a point P distant 0.2 m from its centre. Calculate the magnitude of the charge present on the spherical conductor. Also find the new charge on the charged spherical conductor if 5 × 10¹⁰ more electrons are removed from it.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 1" }],
        total: 1,
        answer:
          "Using E = kQ/r², Q = E r² / k = (1.8×10³ × 0.2²) / (9×10⁹) = 8×10⁻⁹ C. If 5×10¹⁰ electrons are removed, q_new = Q − (5×10¹⁰ × 1.6×10⁻¹⁹) = 8×10⁻⁹ − 8×10⁻⁹ = 0 C.",
      },
      {
        question:
          "A uniformly charged spherical shell of radius 10 cm has a surface charge density of 16 μC/m². Find the electric field due to the shell at a distance of (a) 20 cm from the centre of the shell, (b) 5 cm from the centre of the shell.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2025", exam: "Exam 1" }],
        total: 1,
        answer:
          "Q = σ × 4πR² = 16×10⁻⁶ × 4π × (0.1)² ≈ 2.01×10⁻⁶ C. (a) At 0.2 m (outside): E = kQ/r² = (9×10⁹ × 2.01×10⁻⁶) / 0.2² ≈ 4.5×10⁵ N/C. (b) At 0.05 m (inside): E = 0.",
      },
      {
        question:
          "Two point charges 2 μC and 3 μC are placed at the two corners A and B of an equilateral triangle ABC of side 0.2 m. Calculate the magnitude of resultant electric field at the corner C of that triangle.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2025", exam: "Exam 3" }],
        total: 1,
        answer:
          "E_A = k(2×10⁻⁶) / 0.2² = 4.5×10⁵ N/C. E_B = k(3×10⁻⁶) / 0.2² = 6.75×10⁵ N/C. Angle is 60°. Resultant E = √(E_A² + E_B² + 2E_A E_B cos60) = √((4.5)² + (6.75)² + 2×4.5×6.75×0.5) × 10⁵ ≈ 9.85×10⁵ N/C.",
      },
      {
        question:
          "Two point charges +15 μC and −10 μC are separated by a distance of 20 cm in air. Calculate the electric field at the mid point of the line joining two charges. If a point charge of 20 mC is placed at that mid point, what is the magnitude of electric force experienced by it?",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2024", exam: "Exam 1" }],
        total: 1,
        answer:
          "Midpoint is 0.1 m from each. E1 = (9×10⁹ × 15×10⁻⁶) / 0.1² = 1.35×10⁷ N/C. E2 = (9×10⁹ × 10×10⁻⁶) / 0.1² = 0.9×10⁷ N/C. Net E = E1 + E2 = 2.25×10⁷ N/C. Force F = qE = 20×10⁻³ × 2.25×10⁷ = 4.5×10⁵ N.",
      },
    ],
  },
  {
    sim: "S2",
    items: [
      {
        question:
          "The electrostatic force on a small sphere of charge 0.4 μC due to another small sphere of charge −0.8 μC in air separated by a distance d is 0.2 N. (a) Find the distance between the two spheres. (b) What is the magnitude and nature of force on the second sphere due to the first?",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2024", exam: "Exam 2" }],
        total: 1,
        answer:
          "F = k q₁ q₂ / r². r² = (9×10⁹ × 0.4×10⁻⁶ × 0.8×10⁻⁶) / 0.2 = 0.0144. r = 0.12 m. The force is attractive (opposite charges), magnitude is 0.2 N (Newton's third law).",
      },
      {
        question:
          "The electrostatic force on a metal sphere of charge 0.5 μC due to another identical metal sphere of charge −1.2 μC is 45 × 10⁻³ N. Find the distance between two spheres. Also find the force between the same two spheres when they are brought into contact and then placed at their initial position.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2024", exam: "Exam 3" }],
        total: 1,
        answer:
          "r² = (9×10⁹ × 0.5×10⁻⁶ × 1.2×10⁻⁶) / 45×10⁻³ = 0.12. r ≈ 0.346 m. After contact, q = (0.5 − 1.2)/2 = −0.35 μC. New Force F = (9×10⁹ × (0.35×10⁻⁶)²) / 0.12 ≈ 9.19×10⁻³ N (repulsive).",
      },
    ],
  },
  {
    sim: "S3",
    items: [
      {
        question:
          "A pendulum bob of mass 80 mg and carrying charge 2 × 10⁻⁸ C is at rest at a certain angle with the vertical in a horizontal uniform electric field of 20,000 V m⁻¹. Find the tension in the thread of the pendulum and the angle it makes with the vertical.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 4" }],
        total: 1,
        answer:
          "qE = (2×10⁻⁸)(20000) = 4×10⁻⁴ N. mg = (80×10⁻⁶)(10) = 8×10⁻⁴ N. tanθ = qE/mg = 0.5 ⇒ θ = 26.56°. Tension T = √((qE)² + (mg)²) = √((4×10⁻⁴)² + (8×10⁻⁴)²) ≈ 8.94×10⁻⁴ N.",
      },
    ],
  },
];

export const SIMILARITY_BANK = {
  "Electric Charges and Fields:numeric": ECF_NUMERIC,
  "Electric Charges & Fields:numeric": ECF_NUMERIC,
};

export function resolveSimilarity({ chapterName, mark }) {
  if (!chapterName) return null;
  return (
    SIMILARITY_BANK[`${chapterName}:${mark}`] ||
    SIMILARITY_BANK[`${chapterName}:numeric`] ||
    null
  );
}
