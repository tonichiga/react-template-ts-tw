export class UserEntity {
  id: number;
  firstName?: string;
  lastName?: string;

  constructor(readonly user: any) {
    Object.assign(this, user);
  }
}
