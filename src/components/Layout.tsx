import { ReactNode } from 'react'
import Head from 'next/head'
export default function Layout({
  title,
  children,
}: {
  title: string
  children: ReactNode
}): JSX.Element {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  )
}
