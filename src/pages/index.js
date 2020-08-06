import React from "react"
import { graphql } from "gatsby"

export default function Home({
  data: {
    datoCmsArticle: { title },
  },
}) {
  return <div>{title}</div>
}

export const query = graphql`
  {
    datoCmsArticle {
      title
    }
  }
`
