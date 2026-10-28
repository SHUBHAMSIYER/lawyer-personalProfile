export const issueAreas = [
  {
    index: "01",
    title: "Property, RERA & Tenancy",
    image:
      "/images/issue-property.jpg",
    alt: "Model house with keys",
    description:
      "Builder delays, RERA complaints, society redevelopment, title concerns, and tenancy disputes under Maharashtra law.",
    nextStep: "Typical next step: document review and a forum recommendation (RERA, civil court, or negotiation).",
  },
  {
    index: "02",
    title: "Family & Succession",
    image:
      "/images/issue-family.jpg",
    alt: "Extended family holding hands at sunset",
    description:
      "Divorce, maintenance, custody, wills, and partition of inherited property, handled with confidentiality.",
    nextStep: "Typical next step: option outline and introduction to a family law specialist.",
  },
  {
    index: "03",
    title: "Consumer & Commercial Disputes",
    image:
      "/images/issue-commercial.jpg",
    alt: "Invoices and a calculator on a table",
    description:
      "Unpaid invoices, defective services, vendor disputes, cheque dishonour, and MSME recovery.",
    nextStep: "Typical next step: notice strategy and a view on consumer forum versus civil recovery.",
  },
  {
    index: "04",
    title: "Employment & Workplace",
    image:
      "/images/issue-employment.jpg",
    alt: "Two professionals shaking hands",
    description:
      "Termination, unpaid dues, workplace harassment, and policy questions for employees and employers.",
    nextStep: "Typical next step: checklist of records to gather and a route to the right forum.",
  },
  {
    index: "05",
    title: "Civil Disputes & Documentation",
    image:
      "/images/issue-civil.jpg",
    alt: "Wooden judge's gavel",
    description:
      "Injunctions, specific performance, agreements, notices, and drafting support before a dispute escalates.",
    nextStep: "Typical next step: assessment of limitation, evidence, and whether to litigate or settle.",
  },
  {
    index: "06",
    title: "General / Not Sure",
    image:
      "/images/issue-general.jpg",
    alt: "Person signing a document",
    description:
      "If you cannot tell which category your matter falls into, that is exactly where we start.",
    nextStep: "Typical next step: we classify the issue and tell you who should handle it.",
  },
] as const;

export const issueCategoryOptions = [
  "Property, RERA & Tenancy",
  "Family & Succession",
  "Consumer & Commercial Disputes",
  "Employment & Workplace",
  "Civil Disputes & Documentation",
  "General / Not sure",
] as const;

export const districtOptions = [
  "Mumbai / Mumbai Suburban",
  "Thane / Navi Mumbai / Palghar",
  "Pune",
  "Nagpur",
  "Nashik",
  "Chhatrapati Sambhajinagar",
  "Kolhapur / Sangli / Satara",
  "Other Maharashtra district",
] as const;
