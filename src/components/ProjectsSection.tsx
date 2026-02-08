import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Layers, Shield, CreditCard, MessageSquare, Calendar } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    icon: Layers,
    title: "MAMS (Asset & Fleet Management CRM)",
    tech: ["Umbraco 9", "C#", "SQL Server", "Surface Controllers"],
    description:
      "Architected an enterprise asset and fleet management CRM using Umbraco 9 with custom Document Types, Backoffice extensions, and SQL Server integration. Implemented configurable, content-driven dashboards and real-time reporting for 500+ users across 12 international shipping hubs.",
    impact: "500+ users across 12 hubs",
  },
  {
    icon: Shield,
    title: "Sterling Bank Consumer Loan Platform",
    tech: ["ASP.NET MVC", "SQL Server", "AWS Cognito"],
    description:
      "Created a secure online lending system with comprehensive authentication, risk assessment, and automated approval workflows. Built with enterprise-grade security using AWS Cognito for identity management.",
    impact: "Enterprise-scale lending system",
  },
  {
    icon: CreditCard,
    title: "Sterling Bank Card Payment Gateway",
    tech: ["Microservices", "RabbitMQ", "Kafka", "Azure Pipelines"],
    description:
      "Engineered an integrated payment gateway using microservices architecture with event-driven design. Implemented real-time transaction processing with message queues ensuring seamless payment flows.",
    impact: "High-volume transaction processing",
  },
  {
    icon: MessageSquare,
    title: "E-Commerce Real-Time Messaging System",
    tech: ["SignalR", "Redis", "Azure", "React"],
    description:
      "Built a scalable real-time messaging platform for e-commerce applications enabling instant customer-seller communication. Implemented WebSocket connections with Redis for session management and message persistence.",
    impact: "Real-time communication at scale",
  },
  {
    icon: Calendar,
    title: "Patient Appointment System",
    tech: ["ASP.NET Core", "Entity Framework", "Azure Functions"],
    description:
      "Developed a comprehensive healthcare appointment management system with automated scheduling, reminders, and patient record integration. Streamlined booking workflows reducing wait times significantly.",
    impact: "Improved patient experience",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Key <span className="text-gradient">Projects</span>
          </h2>
          <div className="line-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Highlighting enterprise solutions that demonstrate technical leadership 
            and measurable business impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={project.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="card-glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group flex flex-col h-full">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                      <project.icon className="text-primary" size={28} />
                    </div>

                    <h3 className="text-xl font-display font-semibold mb-3 text-foreground group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-secondary/50 rounded-md text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-sm text-primary font-medium">
                        {project.impact}
                      </span>
                      <button className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-card border-border hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hidden md:flex -right-4 bg-card border-border hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
