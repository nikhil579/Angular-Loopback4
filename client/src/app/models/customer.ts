export class CustomerModel {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: number
    dateOfBirth: string
    gender: string
    address: string
    city: string
    state: string
    zipcode: number
    occupation: string
    orgName: string
    designation: string
    officeLocation: string
    sector: string
    residenceType: string
    currentResidence: string
    bookingPref?: Array<String>
    budget: string
    budgetValue?: number
    possession: string
    purpose?: Array<String>
    financeDetail: string
    chFirmName: string
}