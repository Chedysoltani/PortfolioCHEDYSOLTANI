import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
    
    <motion.div className="xs:w-[250px] w-full">
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <img
                    src={icon}
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                />

                <h3 className="text-white text-[20px] font-bold text-center">
                    {title}
                    
                </h3>
            </div>
        </motion.div>
    </motion.div>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
    I'm a Full Stack Software Engineer with 2 years of experience, specializing in modern web and mobile applications using Angular, Vue.js, Flutter, Dart, Spring Boot, Node.js, and Python. I excel in managing databases like PostgreSQL, MongoDB, and MySQL, and leveraging AWS for scalable deployments. Passionate about solving complex challenges, I collaborate closely with teams to deliver intuitive, high-performance solutions that drive user engagement and business success. Let’s build something impactful together!
</motion.p>

            <div className="mt-20 w-full flex justify-center flex-wrap gap-10 md:gap-40">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
