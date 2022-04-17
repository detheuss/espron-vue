import Home from "./components/Home.vue"
import CaseStudies from "./components/CaseStudies.vue"
import CaseStudy from "./components/CaseStudy.vue"
import Contact from "./components/Contact.vue"
export default [
    {path: "/", component: Home },
    {path: "/case-studies", component: CaseStudies},
    {path: "/contact-us", component: Contact},
    {name: "CaseStudy", path: "/case-study/:id", component: CaseStudy}
]