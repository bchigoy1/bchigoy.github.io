// src/data/portfolio-data.js

export const portfolioData = {
  personal: {
    name: "Byron Chigoy",
    title: "Director of Data Engineering and Data Science",
    company: "Whitman, Requardt & Associates, LLP",
    email: "bchigoy@gmail.com",
    location: "Asheville, North Carolina",
    linkedin: "linkedin.com/in/byron-chigoy-257ba4b"
  },

  summary: {
    points: [
      "Transportation Planning and Innovation leader with location intelligence expertise",
      "SaaS mapping and data science product development",
      "Infrastructure and transportation planning specialist",
      "Cross-functional team leadership",
      "Digital transformation initiatives expert"
    ]
  },

  education: [
    {
      degree: "M.L.A. in Classics",
      school: "St. John's College",
      location: "Annapolis, MD",
      year: "2005"
    },
    {
      degree: "B.A. in U.S. History",
      school: "University of Louisiana",
      location: "Lafayette, LA",
      year: "1999"
    }
  ],

  experience: [
    {
      company: "Whitman, Requardt & Associates",
      role: "Director of Data Engineering and Data Science",
      period: "2023-Present",
      location: "Asheville, NC",
      highlights: [
        "Leading digital transformation for 800-person engineering firm",
        "Implemented hybrid cloud-based data architecture",
        "Achieved 100% improvement in data accessibility and delivery",
        "Built and led collaborative data science team"
      ]
    },
    {
      company: "StreetLight Data/Jacobs",
      role: "Product Manager",
      period: "2021-2023",
      location: "San Francisco, CA",
      highlights: [
        "Drove $40M in annual sales through location-based SaaS products",
        "Led development of QuickView platform for mobility analysis",
        "Managed cross-functional teams across engineering and product",
        "Optimized UI/UX patterns based on customer feedback",
        "Evaluated market opportunities for US and Canadian sectors"
      ]
    }
  ],

  products: [
    {
      name: "StreetLight Data Solutions",
      projects: [
        {
          title: "Congestion Management QuickView",
          description: "Led development of user-friendly interface for mobility pattern analysis"
        },
        {
          title: "Truck Location Platform",
          description: "Integrated multiple data sources (INRIX, GeoTab, NeXtraq, Omnitracs)"
        },
        {
          title: "Location Analytics Engine",
          description: "Built comprehensive system for freight planning and analysis"
        }
      ]
    },
    {
      name: "Transportation Planning Tools",
      projects: [
        {
          title: "TxDOT Assessment Platform",
          description: "Interactive web-based mapping system (compat.tti.tamu.edu)"
        },
        {
          title: "H-GAC Cube Cargo Model",
          description: "Multi-modal freight modeling system for Houston-Galveston region"
        },
        {
          title: "Statewide Analysis Tools",
          description: "Developed project prioritization and forecasting models for $350B+ in infrastructure"
        }
      ]
    }
  ],

  research: {
    federal: [
      {
        title: "Origin-Destination Data Methods (FHWA)",
        points: [
          "Led comprehensive study of cellular, GPS, and Bluetooth technologies",
          "Created evaluation framework for planning applications",
          "Developed best practices for different geographic scales"
        ]
      },
      {
        title: "Freight Flow Analysis (BTS)",
        points: [
          "Integrated big data with Commodity Flow Survey",
          "Improved import/export tracking methods",
          "Reduced data collection costs and respondent burden"
        ]
      }
    ],
    state: [
      {
        title: "ADOT Long-Distance Travel Study",
        points: [
          "Developed data collection strategy for statewide modeling",
          "Evaluated multiple location tracking technologies",
          "Created implementation plan for O-D data collection"
        ]
      },
      {
        title: "Texas Travel Survey Program",
        points: [
          "Managed statewide travel pattern analysis",
          "Developed expansion methods for survey data",
          "Created trip generation models for MPOs"
        ]
      }
    ]
  },

  skills: {
    mapping: ["ESRI", "QGIS", "Mapbox"],
    dataEngineering: ["PostgreSQL/PostGIS", "Python", "AWS", "Azure"],
    analysis: ["Location Intelligence", "GIS", "Spatial Analysis"],
    product: ["UI/UX Design", "Agile", "Requirements Specification"],
    domain: ["Transportation Planning", "Infrastructure", "Active Transportation"]
  },

  recognition: {
    certifications: [
      {
        name: "Pragmatic Institute - PMC Level I",
        year: "2024"
      }
    ],
    awards: [
      {
        name: "Texas A&M Transportation Institute, Researcher of the Year",
        year: "2017"
      }
    ]
  },

  presentations: [
    {
      title: "Vehicle Occupants and Driver Behavior Analysis",
      year: "2020"
    },
    {
      title: "Cloud-Based Data Applications for Travel Research",
      year: "2018"
    },
    {
      title: "GPS and Cell Data Implementation Strategies",
      year: "2018"
    },
    {
      title: "Transportation Planning Scenario Tools",
      year: "2016"
    }
  ]
};
