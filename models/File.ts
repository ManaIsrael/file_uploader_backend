import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class File extends Model {
  public id!: number;
  public description!: string;
  public fileUrl!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

File.init(
  {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fileUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
  {
    sequelize,
    tableName: 'files',
  }
);

export default File;
