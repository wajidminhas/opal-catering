

import { StaticImageData } from "next/image"



export type Product = { 
    id: number,
    price: number,
    image: StaticImageData,
    category: string,
    name: string
}