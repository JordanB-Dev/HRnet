import { Route, Routes } from 'react-router-dom'
import CreateEmployee from '../../pages/CreateEmployee'
import EmployeeList from '../../pages/EmployeeList'
import Header from '../../Layout/index'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employeelist" element={<EmployeeList />} />
      </Routes>
    </>
  )
}
