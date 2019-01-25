import React from 'react'

import Sidebar from './Sidebar'

import { routes }  from '../../configs'

export default class extends React.PureComponent {
  render() {
    return (
      <div>
        <Sidebar routes={routes}/>
      </div>
    )
  }
}
