import { UUID } from "crypto";
import sequelize from "../../../../utils/database";
import { Model, DataTypes, InferAttributes, InferCreationAttributes } from "sequelize";

interface CommentModel extends Model<InferAttributes<CommentModel>, InferCreationAttributes<CommentModel>> {
  id: UUID;
  user_id: UUID;
  tweet_id: UUID;
  text: string;
  media: string;
}

const CommentModel = sequelize.define<CommentModel>("comment", {
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
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  media: {
    type: DataTypes.STRING,
  },
});

export default CommentModel;
