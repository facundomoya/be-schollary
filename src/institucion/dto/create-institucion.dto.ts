export class CreateInstitucionDto {
  nombre: string;
  user: {
    user_name: string;
    password: string;
  };
}
