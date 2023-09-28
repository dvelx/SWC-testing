import { api } from "../api/api";

class ApiData {
  getAllCars(per_page: number, page: number, vin?: number): Promise<any> {
    return api.get(`/cars-test?${vin}`, {
      params: {
        per_page: per_page,
        page: page,
      },
    });
  }
}

export default new ApiData();