import Header from '../../lib/client/header.js';

describe('<Header/> component', function() {
  let header;

  before(() => {
    header = shallow(<Header/>);
  });

  it('is a <header>', () => {
    expect(header.type()).to.equal('header');
  });

  it('contains an <h1>', () => {
    expect(header.children().type()).to.equal('h1');
  });

  describe('<h1>', function() {
    it('reads "Postie"', () => {
      expect(header.children().text()).to.equal('Postie');
    });
  });
});
