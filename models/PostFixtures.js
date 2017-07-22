module.exports = function(sequelize, DataTypes) {
  var Postfixtures = sequelize.define("Postfixtures", {
    postFixID: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    post_lampCode: DataTypes.STRING,

    post_type: DataTypes.STRING,

    post_description: DataTypes.STRING,

    post_ballast: DataTypes.STRING, 
      
    post_lampNum: DataTypes.INTEGER, 

    post_watts: DataTypes.INTEGER, 

    post_wattsPerFix: DataTypes.INTEGER

    
 
   
  }
  {
      // We're saying that we want our Projects to have Floors
      classMethods: {
        associate: function(models) {
          // A Projects (foreignKey) is required or a Floors can't be made
          PostFixtures.belongsTo(models.Projects, {
            foreignKey: {
              allowNull: false
            }
          });
          PostFixtures.hasMany(models.Surveys, {
                      onDelete: "cascade"
          });
        }
      }
    }
  );
  return PostFixtures;
  
};