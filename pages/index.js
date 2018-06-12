import Layout from '../components/Layout'
import Link from 'next/link'
import ListPaySlip from './ListPaySlip'

export default class extends React.Component {
  
  constructor(props) {
    super(props)
  }

  componentDidMount(){
        
        
  }


  render() {
    return (
      <Layout>
        <row>
        <Link href="/CreatePaySlip" class="btn btn-primary">Add employee details</Link>
        </row>
        
         <ListPaySlip/>  
      </Layout>
    )
  }
}