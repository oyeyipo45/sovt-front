import { FunctionComponent } from 'react'
import { Person } from '@types'
import Details from 'components/Details'
import Layout from 'components/layout'

const PersonDetail : FunctionComponent<{data: Person}> = ({ data }) => {
  return (
    <Layout>
      <Details />
    </Layout>

  )
}


export default PersonDetail;