import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.ts';

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
      allowNull: true,
    },
    fileUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },

  },
  {
    sequelize,
    tableName: 'files',
  }
);

export default File;
