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

const ECF_2M = [
  {
    sim: "Similar 1",
    items: [
      {
        question: "State and explain Gauss's law in electrostatics.",
        difficulty: "easy",
        marks: "2 marks",
        repetitions: [
          { year: "2024", exam: "Exam 1" },
          { year: "2024", exam: "Exam 2" },
          { year: "2024", exam: "Exam 3" },
        ],
        total: 3,
        answer:
          "It states that the total electric flux through a closed surface is equal to $\\frac{1}{\\varepsilon_0}$ times the net charge enclosed by that surface.\n\nFormula: $\\Phi = \\frac{Q_{\\text{enclosed}}}{\\varepsilon_0}$.",
      },
      {
        question: "Write/Give any two properties of electric field lines.",
        difficulty: "easy",
        marks: "2 marks",
        repetitions: [
          { year: "2025", exam: "Exam 2" },
          { year: "2026", exam: "Exam 1" },
        ],
        total: 2,
        answer:
          "1. Electric field lines start from positive charges and terminate on negative charges.\n2. Two electric field lines never intersect each other.",
      },
      {
        question: "Define electric field at a point. What is meant by 'source charge'?",
        difficulty: "easy",
        marks: "2 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 1" }],
        total: 1,
        answer:
          "Electric field at a point is defined as the force experienced per unit positive test charge placed at that point ($E = \\frac{F}{q_0}$).\nA 'source charge' is the charge which is producing the electric field in the surrounding space.",
      },
      {
        question: "Sketch the electric field lines for (a) a positive point charge and (b) an electric dipole.",
        difficulty: "easy",
        marks: "2 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 2" }],
        total: 1,
        answer:
          "(a) For a positive point charge, the field lines point radially outward from the charge.\n(b) For an electric dipole, field lines emanate from the positive charge and terminate on the negative charge, forming a curved pattern.",
      },
      {
        question: "Mention two factors on which electric field at a point due to a point charge depends.",
        difficulty: "easy",
        marks: "2 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 5" }],
        total: 1,
        answer:
          "1. Magnitude of the source charge ($q$).\n2. Distance ($r$) from the source charge to the point.\n\n(Formula: $E = \\frac{kq}{r^2}$)",
      },
      {
        question: "State and explain Coulomb's law in electrostatics.",
        difficulty: "easy",
        marks: "2 marks",
        repetitions: [{ year: "2025", exam: "Exam 3" }],
        total: 1,
        answer:
          "The electrostatic force between two point charges is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance between them.\n\nFormula: $F = \\frac{k q_1 q_2}{r^2}$.",
      },
      {
        question: "Define electric flux through an area element. Mention its SI unit.",
        difficulty: "easy",
        marks: "2 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 3" }],
        total: 1,
        answer:
          "Electric flux is the scalar product of the electric field vector and the area vector ($\\Delta \\Phi = \\mathbf{E} \\cdot \\Delta \\mathbf{S}$).\nIts SI unit is $\\text{N m}^2/\\text{C}$ (or $\\text{V m}$).",
      },
      {
        question: "Define the term 'linear charge density'. Mention its SI unit.",
        difficulty: "easy",
        marks: "2 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 4" }],
        total: 1,
        answer:
          "Linear charge density is defined as the amount of electric charge per unit length ($\\lambda = \\frac{q}{l}$).\nIts SI unit is Coulomb per meter ($\\text{C/m}$).",
      },
      {
        question: "What is electrostatic shielding? Mention one use of it.",
        difficulty: "easy",
        marks: "2 marks",
        repetitions: [{ year: "2026", exam: "Exam 1" }],
        total: 1,
        answer:
          "Electrostatic shielding is the phenomenon where the electric field inside a hollow conductor is zero, so no external electric field can penetrate it.\n\nOne use is to protect sensitive electronic circuits and instruments from external electric fields.",
      },
    ],
  },
  {
    sim: "Similar 2",
    items: [
      {
        question: "Two identical point charges are separated by a distance 0.2 m in air repel each other with a force 9 × 10³ N. Find the magnitude of each charge.",
        difficulty: "easy",
        marks: "2 marks",
        repetitions: [{ year: "2026", exam: "Exam 2" }],
        total: 1,
        answer:
          "$F = \\frac{kq^2}{r^2}$.\n$9 \\times 10^3 = \\frac{9 \\times 10^9 \\cdot q^2}{(0.2)^2}$.\n$q^2 = \\frac{9 \\times 10^3 \\cdot 0.04}{9 \\times 10^9} = 4 \\times 10^{-8}$.\n$q = 2 \\times 10^{-4} \\, \\text{C}$.",
      },
      {
        question: "Find the force on a point charge 2 × 10⁻⁶ C, placed at a point in a uniform electric field of 0.8 NC⁻¹.",
        difficulty: "easy",
        marks: "2 marks",
        repetitions: [{ year: "2025", exam: "Exam 2" }],
        total: 1,
        answer:
          "$F = qE$.\n$F = (2 \\times 10^{-6} \\, \\text{C}) \\times (0.8 \\, \\text{NC}^{-1})$.\n$F = 1.6 \\times 10^{-6} \\, \\text{N}$.",
      },
    ],
  },
];

