export const POST_QUERY = `query PostBySlug($slug: String) {
    article(filter: {slug: {eq: $slug}}) {
        slug
        content
        date
        title
        heading
        photo {
          id
          format
          responsiveImage {
            src
          }
        }
        id
    }
}`

export const PATHS_QUERY = `{
    allArticles {
      slug
    }
}`

export const BLOG_QUERY = `{
  allArticles {
    slug
      content
      date
      title
      heading
      photo {
        id
        format
        responsiveImage {
          src
        }
      }
      id
  }
}`

export const HOME_QUERY = `{
    allArticles(filter: {featured: {eq: "true"}}) {
      slug
      content
      date
      title
      heading
      photo {
        id
        format
        responsiveImage {
          src
        }
      }
      id
    }
    allProducts {
      content
      id
      link
      title
      slug
      shortDescription
      photos {
        responsiveImage {
          src
        }
      }
    }
}`

export const PRODUCT_PARAMS = `{
  allProducts {
    slug
  }
}`

export const PRODUCT_QUERY = `query ProductBySlug($slug: String) {
  product(filter: {slug: {eq: $slug}}) {
      content
      id
      link
      title
      slug
      shortDescription
      photos {
        responsiveImage {
          src
        }
      }
   }
}`
