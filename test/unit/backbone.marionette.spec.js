import _ from 'underscore';
import Backbone from 'backbone';
import Marionette from '../../src/backbone.marionette';
import CollectionView from '../../src/collection-view';
import CompositeView from '../../src/composite-view';
import NextCollectionView from '../../src/next-collection-view';
import Region from '../../src/region';
import View from '../../src/view';

describe('backbone.marionette', function() {
  'use strict';

  describe('when Marionettes on global namespace', function() {
    it('should have a working noConflict method', function() {
      var foo = Marionette;
      expect(Marionette.noConflict()).to.deep.equal(Marionette);
      Backbone.Marionette = foo;
    });

    it('should have a working getOption method which just returns when no optionName is passed', function() {
      const result = Marionette.getOption();
      expect(result).to.be.equal(undefined);
    });
  });

  describe('#setDomApi', function() {
    const DomClasses = {
      CollectionView,
      CompositeView,
      NextCollectionView,
      Region,
      View
    };

    const fakeDomApi = {
      foo: 'bar'
    };

    _.each(DomClasses, function(Class, key) {
      it(`should setDomApi on ${ key }`, function() {
        this.sinon.spy(Class, 'setDomApi');
        Marionette.setDomApi(fakeDomApi);
        expect(Class.setDomApi).to.be.calledOnce.and.calledWith(fakeDomApi);
      });
    });
  });
});
