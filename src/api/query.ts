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
  }`
