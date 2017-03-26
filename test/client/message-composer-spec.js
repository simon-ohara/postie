import MessageComposer from '../../lib/client/message-composer';
import ArgumentList from '../../lib/client/argument-list';

describe('MessageComposer component', function() {
  let composer;

  before(() => {
    composer = shallow(<MessageComposer/>);
  });

  it('is a <form> element', () => {
    expect(composer.type()).to.equal('form'); 
  });

  it('has an #endpoint <input>', () => {
    expect(composer.find('input#endpoint')).to.have.length(1);
  });

  it('has an ArgumentList', () => {
    expect(composer.children().get(1).type).to.equal(ArgumentList);
  });

  it('has a <button>', () => {
    expect(composer.find('button')).to.have.length(1);
  });

  describe('<button>', function() {
    it('has a label of "Send Message"', () => {
      expect(composer.find('button').text()).to.equal('Send Message');
    });
  });
});
