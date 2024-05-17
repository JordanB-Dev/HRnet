import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../service/employeeSlice'
import Input from '../components/ui/Input'
import { Stack } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import SelectMenu from '../components/ui/SelectMenu'
import departmentOptions from '../assets/data/departmentData.json'
import states from '../assets/data/data.json'
import dayjs from 'dayjs'
import BtnDisabled from '../components/BtnDisabled'
import Btn from '../components/Btn'
import { toast, Toaster } from 'sonner'
import Modal from '../components/Modal'

export default function CreateEmployee() {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [department, setDepartment] = useState('')
  const [street, setStreet] = useState('')

  const isEmpty = (value) => value.trim() === ''
  const isLength = (value) =>
    value.trim().length < 2 || value.trim().length > 20
  const containsInvalidChars = (value) => /[^a-zA-Z0-9 ]/.test(value)

  const initialDate = {
    dateOfBirth: null,
    startDate: null,
  }
  const [date, setDate] = useState(initialDate)

  const handleDateChange = (name, newValue) => {
    setDate({
      ...date,
      [name]: newValue,
    })
  }

  const validateForm = () => {
    const fieldsToValidate = [
      { value: firstname, fieldName: 'First Name' },
      { value: lastname, fieldName: 'Last Name' },
      { value: street, fieldName: 'Street' },
      { value: city, fieldName: 'City' },
      { value: zipCode, fieldName: 'Zip Code' },
      { value: department, fieldName: 'Department' },
      { value: state, fieldName: 'State' },
    ]

    for (let { value, fieldName } of fieldsToValidate) {
      if (isEmpty(value)) {
        toast.error(`${fieldName} is required.`)
        return false
      }
      if (containsInvalidChars(value)) {
        toast.error(`${fieldName} contains invalid characters.`)
        return false
      }
      if (isLength(value)) {
        toast.error(`${fieldName} be between 3 and 20 characters.`)
        return false
      }
    }
    return true
  }

  const btn =
    firstname === '' ||
    lastname === '' ||
    street === '' ||
    city === '' ||
    department === '' ||
    state === '' ||
    zipCode === '' ||
    date.dateOfBirth === null ||
    date.startDate === null ? (
      <div className="flex items-center justify-center">
        <BtnDisabled title={`Save`} />
      </div>
    ) : (
      <div className="flex items-center justify-center">
        <Btn title={`Save`} />
      </div>
    )

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm(e)) return

    const serializedData = {
      firstName: firstname,
      lastName: lastname,
      department: department,
      dateOfBirth: date.dateOfBirth
        ? dayjs(date.dateOfBirth).format('MM/DD/YYYY')
        : null,
      startDate: date.startDate
        ? dayjs(date.startDate).format('MM/DD/YYYY')
        : null,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode,
    }

    dispatch(addEmployee(serializedData))
    setDate(initialDate)
    setOpen(true)
    setFirstname('')
    setLastname('')
    setState('')
    setCity('')
    setZipCode('')
    setDepartment('')
    setStreet('')
  }

  return (
    <section className="flex items-center justify-center m-auto md:mt-[30px] mt-[10px]">
      <div className="flex-col items-center justify-center lg:w-3/6 sm:w-4/6 w-full">
        <div className="rounded-lg border-2  border-border bg-card text-cardforeground shadow-sm p-[20px]">
          <h1 className="flex font-title font-bold mb-5 items-center justify-center text-[1.3rem] md:text-[1.5rem] text-cardforeground">
            Create Employee
          </h1>

          <form onSubmit={handleSubmit}>
            <Input
              value={firstname}
              type={'text'}
              name={'firstname'}
              id={'firstname'}
              title="First Name"
              handleChange={(event) => setFirstname(event.target.value)}
              autoComplete={'off'}
            />
            <Input
              value={lastname}
              type={'text'}
              name={'lastname'}
              id={'lastame'}
              title="Last Name"
              handleChange={(event) => setLastname(event.target.value)}
              autoComplete={'off'}
            />
            <div className="flex items-center justify-center mb-5">
              <Stack spacing={2} sx={{ width: '100%' }}>
                <DatePicker
                  name="dateOfBirth"
                  label="Date of Birth"
                  value={date.dateOfBirth}
                  onChange={(newValue) =>
                    handleDateChange('dateOfBirth', newValue)
                  }
                />

                <DatePicker
                  name="startDate"
                  label="Start Date"
                  value={date.startDate}
                  onChange={(newValue) =>
                    handleDateChange('startDate', newValue)
                  }
                />
              </Stack>
            </div>
            <Input
              value={street}
              type={'text'}
              name={'street'}
              id={'street'}
              title="Street"
              handleChange={(event) => setStreet(event.target.value)}
              autoComplete={'off'}
            />
            <Input
              value={city}
              type={'text'}
              name={'city'}
              id={'city'}
              title="City"
              handleChange={(event) => setCity(event.target.value)}
              autoComplete={'off'}
            />
            <SelectMenu
              label="State"
              name="state"
              value={state}
              options={states}
              handleChange={(event) => setState(event.target.value)}
            />
            <Input
              value={zipCode}
              type={'text'}
              name={'zipcode'}
              id={'zipcode'}
              title="Zip Code"
              handleChange={(event) => setZipCode(event.target.value)}
              autoComplete={'off'}
            />
            <SelectMenu
              label="Department"
              name="department"
              value={department}
              options={departmentOptions}
              handleChange={(event) => setDepartment(event.target.value)}
            />
            <Toaster />
            <Modal
              open={open}
              description={'Employee Created !'}
              onClose={() => setOpen(false)}
            />
            {btn}
          </form>
        </div>
      </div>
    </section>
  )
}
