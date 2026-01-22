'use client';

import React, { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { emailjsJobsConfig } from "../../utils/emailjsConfig";
import { MdArrowOutward } from "react-icons/md";

const jobProfiles = [
    {
        slug: "senior-developer", title: "Senior Full Stack Developer", location: "Remote / On-site", experience: "5+ Yrs. Exp.", postedOn: "July 3rd 2025", jd: "We are looking for a highly experienced Senior Full Stack Developer to lead the development of scalable, secure, and user-friendly web and mobile applications. You will work across the full development lifecycle from system design to deployment.", kr: [
            "Develop and maintain both front-end and back-end components",
            "Lead architecture design and tech stack decisions",
            "Integrate APIs, databases, and third-party services",
            "Ensure cross-platform optimization and responsiveness",
            "Write clean, testable, and efficient code",
            "Collaborate with designers, developers, and stakeholders",
            "Conduct code reviews and mentor junior developers",
            "Troubleshoot, debug, and upgrade existing applications",
        ],
        ts: [
            "Frontend: React.js / Angular / Vue.js",
            "Backend: Node.js / Python / PHP / Java ",
            "Database: MongoDB / PostgreSQL / MySQL",
            "Tools: Git, Docker, REST APIs, CI/CD pipelines",
        ]
    },
    {
        slug: "business-development-manager", title: "Business Development Manager", location: "Remote / On-site", experience: "3+ Yrs. Exp.", postedOn: "July 3rd 2025", jd: "We're seeking a result-driven Business Development Manager to expand our client base and establish long-term partnerships in international markets. Ideal for someone with a strong network and passion for tech solutions.", kr: [
            "Identify and approach potential leads in targeted geographies",
            "Pitch IT services like web/app development, SaaS, and digital marketing",
            "Prepare proposals, quotations, and follow up on leads",
            "Maintain CRM records and track outreach metrics",
            "Represent the company in online and offline meetings",
            "Collaborate with the tech team to understand offerings deeply",
            "Achieve monthly and quarterly sales targets",
            "Stay updated on market trends and competition"
        ],
        ts: [


        ]
    },

    {
        slug: "senior-ai-developer",
        title: "Senior AI Developer",
        location: "Remote / Office-Based",
        experience: "5+ Yrs. Exp.",
        postedOn: "May 6th 2025",
        jd: "Lead the development and deployment of cutting-edge AI/ML solutions, driving innovation across our product portfolio while mentoring junior team members.",
        kr: [
            "Architect end-to-end ML pipelines for production",
            "Research and implement state-of-the-art AI models",
            "Optimize model performance and scalability",
            "Establish MLOps best practices",
            "Collaborate with product teams on AI strategy",
            "Ensure ethical AI implementation",
            "Publish technical papers/patents (optional)"
        ],
        ts: [
            "Expertise in Python (PyTorch/TensorFlow)",
            "LLM fine-tuning and deployment",
            "Distributed training frameworks",
            "CUDA/GPU optimization",
            "MLflow/Kubeflow",
            "AWS SageMaker/GCP Vertex AI"
        ]
    },

    {
        slug: "senior-backend-developer",
        title: "Senior Backend Developer",
        location: "Remote / Office-Based",
        experience: "5+ Yrs. Exp.",
        postedOn: "May 6th 2025",
        jd: "Design and maintain scalable server-side architectures, optimize APIs, and lead backend development initiatives.",
        kr: [
            "Develop high-performance RESTful/gRPC services",
            "Implement database schemas and caching strategies",
            "Mentor junior developers in best practices",
            "Conduct system reliability and security audits"
        ],
        ts: [
            "Node.js/Python/Go",
            "PostgreSQL/MongoDB",
            "Docker/Kubernetes",
            "AWS/GCP infrastructure"
        ]
    },

    {
        slug: "video-editor", title: "Video Editor", location: "Remote", experience: "2 Yrs. Exp.", postedOn: "July 3rd 2025", jd: "We are seeking a creative and detail-oriented Video Editor to produce engaging content for social media, YouTube, and marketing campaigns. The ideal candidate has a strong eye for design and storytelling.",
        kr: [
            "Edit raw video footage into polished final content",
            "Add music, subtitles, graphics, and transitions as needed",
            "Collaborate with content creators, designers, and marketers",
            "Repurpose content into short reels/stories for Instagram, TikTok, etc",
            "Maintain consistent visual identity and branding",
            "Manage multiple projects and deliver on time",
            "Stay updated with video trends and platform guidelines"
        ],
        ts: [
            "Adobe Premiere Pro, After Effects, Final Cut Pro",
            "CapCut, DaVinci Resolve (optional)",
            "Canva or Photoshop for thumbnails (optional)",
        ]
    },

    {
        slug: "project-manager-ai",
        title: "Project Manager AI",
        location: "Remote",
        experience: "2 Yrs. Exp.",
        postedOn: "July 3rd 2025",
        jd: "We are seeking a strategic Project Manager with AI expertise to drive cross-functional projects, ensuring on-time delivery of machine learning solutions while managing stakeholders and technical teams.",
        kr: [
            "Lead Agile/Scrum workflows for AI product development",
            "Coordinate between data scientists, engineers, and business units",
            "Track project KPIs using Jira/Asana and mitigate risks",
            "Document requirements and maintain technical project roadmaps",
            "Optimize resource allocation for AI model deployment cycles",
            "Ensure compliance with AI ethics and data governance standards"
        ],
        ts: [
            "Project Management (Jira/Asana/MS Project)",
            "AI/ML concepts (LLMs, computer vision, NLP)",
            "Agile/Scrum certifications (CSM/PSM preferred)",
            "Data pipeline tools (Apache Airflow, Kubeflow)"
        ]
    },
    {
        slug: "project-manager-ui",
        title: "Project Manager (UI)",
        location: "Remote",
        experience: "2 Yrs. Exp.",
        postedOn: "July 3rd 2025",
        jd: "We seek a detail-oriented Project Manager to oversee UI/UX development projects, ensuring seamless collaboration between designers, developers, and stakeholders to deliver pixel-perfect digital experiences.",
        kr: [
            "Manage end-to-end UI project timelines and deliverables",
            "Bridge communication between UX designers and frontend teams",
            "Track progress using Figma/Sketch versions and Jira tickets",
            "Ensure design systems and component libraries are implemented",
            "Conduct UI QA reviews and prioritize accessibility compliance",
            "Facilitate stakeholder feedback loops and design sprints"
        ],
        ts: [
            "Figma/Sketch/Adobe XD (design handoff tools)",
            "Jira/Trello/Asana (task management)",
            "Basic HTML/CSS understanding",
            "Agile/Scrum methodologies"
        ]
    },
    {
        slug: "senior-frontend-developer",
        title: "Senior Frontend Developer",
        location: "Remote / Office-Based",
        experience: "5+ Yrs. Exp.",
        postedOn: "July 3rd 2025",
        jd: "Build responsive, accessible UIs and lead frontend architecture decisions for complex web applications.",
        kr: [
            "Implement React/Vue.js frameworks",
            "Optimize Webpack/Rollup configurations",
            "Enforce WCAG accessibility standards",
            "Spearhead performance optimization"
        ],
        ts: [
            "TypeScript/JavaScript ES6+",
            "CSS-in-JS/SCSS",
            "Jest/Cypress testing",
            "Web Components"
        ]
    },
    {
        slug: "senior-frontend-developer",
        title: "Senior Frontend Developer",
        location: "Remote / Office-Based",
        experience: "5+ Yrs. Exp.",
        postedOn: "July 3rd 2025",
        jd: "Build responsive, accessible UIs and lead frontend architecture decisions for complex web applications.",
        kr: [
            "Implement React/Vue.js frameworks",
            "Optimize Webpack/Rollup configurations",
            "Enforce WCAG accessibility standards",
            "Spearhead performance optimization"
        ],
        ts: [
            "TypeScript/JavaScript ES6+",
            "CSS-in-JS/SCSS",
            "Jest/Cypress testing",
            "Web Components"
        ]
    },
    {
        slug: "ai-developer",
        title: "AI Developer",
        location: "In office - Full time",
        experience: "3+ Yrs. Exp.",
        postedOn: "July 3rd 2025",
        jd: "Develop and deploy machine learning models to solve business problems across product verticals.",
        kr: [
            "Preprocess datasets and train models",
            "Fine-tune LLMs for domain-specific tasks",
            "Optimize inference pipelines",
            "Collaborate with data engineers"
        ],
        ts: [
            "Python (PyTorch/TensorFlow)",
            "HuggingFace Transformers",
            "MLflow/Kubeflow",
            "ONNX/TensorRT"
        ]
    },
    {
        slug: "frontend-developer",
        title: "Frontend Developer",
        location: "In office - Full time",
        experience: "2+ Yrs. Exp.",
        postedOn: "July 3rd 2025",
        jd: "Implement UI components and features based on design specifications for customer-facing applications.",
        kr: [
            "Translate Figma designs to code",
            "Write reusable React components",
            "Debug cross-browser issues",
            "Participate in code reviews"
        ],
        ts: [
            "React.js/Next.js",
            "Redux Toolkit",
            "Git/GitHub",
            "Responsive design"
        ]
    },
    {
        slug: "backend-developer",
        title: "Backend Developer",
        location: "In office - Full time",
        experience: "2+ Yrs. Exp.",
        postedOn: "July 3rd 2025",
        jd: "Develop and maintain server-side logic, databases, and APIs for high-traffic web services.",
        kr: [
            "Build CRUD APIs with authentication",
            "Write database migrations",
            "Monitor application performance",
            "Implement unit/integration tests"
        ],
        ts: [
            "Java/Spring Boot",
            "SQL/NoSQL databases",
            "OAuth2/JWT",
            "Linux/CLI"
        ]
    },
    {
        slug: "devops-lead",
        title: "DevOps Lead",
        location: "Remote / Office-Based",
        experience: "6+ Yrs. Exp.",
        postedOn: "July 3rd 2025",
        jd: "Architect CI/CD pipelines and cloud infrastructure while leading DevOps best practices organization-wide.",
        kr: [
            "Design Kubernetes clusters",
            "Implement GitOps workflows",
            "Cost-optimize cloud resources",
            "Establish incident response protocols"
        ],
        ts: [
            "Terraform/Ansible",
            "AWS EKS/GKE",
            "Prometheus/Grafana",
            "Istio/Linkerd"
        ]
    },
    {
        slug: "junior-devops-developer",
        title: "Junior DevOps Developer",
        location: "In office - Full time",
        experience: "1+ Yr. Exp.",
        postedOn: "July 3rd 2025",
        jd: "Support infrastructure automation and deployment processes under senior team guidance.",
        kr: [
            "Maintain CI/CD pipelines",
            "Monitor system alerts",
            "Assist in cloud provisioning",
            "Document runbooks"
        ],
        ts: [
            "Docker basics",
            "GitHub Actions",
            "Bash/Python scripting",
            "AWS Fundamentals"
        ]
    },
    {
        slug: "ui-ux-head",
        title: "UI/UX Head",
        location: "Remote / Office-Based",
        experience: "7+ Yrs. Exp.",
        postedOn: "July 3rd 2025",
        jd: "Lead design strategy, establish design systems, and oversee user research for all digital products.",
        kr: [
            "Define UX research methodologies",
            "Approach design system governance",
            "Present to executive stakeholders",
            "Mentor design team members"
        ],
        ts: [
            "Figma/Sketch",
            "UserTesting.com",
            "DesignOps tools",
            "HTML/CSS fundamentals"
        ]
    },
    {
        slug: "ui-designer",
        title: "UI Designer",
        location: "In office - Full time",
        experience: "3+ Yrs. Exp.",
        postedOn: "July 3rd 2025",
        jd: "Create visually compelling interfaces and maintain design system components for product teams.",
        kr: [
            "Produce high-fidelity mockups",
            "Animate micro-interactions",
            "Collaborate with frontend devs",
            "Conduct UI audits"
        ],
        ts: [
            "Figma Auto Layout",
            "Lottie/After Effects",
            "Design systems",
            "Accessibility standards"
        ]
    },
    {
        slug: "quality-analyst-lead",
        title: "Quality Analyst Lead",
        location: "Remote / Office-Based",
        experience: "5+ Yrs. Exp.",
        postedOn: "July 3rd 2025",
        jd: "Establish QA processes, lead testing teams, and ensure release quality across all platforms.",
        kr: [
            "Define test automation strategy",
            "Analyze production defects",
            "Optimize regression test suites",
            "Coordinate cross-team QA syncs"
        ],
        ts: [
            "Selenium/Cypress",
            "LoadRunner/JMeter",
            "TestRail/QTest",
            "CI/CD integration"
        ]
    },
    {
        slug: "quality-analyst",
        title: "Quality Analyst",
        location: "In office - Full time",
        experience: "2+ Yrs. Exp.",
        postedOn: "July 3rd 2025",
        jd: "Execute test cases and report defects to ensure software meets functional and performance requirements.",
        kr: [
            "Write manual test scripts",
            "Log detailed bug reports",
            "Verify fixes in staging",
            "Participate in sprint planning"
        ],
        ts: [
            "JIRA/Xray",
            "Postman/SoapUI",
            "SQL for test data",
            "Mobile testing"
        ]
    },
    {
        slug: "senior-data-analyst",
        title: "Senior Data Analyst",
        location: "Remote / Office-Based",
        experience: "5+ Yrs. Exp.",
        postedOn: "July 3rd 2025",
        jd: "Transform complex data into actionable insights through advanced analytics and visualization.",
        kr: [
            "Develop predictive models",
            "Design executive dashboards",
            "Mentor junior analysts",
            "Automate ETL processes"
        ],
        ts: [
            "SQL/Python/R",
            "Tableau/Power BI",
            "BigQuery/Snowflake",
            "Statistical modeling"
        ]
    },
    {
        slug: "data-analyst",
        title: "Data Analyst",
        location: "In office - Full time",
        experience: "2+ Yrs. Exp.",
        postedOn: "July 3rd 2025",
        jd: "Support business decisions through data collection, analysis, and reporting.",
        kr: [
            "Build routine reports",
            "Clean and validate datasets",
            "Perform ad-hoc analyses",
            "Document data dictionaries"
        ],
        ts: [
            "Excel/Google Sheets",
            "Basic SQL",
            "Looker/Data Studio",
            "A/B testing"
        ]
    },
    {
        slug: "customer-support-executive",
        title: "Customer Support Executive",
        location: "In office - Full time",
        experience: "1+ Yr. Exp.",
        postedOn: "July 3rd 2025",
        jd: "Deliver exceptional technical support and build customer relationships through problem resolution.",
        kr: [
            "Handle support tickets",
            "Reproduce reported issues",
            "Escalate technical bugs",
            "Maintain KB articles"
        ],
        ts: [
            "Zendesk/Intercom",
            "Screen recording tools",
            "Basic troubleshooting",
            "CRM systems"
        ]
    },
    {
        slug: "senior-blockchain-developer",
        title: "Senior Blockchain Developer",
        location: "Remote / Office-Based",
        experience: "5+ Yrs. Exp.",
        postedOn: "July 3rd 2025",
        jd: "Architect and implement secure smart contracts and decentralized applications on blockchain networks.",
        kr: [
            "Develop Solidity/Rust contracts",
            "Optimize gas fees",
            "Audit contract security",
            "Research Layer 2 solutions"
        ],
        ts: [
            "Ethereum/Solana",
            "Hardhat/Foundry",
            "IPFS/The Graph",
            "ZK-proof systems"
        ]
    },
    {
        slug: "junior-blockchain-developer",
        title: "Junior Blockchain Developer",
        location: "In office - Full time",
        experience: "1+ Yr. Exp.",
        postedOn: "July 3rd 2025",
        jd: "Assist in blockchain development and testing under senior team supervision.",
        kr: [
            "Write test cases",
            "Monitor node health",
            "Assist in frontend integration",
            "Track blockchain metrics"
        ],
        ts: [
            "Basic Solidity",
            "Truffle/Ganache",
            "Web3.js/ethers.js",
            "Git version control"
        ]
    },

];

const Jobs = () => {



    const [errors, setErrors] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [agreed, setAgreed] = useState(false); // For checkbox

    const pathname = usePathname();
    const pathSegments = pathname.split('/');
    const jobId = pathSegments[pathSegments.length - 1];

    const form = useRef();

    const job = jobProfiles.find(profile => profile.slug === jobId);

    if (!job) return <div className="p-6">Job not found</div>;

    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        mobile: "",
        message: "",
        countryCode: "+91",
        location: "",
        experience: "",
        noticeperiod: "",
        currentsalary: "",
        expectedsalary: "",
        profile: job.title

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const errors = {};
        if (!formData.user_name.trim()) errors.user_name = "Name is required";
        if (!formData.user_email) {
            errors.user_email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
            errors.user_email = "Email is invalid";
        }
        if (!formData.mobile) {
            errors.mobile = "Mobile number is required";
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            errors.mobile = "Mobile number must be 10 digits";
        }
        if (!formData.message.trim()) errors.message = "Message is required";
        if (!formData.location.trim()) errors.location = "Location is required";
        if (!formData.experience.trim()) errors.experience = "Experience is required";
        if (!formData.noticeperiod.trim()) errors.noticeperiod = "Notice period is required";
        if (!formData.currentsalary.trim()) errors.currentsalary = "Current salary is required";
        if (!formData.expectedsalary.trim()) errors.expectedsalary = "Expected salary is required";

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (!agreed) {
            alert("You must agree to the terms and conditions to proceed.");
            return;
        }

        if (Object.keys(validationErrors).length === 0) {
            emailjs
                .send(
                    emailjsJobsConfig.serviceId,
                    emailjsJobsConfig.templateId,
                    formData,
                    emailjsJobsConfig.publicKey
                )
                .then(
                    (response) => {
                        console.log("SUCCESS!", response.status, response.text);
                        toast.success("Form submitted successfully!", {
                            position: "top-right",
                            autoClose: 3000,
                        });
                        setIsSubmitted(true);
                        // Add this line to open the modal
                        setOpenModal(true);
                        setFormData({
                            user_name: "",
                            user_email: "",
                            mobile: "",
                            message: "",
                            countryCode: "+91",
                            location: "",
                            experience: "",
                            noticeperiod: "",
                            currentsalary: "",
                            expectedsalary: "",
                            profile: ""

                        });
                        setAgreed(false);
                        setErrors({});
                        // setOpenModal(true)
                    },
                    (error) => {
                        console.error("FAILED...", error);
                        toast.error("There was an error sending your message.", {
                            position: "top-right",
                            autoClose: 3000,
                        });
                    }
                );
        } else {
            setErrors(validationErrors);
        }
    };


    return (
        <div className="mx-auto p-6 lg:p-12 mt-[50px] md:mt-[60px]">
            <div className="mb-6">
                <h2 className="text-2xl  text-center md:3xl lg:text-4xl mb-3 font-semibold">{job?.title}</h2>

                <div className="flex items-center text-lg md:text-xl lg:text-2xl mb-6 font-semibold gap-2 justify-center">
                    <p>{job?.postedOn}</p>
                    <p>{job.experience}</p>

                </div>



                <p className="mb-2 text-2xl "> <span className="font-semibold   text-[28px]" style={{
                    fontFamily: 'Poppins',
                }}>Job Description : </span> {job?.jd}</p>

                <h3 className="text-xl font-bold">
                    Key Responsibility
                </h3>
                <ul className="list-disc text-xl pl-5 mb-4">
                    {job.kr.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                {
                    job?.ts.length ?
                        <>

                            <h3 className="text-xl font-bold">
                                Tech Stack (preferred)
                            </h3>
                            <ul className="list-disc text-xl  pl-5 mb-4">
                                {job.ts.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                        </>
                        : ""

                }

                <hr className="mt-4" />
            </div>

            <div>
                <form onSubmit={handleSubmit} className="md:px-5">
                    <div className="flex flex-col md:w-[85%] m-auto ">

                        {/* Name Input */}
                        <div className="flex flex-col mb-2">
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Your Name"
                                value={formData.user_name}
                                onChange={handleChange}
                                className={`border p-2 rounded-md ${errors.user_name ? "border-red-500" : "border-gray-300"}`}
                                style={{ height: "40px" }}
                            />
                            {errors.user_name && <span className="text-red-500 text-sm">{errors.user_name}</span>}
                        </div>

                        {/* Email Input */}
                        <div className="flex flex-col mb-2">
                            <input
                                type="email"
                                name="user_email"
                                placeholder="Your Email"
                                value={formData.user_email}
                                onChange={handleChange}
                                className={`border p-2 rounded-md ${errors.user_email ? "border-red-500" : "border-gray-300"}`}
                                style={{ height: "40px" }}
                            />
                            {errors.user_email && <span className="text-red-500 text-sm">{errors.user_email}</span>}
                        </div>

                        {/* Location */}
                        <div className="flex flex-col mb-2">
                            <input
                                type="text"
                                name="location"
                                placeholder="Current Location"
                                value={formData.location}
                                onChange={handleChange}
                                className={`border p-2 rounded-md ${errors.location ? "border-red-500" : "border-gray-300"}`}
                                style={{ height: "40px" }}
                            />
                            {errors.location && <span className="text-red-500 text-sm">{errors.location}</span>}
                        </div>

                        {/* Experience */}
                        <div className="flex flex-col mb-2">
                            <input
                                type="text"
                                name="experience"
                                placeholder="Years of Experience"
                                value={formData.experience}
                                onChange={handleChange}
                                className={`border p-2 rounded-md ${errors.experience ? "border-red-500" : "border-gray-300"}`}
                                style={{ height: "40px" }}
                            />
                            {errors.experience && <span className="text-red-500 text-sm">{errors.experience}</span>}
                        </div>

                        {/* Notice Period */}
                        <div className="flex flex-col mb-2">
                            <input
                                type="text"
                                name="noticeperiod"
                                placeholder="Notice Period"
                                value={formData.noticeperiod}
                                onChange={handleChange}
                                className={`border p-2 rounded-md ${errors.noticeperiod ? "border-red-500" : "border-gray-300"}`}
                                style={{ height: "40px" }}
                            />
                            {errors.noticeperiod && <span className="text-red-500 text-sm">{errors.noticeperiod}</span>}
                        </div>

                        {/* Current Salary */}
                        <div className="flex flex-col mb-2">
                            <input
                                type="text"
                                name="currentsalary"
                                placeholder="Current Salary"
                                value={formData.currentsalary}
                                onChange={handleChange}
                                className={`border p-2 rounded-md ${errors.currentsalary ? "border-red-500" : "border-gray-300"}`}
                                style={{ height: "40px" }}
                            />
                            {errors.currentsalary && <span className="text-red-500 text-sm">{errors.currentsalary}</span>}
                        </div>

                        {/* Expected Salary */}
                        <div className="flex flex-col mb-2">
                            <input
                                type="text"
                                name="expectedsalary"
                                placeholder="Expected Salary"
                                value={formData.expectedsalary}
                                onChange={handleChange}
                                className={`border p-2 rounded-md ${errors.expectedsalary ? "border-red-500" : "border-gray-300"}`}
                                style={{ height: "40px" }}
                            />
                            {errors.expectedsalary && <span className="text-red-500 text-sm">{errors.expectedsalary}</span>}
                        </div>

                        {/* WhatsApp Number */}
                        <div>
                            <div className="flex border mb-2 border-gray-300 rounded-md overflow-hidden" style={{ height: "40px" }}>
                                <select
                                    value={formData.countryCode}
                                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                                    className="bg-white border-r-2 text-gray-800 p-2 pr-6 outline-none"
                                >
                                    {[
                                        { code: "+91", label: "🇮🇳" },
                                        { code: "+1", label: "🇺🇸" },
                                        { code: "+44", label: "🇬🇧 UK" },
                                        { code: "+61", label: "🇦🇺 AUS" },
                                        { code: "+81", label: "🇯🇵" },
                                        { code: "+971", label: "🇦🇪 UAE" },
                                        { code: "+880", label: "🇧🇩 BD" },
                                        { code: "+92", label: "🇵🇰 PK" },
                                    ].map((country) => (
                                        <option key={country.code} value={country.code}>
                                            {country.code} ({country.label})
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type="tel"
                                    maxLength={10}
                                    inputMode="numeric"
                                    placeholder="WhatsApp number"
                                    value={formData.mobile}
                                    onChange={(e) => {
                                        const onlyDigits = e.target.value.replace(/\D/g, "");
                                        if (onlyDigits.length <= 10) {
                                            setFormData({ ...formData, mobile: onlyDigits });
                                        }
                                    }}
                                    className="flex-1 p-3 outline-none"
                                />
                            </div>
                            {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
                        </div>

                        {/* Message / Cover Letter */}
                        <div className="flex w-full">
                            <textarea
                                name="message"
                                placeholder="Cover Letter / Message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className={`border p-2 rounded-md w-full ${errors.message ? "border-red-500" : "border-gray-300"}`}
                            ></textarea>
                        </div>
                        {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}

                        {/* Terms Checkbox */}
                        <div className="flex items-center gap-2 mt-4">
                            <input
                                type="checkbox"
                                id="terms"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                                className="border border-gray-400 cursor-pointer"
                            />
                            <label htmlFor="terms" className="text-sm text-gray-700">
                                I agree to the <a href="/terms-and-conditions" target="_blank" className="text-blue-600 underline">terms and conditions</a>.
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center mt-4">
                            <button
                                type="submit"
                                // style={{ backgroundColor: "#38419A" }}
                                disabled={!agreed}
                                className={`w-[200px] bg-[#FEEE99] text-black px-6 py-2 rounded-md cursor-pointer ${agreed ? "" : "cursor-not-allowed"} `}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </form>

                {isSubmitted && <p className="text-green-500 mt-4">Submitted successfully!</p>}
                {openModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 relative">
                            <button
                                onClick={() => setOpenModal(false)}
                                className="absolute bottom-3 right-4 text-gray-500 hover:text-red-500"
                            >
                                Cancel
                            </button>

                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@getraisetechnologies.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col"
                            >
                                <div className="flex items-center md:text-xl text-sm font-[Quicksand] font-medium text-[#0F0F0F] mb-1">
                                    <p className="mr-2">Kindly send us your latest CV/resume for further consideration.</p>
                                    <MdArrowOutward className="text-2xl text-[#0F0F0F]" />
                                </div>
                                <p className="text-[#949494] text-sm md:text-lg font-[Poppins] font-light">
                                    info@getraisetechnologies.com
                                </p>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Jobs;
