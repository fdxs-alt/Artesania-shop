import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
interface Props {
  content: string
}

const ComponentName: React.FC<Props> = ({ content }): JSX.Element => {
  return <ReactMarkdown plugins={[gfm]}>{content}</ReactMarkdown>
}

export default ComponentName
