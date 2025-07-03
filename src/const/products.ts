import { ProductItem } from '@/interfaces'

const products: ProductItem[] = [
 {
    id: 1,
    name: 'VALIDOCS',
    image: 'images/products/validocsProd.webp',
    productSummary: 'Intelligent document collection and validations',
    services: ['AI', 'Automation', 'SAAS'],
    redirectTo: 'validocs'
 },
 {
    id: 2,
    name: 'MASTER TIKTOK',
    image: 'images/products/masterTiktokProd.png',
    productSummary: 'Track brand presence, analyze competitors, and spot industry trends.',
    services: ['Analytics', 'Social Media', 'Marketing'],
    redirectTo: ''
 }
]

export default products
