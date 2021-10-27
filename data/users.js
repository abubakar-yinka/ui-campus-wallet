const bcrypt = require('bcryptjs')

const users = [
    {
        name: 'Abubakar Ibrahim',
        email: 'aibrahim332@stu.ui.edu.ng',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Maryam Mudasiru',
        email: 'maryammudasiru@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Robiat Azeez',
        email: 'rbeeazeez@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Gafar Akinkunmi',
        email: 'lordsirkunle001@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Oyebolade Oladokun',
        email: 'oyeboladeoluwaferanmi@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

module.exports = users