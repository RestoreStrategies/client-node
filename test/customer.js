'use strict';

const Lab = require('lab');
const Code = require('code');
const Client = require('../client.js');
let apiClient;

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const before = lab.before;
const expect = Code.expect;

describe('Customer', () => {

    before((done) => {

        const token = process.env.TOKEN;
        const secret = process.env.SECRET;
        const host = 'http://' + process.env.HOST;
        const port = process.env.PORT;

        apiClient = new Client({
            token: token,
            secret: secret,
            host: host,
            port: port
        });

        done();
    });

    it('lists a user\'s customers signups', (done) => {

        apiClient.admin.users.customers.signups(1).then((result) => {

            result.data.forEach((signup) => {

                expect(signup.reseller_id).to.equal('1');
            });
            done();
        });
    });
});
