import MessageComposer from '../../lib/client/message-composer';
import ArgumentList from '../../lib/client/argument-list';

describe('<MessageComposer/> component', function() {
  let composer;

  before(() => {
    composer = shallow(<MessageComposer/>);
  });

  it('is a <form> element', () => {
    expect(composer.type()).to.equal('form');
  });

  it('has a message address', () => {
    expect(composer.find('#message-address')).to.have.length(1);
  });

  describe('message address', () => {
    it('has an <input>', () => {
      expect(composer.find('#message-address input')).to.have.length(1);
    });

    it('has a <button>', () => {
      expect(composer.find('#message-address button')).to.have.length(1);
    });

    describe('<button>', function() {
      it('has a label of "Send Message"', () => {
        expect(composer.find('#message-address button').text()).to.equal('Send Message');
      });
    });
  });

  it('has an ArgumentList', () => {
    expect(composer.children().get(1).type).to.equal(ArgumentList);
  });
});
