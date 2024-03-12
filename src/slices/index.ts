import { combineReducers } from "redux";
import PatientRedcuer from './Patient/reducer'
import ScheduleRedcuer from './Schedule/reducer'
import ClinicalRedcuer from './Clinical/reducer'

const rootReducer = combineReducers({
    Patient: PatientRedcuer,
    Schedule: ScheduleRedcuer,
    Clinical: ClinicalRedcuer
})

export default rootReducer
