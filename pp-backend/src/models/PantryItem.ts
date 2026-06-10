// Example using Sequelize (or similar ORM)
// models/PantryItem.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../database'; // import your Sequelize instance

class PantryItem extends Model {}

PantryItem.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ingredient_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
  },
  unit: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'PantryItem',
  tableName: 'pantry_items',
  timestamps: false,
});

export default PantryItem;