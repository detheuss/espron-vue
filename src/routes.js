import Home from "./components/Home.vue"
import CaseStudies from "./components/CaseStudies.vue"
import CaseStudy from "./components/CaseStudy.vue"
export default [
    {path: "/", component: Home },
    {path: "/case-studies", component: CaseStudies},
    {name: "CaseStudy", path: "/case-study/:id", component: CaseStudy}
]