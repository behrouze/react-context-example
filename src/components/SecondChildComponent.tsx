import { useSimpleContext } from 'context/SimpleContext'

export const SecondChildComponent = () => {
  const { appData } = useSimpleContext()
  return (
    <>
      <h2>Second Child</h2>
      <p>{`coucou ${appData?.name}, as tu ${appData?.age} ans ?`}</p>
    </>
  )
}
