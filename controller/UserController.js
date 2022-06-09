
const db = require('../models')

const User = db.users;

exports.create= async (req,res) =>{
    console.log(req.body);

    await User.create(req.body)
        .then(data => {
            console.log("successfully add user");
            return res.send(data);
        })
        .catch(err => {
            console.log(err)
            return res.status(500).send({
                message:
                    err.message || "some error occurred while creating the user"
            });
        });
};
exports.update = async (req, res) => {
    const email = req.params.email;
    User.update(req.body, {
        where: { email: email }
    })
        .then(email => {
            if (email) {
                res.send({
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update User with email=${email}. Maybe Tutorial was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: "Error updating User with email=" + email
            });
        });
};

exports.findAll = async (req, res) => {
    //
    try {
        const users = await User.findAll()
        res.json(users)
    } catch (error) {
        console.error(error)
    }
};

