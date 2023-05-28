'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
 async up(queryInterface, Sequelize) {
  await queryInterface.createTable('UserRoles', {
   id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
   },
   user_id: {
    type: Sequelize.STRING,
    references: {
     model: {
      tableName: 'Users',
     },
     key: 'id',
    },
   },
   roleId: {
    type: Sequelize.INTEGER,
    references: {
     model: {
      tableName: 'Roles',
     },
     key: 'id',
    },
   },
   createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
   },
   updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
   },
  });
 },
 async down(queryInterface, Sequelize) {
  await queryInterface.dropTable('UserRoles');
 },
};