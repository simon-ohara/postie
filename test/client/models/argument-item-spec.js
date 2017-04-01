import ArgumentItem from '../../../lib/client/models/argument-item';

describe('ArgumentItem model', function() {
  describe('[id] property', function() {
    let model;

    beforeEach(() => {
      model = new ArgumentItem();
    });

    it('is a number', () => {
      expect(typeof model.id).to.equal('number');
    });

    it('is unique from other instances of ArgumentItem', () => {
      let anotherModel = new ArgumentItem();
      expect(model.id).to.not.equal(anotherModel.id);
    });

    it('is based on todays date', () => {
      const date = new Date(model.id);
      const today = new Date(Date.now());
      expect(date.getDate()).to.equal(today.getDate());
      expect(date.getDay()).to.equal(today.getDay());
      expect(date.getMonth()).to.equal(today.getMonth());
      expect(date.getFullYear()).to.equal(today.getFullYear());
    });
  });

  describe('[name] property', function() {
    it('defaults to an empty string', () => {
      let model = new ArgumentItem();
      expect(model.name).to.equal('');
    });

    it('can be initialised with a given string', () => {
      let name = 'Barry';
      let model = new ArgumentItem(name);
      expect(model.name).to.equal(name);
    });

    it('errors if a non-string is assigned to it', () => {
      expect(() => {
        new ArgumentItem([]);
      }).to.throw()
    });
  });

  describe('[value] property', function() {
    it('defaults to an empty string', () => {
      let model = new ArgumentItem();
      expect(model.value).to.equal('');
    });

    it('can be initialised with a given string', () => {
      let value = 'foo';
      let model = new ArgumentItem('name', value);
      expect(model.value).to.equal(value);
    });

    it('errors if a non-string is assigned to it', () => {
      expect(() => {
        new ArgumentItem('name', []);
      }).to.throw()
    });
  });
});