const ECF_3M = [
  {
    sim: "Similar 1",
    items: [
      {
        question: "Mention/Write any three properties of electric field lines.",
        difficulty: "easy",
        marks: "3 marks",
        repetitions: [
          { year: "2023", exam: "Main Exam" },
          { year: "2023", exam: "Supplement" },
          { year: "2024", exam: "Exam 1" },
          { year: "2025", exam: "Exam 1" },
          { year: "2025", exam: "Exam 3" },
          { year: "2027", exam: "Model Paper 5" },
        ],
        total: 6,
        answer:
          "1. Field lines start from positive charges and end on negative charges.\n2. Two field lines never intersect each other.\n3. The tangent to a field line at a point gives the direction of the electric field at that point, and the density of lines represents the strength of the field.",
      },
      {
        question: "Derive an expression for torque acting on an electric dipole placed in a uniform electric field.",
        difficulty: "easy",
        marks: "3 marks",
        repetitions: [
          { year: "2026", exam: "Exam 2" },
          { year: "2027", exam: "Model Paper 1" },
        ],
        total: 2,
        answer:
          "When a dipole (charges $+q$ and $-q$ separated by distance $2a$) is placed at an angle $\\theta$ to a uniform field $E$, the two forces ($+qE$ and $-qE$) form a couple.\n\nTorque $\\tau = \\text{Force} \\times \\text{perpendicular distance} = qE \\times (2a \\sin\\theta) = (q \\times 2a) E \\sin\\theta = pE \\sin\\theta$.\n\nIn vector form: $\\tau = \\mathbf{p} \\times \\mathbf{E}$.",
      },
      {
        question: "Give Coulomb's law in vector form and explain the terms. Define SI unit of charge using Coulomb's law.",
        difficulty: "easy",
        marks: "3 marks",
        repetitions: [
          { year: "2026", exam: "Exam 1" },
          { year: "2027", exam: "Model Paper 2" },
        ],
        total: 2,
        answer:
          "Vector form: $\\mathbf{F}_{12} = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{q_1 q_2}{r^2} \\hat{\\mathbf{r}}_{12}$.\n\nTerms: $q_1, q_2$ are charges, $r$ is distance, $\\hat{\\mathbf{r}}$ is unit vector, $\\varepsilon_0$ is permittivity of free space.\n\nSI unit of charge is Coulomb (C). Defined as the charge that repels an identical charge placed 1 meter away in vacuum with a force of $9 \\times 10^9 \\, \\text{N}$.",
      },
      {
        question: "State and explain Coulomb's law of electrostatics.",
        difficulty: "easy",
        marks: "3 marks",
        repetitions: [{ year: "2023", exam: "Supplement (Set 2)" }],
        total: 1,
        answer:
          "The electrostatic force between two stationary point charges is directly proportional to the product of their magnitudes and inversely proportional to the square of the distance between them.\n\nFormula: $F = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{q_1 q_2}{r^2}$.\n\nThe force acts along the line joining the two charges.",
      },
      {
        question: "Mention any three basic properties of electric charges.",
        difficulty: "easy",
        marks: "3 marks",
        repetitions: [
          { year: "2024", exam: "Exam 2" },
          { year: "2024", exam: "Exam 3" },
        ],
        total: 2,
        answer:
          "1. Electric charge is quantized ($q = ne$, where $n$ is an integer).\n2. Charge is conserved (it can neither be created nor destroyed, only transferred).\n3. Charge is additive (the total charge of a system is the algebraic sum of individual charges).",
      },
      {
        question: "Define linear charge density. Mention the expression for electric field at a point due to an infinitely long uniformly charged wire and explain the terms.",
        difficulty: "easy",
        marks: "3 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 3" }],
        total: 1,
        answer:
          "Linear charge density ($\\lambda$) is the charge per unit length ($\\lambda = \\frac{q}{l}$).\n\nExpression for E-field of an infinite line charge: $E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}$.\n\nTerms: $\\lambda$ is linear charge density, $\\varepsilon_0$ is permittivity of free space, and $r$ is the perpendicular distance from the wire to the point.",
      },
      {
        question: "Show that the total electric flux through the surface of a sphere enclosing a point charge q at its centre is q/ε₀.",
        difficulty: "easy",
        marks: "3 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 4" }],
        total: 1,
        answer:
          "The electric field at any point on the sphere is $E = \\frac{q}{4\\pi\\varepsilon_0 r^2}$, pointing radially outward.\n\nTotal flux $\\Phi = \\int \\mathbf{E} \\cdot d\\mathbf{S} = E \\times 4\\pi r^2$ (since $E$ is parallel to $d\\mathbf{S}$).\n\n$\\Phi = \\left[ \\frac{q}{4\\pi\\varepsilon_0 r^2} \\right] \\times 4\\pi r^2 = \\frac{q}{\\varepsilon_0}$.",
      },
    ],
  },
];

export const SIMILARITY_BANK = {
  "Electric Charges and Fields:numeric": ECF_NUMERIC,
  "Electric Charges & Fields:numeric": ECF_NUMERIC,
  "Electric Charges and Fields:5m": ECF_5M_THEORY,
  "Electric Charges & Fields:5m": ECF_5M_THEORY,
  "Electric Charges and Fields:2m": ECF_2M,
  "Electric Charges & Fields:2m": ECF_2M,
  "Electric Charges and Fields:3m": ECF_3M,
  "Electric Charges & Fields:3m": ECF_3M,
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
