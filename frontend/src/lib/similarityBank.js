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

const ECF_5M_THEORY = [
  {
    sim: "Similar 1",
    items: [
      {
        question:
          "State Gauss's law in electrostatics. Using it, derive the expression for the electric field at a point due to an infinitely long, straight, uniformly charged wire.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [
          { year: "2027", exam: "Model Paper 5" },
          { year: "2026", exam: "Exam 1" },
          { year: "2026", exam: "Exam 2" },
          { year: "2023", exam: "Main Exam" },
          { year: "2023", exam: "Supplement (2nd Set)" },
        ],
        total: 5,
        answer:
          "Gauss's law states that the total electric flux through a closed surface is $\\frac{1}{\\varepsilon_0}$ times the charge enclosed ($\\Phi = \\frac{q}{\\varepsilon_0}$). For an infinitely long wire with linear charge density $\\lambda$, consider a cylindrical Gaussian surface of radius $r$ and length $l$. By symmetry, $E$ is radial and constant over the curved surface. Flux $= E \\times 2\\pi r l$. Charge enclosed $= \\lambda l$. So, $E(2\\pi r l) = \\frac{\\lambda l}{\\varepsilon_0}$, which gives $E = \\frac{\\lambda}{2\\pi \\varepsilon_0 r}$.",
      },
      {
        question:
          "Derive an expression for the electric field at a point on the axial line (axis) of an electric dipole.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [
          { year: "2027", exam: "Model Paper 2" },
          { year: "2027", exam: "Model Paper 3" },
        ],
        total: 2,
        answer:
          "Consider a dipole with charges $+q$ and $-q$ separated by $2a$. Let P be a point on the axial line at a distance $r$ from the center. The electric field due to $+q$ is $E_+ = \\frac{kq}{(r-a)^2}$ (away from $+q$). The field due to $-q$ is $E_- = \\frac{kq}{(r+a)^2}$ (towards $-q$). Net field $E = E_+ - E_- = kq\\left[\\frac{1}{(r-a)^2} - \\frac{1}{(r+a)^2}\\right]$. Solving this gives $E = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{2pr}{(r^2 - a^2)^2}$, where $p = 2aq$ is the dipole moment. For short dipoles ($r \\gg a$), $E = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{2p}{r^3}$ along the dipole axis.",
      },
      {
        question:
          "Derive the expression for the electric field at a point on the equatorial line of an electric dipole.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2023", exam: "Supplement" }],
        total: 1,
        answer:
          "For a point P on the equatorial line at distance $r$, the fields $E_+$ (due to $+q$) and $E_-$ (due to $-q$) have equal magnitudes. Their vertical components cancel out, and horizontal components add up. Net field $E = -2E_+\\cos\\theta$. Substituting $E_+ = \\frac{kq}{r^2 + a^2}$ and $\\cos\\theta = \\frac{a}{\\sqrt{r^2 + a^2}}$, we get $E = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{p}{(r^2 + a^2)^{3/2}}$. For short dipoles ($r \\gg a$), $E = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{p}{r^3}$ directed opposite to the dipole moment.",
      },
      {
        question:
          "Deduce an expression for electric field at a point outside a thin uniformly-charged spherical shell using Gauss's law.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2025", exam: "Exam 2" }],
        total: 1,
        answer:
          "Consider a thin spherical shell of radius $R$ with total charge $Q$. To find the field at a point P outside (distance $r > R$), draw a concentric spherical Gaussian surface of radius $r$. By symmetry, $E$ is radial and constant over the surface. Flux $= E \\times 4\\pi r^2$. Enclosed charge $= Q$. Applying Gauss's law: $E(4\\pi r^2) = \\frac{Q}{\\varepsilon_0}$. Therefore, $E = \\frac{Q}{4\\pi\\varepsilon_0 r^2}$. This shows that for points outside the shell, the field is exactly as if the entire charge were concentrated at the center.",
      },
    ],
  },
];

const ECP_5M_THEORY = [
  {
    sim: "Similar 1",
    items: [
      {
        question:
          "Derive the expression for electric potential at a point due to a point charge / Define electrostatic potential. Obtain an expression for electrostatic potential at a point due to an isolated point charge.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [
          { year: "2027", exam: "Model Paper 1" },
          { year: "2025", exam: "Exam 1" },
          { year: "2025", exam: "Exam 3" },
          { year: "2024", exam: "Exam 2" },
        ],
        total: 4,
        answer:
          "Electrostatic potential $V$ at a distance $r$ from a point charge $q$ is the work done per unit positive charge to bring it from infinity.\n\n$V = -\\int E \\cdot dr = -\\int \\left( \\frac{kq}{r^2} \\right) dr = \\frac{kq}{r} = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{q}{r}$",
      },
      {
        question:
          "Derive the expression for the capacitance of a parallel plate capacitor with air between the plates. Also write the general expression for the capacitance of a parallel plate capacitor with a dielectric medium.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [
          { year: "2027", exam: "Model Paper 4" },
          { year: "2024", exam: "Exam 1 (b)" },
        ],
        total: 2,
        answer:
          "For air:\n\n$E = \\frac{\\sigma}{\\varepsilon_0} = \\frac{Q}{A\\varepsilon_0}$\n\n$V = E \\cdot d = \\frac{Qd}{A\\varepsilon_0}$\n\n$C = \\frac{Q}{V} = \\frac{\\varepsilon_0 A}{d}$\n\nWith dielectric:\n\n$C = \\frac{K\\varepsilon_0 A}{d}$",
      },
      {
        question: "What are polar and non-polar molecules?",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2024", exam: "Exam 1 (a)" }],
        total: 1,
        answer:
          "Polar molecules have a permanent electric dipole moment due to the asymmetric distribution of charges (e.g., $H_2O$). Non-polar molecules have a zero net dipole moment as the centers of positive and negative charges coincide (e.g., $CO_2$, $CH_4$).",
      },
      {
        question:
          "Derive an expression for equivalent capacitance of two capacitors connected in series.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2024", exam: "Exam 3 (a)" }],
        total: 1,
        answer:
          "In series, the charge $Q$ is the same. Voltage $V = V_1 + V_2$.\n\n$\\frac{Q}{C_{eq}} = \\frac{Q}{C_1} + \\frac{Q}{C_2}$. Therefore,\n\n$\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2}$",
      },
      {
        question: "Write any two properties of the equipotential surface.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2024", exam: "Exam 3 (b)" }],
        total: 1,
        answer:
          "1. No two equipotential surfaces can intersect each other.\n2. The electric field lines are always perpendicular to the equipotential surfaces.",
      },
    ],
  },
];

export const SIMILARITY_BANK = {
  "Electric Charges and Fields:numeric": ECF_NUMERIC,
  "Electric Charges & Fields:numeric": ECF_NUMERIC,
  "Electric Charges and Fields:5m": ECF_5M_THEORY,
  "Electric Charges & Fields:5m": ECF_5M_THEORY,
  "Electrostatic Potential and Capacitance:5m": ECP_5M_THEORY,
  "Electrostatic Potential & Capacitance:5m": ECP_5M_THEORY,
};

export function resolveSimilarity({ chapterName, mark }) {
  if (!chapterName) return null;
  return (
    SIMILARITY_BANK[`${chapterName}:${mark}`] ||
    SIMILARITY_BANK[`${chapterName}:numeric`] ||
    null
  );
}
