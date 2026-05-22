import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import fullstackImg from "@/assets/svc-fullstack.jpg";
import dataImg from "@/assets/svc-data.jpg";
import softwareImg from "@/assets/svc-software.jpg";
import aiImg from "@/assets/svc-ai.jpg";
import blockchainImg from "@/assets/svc-blockchain.jpg";
import cloudImg from "@/assets/svc-cloud.jpg";
import biImg from "@/assets/svc-bi.jpg";
import securityImg from "@/assets/svc-security.jpg";
import sapImg from "@/assets/svc-sap.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Theokot Solutions" },
      { name: "description", content: "Full-Stack, Data Science, AI, Cloud, Blockchain, Security, BI and SAP training courses." },
      { property: "og:title", content: "Services — Theokot Solutions" },
      { property: "og:description", content: "Hands-on software training programs designed by industry practitioners." },
    ],
  }),
  component: Services,
});

type Card = { title: string; items: string[]; image: string };

const cards: Card[] = [
  {
    title: "Full-Stack Development Training",
    image: fullstackImg,
    items: [
      "Full Stack with Java",
      "Full Stack with Python",
      "Full Stack with Mern",
      "Full Stack with Mean",
      "Full Stack with C#",
      "Dotnet",
    ],
  },
  {
    title: "Top Trending AI Courses",
    image: aiImg,
    items: [
      "Generative AI",
      "Product Management",
      "AI Agents",
      "Excel Integration with AI",
      "Java",
      "Python",
      "Machine Learning",
      "Salesforce",
    ],
  },
  {
    title: "Data Science Training",
    image: dataImg,
    items: [
      "Data Science with Python",
      "Data Science with Sas Training",
      "Data Science with Spark Training",
      "Data Science with Julie Training",
    ],
  },
  {
    title: "Software Development",
    image: softwareImg,
    items: [
      "Java Full Stack Dev",
      ".Net Full Stack Dev",
      "Golang Full stack Dev",
      "C++",
      "C",
      "Database",
      "Big Data",
      "Software Testing",
      "Mobile App Dev",
      "Gaming Dev",
      "Blockchain Dev",
      "Web3 Dev",
      "Performance Testing",
      "RUST",
      "Kotlin",
      "Swift",
      "Python Full Stack Dev",
      "PHP Full stack Dev",
      "Embedded Systems Dev",
      "Ruby Full Stack Dev",
      "Cloud-Native Full Stack",
      "Site Reliability Engg",
    ],
  },
  {
    title: "AI & Blockchain",
    image: blockchainImg,
    items: [
      "Artificial Intelligence",
      "Data Science",
      "Machine Learning",
      "Blockchain",
      "Generative AI",
      "Prompt Engineering",
      "Robotic Process",
      "Deep Learning",
      "Natural Language Processing (NLP)",
      "Intelligent Automation",
      "Blockchain-secured AI Models",
      "Excel with ChatGPT",
      "Excel with AI",
    ],
  },
  {
    title: "Cloud & DevOps",
    image: cloudImg,
    items: [
      "AWS",
      "GCP",
      "Microsoft Azure",
      "Kubernetes",
      "Docker",
      "AliCloud",
      "Ansible",
      "MultiCloud",
      "Informatica",
      "DWH Fundamentals",
      "Unix",
      "Sumo Logic",
      "Nasumi & Trintri",
      "Microsoft Bicep",
      "SAP Ariba",
      "IPM Apigee",
      "Microsoft Sentinel",
      "Maven",
      "Puppet",
      "Chef",
      "Jenkins",
      "ELK Stack",
      "Kibana",
      "GIT / GITHUB",
    ],
  },
  {
    title: "BI Tools",
    image: biImg,
    items: [
      "PowerBI",
      "DWH Fundamentals",
      "Informatica",
      "QlikView",
      "Tableau",
      "Talend",
      "Teradata",
      "Qlik Sense",
      "ThoughtSpot",
      "Domo",
      "Google Looker Studio",
      "SAP BusinessObjects",
      "Oracle Analytics",
      "Sisense",
      "TIBCO spotfire",
      "Dundas BI",
    ],
  },
  {
    title: "Networking and Security",
    image: securityImg,
    items: [
      "Information Security",
      "Application Security",
      "Networking",
      "Blockchain Security",
      "Cyber Security",
      "Cloud Security",
      "CompTIA",
      "CCSP|CEH|CHFI",
      "EXABEAM",
      "Forcepoint Web security",
      "Secure Browsers",
      "5G Security",
      "Quantum-Safe/Post-Quantum Cryptography",
    ],
  },
  {
    title: "SAP Modules",
    image: sapImg,
    items: [
      "SAP BODS",
      "SAP ABAP",
      "SAP ARIBA",
      "SAP SD",
      "SAP FICO",
      "SAP MM",
      "SAP S/4 HANA",
      "SAP WM",
      "SAP FIELD GLASS",
      "SAP SRC",
      "SAP BTP",
      "SAP HANA",
      "SAP Business Object",
      "SAP C4C",
      "SAP BusinessObjects BI",
    ],
  },
];

function Services() {
  return (
    <PageShell>
      <section className="bg-secondary/50">
        <div className="container-px max-w-6xl mx-auto py-20">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold tracking-[0.2em] uppercase">Services</h1>
            <div className="mt-4 mx-auto h-px w-12 bg-foreground/40" />
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((c) => (
              <article
                key={c.title}
                className="bg-secondary border border-border/60 rounded-sm overflow-hidden flex flex-col"
              >
                <div className="aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    width={800}
                    height={450}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[15px] font-bold text-primary">{c.title}</h3>
                  <ul className="mt-4 space-y-1.5">
                    {c.items.map((i) => (
                      <li key={i} className="text-sm text-primary/90 hover:underline cursor-pointer">
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
