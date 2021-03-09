export interface ResponsiveImage {
  src: string
}

export interface Photo {
  id: string
  format: string
  responsiveImage: ResponsiveImage
}

export interface Content {
  slug: string
  content: string
  date: string
  title: string
  photo: Photo
  id: string
  heading: string
}
export interface Product {
  content: string
  id: string
  link: string
  title: string
  photos: Photo[]
  slug: string
  shortDescription: string
}

export interface SingleProduct {
  content: string
  id: string
  link: string
  title: string
  photo: Photo
  slug: string
  shortDescription: string
}
