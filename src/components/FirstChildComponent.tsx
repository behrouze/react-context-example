import { SecondChildComponent } from './SecondChildComponent'

export const FirstChildComponent = () => {
  return (
    <div className="with-borders">
      <h1>First Child</h1>
      <SecondChildComponent />
    </div>
  )
}
