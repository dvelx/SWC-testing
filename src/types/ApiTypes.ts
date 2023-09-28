export default interface ApiTypes {
  data: {
    angles_count: number;
    created_at: number;
    id: number;
    preview: string;
    vehicle_name: string;
    vin: string;
  }[];
  meta: {
    current_page: number;
    last_page: number;
    per_page: string;
    total: number;
  };
}
