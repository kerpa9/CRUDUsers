import { DataTypes } from "sequelize";
import sequelize from "../../config/database/database.js";

const Users = sequelize.define("user", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    field: "users_id",
  },

  first_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },

  last_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },

  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },

  birthday: {
    type: DataTypes.DATE,
    allowNull: true,
  },

  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

export default Users;
