const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('type', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        id_type: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
        },
    }, {
        timestamps: false,
    });
};