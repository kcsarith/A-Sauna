'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: ''
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
        defaultValue: ''
      },
      dueDate: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "Incomplete",
      },
      ownerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users' }
      },
      projectId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Projects' }
      },
      priority: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: 'Low'
      },
      parentTaskId: {
        type: Sequelize.INTEGER,
        references: { model: 'Tasks' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tasks');
  }
};
