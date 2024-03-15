import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function AddPatient() {
    const params = useParams()
  const endPoint: string = `https://api.preview.platform.athenahealth.com/v1/{patientid}/patients`
  const getAPI = async () => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer GRT8S89tWnBdeJTCB03DDoth4Nnp'
    }
    try {
      const response = await axios.get(endPoint, {
        headers: headers
      })
      setPatient(response.data[0])
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAPI()
    console.log(patient)
  }, [])
  const [patient, setPatient] = useState({
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient((prevPatient) => ({ ...prevPatient, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Patient Data:", patient);
  };

  useEffect(() => {

  }, [])
  const [data,setData] = useState({
    practiceId:" ",
    firstName:" ",
    lastName:" ",
    dob:" ",
    departmentId:" ",
    address1:" ",
    address2:" ",
    agriculturalworker:" ",
    agriculturalworkertype:" ",
    altfirstname:" ",
    assignedsexatbirth:" ",
    caresummarydeliverypreference:" ",
    city:" ",
    clinicalordertypegroupid:" ",
    consenttocall:" ",
    consenttotext:" ",
    contacthomephone:" ",
    contactmobilephone:" ",
    contactname:" ",
    contactpreference:" ",
    contactpreference_announcement_email:" ",
    contactpreference_announcement_phone:" ",
    contactpreference_announcement_sms:" ",
    contactpreference_appointment_email:" ",
    contactpreference_appointment_phone:" ",
    contactpreference_appointment_sms:" ",
    contactpreference_billing_email:" ",
    contactpreference_billing_phone:" ",
    contactpreference_billing_sms:" ",
    contactpreference_lab_email:" ",
    contactpreference_lab_phone:" ",
    contactpreference_lab_sms:" ",
    contactrelationship:" ",
    countrycode3166:" ",
    deceaseddate:" ",
    defaultpharmacyncpdpid:" ",
    departmentid:" ",
    dateofbirth:" ",
    donotcallyn:" ",
    driverslicenseexpirationdate:" ",
    driverslicensenumber:" ",
    driverslicensestateid:" ",
    email:" ",
    employerid:" ",
    employerphone:" ",
    ethnicitycode:" ",
    ethnicitycodes:" ",
    genderidentity:" ",
    genderidentityother:" ",
    guarantoraddress1:" ",
    guarantoraddress2:" ",
    guarantoraddresssameaspatient:" ",
    guarantorcity:" ",
    guarantorcountrycode3166:" ",
    guarantordob:" ",
    guarantoremail:" ",
    guarantoremployerid:" ",
    guarantorfirstname:" ",
    guarantorlastname:" ",
    guarantormiddlename:" ",
    guarantorphone:" ",
    guarantorrelationshiptopatient:" ",
    guarantorssn:" ",
    guarantorstate:" ",
    guarantorsuffix:" ",
    guarantorzip:" ",
    guardianfirstname:" ",
    guardianlastname:" ",
    guardianmiddlename:" ",
    guardiansuffix:" ",
    hasmobileyn:" ",
    homeboundyn:" ",
    homeless:" ",
    homelesstype:" ",
    homephone:" ",
    ignorerestrictions:" ",
    industrycode:" ",
    language6392code:" ",
    maritalstatus:" ",
    middlename:" ",
    mobilecarrierid:" ",
    mobilephone:" ",
    nextkinname:" ",
    nextkinphone:" ",
    nextkinrelationship:" ",
    notes:" ",
    occupationcode:" ",
    onlinestatementonlyyn:" ",
    portalaccessgiven:" ",
    povertylevelcalculated:" ",
    povertylevelfamilysize:" ",
    povertylevelfamilysizedeclined:" ",
    povertylevelincomedeclined:" ",
    povertylevelincomepayperiod:" ",
    povertylevelincomeperpayperiod:" ",
    povertylevelincomerangedeclined:" ",
    preferredname:" ",
    preferredpronouns:" ",
    primarydepartmentid:" ",
    primaryproviderid:" ",
    publichousing:" ",
    race:" ",
    referralsourceid:" ",
    referralsourceother:" ",
    schoolbasedhealthcenter:" ",
    sex:" ",
    sexualorientation:" ",
    sexualorientationother:" ",
    showerrormessage:" ",
    ssn:" ",
    state:" ",
    status:" ",
    suffix:" ",
    veteran:" ",
    workphone:" ",
    zip:" ",
})
  return (
    <div>
      
    </div>
  )
}

export default AddPatient
