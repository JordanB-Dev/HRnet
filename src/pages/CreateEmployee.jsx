import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../service/employeeSlice'
import SelectMenu from '../components/ui/SelectMenu'
import departmentOptions from '../assets/data/departmentData.json'
import states from '../assets/data/data.json'
import dayjs from 'dayjs'
import BtnDisabled from '../components/ui/ButtonDisabled'
import Input from '../components/ui/Input'
import Btn from '../components/ui/Button'
import { toast, Toaster } from 'sonner'
import { Modal } from 'react-vite-component-modal'
import DatePicker from '../components/ui/DatePicker'

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
  const [startDate, setStartDate] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')

  const isEmpty = (value) => value.trim() === ''
  const isLength = (value) =>
    value.trim().length < 2 || value.trim().length > 20
  const containsInvalidChars = (value) => /[^a-zA-Z0-9 ]/.test(value)

  const validateForm = () => {
    const fieldsToValidate = [
      { value: firstname, fieldName: 'First Name' },
      { value: lastname, fieldName: 'Last Name' },
      { value: street, fieldName: 'Street' },
      { value: city, fieldName: 'City' },
      { value: department, fieldName: 'Department' },
      { value: state, fieldName: 'State' },
    ]
    const fieldsToValidateCode = [{ value: zipCode, fieldName: 'Zip Code' }]

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
    for (let { value, fieldName } of fieldsToValidateCode) {
      if (isEmpty(value)) {
        toast.error(`${fieldName} is required.`)
        return false
      }
      if (isLength(value)) {
        toast.error(`${fieldName} be between 3 and 10 number.`)
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
    dateOfBirth === null ||
    startDate === null ? (
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
      dateOfBirth: dateOfBirth ? dayjs(dateOfBirth).format('DD/MM/YYYY') : null,
      startDate: startDate ? dayjs(startDate).format('DD/MM/YYYY') : null,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode,
    }

    dispatch(addEmployee(serializedData))
    setOpen(true)
    setFirstname('')
    setLastname('')
    setStartDate('')
    setDateOfBirth('')
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
          <div className="flex mb-5 items-center justify-center">
            <h1 className="font-title text-2xl font-semibold text-cardforeground">
              Create Employee
            </h1>
          </div>
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
            />

            <DatePicker
              value={dateOfBirth}
              name={'Date of Birth'}
              id={'dateOfBirth'}
              title="Date of Birth"
              handleChange={(event) => setDateOfBirth(event.target.value)}
              autoComplete={'off'}
            />
            <DatePicker
              value={startDate}
              name={'start Date'}
              id={'startDate'}
              title="Start Date"
              handleChange={(event) => setStartDate(event.target.value)}
              autoComplete={'off'}
            />
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
              id={'state'}
              title="State"
              name="state"
              value={state}
              options={states}
              handleChange={(event) => setState(event.target.value)}
              autoComplete={'off'}
            />
            <Input
              value={zipCode}
              type={'number'}
              name={'zipcode'}
              id={'zipcode'}
              title="Zip Code"
              handleChange={(event) => setZipCode(event.target.value)}
              autoComplete={'off'}
            />
            <SelectMenu
              id={'department'}
              title="Department"
              name="department"
              value={department}
              options={departmentOptions}
              handleChange={(event) => setDepartment(event.target.value)}
              autoComplete={'off'}
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
