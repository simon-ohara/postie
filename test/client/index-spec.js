import proxyquire from 'proxyquire';
import CommunicationView from '../../lib/client/communication-view';

describe('# Postie Client', function() {
  let client,
      container,
      dependencies = {},
      ReactDomRender;

  before(() => {
    ReactDomRender = sinon.stub();
    dependencies['react-dom'] = { render: ReactDomRender }; 

    container = document.createElement('main');
    document.body.appendChild(container);

    client = proxyquire('../../lib/client', dependencies);
  });

  it('uses the CommunicationView component as the initial component', function() {
    expect(ReactDomRender.args[0][0]).to.deep.equal(<CommunicationView />);
  });

  it('uses the first <main /> element as the container for the React app', () => {
    expect(ReactDomRender.args[0][1]).to.equal(container); 
  });
});
