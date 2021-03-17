"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "articles",
      [
        {
          title: "The tasties cookies",
          content: `Do commodo deserunt id ipsum voluptate. Ad pariatur velit magna commodo adipisicing amet Lorem officia nulla velit reprehenderit ex aliquip. Deserunt mollit quis sint sunt velit Lorem est aute magna anim dolor commodo. Voluptate quis ipsum ullamco deserunt ut eu laborum velit ullamco irure qui do occaecat. Occaecat occaecat do dolore irure anim sint mollit duis laboris velit id. Occaecat ad in quis nisi consectetur deserunt adipisicing ullamco.
                    Officia occaecat reprehenderit aute do excepteur culpa minim nostrud do. Sunt do consectetur officia eiusmod reprehenderit magna fugiat anim. Ea amet nulla quis exercitation. Occaecat consequat cupidatat aute dolore elit irure est sint nulla minim laborum non excepteur.
                    Commodo tempor sit ex laborum dolore. Lorem ullamco exercitation adipisicing deserunt esse reprehenderit elit. Incididunt officia velit et pariatur duis ut est magna ullamco tempor Lorem Lorem. Ea dolore est reprehenderit anim.
                    Culpa et et nostrud duis. Do et sunt anim occaecat. Quis et deserunt minim nostrud. Officia eiusmod tempor ullamco eu excepteur pariatur non commodo fugiat. In aliquip nostrud magna ea adipisicing. Voluptate proident proident fugiat ea minim.`,
          category_id: 2,
        },
        {
          title: "Juices and more juices",
          content: `Do commodo deserunt id ipsum voluptate. Ad pariatur velit magna commodo adipisicing amet Lorem officia nulla velit reprehenderit ex aliquip. Deserunt mollit quis sint sunt velit Lorem est aute magna anim dolor commodo. Voluptate quis ipsum ullamco deserunt ut eu laborum velit ullamco irure qui do occaecat. Occaecat occaecat do dolore irure anim sint mollit duis laboris velit id. Occaecat ad in quis nisi consectetur deserunt adipisicing ullamco.
                    Officia occaecat reprehenderit aute do excepteur culpa minim nostrud do. Sunt do consectetur officia eiusmod reprehenderit magna fugiat anim. Ea amet nulla quis exercitation. Occaecat consequat cupidatat aute dolore elit irure est sint nulla minim laborum non excepteur.
                    Commodo tempor sit ex laborum dolore. Lorem ullamco exercitation adipisicing deserunt esse reprehenderit elit. Incididunt officia velit et pariatur duis ut est magna ullamco tempor Lorem Lorem. Ea dolore est reprehenderit anim.
                    Culpa et et nostrud duis. Do et sunt anim occaecat. Quis et deserunt minim nostrud. Officia eiusmod tempor ullamco eu excepteur pariatur non commodo fugiat. In aliquip nostrud magna ea adipisicing. Voluptate proident proident fugiat ea minim.`,
          category_id: 2,
        },
        {
          title: "Bread and butter - everywhere",
          content: `Do commodo deserunt id ipsum voluptate. Ad pariatur velit magna commodo adipisicing amet Lorem officia nulla velit reprehenderit ex aliquip. Deserunt mollit quis sint sunt velit Lorem est aute magna anim dolor commodo. Voluptate quis ipsum ullamco deserunt ut eu laborum velit ullamco irure qui do occaecat. Occaecat occaecat do dolore irure anim sint mollit duis laboris velit id. Occaecat ad in quis nisi consectetur deserunt adipisicing ullamco.
                    Officia occaecat reprehenderit aute do excepteur culpa minim nostrud do. Sunt do consectetur officia eiusmod reprehenderit magna fugiat anim. Ea amet nulla quis exercitation. Occaecat consequat cupidatat aute dolore elit irure est sint nulla minim laborum non excepteur.
                    Commodo tempor sit ex laborum dolore. Lorem ullamco exercitation adipisicing deserunt esse reprehenderit elit. Incididunt officia velit et pariatur duis ut est magna ullamco tempor Lorem Lorem. Ea dolore est reprehenderit anim.
                    Culpa et et nostrud duis. Do et sunt anim occaecat. Quis et deserunt minim nostrud. Officia eiusmod tempor ullamco eu excepteur pariatur non commodo fugiat. In aliquip nostrud magna ea adipisicing. Voluptate proident proident fugiat ea minim.`,
          category_id: 2,
        },
        {
          title: "Season hit - strawberries",
          content: `Do commodo deserunt id ipsum voluptate. Ad pariatur velit magna commodo adipisicing amet Lorem officia nulla velit reprehenderit ex aliquip. Deserunt mollit quis sint sunt velit Lorem est aute magna anim dolor commodo. Voluptate quis ipsum ullamco deserunt ut eu laborum velit ullamco irure qui do occaecat. Occaecat occaecat do dolore irure anim sint mollit duis laboris velit id. Occaecat ad in quis nisi consectetur deserunt adipisicing ullamco.
                    Officia occaecat reprehenderit aute do excepteur culpa minim nostrud do. Sunt do consectetur officia eiusmod reprehenderit magna fugiat anim. Ea amet nulla quis exercitation. Occaecat consequat cupidatat aute dolore elit irure est sint nulla minim laborum non excepteur.
                    Commodo tempor sit ex laborum dolore. Lorem ullamco exercitation adipisicing deserunt esse reprehenderit elit. Incididunt officia velit et pariatur duis ut est magna ullamco tempor Lorem Lorem. Ea dolore est reprehenderit anim.
                    Culpa et et nostrud duis. Do et sunt anim occaecat. Quis et deserunt minim nostrud. Officia eiusmod tempor ullamco eu excepteur pariatur non commodo fugiat. In aliquip nostrud magna ea adipisicing. Voluptate proident proident fugiat ea minim.`,
          category_id: 2,
        },
        {
          title: "Worlds Fashion Contest",
          content: `Do commodo deserunt id ipsum voluptate. Ad pariatur velit magna commodo adipisicing amet Lorem officia nulla velit reprehenderit ex aliquip. Deserunt mollit quis sint sunt velit Lorem est aute magna anim dolor commodo. Voluptate quis ipsum ullamco deserunt ut eu laborum velit ullamco irure qui do occaecat. Occaecat occaecat do dolore irure anim sint mollit duis laboris velit id. Occaecat ad in quis nisi consectetur deserunt adipisicing ullamco.
                    Officia occaecat reprehenderit aute do excepteur culpa minim nostrud do. Sunt do consectetur officia eiusmod reprehenderit magna fugiat anim. Ea amet nulla quis exercitation. Occaecat consequat cupidatat aute dolore elit irure est sint nulla minim laborum non excepteur.
                    Commodo tempor sit ex laborum dolore. Lorem ullamco exercitation adipisicing deserunt esse reprehenderit elit. Incididunt officia velit et pariatur duis ut est magna ullamco tempor Lorem Lorem. Ea dolore est reprehenderit anim.
                    Culpa et et nostrud duis. Do et sunt anim occaecat. Quis et deserunt minim nostrud. Officia eiusmod tempor ullamco eu excepteur pariatur non commodo fugiat. In aliquip nostrud magna ea adipisicing. Voluptate proident proident fugiat ea minim.`,
          category_id: 3,
        },
        {
          title: "Gucci vs Versacci",
          content: `Do commodo deserunt id ipsum voluptate. Ad pariatur velit magna commodo adipisicing amet Lorem officia nulla velit reprehenderit ex aliquip. Deserunt mollit quis sint sunt velit Lorem est aute magna anim dolor commodo. Voluptate quis ipsum ullamco deserunt ut eu laborum velit ullamco irure qui do occaecat. Occaecat occaecat do dolore irure anim sint mollit duis laboris velit id. Occaecat ad in quis nisi consectetur deserunt adipisicing ullamco.
                    Officia occaecat reprehenderit aute do excepteur culpa minim nostrud do. Sunt do consectetur officia eiusmod reprehenderit magna fugiat anim. Ea amet nulla quis exercitation. Occaecat consequat cupidatat aute dolore elit irure est sint nulla minim laborum non excepteur.
                    Commodo tempor sit ex laborum dolore. Lorem ullamco exercitation adipisicing deserunt esse reprehenderit elit. Incididunt officia velit et pariatur duis ut est magna ullamco tempor Lorem Lorem. Ea dolore est reprehenderit anim.
                    Culpa et et nostrud duis. Do et sunt anim occaecat. Quis et deserunt minim nostrud. Officia eiusmod tempor ullamco eu excepteur pariatur non commodo fugiat. In aliquip nostrud magna ea adipisicing. Voluptate proident proident fugiat ea minim.`,
          category_id: 3,
        },
        {
          title: "Chelsea - Manchester United",
          content: `Do commodo deserunt id ipsum voluptate. Ad pariatur velit magna commodo adipisicing amet Lorem officia nulla velit reprehenderit ex aliquip. Deserunt mollit quis sint sunt velit Lorem est aute magna anim dolor commodo. Voluptate quis ipsum ullamco deserunt ut eu laborum velit ullamco irure qui do occaecat. Occaecat occaecat do dolore irure anim sint mollit duis laboris velit id. Occaecat ad in quis nisi consectetur deserunt adipisicing ullamco.
                    Officia occaecat reprehenderit aute do excepteur culpa minim nostrud do. Sunt do consectetur officia eiusmod reprehenderit magna fugiat anim. Ea amet nulla quis exercitation. Occaecat consequat cupidatat aute dolore elit irure est sint nulla minim laborum non excepteur.
                    Commodo tempor sit ex laborum dolore. Lorem ullamco exercitation adipisicing deserunt esse reprehenderit elit. Incididunt officia velit et pariatur duis ut est magna ullamco tempor Lorem Lorem. Ea dolore est reprehenderit anim.
                    Culpa et et nostrud duis. Do et sunt anim occaecat. Quis et deserunt minim nostrud. Officia eiusmod tempor ullamco eu excepteur pariatur non commodo fugiat. In aliquip nostrud magna ea adipisicing. Voluptate proident proident fugiat ea minim.`,
          category_id: 1,
        },
        {
          title: "Leeds - Derby",
          content: `Do commodo deserunt id ipsum voluptate. Ad pariatur velit magna commodo adipisicing amet Lorem officia nulla velit reprehenderit ex aliquip. Deserunt mollit quis sint sunt velit Lorem est aute magna anim dolor commodo. Voluptate quis ipsum ullamco deserunt ut eu laborum velit ullamco irure qui do occaecat. Occaecat occaecat do dolore irure anim sint mollit duis laboris velit id. Occaecat ad in quis nisi consectetur deserunt adipisicing ullamco.
                    Officia occaecat reprehenderit aute do excepteur culpa minim nostrud do. Sunt do consectetur officia eiusmod reprehenderit magna fugiat anim. Ea amet nulla quis exercitation. Occaecat consequat cupidatat aute dolore elit irure est sint nulla minim laborum non excepteur.
                    Commodo tempor sit ex laborum dolore. Lorem ullamco exercitation adipisicing deserunt esse reprehenderit elit. Incididunt officia velit et pariatur duis ut est magna ullamco tempor Lorem Lorem. Ea dolore est reprehenderit anim.
                    Culpa et et nostrud duis. Do et sunt anim occaecat. Quis et deserunt minim nostrud. Officia eiusmod tempor ullamco eu excepteur pariatur non commodo fugiat. In aliquip nostrud magna ea adipisicing. Voluptate proident proident fugiat ea minim.`,
          category_id: 1,
        },
        {
          title: "Manchester City - Fullham",
          content: `Do commodo deserunt id ipsum voluptate. Ad pariatur velit magna commodo adipisicing amet Lorem officia nulla velit reprehenderit ex aliquip. Deserunt mollit quis sint sunt velit Lorem est aute magna anim dolor commodo. Voluptate quis ipsum ullamco deserunt ut eu laborum velit ullamco irure qui do occaecat. Occaecat occaecat do dolore irure anim sint mollit duis laboris velit id. Occaecat ad in quis nisi consectetur deserunt adipisicing ullamco.
                    Officia occaecat reprehenderit aute do excepteur culpa minim nostrud do. Sunt do consectetur officia eiusmod reprehenderit magna fugiat anim. Ea amet nulla quis exercitation. Occaecat consequat cupidatat aute dolore elit irure est sint nulla minim laborum non excepteur.
                    Commodo tempor sit ex laborum dolore. Lorem ullamco exercitation adipisicing deserunt esse reprehenderit elit. Incididunt officia velit et pariatur duis ut est magna ullamco tempor Lorem Lorem. Ea dolore est reprehenderit anim.
                    Culpa et et nostrud duis. Do et sunt anim occaecat. Quis et deserunt minim nostrud. Officia eiusmod tempor ullamco eu excepteur pariatur non commodo fugiat. In aliquip nostrud magna ea adipisicing. Voluptate proident proident fugiat ea minim.`,
          category_id: 1,
        },
        {
          title: "Arsenal - Everton",
          content: `Do commodo deserunt id ipsum voluptate. Ad pariatur velit magna commodo adipisicing amet Lorem officia nulla velit reprehenderit ex aliquip. Deserunt mollit quis sint sunt velit Lorem est aute magna anim dolor commodo. Voluptate quis ipsum ullamco deserunt ut eu laborum velit ullamco irure qui do occaecat. Occaecat occaecat do dolore irure anim sint mollit duis laboris velit id. Occaecat ad in quis nisi consectetur deserunt adipisicing ullamco.
                    Officia occaecat reprehenderit aute do excepteur culpa minim nostrud do. Sunt do consectetur officia eiusmod reprehenderit magna fugiat anim. Ea amet nulla quis exercitation. Occaecat consequat cupidatat aute dolore elit irure est sint nulla minim laborum non excepteur.
                    Commodo tempor sit ex laborum dolore. Lorem ullamco exercitation adipisicing deserunt esse reprehenderit elit. Incididunt officia velit et pariatur duis ut est magna ullamco tempor Lorem Lorem. Ea dolore est reprehenderit anim.
                    Culpa et et nostrud duis. Do et sunt anim occaecat. Quis et deserunt minim nostrud. Officia eiusmod tempor ullamco eu excepteur pariatur non commodo fugiat. In aliquip nostrud magna ea adipisicing. Voluptate proident proident fugiat ea minim.`,
          category_id: 1,
        },
        {
          title: "Barcelona - Valencia",
          content: `Do commodo deserunt id ipsum voluptate. Ad pariatur velit magna commodo adipisicing amet Lorem officia nulla velit reprehenderit ex aliquip. Deserunt mollit quis sint sunt velit Lorem est aute magna anim dolor commodo. Voluptate quis ipsum ullamco deserunt ut eu laborum velit ullamco irure qui do occaecat. Occaecat occaecat do dolore irure anim sint mollit duis laboris velit id. Occaecat ad in quis nisi consectetur deserunt adipisicing ullamco.
                    Officia occaecat reprehenderit aute do excepteur culpa minim nostrud do. Sunt do consectetur officia eiusmod reprehenderit magna fugiat anim. Ea amet nulla quis exercitation. Occaecat consequat cupidatat aute dolore elit irure est sint nulla minim laborum non excepteur.
                    Commodo tempor sit ex laborum dolore. Lorem ullamco exercitation adipisicing deserunt esse reprehenderit elit. Incididunt officia velit et pariatur duis ut est magna ullamco tempor Lorem Lorem. Ea dolore est reprehenderit anim.
                    Culpa et et nostrud duis. Do et sunt anim occaecat. Quis et deserunt minim nostrud. Officia eiusmod tempor ullamco eu excepteur pariatur non commodo fugiat. In aliquip nostrud magna ea adipisicing. Voluptate proident proident fugiat ea minim.`,
          category_id: 1,
        },
        {
          title: "Harry Potter new novel",
          content: `Do commodo deserunt id ipsum voluptate. Ad pariatur velit magna commodo adipisicing amet Lorem officia nulla velit reprehenderit ex aliquip. Deserunt mollit quis sint sunt velit Lorem est aute magna anim dolor commodo. Voluptate quis ipsum ullamco deserunt ut eu laborum velit ullamco irure qui do occaecat. Occaecat occaecat do dolore irure anim sint mollit duis laboris velit id. Occaecat ad in quis nisi consectetur deserunt adipisicing ullamco.
                    Officia occaecat reprehenderit aute do excepteur culpa minim nostrud do. Sunt do consectetur officia eiusmod reprehenderit magna fugiat anim. Ea amet nulla quis exercitation. Occaecat consequat cupidatat aute dolore elit irure est sint nulla minim laborum non excepteur.
                    Commodo tempor sit ex laborum dolore. Lorem ullamco exercitation adipisicing deserunt esse reprehenderit elit. Incididunt officia velit et pariatur duis ut est magna ullamco tempor Lorem Lorem. Ea dolore est reprehenderit anim.
                    Culpa et et nostrud duis. Do et sunt anim occaecat. Quis et deserunt minim nostrud. Officia eiusmod tempor ullamco eu excepteur pariatur non commodo fugiat. In aliquip nostrud magna ea adipisicing. Voluptate proident proident fugiat ea minim.`,
          category_id: 4,
        },
        {
          title: "Assassin's Creed: Heresy",
          content: `Do commodo deserunt id ipsum voluptate. Ad pariatur velit magna commodo adipisicing amet Lorem officia nulla velit reprehenderit ex aliquip. Deserunt mollit quis sint sunt velit Lorem est aute magna anim dolor commodo. Voluptate quis ipsum ullamco deserunt ut eu laborum velit ullamco irure qui do occaecat. Occaecat occaecat do dolore irure anim sint mollit duis laboris velit id. Occaecat ad in quis nisi consectetur deserunt adipisicing ullamco.
                    Officia occaecat reprehenderit aute do excepteur culpa minim nostrud do. Sunt do consectetur officia eiusmod reprehenderit magna fugiat anim. Ea amet nulla quis exercitation. Occaecat consequat cupidatat aute dolore elit irure est sint nulla minim laborum non excepteur.
                    Commodo tempor sit ex laborum dolore. Lorem ullamco exercitation adipisicing deserunt esse reprehenderit elit. Incididunt officia velit et pariatur duis ut est magna ullamco tempor Lorem Lorem. Ea dolore est reprehenderit anim.
                    Culpa et et nostrud duis. Do et sunt anim occaecat. Quis et deserunt minim nostrud. Officia eiusmod tempor ullamco eu excepteur pariatur non commodo fugiat. In aliquip nostrud magna ea adipisicing. Voluptate proident proident fugiat ea minim.`,
          category_id: 4,
        },
        {
          title: "The Witcher: Wild Hunt",
          content: `Do commodo deserunt id ipsum voluptate. Ad pariatur velit magna commodo adipisicing amet Lorem officia nulla velit reprehenderit ex aliquip. Deserunt mollit quis sint sunt velit Lorem est aute magna anim dolor commodo. Voluptate quis ipsum ullamco deserunt ut eu laborum velit ullamco irure qui do occaecat. Occaecat occaecat do dolore irure anim sint mollit duis laboris velit id. Occaecat ad in quis nisi consectetur deserunt adipisicing ullamco.
                    Officia occaecat reprehenderit aute do excepteur culpa minim nostrud do. Sunt do consectetur officia eiusmod reprehenderit magna fugiat anim. Ea amet nulla quis exercitation. Occaecat consequat cupidatat aute dolore elit irure est sint nulla minim laborum non excepteur.
                    Commodo tempor sit ex laborum dolore. Lorem ullamco exercitation adipisicing deserunt esse reprehenderit elit. Incididunt officia velit et pariatur duis ut est magna ullamco tempor Lorem Lorem. Ea dolore est reprehenderit anim.
                    Culpa et et nostrud duis. Do et sunt anim occaecat. Quis et deserunt minim nostrud. Officia eiusmod tempor ullamco eu excepteur pariatur non commodo fugiat. In aliquip nostrud magna ea adipisicing. Voluptate proident proident fugiat ea minim.`,
          category_id: 4,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("articles", null, {});
  },
};
