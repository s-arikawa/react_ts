import * as React from 'react'
import { rows } from './data'
import Thead from './table/thead'
import Tbody from './table/tbody'

const Component: React.FC = () => (
  <div className={"container clearfix"}>
    <h1>健康に関する調査</h1>
    <table className={"table"}>
      <Thead />
      <Tbody rows={rows} />
    </table>
  </div>
)
export default Component