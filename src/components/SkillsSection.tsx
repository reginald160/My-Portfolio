import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming & Development",
    skills: ["C#", "ASP.NET Core", "Java", "Spring Boot", "EF Core", "Kafka", "SignalR", "RabbitMQ", "RESTful APIs", "SOLID", "OOP", "Agile Scrum"],
  },
  {
    title: "Front-End",
    skills: ["Angular", "TypeScript", "HTML5", "CSS3", "Bootstrap", "jQuery", "MVC", "JavaScript"],
  },
  {
    title: "Cloud (Azure)",
    skills: ["App Services", "Azure Functions", "Cosmos DB", "Azure SQL", "API Management", "Event Grid", "Event Hubs", "Key Vault", "Application Insights"],
  },
  {
    title: "AWS",
    skills: ["EC2", "S3", "RDS", "Lambda", "EKS", "ECR"],
  },
  {
    title: "DevOps",
    skills: ["Azure DevOps (YAML)", "GitHub Actions", "Jenkins", "Docker", "Kubernetes", "Terraform", "CI/CD Automation"],
  },
  {
    title: "Architecture & Design",
    skills: ["Microservices", "DDD", "Event-Driven Systems", "API Gateway", "CQRS", "Circuit Breaker", "TDD", "Agile"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="line-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over 5+ years of professional development, 
            from enterprise banking systems to cutting-edge cloud-native solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="card-glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <h3 className="text-lg font-display font-semibold mb-4 text-foreground group-hover:text-gradient transition-all duration-300">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary/50 rounded-lg text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 card-glass rounded-2xl p-8"
        >
          <h3 className="text-xl font-display font-semibold mb-6 text-center text-gradient">
            Monitoring, Security & Collaboration
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "DataDog",
              "Application Insights",
              "JWT Authentication",
              "Secure Payment Systems",
              "GitHub",
              "Bitbucket",
              "Agile (Scrum & Kanban)",
              "TortoiseSVN",
            ].map((item) => (
              <span
                key={item}
                className="px-5 py-2.5 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
