"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Bug, GitBranch, GitCommit, GitMerge, GitPullRequest, Kanban, Users } from "lucide-react"

export default function Projects() {
  const miracleMorningImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/miracle%20morning%20(7)-W3I1XfBF3BKbUybHf3dIdBy72oRPPi.png",
      alt: "Dashboard showing calendar and insights",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/miracle%20morning-vDCSjocgCRiFMRTnjg9FOFTvr5os22.png",
      alt: "SAVERS activities screens",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/miracle%20morning%20(5)-KLUzTV6yfBUrIbMwGXg3L2Zo05Eefy.png",
      alt: "Live Events Calendar",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/miracle%20morning%20(6)-w1mC213Mxt4XXqWCJDWBpeJtnFreiv.png",
      alt: "Premium Experience",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/miracle%20morning%20(2)-hBtIlpgy0qLjpyCHn16ShSZ1sdjVLh.png",
      alt: "Library view with activities",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/miracle%20morning%20(4)-HfcLEW2hx7PbXD9fXhvuS8xDuzJFZO.png",
      alt: "30-Day Guest Pass",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/miracle%20morning%20(1)-5aDZfLoXRSSYA0z5RrRgmj4Pbuhwx4.png",
      alt: "Library screens and bio",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/miracle%20morning%20(3)-bzLTQFVtMly8hPtkEsBrB1F3hXK1fS.png",
      alt: "Silence and Affirmations screens",
    },
  ]

  const pauseBreatheImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pause%20Breathe%20Reflect%20(3)-a3kG40QOB16m0RUcrcubpB8Ax9r36z.png",
      alt: "Discover page showing various meditation categories",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pause%20Breathe%20Reflect%20(5)-Va6yZHFOs0JbuUruDlTU6gxfksn6B1.png",
      alt: "Statistics and sharing page showing meditation journey",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pause%20Breathe%20Reflect%20(1)-faIUcHruPHSqgTaW2YmBnWwnBPm1WT.png",
      alt: "Home page for first time users with Pause, Breathe, Reflect sections",
    },
  ]

  const findMeResourceImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FindMeResource%20(1)-zm6VhZSlOOb0A3McUnPimMvolklNZ4.png",
      alt: "Freelancer listing page showing available workers and their skills",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FindMeResource%20(2)-vyMayOHEKo0AQxviMwC2nkt0iVw2N6.png",
      alt: "Job listings page with filtering options and multiple job posts",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FindMeResource%20(3)-rglZBwvMjAN1VM4wml0ufY5rRIJ0MA.png",
      alt: "Calendar interface showing availability and scheduling",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FindMeResource%20(6)-GIhbMnTFI14DEcEXVvozbSQQfojMHm.png",
      alt: "Detailed job posting page for Senior UX Designer position",
    },
  ]

  const vidiVetImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vidivet%20(3)-uyokmWnJPp6QPq7wSNkh3AWQJTt3f3.png",
      alt: "VidiVet landing page showing mobile app interface with vet chat features",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vidivet%20(1)-7jNSIzImcLmF1Hht1Tz1rNaGYBpSJT.png",
      alt: "Comparison infographic of benefits with and without VidiVet",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vidivet%20(2)-QQwp8Xw20iN1FodFmg7mSEG5RrDYQ2.png",
      alt: "TeleHealth feature showcase with 24/7 triage capabilities",
    },
  ]

  const projects = [
    {
      name: "Miracle Morning Routine",
      company: "DPL",
      period: "Jul 2024 - Present",
      tools: ["React Native", "Redux", "Payment API", "Firebase"],
      description: `Contributed to the development of the Miracle Morning Routine app, following the SAVERS Rule (Silence, Affirmation, Visualization, Exercise, Reading, Scribing) to guide users in building a structured morning routine. Implemented a dynamic scheduling system for customized challenges (e.g., 25-day, 40-day plans) that adapts based on user progress and daily activity. Integrated motivational scripts and audio recordings from authors, allowing users to listen and practice mindfulness and positivity techniques directly within the app. Implemented progress tracking and reminders to help users maintain their morning routine consistency.`,
      developmentProcess: `Worked in an Agile team using Scrum methodology. Participated in daily stand-ups, sprint planning, and retrospectives. Collaborated closely with the Product Owner to refine user stories and the Scrum Master to overcome obstacles. Managed releases through staging and production environments, addressing bugs and implementing hotfixes as needed.`,
      images: miracleMorningImages,
    },
    {
      name: "Pause Breathe Reflect",
      company: "DPL",
      period: "Jul 2023 - Jun 2024",
      tools: ["React Native", "Context API", "Hooks"],
      description: `Developed the Pause Breathe Reflect meditation app, featuring over 50 mood-based topics that users can select from to engage in guided meditation, complete with author's audio scripts for enhanced mindfulness. Implemented a chatbot that interacts with users, allowing them to express their feelings and receive motivational responses and meditation recommendations based on their input. Managed multiple staging and production releases, ensuring smooth feature rollouts and resolving numerous hotfixes to maintain app stability. Created an intuitive user interface that promotes calm and focus through thoughtful design and smooth transitions.`,
      developmentProcess: `Utilized a Kanban-style workflow for continuous delivery. Engaged in regular code reviews and pair programming sessions with senior developers. Worked closely with QA team to ensure thorough testing and bug fixes before each release. Implemented CI/CD pipelines to streamline the deployment process.`,
      images: pauseBreatheImages,
    },
    {
      name: "FindMeResource",
      company: "Nova Tech",
      period: "Oct 2022 - Jun 2023",
      tools: ["React JS", "ES6", "Custom CSS"],
      description: `Developed a comprehensive platform designed to bridge the gap between organizations and freelancers or job seekers. Implemented an intuitive interface with advanced search filters and real-time availability tracking to simplify the hiring process. Created a sophisticated scheduling system that allows organizations to post job opportunities while enabling professionals to explore and apply for roles that match their skills. Integrated features for profile management, job posting, application tracking, and communication between parties. Built a responsive dashboard that provides organizations with insights into applicant profiles and helps job seekers track their applications efficiently.`,
      developmentProcess: `Collaborated with a cross-functional team including backend developers, UX designers, and product managers. Participated in bi-weekly sprints with sprint planning, review, and retrospective meetings. Utilized JIRA for task management and bug tracking. Implemented feature flags for gradual rollouts and A/B testing.`,
      images: findMeResourceImages,
    },
    {
      name: "VidiVet",
      company: "Nova Tech",
      period: "Mar 2021 - Sep 2022",
      tools: ["ReactJS", "React Native", "CSS"],
      description: `Developed a comprehensive React-based platform for seamless PetCare management, enabling remote consultations between veterinarians and pet owners. Implemented key features including client pet registration, vet consultation scheduling, and personalized care plan sharing. Created functional components and custom hooks for video consultations, chat functionality, and appointment management. Integrated various APIs to ensure seamless communication between vets and pet owners, including real-time video calling and messaging systems.`,
      developmentProcess: `Worked in a distributed Agile team with US-based clients, adapting to different time zones for effective collaboration. Participated in daily stand-ups and sprint ceremonies. Utilized GitLab for version control and CI/CD. Collaborated with backend developers to design and implement RESTful APIs. Conducted regular performance optimizations and refactoring sessions to maintain code quality.`,
      images: vidiVetImages,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-indigo-600 to-purple-700 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 text-gray-800 p-8 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-indigo-700">{project.name}</h3>
              <p className="text-gray-600 mb-6">
                {project.company} | {project.period}
              </p>

              {project.images && (
                <div className="mb-8">
                  <Carousel className="w-full max-w-4xl mx-auto">
                    <CarouselContent>
                      {project.images.map((image, imageIndex) => (
                        <CarouselItem key={imageIndex}>
                          <div className="flex aspect-[3/2] items-center justify-center p-2">
                            <Image
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              width={600}
                              height={400}
                              className="rounded-lg object-contain w-full h-full"
                              priority={imageIndex === 0}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </div>
              )}

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="inline-block bg-indigo-100 text-indigo-800 rounded-full px-3 py-1 text-sm font-semibold"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center text-indigo-800">
                  <Kanban className="mr-2" /> Development Process
                </h4>
                <p className="text-gray-700 leading-relaxed">{project.developmentProcess}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

