import { UUID } from "crypto";
import sequelize from "../utils/database";
import { Model, DataTypes, InferAttributes, InferCreationAttributes } from "sequelize";

interface LikeModel extends Model<InferAttributes<LikeModel>, InferCreationAttributes<LikeModel>> {
  id: UUID;
  user_id: UUID;
  tweet_id: UUID;
}

const LikeModel = sequelize.define<LikeModel>("like", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  tweet_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});
