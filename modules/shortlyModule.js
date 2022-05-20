const Short = require('../model/Short');
const Joi = require('joi');

exports.create = async (req,res,next) => {
    const schema = Joi.object({
        longUrl: Joi.string().uri().required()
    })

    var {error} = await schema.validate(req.body);
    if (error) return res.status(400).send({msg : error.details[0].message});

    let myRandNumber = Math.floor(Math.random() * 10000);
    let newUrlShort = new Short({
        longUrl: req.body.longUrl,
        shortUrl: myRandNumber
    });
    try {
        let response = await newUrlShort.save();
        res.send(response)
    } catch (error) {
        console.log(error)
    }
}

exports.shorturl = async (req,res,next) => {
    var response = await Short.find();
    res.send(response);
}

exports.delete = async (req, res, next) => {
    let response = await Short.findByIdAndDelete({_id: req.params.id});
    res.send(response);
}

exports.geturl = async (req, res, next) => {
    Short.findOne({ shortUrl: req.params.shortid })
        .then(function(data) {
            Short.findByIdAndUpdate({ _id: data.id }, { $inc: { clickCount: 1 } })
                .then(function (updateData) {
                    res.redirect(data.longUrl);
                })
                .catch(function(err) {
                    console.log(err);
                });
        }).catch(function(err) {
            console.log(err);
        });
}