import ArgumentList from '../../lib/client/argument-list';
import ArgumentItemComponent from '../../lib/client/argument-item';
import ArgumentItem from '../../lib/client/models/argument-item';

describe('ArgumentList component', function() {
  let list;

  before(() => {
    list = shallow(<ArgumentList/>);
  });

  it('is a <div>', () => {
    expect(list.type()).to.equal('div');
  });

  it('contains a <ul> element', () => {
    expect(list.children().first().type()).to.equal('ul');
  });

  it('has as items array in state', () => {
    expect(list.state('items')).to.be.instanceof(Array);
  });

  it('has an items array in state containing a new ArgumentItem object', () => {
    expect(list.state('items')).to.have.length(1);
    expect(list.state('items')[0]).to.be.instanceof(ArgumentItem);
    expect(list.state('items')[0].name).to.equal('');
    expect(list.state('items')[0].value).to.equal('');
  });

  describe('<ul>', function() {
    describe('when data is supplied', function() {
      let children, dataList, items;

      beforeEach(() => {
        items = [
          { name: 'Dave', value: 'foo' },
          { name: 'Mike', value: 'bar' },
          { name: 'Steve', value: 'baz' }
        ];

        dataList = shallow(<ArgumentList items={ items }/>)
        children = dataList.find('ul').children();
      });

      it('has each item in state represented by an ArgumentItem model', () => {
        dataList.state('items').forEach(item => {
          expect(item).to.be.instanceof(ArgumentItem);
        });
      });

      it('has as many children as items it is passed', () => {
        expect(children).to.have.length(items.length);
      });

      describe('each item', function() {
        it('has the passed data as props', () => {
          children.nodes.forEach((item, idx) => {
            expect(item.props.name).to.equal(items[idx].name);
            expect(item.props.value).to.equal(items[idx].value);
          });
        });

        it('has a unique key', () => {
          children.nodes.forEach((item, idx) => {
            expect(item.key).to.equal(`${idx}`);
          });
        });

        it('is passed the removeItem method', () => {
          children.nodes.forEach((item, idx) => {
            expect(item.props.removeItem).to.equal(dataList.instance().removeItem);
          });
        });

        it('is passed the handleChange method', () => {
          children.nodes.forEach((item, idx) => {
            expect(item.props.handleChange).to.equal(dataList.instance().handleChange);
          });
        });
      });
    });

    it('has one item by default', () => {
      expect(list.find('ul').children()).to.have.length(1);
    });

    describe('default item', function() {
      let item;

      beforeEach(() => {
        item = list.find('ul').children().first();
      });

      it('is an ArgumentItemComponent', () => {
        expect(item.node.type).to.equal(ArgumentItemComponent);
      });

      it('is given the correct params', () => {
        expect(item.props().name).to.equal('');
        expect(item.props().value).to.equal('');
      });
    });
  });

  it('has a <button> element', () => {
    expect(list.children().last().type()).to.equal('button');
  });

  describe('<button>', function() {
    let button;

    beforeEach(() => {
      button = list.find('button').first();
    });

    it('has a label of "+ Add Argument"', () => {
      expect(button.text()).to.equal('+ Add Argument');
    });

    it('has onclick bound to the #addItem method', () => {
      expect(button.props().onClick).to.equal(list.instance().addItem);
    });
  });

  describe('#addItem method', function() {
    let event;

    beforeEach(() => {
      event = {
        preventDefault: sinon.stub()
      };
    });

    it('is bound correctly to the class', () => {
      expect(() => {
        shallow(<ArgumentList/>).find('button').first().simulate('click');
      }).not.to.throw();
    });

    it('prevents the default submit action', () => {
      list.instance().addItem(event);
      expect(event.preventDefault.called).to.be.true;
    });

    it('appends a new item to the items array', () => {
      list = shallow(<ArgumentList/>);
      expect(list.state('items')).to.have.length(1);
      list.instance().addItem();
      expect(list.state('items')).to.have.length(2);
    });
  });

  describe('#removeItem method', function() {
    let event, items, parent;

    beforeEach(() => {
      let target = document.createElement('button');
      parent = document.createElement('li');
      parent.appendChild(target);

      items = [
        { name: 'Barry', value: 'foo' },
        { name: 'Harry', value: 'bar' },
        { name: 'Larry', value: 'baz' }
      ];

      event = {
        preventDefault: sinon.stub(),
        target
      };
    });

    it('is bound correctly to the class', () => {
      expect(() => {
        shallow(<ArgumentList/>).find('ul').children().first().props().removeItem(event);
      }).not.to.throw();
    });

    it('prevents the default submit action', () => {
      list.instance().removeItem(event);
      expect(event.preventDefault.called).to.be.true;
    });

    it('removes the correct item from the items array', () => {
      list = shallow(<ArgumentList items={ items }/>);
      parent.id = list.state('items')[1].id;
      expect(list.state('items')).to.have.length(3);
      list.instance().removeItem(event);
      expect(list.state('items')).to.have.length(2);
      expect(list.state('items')[0].name).to.equal('Barry');
      expect(list.state('items')[1].name).to.equal('Larry');
    });
  });

  describe('#handleChange method', function() {
    let event, items, parent;

    beforeEach(() => {
      let target = document.createElement('input');
      target.classList.add('argument-name');
      target.value = 'Larry';

      parent = document.createElement('li');
      parent.appendChild(target);

      items = [
        { name: 'Barry', value: 'foo' },
      ];

      event = {
        preventDefault: sinon.stub(),
        target
      };
    });

    it('is bound correctly to the class', () => {
      expect(() => {
        shallow(<ArgumentList/>).find('ul').children().first().props().handleChange(event);
      }).not.to.throw();
    });

    it('updates state for the value of the item and field that has changed', () => {
      list = shallow(<ArgumentList items={ items }/>);
      console.log('before', list.state('items'));
      parent.id = list.state('items')[0].id;
      expect(list.state('items')[0].name).to.equal('Barry');
      list.instance().handleChange(event);
      console.log('after', list.state('items'));
      expect(list.state('items')[0].name).to.equal('Larry');
    });
  });
});
