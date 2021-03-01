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
