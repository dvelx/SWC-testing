import { api } from "../api/api";

class ApiData {
  getAllCars(per_page: number, page: number, vin?: string): Promise<any> {
    return api.get(`/cars-test?search=${vin}`, {
      params: {
        per_page: per_page,
        page: page,
      },
    });
  }
}

export default new ApiData();
