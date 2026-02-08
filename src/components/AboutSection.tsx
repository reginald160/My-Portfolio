import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Globe, Award } from "lucide-react";

const stats = [
  { icon: Code2, value: "5+", label: "Years Experience" },
  { icon: Database, value: "20+", label: "Projects Delivered" },
  { icon: Globe, value: "£20M+", label: "Revenue Impact" },
  { icon: Award, value: "2", label: "Industry Awards" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card/50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="line-accent mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
              Building Scalable, Cloud-Native Solutions
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm an efficient and results-driven Senior .NET Engineer based in London, United Kingdom, 
                with over 5 years' experience designing, developing, and deploying scalable, event-driven, 
                and cloud-native applications across finance, trading, risk management, and e-commerce sectors.
              </p>
              <p>
                Expert in C#, .NET Core, Azure, and microservices architecture, with a strong focus on 
                performance optimisation, system resilience, and CI/CD automation. Adept at leading 
                cross-functional teams to deliver secure, high-availability platforms that drive business value.
              </p>
              <p>
                Recognised for transforming monolithic systems into containerised microservices, improving 
                scalability by 40% and enabling £20M+ revenue growth in the first quarter post-deployment 
                at my current role at Bivisoft Limited.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["London, UK", "MSc Computer Science", "Available for Work"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-secondary rounded-full text-sm text-muted-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="card-glass rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="text-primary" size={24} />
                </div>
                <div className="text-3xl font-display font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
