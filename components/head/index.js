import Head from "next/head"
import { headProperties } from "../../constants/head"

const HeadComponent = ({ type }) => {
  const data = headProperties[type]
  return (
    <Head>
      <title>{data?.title}</title>
      <meta name="description" content={data?.content} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export { HeadComponent }
