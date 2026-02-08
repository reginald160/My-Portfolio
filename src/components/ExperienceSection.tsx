import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Lead .NET Developer",
    company: "Bivisoft Limited",
    location: "London, United Kingdom",
    period: "Jan 2024 – Present",
    current: true,
    highlights: [
      "Architected and implemented cloud-native, event-driven solutions using .NET Core, Java Spring Boot, Azure Functions, Event Grid, and Cosmos DB",
      "Built containerised microservices on Azure Kubernetes Service (AKS), achieving 99.98% uptime and 30% faster response times",
      "Developed Angular front-end applications with TypeScript for enterprise trading platforms",
      "Automated build and release pipelines using Azure DevOps (YAML), reducing deployment time by 70%",
      "Collaborated with cross-functional teams to deliver high-performance trading tools, contributing to a £20M revenue increase in Q1 2024",
    ],
  },
  {
    title: "Senior .NET Developer / Software Engineer",
    company: "SDSD Prestige LTD",
    location: "London, United Kingdom",
    period: "Dec 2021 – Nov 2023",
    highlights: [
      "Developed cloud-native logistics and trading systems with .NET Core, Java Spring Boot, Angular, and PostgreSQL hosted on Azure",
      "Designed RESTful APIs integrated with Azure Service Bus and Event Hubs",
      "Implemented Domain-Driven Design reducing service coupling by 40%",
      "Added telemetry with Application Insights, reducing incident time by 35%",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Sterling Bank",
    location: "Nigeria",
    period: "Feb 2016 – Dec 2021",
    highlights: [
      "Designed and maintained web apps using Angular, ASP.NET Core, Java Spring Boot, and Azure services",
      "Implemented secure transaction workflows with RabbitMQ, SignalR, and Azure Event Grid",
      "Containerized .NET and Java applications with Docker and deployed them to Azure Kubernetes Service (AKS) and AWS EC2",
      "Worked on API security, authentication, and authorization using JWT and Azure Key Vault",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-card/50">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="line-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey of continuous growth, from building banking infrastructure 
            to leading cloud-native enterprise development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 top-8 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background hidden md:block z-10" />

                <div className={`md:ml-20 card-glass rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 ${exp.current ? 'border-primary/30' : ''}`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-display font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/30">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Briefcase size={16} className="text-primary" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={16} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground text-sm bg-secondary px-4 py-2 rounded-full">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">●</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
