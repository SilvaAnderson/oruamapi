'use strict'

const mongoose = require('mongoose');
const Playlist = mongoose.model('playlist');

exports.get = function (req, res, next) {
    Playlist.find({}, 'music artist')
        .then(data => {
            res.status(200).send({ playlist: data });
        })
        .catch(e => {
            res.status(400).send(e);
        });
}
exports.getBySlug = function (req, res, next) {
    Playlist.findOne({
        slug: req.params.slug
    }, 'music artist')
        .then(data => {
            res.status(200).send({ message: data });
        })
        .catch(e => {
            res.status(400).send(e);
        });
}

exports.post = function (req, res, next) {
    var playlist = new Playlist(req.body);
    playlist.save()
        .then(x => {
            res.status(201).send({ message: 'Playlist cadastrada' });
        })
        .catch(e => {
            res.status(400).send({ message: 'falha no cadastrado', data: e });
        });

}

exports.put = function (req, res, next) {
    Playlist
        .findByIdAndUpdate(req.params.id, {
            $set: {
                music: req.body.music,
                artist: req.body.artist
            }
        }).then(x => {
            res.status(200).send({
                message: 'Playlist atualizada'
            });
        }).catch(e => {
            res.status(400).send({
                message:'falha ao atualizar a playlist',
                data: e
            });
        });
}

exports.delete = function (req, res, next) {
    Playlist
        .findOneAndRemove(req.params.id)
        .then(x => {
            res.status(200).send({
                message: 'Playlist excluida'
            });
        }).catch(e => {
            res.status(400).send({
                message:'falha ao excluir playlist',
                data: e
            });
        });
};