import { open as createFile, unlink as deleteFile } from 'fs';
import server from '../../lib/server';

describe('Postie server app', function() {
  it('uses pug', () => {
    expect(server.get('view engine')).to.equal('pug');
  });

  it('exposes assets as a static file repository', done => {
    let asset = '/an-asset.txt';
    let assetLocation = `assets${asset}`;

    createFile(assetLocation, 'w', err => {
      chai
        .request(server)
        .get(asset)
        .end((err, response) => {
          if (err) throw err;
          expect(response).to.have.status(200);
          deleteFile(assetLocation);
          done();
        });
    });
  });

  describe('"/" route', function() {
    it('renders the correct title', done => {
      let title = '<title>Postie WIP</title>';

      chai
        .request(server)
        .get('/')
        .end((err, response) => {
          expect(response.text).to.include(title);
          done();
        });
    });

    it('renders the correct content', done => {
      chai
        .request(server)
        .get('/')
        .end((err, response) => {
          expect(response.text).to.include('DAMN FINE!!');
          done();
        });
    });
  });
});
