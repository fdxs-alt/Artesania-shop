import { GraphQLClient } from 'graphql-request'

const endpoint = `https://graphql.datocms.com/`

declare type Variables = {
  [key: string]: unknown
}

export interface GraphQLRequestContext<V = Variables> {
  query: string
  variables?: V
}

const request = <T>({
  query,
  variables,
}: GraphQLRequestContext): Promise<T> => {
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  })
  return client.request(query, variables)
}

export { request }
