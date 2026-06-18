// src/lib/blogData.ts

export interface BlogPostSummary {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  large?: boolean;
  slug: string;
}

export interface BlogPostFull extends BlogPostSummary {
  content: string; // HTML content of article body
  authorBio: string;
  authorCredentials: string;
  authorAvatar: string;
  toc: { id: string; label: string }[];
}

// Listing data (from blogs.html)
export const blogPosts: BlogPostSummary[] = [
  {
    id: 1,
    title: "The Rise of Smart Luxury Homes",
    excerpt: "How cutting-edge technology is redefining high-end residential real estate with intelligent automation and sustainable design.",
    category: "Real Estate",
    date: "2026-06-12",
    readTime: "6 min",
    author: "Alexander Voss",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&h=600&fit=crop",
    large: true,
    slug: "rise-of-smart-luxury-homes"
  },
  {
    id: 2,
    title: "Earthquake-Resistant Structural Engineering",
    excerpt: "Innovative base isolation and damping systems that allow modern skyscrapers to withstand powerful seismic forces.",
    category: "Engineering",
    date: "2026-06-08",
    readTime: "8 min",
    author: "Dr. Maria Chen",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
    large: false,
    slug: "earthquake-resistant-structural-engineering"
  },
  {
    id: 3,
    title: "Hidden Architectural Gems of Barcelona",
    excerpt: "Beyond Gaudí — secret courtyards, vaulted ceilings, and forgotten masterpieces that define the soul of Catalan architecture.",
    category: "Architecture",
    date: "2026-06-05",
    readTime: "7 min",
    author: "Sofia Castell",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
    large: false,
    slug: "hidden-architectural-gems-barcelona"
  },
  {
    id: 4,
    title: "Sustainable Construction Materials Revolution",
    excerpt: "From cross-laminated timber to carbon-negative concrete — the materials reshaping the future of the building industry.",
    category: "Construction",
    date: "2026-06-01",
    readTime: "5 min",
    author: "James Hartwell",
    image: "https://images.stockcake.com/public/e/0/a/e0aecc35-dc78-4d61-9a7f-d92db62eb6d4_large/demolition-work-progress-stockcake.jpg",
    large: true,
    slug: "sustainable-construction-materials"
  },
  {
    id: 5,
    title: "Mastering Open-Plan Interior Design",
    excerpt: "Create seamless flow between living spaces with zoning techniques, lighting layers, and cohesive material palettes.",
    category: "Interior",
    date: "2026-05-28",
    readTime: "10 min",
    author: "Lena Moretti",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop",
    large: false,
    slug: "mastering-open-plan-interior-design"
  },
  {
    id: 6,
    title: "Biophilic Design in Urban Architecture",
    excerpt: "How architects are weaving natural elements into city buildings to enhance wellbeing and reduce environmental impact.",
    category: "Architecture",
    date: "2026-05-24",
    readTime: "6 min",
    author: "Elena Voss",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    large: false,
    slug: "biophilic-design-urban-architecture"
  },
  {
    id: 7,
    title: "Smart Cities: Infrastructure of Tomorrow",
    excerpt: "The convergence of IoT, 5G, and AI is transforming urban planning — creating responsive, efficient metropolitan ecosystems.",
    category: "Urban Planning",
    date: "2026-05-20",
    readTime: "5 min",
    author: "Dr. Raj Patel",
    image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=600&h=400&fit=crop",
    large: false,
    slug: "smart-cities-infrastructure-tomorrow"
  },
  {
    id: 8,
    title: "The New Era of Prefabricated Housing",
    excerpt: "Modular construction is shedding its stigma — delivering bespoke, high-quality homes in half the time of traditional builds.",
    category: "Construction",
    date: "2026-05-16",
    readTime: "7 min",
    author: "Nia Okafor",
    image: "https://www.dorce.com/wp-content/uploads/2025/09/Image_fx-2025-09-08T154111.329-min.jpg",
    large: true,
    slug: "new-era-prefabricated-housing"
  },
  {
    id: 9,
    title: "Bridge Engineering Marvels Worldwide",
    excerpt: "From cable-stayed spans to arch bridges — examining the structural ingenuity behind the world's most breathtaking crossings.",
    category: "Engineering",
    date: "2026-05-12",
    readTime: "8 min",
    author: "Priya Sharma",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSSrtPIj2WyzbYKDtol-csd0H9Kr9S7Lj-2TIXx5lvJNbG46u7ANLFtUU&s=10",
    large: false,
    slug: "bridge-engineering-marvels"
  },
  {
    id: 10,
    title: "Commercial Real Estate Market Trends 2026",
    excerpt: "Analyzing post-pandemic shifts in office space demand, retail revitalization, and the booming industrial property sector.",
    category: "Real Estate",
    date: "2026-05-08",
    readTime: "6 min",
    author: "Alex Rojas",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    large: false,
    slug: "commercial-real-estate-trends-2026"
  },
  {
    id: 11,
    title: "Architectural Photography: Capturing Form",
    excerpt: "Mastering perspective, light, and composition to reveal the soul of buildings — from sweeping facades to intimate details.",
    category: "Architecture",
    date: "2026-05-04",
    readTime: "9 min",
    author: "Lena Østberg",
    image: "https://www.format.com/wp-content/uploads/how-to-photography-architecture.jpg",
    large: false,
    slug: "architectural-photography-capturing-form"
  },
  {
    id: 12,
    title: "Waterfront Property Development Guide",
    excerpt: "Navigating regulations, environmental impact, and design principles for building exceptional coastal and lakeside residences.",
    category: "Real Estate",
    date: "2026-04-30",
    readTime: "11 min",
    author: "Marcus Webb",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1tOiUAjFQMvaabeHhPRf87amg-V_DmOxIKyqnXtsu6G8YP-7exEqufUDw&s=10",
    large: false,
    slug: "waterfront-property-development-guide"
  }
];

