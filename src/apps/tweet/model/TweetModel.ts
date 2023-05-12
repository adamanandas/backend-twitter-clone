import { UUID } from "crypto";
import sequelize from "../../../../utils/database";
import { Model, DataTypes, InferAttributes, InferCreationAttributes } from "sequelize";
import exp from "constants";

interface TweetModel extends Model<InferAttributes<TweetModel>, InferCreationAttributes<TweetModel>> {
  id: UUID;
  user_id: UUID;
  text: string;
  media: string;
  likes_count: number;
  comments_count: number;
  retweets_count: number;
}

const TweetModel = sequelize.define<TweetModel>("tweet", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
  },
  user_id: {
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
  likes_count: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  comments_count: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  retweets_count: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

export default TweetModel;
