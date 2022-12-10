'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          };
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      }
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 20]
      }
    }
  },
    {
      defaultScope: {
        attributes: {
          exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt']
        }
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ['hashedPassword'] }
        },
        loginUser: {
          attributes: {}
        }
      }
    }
  );

  User.prototype.toSafeObject = function () {
    const { id, username, email, name, tag } = this;
    return { id, username, email, name, tag };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };

  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
          tag: credential,
        }
      }
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function ({ username, email, tag, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      tag,
      hashedPassword
    });
    return await User.scope('currentUser').findByPk(user.id);
  };

  const followingMappings = {
    through: "Follows",
    foreignKey: "follower_id",
    otherKey: "following_id",
    as: "following"
  };

  const followerMappings = {
    through: "Follows",
    foreignKey: "following_id",
    otherKey: "follower_id",
    as: "followers"
  };

  User.associate = function (models) {
    User.hasOne(models.Wallet, { foreignKey: "user_id", as: "wallet" });
    User.hasMany(models.Transaction, { foreignKey: "user_id", as: "transactions" });
    User.belongsTo(models.Transaction, { foreignKey: "to_id" });
    User.hasMany(models.Request, { foreignKey: "user_id", as: "requests" });
    User.belongsTo(models.Request, { foriegnKey: "to_id" });
    User.hasOne(models.Inbox, { foreignKey: "user_id", as: "inbox" });
    User.hasMany(models.User, followerMappings);
    User.belongsToMany(models.User, followingMappings);
  };
  return User;
};
