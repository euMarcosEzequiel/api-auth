import { connection } from "module-api-database";
import { DataTypes, Model } from "sequelize";

export class User extends Model {
  declare readonly id: number;
  declare name: string;
  declare email: string;
  declare password: string;
  declare phone: string;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

User.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  phone: DataTypes.STRING
}, {
  sequelize: connection,
  modelName: "User",
  tableName: "Users"
})