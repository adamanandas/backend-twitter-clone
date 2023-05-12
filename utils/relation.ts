import UserModel from "../src/apps/user/model/UserModel";
import TweetModel from "../src/apps/tweet/model/TweetModel";
import LikeModel from "../src/apps/like/model/LikeModel";
import CommentModel from "../src/apps/comment/model/CommentModel";
import RetweetModel from "../src/apps/retweet/model/RetweetModel";

UserModel.hasMany(TweetModel);
UserModel.hasMany(RetweetModel);
UserModel.hasMany(LikeModel);
UserModel.hasMany(CommentModel);

TweetModel.belongsTo(UserModel);
RetweetModel.belongsTo(UserModel);
LikeModel.belongsTo(UserModel);
CommentModel.belongsTo(UserModel);

TweetModel.hasMany(LikeModel);
TweetModel.hasMany(CommentModel);
TweetModel.hasMany(RetweetModel);

LikeModel.belongsTo(TweetModel);
CommentModel.belongsTo(TweetModel);
RetweetModel.belongsTo(TweetModel);
