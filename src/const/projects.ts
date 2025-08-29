import { ProjectItem } from '@/interfaces'

// Import markdown files directly
import polkadotDescription from './projectDescriptions/polkadot.md'
import top3GlobalBank from './projectDescriptions/top3GlobalBank.md'
import smartVaultsDescription from './projectDescriptions/smartVaults.md'
import hyphaDescription from './projectDescriptions/hypha.md'
import sAndKDescription from './projectDescriptions/s&k.md'
import bennyFiDescription from './projectDescriptions/bennyFi.md'
import prxyDescription from './projectDescriptions/prxy.md'

const projects: ProjectItem[] = [
   {
     id: 2,
     name: 'Polkadot',
     image: '/images/projects/polkadotProj.jpg',
     projectSummary: 'Using LLMs as onboarding and governance tools',
     client: 'Polkadot-Polkassembly',
     projectDetails: polkadotDescription,
     completedDate: '',
     services: ['AI'],
   },
   {
     id: 3,
     name: 'Top 3 Global Bank',
     image: '/images/projects/top3GlobalProj.jpg',
     projectSummary: 'Making sense of chaos with AI',
     client: '',
     projectDetails: top3GlobalBank,
     services: ['AI', 'Analytics'],
     completedDate: '',
   },
   {
     id: 4,
     name: 'Smart Vaults',
     image: '/images/projects/smartVaultsProj.jpg',
     projectSummary: 'Smart Bitcoin wallet wtih taproot miniscript',
     client: '',
     projectDetails: smartVaultsDescription,
     completedDate: '',
     services: ['Bitcoin'],
   },
   {
     id: 5,
     name: 'Hypha',
     image: '/images/projects/hyphaProj.jpg',
     projectSummary: 'DAO platform for regenerative projects',
     client: 'Hypha',
     projectDetails: hyphaDescription,
     completedDate: '',
     services: ['VUE', 'DESIGN', 'BLOKCHAIN'],
   },
   {
     id: 6,
     name: 'S&K',
     image: '/images/projects/s&kProj.jpg',
     projectSummary: 'Modern investment due diligence for brokers.',
     client: "Snyder Kearney's",
     projectDetails: sAndKDescription,
     completedDate: '',
     services: ['Analitycs', 'Banking'],
   },
   {
     id: 7,
     name: 'BennyFi',
     image: '/images/projects/bennyProj.jpg',
     projectSummary: 'Pledge the Yield, not the Principal',
     client: 'BennyFi',
     projectDetails: bennyFiDescription,
     completedDate: '',
     services: ['Blockchain', 'Design'],
   },
   {
     id: 8,
     name: 'PRXY',
     image: '/images/projects/prxyProj.jpg',
     projectSummary: 'The best solution for EB-5 compliance',
     client: 'PRXY Co',
     projectDetails: prxyDescription,
     completedDate: '',
     services: ['Blockchain', 'Vue'],
   },
  //  {
  //    id: 9,
  //    name: 'Software Solution',
  //    image: '/images/projects/softwareSolutionProj.jpeg',
  //    projectSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //    client: 'Bryan Hennesy',
  //    projectDetails: lorem1,
  //    completedDate: '02/03/2023',
  //    services: ['Development'],
  //  },
  //  {
  //    id: 10,
  //    name: 'Digital Marketing',
  //    image: '/images/projects/digitalMarketingProj.jpeg',
  //    projectSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //    client: 'Digital Capita',
  //    projectDetails: lorem2,
  //    completedDate: '08/10/2022',
  //    services: ['Development'],
  //  },
  //  {
  //    id: 11,
  //    name: 'Marketing Strategy',
  //    image: '/images/projects/marketingStrategyProj.jpeg',
  //    projectSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //    client: 'Mutil-Digital Capita',
  //    projectDetails: lorem3,
  //    completedDate: '06/06/2022',
  //    services: ['Development'],
  //  },
  //  {
  //    id: 12,
  //    name: 'Website Redesign',
  //    image: '/images/projects/websiteRedesignProj.jpeg',
  //    projectSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //    client: 'Will Walters',
  //    projectDetails: lorem4,
  //    completedDate: '10/01/2021',
  //    services: ['Development'],
  //  },
  //  {
  //    id: 13,
  //    name: 'Brand Identity',
  //    image: '/images/projects/brandIdentityProj.jpeg',
  //    projectSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //    client: 'Bryan Hennesy',
  //    projectDetails: lorem5,
  //    completedDate: '12/08/2021',
  //    services: ['Development'],
  //  },
  //  {
  //    id: 14,
  //    name: 'Development',
  //    image: '/images/projects/developmentProj.jpeg',
  //    projectSummary: 'The best solution for EB-5 compliance',
  //    client: 'Will Walters',
  //    projectDetails: lorem6,
  //    completedDate: '02/26/2023',
  //    services: ['Blockchain', 'Vue'],
  //  }
 ] 

export default projects
