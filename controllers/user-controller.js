'use strict'

const mongoose = require('mongoose');
const User = mongoose.model('user');

exports.get = function (req, res, next) {
    User.find({}, 'name email user')
        .then(data => {
            res.status(200).send({ message: data });
        })
        .catch(e => {
            res.status(400).send(e);
        });
}
exports.getBySlug = function (req, res, next) {
    User.findOne({
        slug: req.params.slug
    }, 'name slug CPFCNPJ publicplace')
        .then(data => {
            res.status(200).send({ message: data });
        })
        .catch(e => {
            res.status(400).send(e);
        });
}

exports.post = function (req, res, next) {
    var user = new User(req.body);
    //user.name = req.body.name;  <- modo maior mas seguro
    user.save()
        .then(x => {
            res.status(201).send({ message: 'usuario cadastrado com sucesso' });
        })
        .catch(e => {
            res.status(400).send({ message: 'falha no cadastrado', data: e });
        });

}

exports.put = function (req, res, next) {
    User
        .findByIdAndUpdate(req.params.id, {
            $set: {
                name: req.body.name,
                //slug: req.body.slug,
                password: req.body.password,
                user: req.body.user,
                publicplace: req.body.publicplace
            }
        }).then(x => {
            res.status(200).send({
                message: 'Usuario atualizado'
            });
        }).catch(e => {
            res.status(400).send({
                message:'falha ao atualizar o produto',
                data: e
            });
        });
}

exports.delete = function (req, res, next) {
    User
        .findOneAndRemove(req.params.id)
        .then(x => {
            res.status(200).send({
                message: 'Usuario excluido'
            });
        }).catch(e => {
            res.status(400).send({
                message:'falha ao excluir usuario',
                data: e
            });
        });
};