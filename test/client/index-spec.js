import proxyquire from 'proxyquire';
import Header from '../../lib/client/header';
import CommunicationView from '../../lib/client/communication-view';

describe('# Postie Client', function() {
  let client,
      main,
      dependencies = {},
      ReactDomRender,
      component,
      container;

  before(() => {
    ReactDomRender = sinon.stub();
    dependencies['react-dom'] = { render: ReactDomRender };

    main = document.createElement('main');
    document.body.appendChild(main);

    client = proxyquire('../../lib/client', dependencies);
    component = ReactDomRender.args[0][0];
    container = ReactDomRender.args[0][1];
  });


  describe('initial component', function() {
    it('is a <section> element', () => {
      expect(component.type).to.equal('section');
    });

    it('contains a <Header/> component', () => {
      expect(component.props.children[0].type).to.equal(Header);
    });

    it('contains a <CommunicationView/> component', () => {
      expect(component.props.children[1].type).to.equal(CommunicationView);
    });
  });

  it('uses the first <main> element as the container for the React app', () => {
    expect(container).to.equal(main);
  });
});
