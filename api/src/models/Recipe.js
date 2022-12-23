const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id:{
      type: DataTypes.UUID(5),
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4(5)
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    summary:{
      type:DataTypes.TEXT,
      allowNull: false,
    },
    healthScore:{
      type: DataTypes.INTEGER,
    },
    steps:{
     type:Sequelize.JSON
    },
    dishTypes:{
      type:Sequelize.JSON
    },
    readyInMinutes:{
      type: DataTypes.INTEGER,
      get(){
          return "Ready in " + this.getDataValue("readyInMinutes") + " minutes"
      }
    },
    ingredients:{
      type: Sequelize.JSON
    },
    servings:{
      type:DataTypes.STRING
    },
    image:{
      type:DataTypes.STRING,
      defaultValue: `https://post.healthline.com/wp-content/uploads/2020/08/food-still-life-salmon-keto-healthy-eating-732x549-thumbnail-732x549.jpg`
    }
  },{
    timestamps: false
  });
};