// Full post data – only for the IEEE 2800 article (slug: "ieee-2800-compliance")
// You can add more full posts later.
export const blogPostFull: Record<string, BlogPostFull> = {
  "ieee-2800-compliance": {
    id: 100,
    title: "Connecting to the Grid Under IEEE 2800",
    excerpt: "Large load interconnection diagram for AI data centers, grid modeling, EMT studies, and power systems — a comprehensive guide for Generating Owners.",
    category: "Engineering · White Paper",
    date: "June 15, 2026",
    readTime: "22 min read",
    author: "Sonny Patel, PE",
    image: "https://images.unsplash.com/photo-1581092160562-40aa0e31b1cd?w=900&h=600&fit=crop", // placeholder
    large: true,
    slug: "ieee-2800-compliance",
    authorBio: "Licensed Professional Engineer across multiple states. Founder & CEO of KEENTEL LLC. Three decades of transmission & distribution engineering experience.",
    authorCredentials: "IEEE Senior Member",
    authorAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
    toc: [
      { id: "executive-summary", label: "Executive Summary" },
      { id: "background", label: "Background" },
      { id: "roles", label: "Roles & Responsibilities" },
      { id: "core-concepts", label: "Core Concepts" },
      { id: "compliance-journey", label: "Compliance Journey" },
      { id: "technical", label: "Technical Requirements" },
      { id: "verification", label: "Verification" },
      { id: "case-studies", label: "Case Studies" },
      { id: "faq", label: "FAQs" }
    ],
    content: `
      <!-- The full HTML content from <article class="blog-body"> -->
      <h2 id="executive-summary">Executive Summary</h2>
      <h3>What Every Generating Owner Must Know</h3>
      <p>The power grid is changing faster than at any time in its history. Solar farms, wind plants, and battery energy storage — collectively called <strong>inverter-based resources, or IBRs</strong> — now make up a large and growing share of the generation connecting to the bulk power system. These resources behave very differently from the large spinning machines that built the grid. They have almost no physical inertia, their output is governed by software and power electronics rather than the laws of rotating mass, and when they are disturbed they can all react in the same way at the same instant.</p>
      <p>That difference is not theoretical. Over the past decade, grid operators documented several large disturbances in which thousands of megawatts of solar generation tripped off-line almost simultaneously in response to a single, ordinary fault on the transmission system — a fault the grid should have shrugged off. Investigations traced these events to inverter settings and control behaviors that were never coordinated with the needs of the grid. <strong>IEEE 2800™-2022 is the industry's answer.</strong></p>

      <div class="pull-quote">
        IEEE 2800 establishes uniform, technical minimum requirements for how IBRs must perform when they connect to transmission and sub-transmission systems.
      </div>

      <p>IEEE 2800 covers how a plant supports voltage, how it responds to changes in frequency, how it must ride through disturbances instead of tripping, the quality of power it injects, how it coordinates protection, the models it must hand over, and — critically — how all of this must be tested, evaluated, and proven across the entire life of the plant.</p>

      <h4>The Core Accountability</h4>
      <p>If you own the project, <strong>IEEE 2800 compliance is your responsibility</strong> — not your inverter vendor's, not your EPC contractor's, and not the utility's. You can delegate the work, but you cannot delegate the accountability.</p>

      <h4>What this paper gives you</h4>
      <ul>
        <li>A clear map of the players — who the Generating Owner is and how that role sits among the utility, the operator, and the regulator.</li>
        <li>A step-by-step compliance journey — the eight phases every GO must work through, from first study to lifetime operation.</li>
        <li>Plain-language deep dives — reactive power, frequency response, ride-through, power quality, protection, modeling, and monitoring, explained without losing the engineering.</li>
        <li>The verification lifecycle — type tests, design evaluation, commissioning, and ongoing validation, and who is on the hook for each.</li>
        <li>Twenty detailed FAQs and three anonymized case studies drawn from real-world interconnection challenges.</li>
      </ul>
      <p>The recurring theme is simple: <strong>IEEE 2800 is a performance standard, not a checklist.</strong> It does not tell you which equipment to buy or how to wire it. It tells you how the finished plant must behave at a specific point on the grid — and then requires you to prove it, on paper and in the field.</p>

      <h2 id="background">Background</h2>
      <h3>Why IEEE 2800 Exists</h3>
      <h4>The grid was built for spinning machines</h4>
      <p>For a century, electricity came from large synchronous generators — massive rotating machines in coal, gas, nuclear, and hydro plants. These machines store energy physically in their spinning mass. When something goes wrong on the grid, that stored inertia buys the system precious seconds, and the machines' natural physics push back against voltage and frequency swings without anyone telling them to. The grid's protection schemes, planning studies, and operating habits were all built around this behavior.</p>

      <h4>Inverter-based resources are fundamentally different</h4>
      <p>An inverter-based resource — a solar PV plant, a modern wind farm, or a battery storage system — connects to the grid through power-electronic inverters. There is no large spinning mass directly tied to grid frequency. Everything the resource does in response to a disturbance is a decision made by control software in milliseconds. This brings real advantages (speed, precision, flexibility) but also real risks:</p>
      <ul>
        <li><strong>Correlated behavior:</strong> thousands of inverters running similar firmware can all react identically to the same event, turning a local problem into a system-wide loss of generation.</li>
        <li><strong>Hidden trip settings:</strong> default factory protection settings, if left uncoordinated, can cause a plant to disconnect during a disturbance it was perfectly capable of withstanding.</li>
        <li><strong>Low inertia:</strong> as inverter-based generation displaces spinning machines, the grid has less natural cushioning, so the way IBRs respond to frequency events matters more than ever.</li>
        <li><strong>Weak-grid interactions:</strong> in remote areas with a low short-circuit ratio, inverter controls can interact with the network and with each other in unstable ways that simple models never reveal.</li>
      </ul>

      <div class="pull-quote">
        IEEE 2800 makes sure that when the grid has a bad day, inverter-based resources help hold it together instead of making the problem worse.
      </div>

      <h2 id="roles">Roles & Responsibilities</h2>
      <h3>Who's Who: The Generating Owner and Everyone Else</h3>
      <p>IEEE 2800 carefully separates the different roles in an interconnection so that each requirement lands on the right party. The standard uses the term <strong>IBR owner</strong>; in the North American reliability framework this maps to the registered <strong>Generator Owner (GO)</strong>, which throughout this paper we call the Generating Owner.</p>
      <ul>
        <li><strong>Generating Owner (GO) / IBR owner:</strong> Owns the resource and is responsible for its design conformance and maintenance. <em>You. The buck stops with you.</em></li>
        <li><strong>Generating Operator (GOP) / IBR operator:</strong> Monitors and operates the resource through its local control interface; implements setting and mode changes.</li>
        <li><strong>Transmission System (TS) Owner:</strong> Designs, builds, and owns the transmission facilities the plant connects to; specifies many local requirements.</li>
        <li><strong>TS Operator:</strong> Operates the transmission system in real time; directs the plant, approves test procedures, and sets many default values.</li>
        <li><strong>AGIR:</strong> Authority Governing Interconnection Requirements — the body that decides whether and how IEEE 2800 applies in a given region.</li>
        <li><strong>Verification Entity:</strong> Performs or witnesses type tests, evaluations, and commissioning tests.</li>
      </ul>
      <p><strong>The Single Most Important Takeaway:</strong> IEEE 2800 explicitly makes the IBR owner — the Generating Owner — the entity that requests interconnection and carries responsibility for conformance. Inverter manufacturers supply capable equipment and type-test data. EPC contractors build to a design. But it is the GO who must pull every piece together and demonstrate, at the agreed point on the grid, that the whole plant performs.</p>

      <h2 id="core-concepts">Core Concepts</h2>
      <h3>The Big Picture: Three Ideas That Unlock the Whole Standard</h3>
      <ol>
        <li><strong>It is a performance standard, not a design standard.</strong> IEEE 2800 almost never says "install this device" or "use that setting." Instead it says "the plant shall behave this way at this point on the grid."</li>
        <li><strong>Everything is measured at the Reference Point of Applicability (RPA).</strong> Requirements do not apply "at the inverter" or "somewhere in the plant." They apply at a defined electrical location called the RPA.</li>
        <li><strong>The obligation lasts the entire life of the plant.</strong> IEEE 2800 is not a one-time gate you clear at energization. Its requirements are intended to apply over the lifetime of the plant.</li>
      </ol>

      <h2 id="compliance-journey">Compliance Journey</h2>
      <h3>Step by Step: What the Generating Owner Must Do</h3>
      <p>Here is the whole journey, organized into eight phases:</p>
      <ol>
        <li><strong>Understand the Rules</strong> That Actually Apply to You</li>
        <li><strong>Register the Plant</strong> and Its Ratings</li>
        <li><strong>Design the Plant</strong> to Deliver the Required Capabilities</li>
        <li><strong>Prove It on Paper</strong> — The Design Evaluation (modeling, simulation, EMT studies)</li>
        <li><strong>Build It</strong> to Match the Design</li>
        <li><strong>Demonstrate It in the Field</strong> — Commissioning Tests</li>
        <li><strong>Validate the Models</strong> Against Reality</li>
        <li><strong>Operate, Monitor, and Maintain</strong> Compliance for Life</li>
      </ol>

      <h2 id="technical">Technical Requirements</h2>
      <h3>The Technical Requirements, Explained Simply</h3>
      <h4>6.1 — Reactive Power and Voltage Control</h4>
      <p>Reactive power is the part of electricity that does not do useful work but is essential for holding voltage steady. IEEE 2800 requires every plant to be a good voltage citizen at the RPA.</p>
      <ul>
        <li><strong>Capability:</strong> inject and absorb reactive power equal to at least ~33% of rating (≈0.95 power factor) while delivering full active power.</li>
        <li><strong>Control modes:</strong> voltage-regulation mode (droop up to 0.3 p.u.), power-factor mode, and reactive-power mode.</li>
        <li><strong>Dynamic response:</strong> start responding within 200 ms; settle with a damping ratio of at least 0.3.</li>
      </ul>

      <h4>6.3 — Ride-Through: The Heart of the Standard</h4>
      <p>Ride-through means staying connected and supporting the grid through a disturbance instead of tripping off. The standard is blunt: <strong>if a plant trips because of its own protection while inside a defined ride-through envelope, that is non-compliance — full stop.</strong></p>

      <table class="info-table">
        <thead>
          <tr><th>Voltage at RPA</th><th>Required Behavior</th><th>Min. Time (with aux.)</th><th>Min. Time (without)</th></tr>
        </thead>
        <tbody>
          <tr><td>Above 1.20 p.u.</td><td>May ride through or trip</td><td>—</td><td>—</td></tr>
          <tr><td>1.10 – 1.20 p.u.</td><td>Mandatory operation</td><td>1.0 s</td><td>1.0 s</td></tr>
          <tr><td>0.90 – 1.05 p.u.</td><td>Continuous operation</td><td>Continuous</td><td>Continuous</td></tr>
          <tr><td>Below 0.90 p.u.</td><td>Mandatory operation</td><td>3.0 s</td><td>6.0 s</td></tr>
        </tbody>
      </table>

      <h4>6.4 — Power Quality</h4>
      <p>Inverters switch at high speed and can inject distortion. IEEE 2800 caps what the plant may emit at the RPA:</p>
      <ul>
        <li><strong>Flicker:</strong> short-term (Pst) ≤ 0.35; long-term (Plt) ≤ 0.25</li>
        <li><strong>Harmonics:</strong> current-distortion limits per IEEE 519 framework</li>
        <li><strong>Overvoltage:</strong> limits on temporary overvoltage the plant may contribute</li>
      </ul>

      <h2 id="verification">Verification</h2>
      <h3>How Compliance Is Proven: The Verification Lifecycle</h3>
      <p>IEEE 2800 does not take your word for it. It defines a sequence of verification methods, and a matrix specifying which methods apply to which requirement.</p>
      <p><strong>Notice Where the Weight Falls:</strong> Manufacturers own the type tests, but the design evaluation, as-built check, commissioning, model validation, and lifetime monitoring all sit with the Generating Owner and its operator. That is the majority of the work, and the part that demands the deepest engineering.</p>

      <h2 id="case-studies">Real-World Experience</h2>
      <h3>Three Anonymized Case Studies</h3>

      <div class="case-study">
        <span class="case-study__label">Case Study 1 · Solar PV · Weak Grid</span>
        <div class="case-study__title">The Weak-Grid Solar Plant That Failed Ride-Through on Paper</div>
        <p><strong>The Challenge:</strong> A several-hundred-megawatt solar project was interconnecting at a remote point with a very low short-circuit ratio. When the utility required an EMT-based design evaluation, the plant model showed sustained oscillations during recovery from faults.</p>
        <p><strong>Keentel's Approach:</strong> Built a validated EMT model from actual inverter control data. Reproduced the oscillatory behavior, isolated it to plant-controller interactions. Re-tuned control parameters and defined a supplemental reactive device.</p>
        <p><strong>The Outcome:</strong> The re-engineered design rode through the full fault set with well-damped recovery. The project cleared the utility's design evaluation without entering the re-study queue.</p>
        <p><em>Lesson: On weak grids, EMT study quality is the project. Generic models cannot reveal these interactions.</em></p>
      </div>

      <div class="case-study">
        <span class="case-study__label">Case Study 2 · Battery Storage · Reactive Shortfall</span>
        <div class="case-study__title">The Battery Plant That Could Not Deliver Reactive Power Where It Counted</div>
        <p><strong>The Challenge:</strong> A battery storage plant's design fell short of the required reactive injection and absorption range at the Point of Measurement after losses were accounted for.</p>
        <p><strong>Keentel's Approach:</strong> Quantified the reactive shrinkage from inverter terminals to the RPA. Evaluated options and implemented a coordinated plant-controller and tap solution.</p>
        <p><strong>The Outcome:</strong> The plant met its reactive-power obligations with a solution cheaper than inverter oversizing, and passed commissioning tests without rework.</p>
        <p><em>Lesson: Reactive capability is a plant-level property. Designing to inverter nameplate alone is one of the most costly mistakes.</em></p>
      </div>

      <div class="case-study">
        <span class="case-study__label">Case Study 3 · Operating Plant · Protection Failure</span>
        <div class="case-study__title">The Post-Energization Trip That Should Never Have Happened</div>
        <p><strong>The Challenge:</strong> An already-operating plant tripped off-line during a routine, distant transmission fault — a ride-through event. The utility flagged the trip as a potential compliance failure.</p>
        <p><strong>Keentel's Approach:</strong> Pulled high-resolution disturbance recordings. Traced the trip to an aggressive inverter-level self-protection threshold never coordinated with plant protection. Re-coordinated settings across units and plant.</p>
        <p><strong>The Outcome:</strong> The corrected settings demonstrated ride-through capability. The event analysis satisfied the utility and a configuration-control process was put in place to prevent recurrence.</p>
        <p><em>Lesson: Most compliance failures are discovered in the field, at the worst possible time. Disciplined protection coordination up front is the cheapest insurance.</em></p>
      </div>

      <h2 id="faq">Frequently Asked Questions</h2>

      <div class="faq-item">
        <button class="faq-item__question" onclick="toggleFaq(this)">
          What exactly is IEEE 2800, and is it mandatory?
          <span class="faq-item__icon">+</span>
        </button>
        <div class="faq-item__answer">
          <p>IEEE 2800™-2022 is a technical standard that establishes uniform minimum performance requirements for inverter-based resources connecting to transmission and sub-transmission systems. It becomes mandatory when adopted by the Authority Governing Interconnection Requirements (AGIR) in your region — typically the local utility, RTO, or regulatory body. Many North American utilities now require IEEE 2800 compliance in their interconnection agreements.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-item__question" onclick="toggleFaq(this)">
          My inverters are UL 1741-certified. Doesn't that make my plant compliant?
          <span class="faq-item__icon">+</span>
        </button>
        <div class="faq-item__answer">
          <p>No. UL 1741 certification applies to individual inverters, not the entire plant. IEEE 2800 compliance is measured at the Reference Point of Applicability (RPA) for the aggregated plant. Equipment certification is a building block, not a finished building. Plant-level factors like collector system losses, transformer impedance, and control coordination all affect compliance.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-item__question" onclick="toggleFaq(this)">
          What is the "RPA" and why does it keep coming up?
          <span class="faq-item__icon">+</span>
        </button>
        <div class="faq-item__answer">
          <p>The Reference Point of Applicability (RPA) is the defined electrical location where all IEEE 2800 requirements are measured and verified. By default this is the Point of Measurement (POM), often at or near the Point of Interconnection (POI). Compliance is judged on the aggregate plant at the RPA — not on any single piece of equipment.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-item__question" onclick="toggleFaq(this)">
          Do I really need an EMT model? They are expensive.
          <span class="faq-item__icon">+</span>
        </button>
        <div class="faq-item__answer">
          <p>For plants connecting to weak grids (low short-circuit ratio), EMT studies are typically non-negotiable. Generic positive-sequence models cannot capture the fast control interactions that cause oscillations and ride-through failures. Skipping EMT studies on a weak grid is the single most common reason projects get stuck in utility re-study queues for months. For strong-grid interconnections, the utility will specify whether EMT models are required.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-item__question" onclick="toggleFaq(this)">
          What is a "weak grid" and why does it complicate everything?
          <span class="faq-item__icon">+</span>
        </button>
        <div class="faq-item__answer">
          <p>A weak grid has a low short-circuit ratio (SCR), meaning the grid impedance is high relative to the plant's rating. In weak-grid conditions, inverter controls can interact with the network impedance, causing voltage instability, oscillations, and poor dynamic performance. These interactions can only be studied with EMT-level models that capture the fast dynamics of inverter controls.</p>
        </div>
      </div>
    `
  }
};

export function getPostBySlug(slug: string): BlogPostFull | undefined {
  return blogPostFull[slug];
}