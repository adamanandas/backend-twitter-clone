import { UUID } from "crypto";
import sequelize from "../../../../utils/database";
import { Model, DataTypes, InferAttributes, InferCreationAttributes } from "sequelize";

interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
  id: UUID;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  avatar: string;
  password: number;
}

const UserModel = sequelize.define<UserModel>("user", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  avatar: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

export default UserModel;
