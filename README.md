# error-boundary-react

<a href="https://npmjs.com/package/error-boundary-react">
  <img src="https://img.shields.io/npm/v/error-boundary-react" alt="npm package"> 
</a>

## Installation

- with npm

```shell
npm i error-boundary-react
```

- with yarn

```shell
yarn add error-boundary-react
```

- with pnpm

```shell
pnpm add error-boundary-react
```

## Usage

```App.js```

```jsx
import ErrorBoundary from 'error-boundary-react'
 
function App() {
  return (
    <ErrorBoundary 
      fallback={<Handler /> /* no props */} 
      fallback={HandlerWithProps /* with props */} 
      force={false /* By default it's false, false means ErrorBoundary will be disabled in dev mode */}
    >
      <...>
    </ErrorBoundary>
  )
}

function Handler() {
  return <div>Error</div>
}

function HandlerWithProps({ error, errorInfo }) {
  return <div>{error.message}</div>
}
 
```
