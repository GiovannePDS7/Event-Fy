export interface LoginResponseDTO {
  token: string;
  id: number;
  nome: string;
  emailOrganizador: string;
  contato: string | null;
  foto: string | null;
}
