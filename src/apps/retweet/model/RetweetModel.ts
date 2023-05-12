import { UUID } from "crypto";
import sequelize from "../../../../utils/database";
import { Model, DataTypes, InferAttributes, InferCreationAttributes } from "sequelize";

interface RetweetModel extends Model<InferAttributes<RetweetModel>, InferCreationAttributes<RetweetModel>> {
  id: UUID;
  user_id: UUID;
  tweet_id: UUID;
}

const RetweetModel = sequelize.define<RetweetModel>("retweet", {
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

export default RetweetModel;
