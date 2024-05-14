import { Route, Routes } from 'react-router-dom'
import CreateEmployee from '../../pages/CreateEmployee'
import EmployeeList from '../../pages/EmployeeList'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CreateEmployee />} />
      <Route path="/employeelist" element={<EmployeeList />} />
    </Routes>
  )
}
