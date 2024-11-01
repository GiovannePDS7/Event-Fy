
export interface LoginResponseDTO {
  token: string;
  id: number;
  nome: string;
  email: string;
  contato: string;
  foto: string; // Assumindo que a foto será enviada como string em base64
}
