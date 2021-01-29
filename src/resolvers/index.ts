import { NonEmptyArray } from "type-graphql";
import BookResolver from "./BookResolver";

const resolvers: NonEmptyArray<Function> = [
  BookResolver
]

export default resolvers;
