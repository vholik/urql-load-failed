"use client";

import { useQuery, gql } from "@urql/next";

const query = gql`
  query Query {
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  }
`;

export default function Home() {
  const [result] = useQuery({ query });

  console.log(result);

  return <>Urql next</>;
}
