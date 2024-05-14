import { createSlice } from '@reduxjs/toolkit'

const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: [],
  },
  reducers: {
    addEmployee: (state, action) => {
      const serializedData = {
        ...action.payload,
        id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      }
      state.employees.push(serializedData)
    },
  },
})

export const { addEmployee } = employeeSlice.actions
export default employeeSlice.reducer
