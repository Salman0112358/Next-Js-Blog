
import { request, gql } from "graphql-request"; //allows for graph ql querying

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

console.log("hello")

export const getPosts = async () => {
    const query = gql`
      query MyQuery {
        postsConnection {
          edges {
            cursor
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.postsConnection.edges;
  };
  
