import { ProductItem } from '@/interfaces'

const products: ProductItem[] = [
 {
    id: 1,
    name: 'VALIDOCS',
    image: 'https://cdn.prod.website-files.com/65d4ed6e925bb1886eaebc57/684c7efaeeda8c30a9cdd314_assets_task_01jxn678wpeesvtppkvwa2h5yv_1749836635_img_0.webp',
    productSummary: 'Intelligent document collection and validations',
    services: ['AI', 'Automation', 'SAAS'],
    redirectTo: 'validocs'
 },
 {
    id: 2,
    name: 'MASTER TIKTOK',
    image: 'https://cdn.prod.website-files.com/65d4ed6e925bb1886eaebc57/684c6cb851db7cbd250274a2_tiktok.png',
    productSummary: 'Track brand presence, analyze competitors, and spot industry trends.',
    services: ['Analytics', 'Social Media', 'Marketing'],
    redirectTo: ''
 }
]

export default products
