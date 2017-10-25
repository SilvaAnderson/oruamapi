'use strict'

const mongoose = require('mongoose');
const Call = mongoose.model('call');

exports.get = function (req, res, next) {
    Call.find({}, 'id createDate')
        .then(data => {
            res.status(200).send({ message: data });
        })
        .catch(e => {
            res.status(400).send(e);
        });
}
exports.getBySlug = function (req, res, next) {
    Call.findOne({
        slug: req.params.slug
    }, 'createDate status')
        .then(data => {
            res.status(200).send({ message: data });
        })
        .catch(e => {
            res.status(400).send(e);
        });
}

exports.post = function (req, res, next) {
    var call = new Call(req.body);
    call.save()
        .then(x => {
            res.status(201).send({ message: 'chamada cadastrada com sucesso' });
        })
        .catch(e => {
            res.status(400).send({ message: 'falha no cadastrado', data: e });
        });

}

exports.put = function (req, res, next) {
    Call
        .findByIdAndUpdate(req.params.id, {
            $set: {
                createDate: req.body.createDate,
            }
        }).then(x => {
            res.status(200).send({
                message: 'chamada atualizada'
            });
        }).catch(e => {
            res.status(400).send({
                message:'falha ao atualizar',
                data: e
            });
        });
}

exports.delete = function (req, res, next) {
    Call
        .findOneAndRemove(req.params.id)
        .then(x => {
            res.status(200).send({
                message: 'Usuario excluido'
            });
        }).catch(e => {
            res.status(400).send({
                message:'falha ao excluir',
                data: e
            });
        });
};