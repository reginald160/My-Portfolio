import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BadgeCheck } from "lucide-react";

const education = [
  {
    degree: "M.Sc. Computer Science",
    institution: "York St. John University",
    location: "London",
    year: "2024",
  },
  {
    degree: "B.Tech. Mathematics & Computer Science",
    institution: "Federal University of Technology, Owerri",
    location: "Nigeria",
    year: "2015",
  },
];

const certifications = [
  "Microsoft Certified: Azure Fundamentals (AZ-900) – In view",
  "Professional Software Engineering Master Certification (PSEMC) – Codebits Academy",
  "Web Application Developer Associate 10.3 – Udemy",
  "Mobile App Development Certification – Udemy",
  "Strategic Management Certification – Open2Study, Australia",
];

const awards = [
  {
    title: "Outstanding Software Engineer Award",
    org: "Sterling Bank Nigeria",
    description: "Recognized for delivering high-quality solutions and demonstrating technical excellence",
  },
  {
    title: "Innovation Excellence Award",
    org: "SDSD Prestige Ltd",
    description: "Awarded for pioneering new technologies and optimizing system performance",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card/50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Education & <span className="text-gradient">Credentials</span>
          </h2>
          <div className="line-accent mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.degree} className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-muted-foreground text-sm">{edu.institution}</p>
                  <p className="text-primary text-sm">{edu.location} • {edu.year}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <BadgeCheck className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold">Awards</h3>
            </div>
            <div className="space-y-6">
              {awards.map((award) => (
                <div key={award.title} className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-semibold text-foreground text-sm">{award.title}</h4>
                  <p className="text-primary text-sm">{award.org}</p>
                  <p className="text-muted-foreground text-xs mt-1">{award.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
