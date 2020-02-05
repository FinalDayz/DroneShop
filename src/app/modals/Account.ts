import {Role} from "./Role";

export class Account {
  accountId: number;
  accountEmail: string;
  accountRole: Role;
  jwt: string;
}
