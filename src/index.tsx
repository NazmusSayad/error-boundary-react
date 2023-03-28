import React from 'react'
import ErrorBoundary from './ErrorBoundary'

type Props = { force?: boolean; fallback: any; children: any }
export default function ErrorBoundaryReact(props: Props) {
  const { children, fallback, force } = props

  try {
    if (
      !force &&
      // @ts-ignore
      (import.meta.env.MODE === 'development' ||
        // @ts-ignore
        import.meta.env.mode === 'development' ||
        // @ts-ignore
        import.meta.MODE === 'development' ||
        // @ts-ignore
        import.meta.mode === 'development')
    )
      return children
  } catch {}

  return <ErrorBoundary fallback={fallback}>{children}</ErrorBoundary>
}
