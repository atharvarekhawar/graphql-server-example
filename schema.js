// '!' signifies required
export const typeDefs = /* GraphQL */ `
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!] #a review cannot be nullable but the array can be empty
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }
  type Query {
    reviews: [Review]
    review(id: ID!): Review
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
    author(id: ID!): Author
  }
`;
