import { FunctionComponent } from 'react'
import Layout from '../../components/layout'
import { Person } from '@types'
import Details from 'components/Details'

const PersonDetail : FunctionComponent<{data: Person}> = ({ data }) => {
  return (
    <Layout>
      <Details />
    </Layout>

  )
}


export default PersonDetail;