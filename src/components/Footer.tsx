import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-center md:text-left">
            <a href="#" className="font-display text-xl font-semibold text-gradient">
              Reginald Ozougwu
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              .NET Developer
            </p>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            OguejiOffor © {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
