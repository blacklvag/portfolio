import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { SocialLinks } from '../ui/SocialLinks'
import { socialLinks } from '../../data/portfolio'

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          label="Contact"
          title="Let's connect"
          description="Reach out via email or GitHub. "
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <SocialLinks links={socialLinks} />
        </motion.div>
      </div>
    </section>
  )
}
