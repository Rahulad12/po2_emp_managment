import { getEmployee,getAllEmployee } from "../../../Backend/controllers/employeeControllers.js";
import { EMP_URL } from "../constant.js";
export const getEmployeeApi = async (userID) => {
  return await getEmployee(EMP_URL, userID);
};
