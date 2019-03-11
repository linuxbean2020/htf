const Register = require('../model/user-info.vo');
const Password = require('../model/user-pass.vo');
const bcrypt = require('bcrypt-nodejs');
const query = require('../pg-connect');
var stripe = require("stripe")("sk_test_unhqxPhbXkWJr12H8pfKvp4W");



/* *******************************User Registration************************************* */
/* exports.addUpdateUser = (req, res, next) => {
    const reqObj = _setReqData(req);
    if (req.body._id) {
        Register.findByIdAndUpdate(req.body._id, reqObj, { new: true })
            .then(data => {
                res.status(201).json({
                    message: 'Data Updated successfully',
                    success: true
                });
            }).catch(err => {
                console.log(err);
            });
    }
    else {
        Register.findOne({ email: req.body.email })
            .then(data => {
                if (data) {
                    res.status(201).json({
                        message: "User already registerd try with another email",
                        success: false
                    });
                } else {
                    console.log('init ');
                    pg.Client.query('INSERT INTO inventory (fName, lName) VALUES ("vinay", "Patidar")', (err, res) => {
                        if (result) {
                            console.log(res);
                            res.status(201).json({
                                res: result
                            });
                        }
                        if (err) {
                            console.log(err);
                            res.status(201).json({
                                res: err
                            });
                        }
                    });
                    const user = new Register(reqObj);
                    user.save()
                        .then(data => {
                            const reqPass = _setPass(req, user);
                            _savePass(reqPass, res);
                        }).catch(err => {
                            console.log(err);
                        });
                }
            }).catch(err => {
                res.status(400).json({
                    message: err,
                });
            })
    }
} */

/* ****************************Get all registered user**************************** */
/* exports.getAllregisterUser = (req, res, next) => {
    Register.find({}, (err, users) => {
        res.status(200).json({
            message: 'all registerd users',
            success: true,
            body: users
        });
    });
}
 */
/* ****************************delete all registered user**************************** */
exports.deleteAllregisterUser = (req, res, next) => {
    Register.remove({}, (err, users) => {
        Password.remove({}, (err, pass) => {
            res.status(200).json({
                message: 'deleted all successfully',
                success: true,
            });
        });
    });
}

/* *******************************Stripe Payment Integration******************************** */
exports.goToStripe = (req, res, next) => {
    const token = req.body.token;
    stripe.charges.create({
        amount: 4444,
        currency: "usd",
        source: token.id,
        description: "Charge on a connected account",
    },
        function (err, charge) {
            if (err && err.typr == "StripeCardError") {
                console.log('xxxx xxxxx x err', err);
            } else {
                console.log(charge.paid);
                if (charge.paid) {
                    res.status(201).json({
                        success: true,
                        message: "Payment Successfull",
                        body: charge
                    });
                }
            }
        });

}

/* ****************************Add User PostGrase**************************** */
exports.addUser = (req, res, next) => {
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('targetid', 'Targetid is required').notEmpty();

    let errors = req.validationErrors();
    if (errors) {
        res.status(201).json({
            message: 'Validation Errors',
            success: false,
            body: errors
        });

        res.end();
    } else {
        _checkForAlreadyRegistered(req.body.email)
            .then(data => {
                if (!data) {
                    console.log('xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxx registration init');
                    const sql = 'INSERT INTO users (email, created, name, username, targetid) VALUES($1,$2,$3,$4,$5) RETURNING id';
                    const data = _setReqData(req);
                    query(sql, data)
                        .then(result => {
                            console.log(result);
                            _savePass(req, res);
                        }).catch(err => {
                            console.log(err);
                        });
                } else {
                    res.status(201).json({
                        message: 'User already registered',
                        success: false
                    });
                }
            }).catch(err => {
                console.log(err);
            });
    }
}

/* ****************************Get All User PostGrase**************************** */
exports.getAllUser = (req, res, next) => {
    console.log('xxxxxxxxxxxxx xxxxxxxxxxx get all init');
    const sql = 'SELECT * FROM salesforce.account';
    console.log('xxxxxx xxxxxxx xxxxxxxx ', sql);

    query(sql)
        .then(data => {
            console.log(data);
            res.status(200).json({
                message: 'all registerd users',
                success: true,
                body: data.rows
            });

        }).catch(err => {
            console.log(err);
        });
}

/* ****************************Private functions**************************** */
function _setReqData(req) {
    const reqObj = [
        req.body.email,
        new Date(),
        req.body.name,
        req.body.username,
        req.body.targetid
    ]
    return reqObj;
}

function _setPass(req) {
    let hash = bcrypt.hashSync(req.body.pass);
    const reqObj = [
        hash,
        req.body.email,
    ];
    return reqObj;
}

function _savePass(req, res) {
    const sql = 'INSERT INTO access (pass, email) VALUES ($1, $2)';
    const passData = _setPass(req);

    query(sql, passData)
        .then(data => {
            res.status(201).json({
                message: 'Data added successfully',
                success: true
            });

        }).catch(err => {
            console.log(err);
        });
}

function _checkForAlreadyRegistered(email) {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * from access WHERE email = " + "'" + email + "'";
        console.log(sql);
        query(sql)
            .then(data => {
                console.log('xxx xxxx xxxxx data is ' + data.rowCount);
                if (data.rowCount != 0) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            }).catch(err => {
                console.log(err);
                reject(err);
            });
    });

}
